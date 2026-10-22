// Reading mode: texts where every word can be tapped to see its meaning in its
// sentence, with links to its full forms and grammar. Uses $, LANG, DECK, EDITOR,
// confirmTap and renderSentence from app.js.
//
// Texts and the glossary come from content/<lang>.js. In editor mode (?editor) you
// can also write new texts and word meanings. Those are saved as drafts on this
// device until you export them into the content file with "Export content file".

const TEXTS_KEY = `lingo-texts-v1-${LANG}`;
const GLOSSARY_KEY = `lingo-glossary-v1-${LANG}`;

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}

function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// Drafts only exist in editor mode; everyone else sees just the built-in content.
let draftTexts = EDITOR ? loadJSON(TEXTS_KEY, []) : [];
// Word form (lowercase) -> [dictionary form, meaning, note]. Shared by all texts.
let draftGlossary = EDITOR ? loadJSON(GLOSSARY_KEY, {}) : {};
let currentTextId = null;
let selectedWord = null; // the word button whose details are open in the sheet
let currentWord = null;  // { form, example, translation } for that button

// Built-in texts plus drafts. A draft that's already been exported into the
// content file (same id) is skipped so it doesn't show up twice.
function allTexts() {
  const builtInIds = new Set(DECK.texts.map((t) => t.id));
  return [
    ...DECK.texts.map((t) => ({ ...t, builtIn: true })),
    ...draftTexts.filter((t) => !builtInIds.has(t.id)),
  ];
}

// Draft meanings take priority over the built-in glossary, so built-in words can be corrected.
// Lessons bring their own word list (content/<lang>-lessons.js), used after the main one.
function lookup(form) {
  const key = form.toLowerCase();
  return draftGlossary[key] || DECK.glossary[key] || DECK.lessonGlossary?.[key] || null;
}

// Split text into sentences, keeping closing quotes/brackets with their sentence.
function splitSentences(text) {
  return text.replace(/\s+/g, " ").trim().split(/(?<=[.!?…]["”»)]?)\s+/).filter(Boolean);
}

// ---- Showing texts ----

function renderReading() {
  closeSheet();
  const texts = allTexts();
  if (!texts.some((t) => t.id === currentTextId)) currentTextId = texts[0]?.id ?? null;

  const picker = $("text-picker");
  const label = (t) => [t.level, t.title].filter(Boolean).join(" · ") + (t.builtIn ? "" : " (draft)");
  picker.replaceChildren(...texts.map((t) => new Option(label(t), t.id)));
  picker.classList.toggle("hidden", texts.length < 2 && !EDITOR);
  if (currentTextId) picker.value = currentTextId;

  $("text-form").classList.add("hidden");
  $("reading-body").classList.remove("hidden");
  renderText(texts.find((t) => t.id === currentTextId));
}

function renderText(text) {
  const body = $("reading-text");
  const translationBox = $("reading-translation");
  body.replaceChildren();
  translationBox.replaceChildren();
  $("reading-title").textContent = text ? text.title : "No texts yet";
  $("reading-level").textContent = text?.level ? `Level ${text.level}` : "";
  $("reading-level").classList.toggle("hidden", !text?.level);
  $("reading-subtitle").textContent = text
    ? text.builtIn ? text.titleEn || "" : "Draft: only on this device until you export it"
    : EDITOR ? "Tap “+ New text” to write one." : "Reading texts are coming soon.";
  $("reading-help").classList.toggle("hidden", !text);
  $("delete-text").classList.toggle("hidden", !text || text.builtIn);
  if (!text) {
    $("translation-box").classList.add("hidden");
    renderExercises(null);
    return;
  }

  $("reading-title").lang = LANG;
  renderTapText(body, text.sentences, translationBox);
  // Translations that didn't line up sentence by sentence are kept as one block.
  if (text.translation) {
    const p = document.createElement("p");
    p.textContent = text.translation;
    translationBox.append(p);
  }
  $("translation-box").classList.toggle("hidden", !translationBox.childElementCount);
  renderExercises(text.exercises);
  refreshWordStates();
}

// Fill `body` with sentences where every word can be tapped, and put each sentence's
// translation in `translationBox`. Used by Read texts and Study lessons.
// A sentence is [text, translation] or [text, translation, speaker]. Dialogue lines
// (with a speaker, or starting with a dash) each get a line of their own, like in a book;
// narration in between runs together as a paragraph.
function renderTapText(body, sentences, translationBox) {
  body.lang = LANG;
  body.classList.add("tap-text");
  let para = null;
  let prevDialogue = false;
  for (const [sentence, translation, speaker] of sentences) {
    const dialogue = Boolean(speaker) || /^[—–-]\s/.test(sentence);
    if (!para || dialogue || prevDialogue) {
      para = document.createElement("p");
      para.className = dialogue ? "line dialogue" : "line";
      body.append(para);
      if (speaker) {
        const who = document.createElement("span");
        who.className = "speaker";
        who.textContent = `${speaker}: `;
        para.append(who);
      }
    }
    prevDialogue = dialogue;

    // Split into words and the spaces/punctuation between them.
    const parts = sentence.split(/(\p{L}+)/u);
    parts.forEach((part, i) => {
      if (!part) return;
      if (!/\p{L}/u.test(part)) { para.append(part); return; }

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "word";
      btn.textContent = part;
      btn.dataset.form = part.toLowerCase();
      btn.addEventListener("click", () => {
        // Highlight exactly the tapped occurrence in the sentence.
        const example = parts.map((p, j) => (j === i ? `*${p}*` : p)).join("");
        openWord(btn, { form: part, example, translation });
      });
      para.append(btn);
    });
    para.append(" ");

    if (translation && translationBox) {
      const p = document.createElement("p");
      p.textContent = speaker ? `${speaker}: ${translation}` : translation;
      translationBox.append(p);
    }
  }
}

// ---- Exercises ("Check yourself" after a text) ----
// text.exercises = {
//   questions: [[question, English translation, answer], ...]   answer shown on tap
//   gaps: [[sentence with ___, answer, hint], ...]                typed in and checked
// }

const normalizeAnswer = (s) => s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.!?,;:]+$/, "");
const withoutAccents = (s) => s.normalize("NFD").replace(/\p{M}/gu, "").replace(/ł/g, "l");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// `box` is the element to fill; `prefix` keeps the gap inputs' ids unique per page.
function renderExercises(ex, box = $("exercises"), prefix = "gap") {
  box.replaceChildren();
  box.classList.toggle("hidden", !ex);
  if (!ex) return;
  box.append(el("h3", "ex-title", "Check yourself"));

  if (ex.questions?.length) {
    box.append(el("h4", "ex-heading", "Questions"));
    const list = el("ol", "ex-list");
    for (const [question, english, answer] of ex.questions) {
      const item = el("li");
      const q = el("p", "ex-q", question);
      q.lang = LANG;
      const reveal = el("button", "topic-link", "Show answer");
      reveal.type = "button";
      reveal.addEventListener("click", () => {
        const a = el("p", "ex-answer", answer);
        a.lang = LANG;
        reveal.replaceWith(a);
      });
      item.append(q, el("p", "translation", english), reveal);
      list.append(item);
    }
    box.append(list);
  }

  if (ex.gaps?.length) {
    box.append(el("h4", "ex-heading", "Fill in the gaps"), el("p", "gap-help", "Type the missing word and press Enter."));
    const list = el("ol", "ex-list");
    ex.gaps.forEach(([sentence, answer, hint], i) => {
      const item = el("li");
      const line = el("p", "gap-sentence");
      line.lang = LANG;
      const [before, after = ""] = sentence.split("___");
      const input = el("input", "gap-input");
      input.id = `${prefix}-${i}`;
      input.lang = LANG;
      input.autocomplete = "off";
      input.spellcheck = false;
      input.size = Math.max(5, answer.length + 2);
      input.dataset.answer = answer;
      input.setAttribute("aria-label", `Gap ${i + 1}`);
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") checkGap(input); });
      line.append(before, input, after);
      item.append(line, el("p", "gap-hint", hint), el("p", "gap-feedback"));
      list.append(item);
    });
    box.append(list);

    const actions = el("div", "ex-actions");
    const check = el("button", "primary", "Check answers");
    const show = el("button", "", "Show answers");
    check.type = show.type = "button";
    check.addEventListener("click", () => box.querySelectorAll(".gap-input").forEach(checkGap));
    show.addEventListener("click", () => box.querySelectorAll(".gap-input").forEach((input) => {
      input.value = input.dataset.answer;
      checkGap(input);
    }));
    actions.append(check, show);
    box.append(actions);
  }
}

function checkGap(input) {
  const given = normalizeAnswer(input.value);
  const wanted = normalizeAnswer(input.dataset.answer);
  const feedback = input.closest("li").querySelector(".gap-feedback");
  input.classList.remove("ok", "bad");
  if (!given) { feedback.textContent = ""; return; }
  if (given === wanted) {
    input.classList.add("ok");
    feedback.textContent = "✓ Correct";
  } else if (withoutAccents(given) === withoutAccents(wanted)) {
    input.classList.add("bad");
    feedback.textContent = "Almost: check the Polish letters (ą, ę, ł, ó, ś…).";
  } else {
    input.classList.add("bad");
    feedback.textContent = "Not quite. Try again, or tap “Show answers”.";
  }
}

// Mark words that have no meaning yet (shown dashed in editor mode).
function refreshWordStates() {
  document.querySelectorAll(".tap-text .word").forEach((w) => {
    w.classList.toggle("new", !lookup(w.dataset.form));
  });
}

$("text-picker").addEventListener("change", (e) => {
  currentTextId = e.target.value;
  renderReading();
});

// Word meanings you added are kept when a draft text is deleted.
confirmTap($("delete-text"), "Tap again to delete this draft", () => {
  draftTexts = draftTexts.filter((t) => t.id !== currentTextId);
  saveJSON(TEXTS_KEY, draftTexts);
  currentTextId = null;
  renderReading();
});

// ---- Writing a text (editor mode) ----

$("new-text").addEventListener("click", () => {
  closeSheet();
  $("reading-body").classList.add("hidden");
  $("text-form").classList.remove("hidden");
  $("text-title").focus();
});

$("cancel-text").addEventListener("click", () => {
  $("text-form").reset();
  renderReading();
});

// A readable id from the title, e.g. "Moja rodzina" -> "moja-rodzina".
function slugify(title) {
  const slug = title.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const taken = new Set(allTexts().map((t) => t.id));
  let id = slug || "text";
  for (let n = 2; taken.has(id); n++) id = `${slug || "text"}-${n}`;
  return id;
}

$("text-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = $("text-title").value.trim();
  const sentences = splitSentences($("text-body").value);
  const translations = splitSentences($("text-translation").value);
  // Pair translations with sentences only when the counts line up.
  const aligned = translations.length === sentences.length;
  const text = {
    id: slugify(title),
    level: $("text-level").value,
    title,
    titleEn: $("text-title-en").value.trim(),
    sentences: sentences.map((s, i) => [s, aligned ? translations[i] : ""]),
  };
  if (!aligned && $("text-translation").value.trim()) text.translation = $("text-translation").value.trim();
  draftTexts.push(text);
  saveJSON(TEXTS_KEY, draftTexts);
  currentTextId = text.id;
  e.target.reset();
  renderReading();
});

// ---- Exporting drafts into the content file (editor mode) ----

// Build the full content/<lang>.js source: built-in content plus all drafts.
function buildContentSource() {
  const content = {
    name: DECK.name,
    home: DECK.home,
    theme: DECK.theme,
    cards: DECK.cards,
    texts: allTexts().map(({ builtIn, ...t }) => t),
    glossary: { ...DECK.glossary, ...draftGlossary },
  };
  // Keep short lists of strings (words, sentences, glossary entries) on one line.
  // JSON strings can't contain raw newlines, so splitting on them is safe.
  const json = JSON.stringify(content, null, 2).replace(
    /\[\n\s*((?:"(?:[^"\\]|\\.)*",?\n\s*)+)\]/g,
    (_, items) => `[${items.trim().split(/,\n\s*/).join(", ")}]`,
  );
  return `// ${DECK.name} content for Polish Learning: starter words, reading texts and glossary.
// Exported from editor mode on ${new Date().toISOString().slice(0, 10)}. Same format as before:
// edit by hand, or replace with a newer export.
window.CONTENT ??= {};
CONTENT.${LANG} = ${json};
`;
}

$("export-content").addEventListener("click", () => {
  const url = URL.createObjectURL(new Blob([buildContentSource()], { type: "text/javascript" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `${LANG}.js`;
  a.click();
  URL.revokeObjectURL(url);
});

// ---- Word sheet ----

function openWord(btn, word) {
  if (selectedWord) selectedWord.classList.remove("selected");
  selectedWord = btn;
  currentWord = word;
  btn.classList.add("selected");

  const sentence = $("sheet-example").querySelector(".sentence");
  sentence.lang = LANG;
  renderSentence(sentence, word.example);
  $("sheet-example").querySelector(".translation").textContent = word.translation;

  if (!lookup(word.form) && EDITOR) showWordEdit();
  else showWordView();
  $("sheet").classList.remove("hidden");
}

function showWordView() {
  const { form } = currentWord;
  const entry = lookup(form);
  const [lemma, meaning, note] = entry || [form, "No translation yet.", ""];
  $("sheet-view").classList.remove("hidden");
  $("sheet-actions").classList.remove("hidden");
  $("sheet-edit").classList.add("hidden");

  $("sheet-word").textContent = lemma;
  $("sheet-word").lang = LANG;
  $("sheet-form").textContent = form.toLowerCase() !== lemma.toLowerCase() ? `here: “${form}”` : "";
  $("sheet-meaning").textContent = meaning;
  $("sheet-note").textContent = note || "";
  $("sheet-note").classList.toggle("hidden", !note);

  // Links into the grammar section: the word's full table, and the case its note mentions.
  const links = $("sheet-links");
  links.replaceChildren();
  if (entry && hasWordPage(lemma)) links.append(topicLinkTo("See all forms →", () => openWordPage(lemma, form)));
  const caseName = note && CASES.find((c) => note.toLowerCase().includes(c));
  if (caseName) links.append(topicLinkTo(`About the ${caseName} →`, () => openTopic(caseName)));
  links.classList.toggle("hidden", !links.childElementCount);
}

function topicLinkTo(label, onClick) {
  const link = document.createElement("button");
  link.type = "button";
  link.className = "topic-link";
  link.textContent = label;
  link.addEventListener("click", onClick);
  return link;
}

function showWordEdit() {
  const { form } = currentWord;
  const entry = lookup(form);
  const [lemma, meaning, note] = entry || [form.toLowerCase(), "", ""];
  $("sheet-view").classList.add("hidden");
  $("sheet-actions").classList.add("hidden");
  $("sheet-edit").classList.remove("hidden");

  $("edit-heading").textContent = entry ? `Edit “${form}”` : `New word: “${form}”. What does it mean?`;
  $("edit-lemma").value = lemma;
  $("edit-lemma").lang = LANG;
  $("edit-meaning").value = meaning;
  $("edit-note").value = note || "";
  $("edit-meaning").focus();
}

$("sheet-edit").addEventListener("submit", (e) => {
  e.preventDefault();
  draftGlossary[currentWord.form.toLowerCase()] = [
    $("edit-lemma").value.trim(),
    $("edit-meaning").value.trim(),
    $("edit-note").value.trim(),
  ];
  saveJSON(GLOSSARY_KEY, draftGlossary);
  refreshWordStates();
  showWordView();
});

$("cancel-edit").addEventListener("click", () => {
  if (lookup(currentWord.form)) showWordView();
  else closeSheet();
});

$("edit-word").addEventListener("click", showWordEdit);

function closeSheet() {
  $("sheet").classList.add("hidden");
  if (selectedWord) selectedWord.classList.remove("selected");
  selectedWord = null;
  currentWord = null;
}

$("sheet-close").addEventListener("click", closeSheet);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSheet(); });

// Lingo Cards: a tiny flashcard app with simple spaced repetition.
// Cards are stored in localStorage, so progress stays on this device for now.
// Built-in content (starter cards, reading texts, glossary) lives in content/<lang>.js.

const LANG = "pl";
const DECK = CONTENT[LANG];
const STARTER_DECK = DECK.cards;
// Each language keeps its own cards and progress.
const STORAGE_KEY = `lingo-cards-v1-${LANG}`;

// Content editor mode, for writing the built-in content. Open the site with ?editor
// to turn it on (remembered on this device) and ?editor=off to turn it off.
const EDITOR = (() => {
  try {
    const param = new URLSearchParams(location.search).get("editor");
    if (param !== null) localStorage.setItem("lingo-editor", param === "off" ? "" : "1");
    return localStorage.getItem("lingo-editor") === "1";
  } catch { return false; }
})();
document.body.classList.toggle("editor", EDITOR);

// Each language can bring its own colours (content/<lang>.js → theme: { light, dark }),
// e.g. its flag's colours. Keys are the CSS tokens in style.css without the "--".
function applyTheme(theme) {
  if (!theme) return;
  const vars = (palette) => Object.entries(palette || {}).map(([k, v]) => `--${k}: ${v};`).join(" ");
  const style = document.createElement("style");
  style.textContent = `
    :root { ${vars(theme.light)} }
    @media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ${vars(theme.dark)} } }
    :root[data-theme="dark"] { ${vars(theme.dark)} }`;
  document.head.append(style);
}
applyTheme(DECK.theme);

// Days until next review for each Leitner box (box 0 = learning, due right away).
const BOX_INTERVALS = [0, 1, 3, 7, 14, 30];
const DAY_MS = 24 * 60 * 60 * 1000;

function makeCard(front, back, example = "", exampleEn = "") {
  return { id: crypto.randomUUID(), front, back, example, exampleEn, box: 0, due: Date.now() };
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) {
      // Fill in example sentences for starter cards saved before examples existed.
      for (const c of saved) {
        const starter = STARTER_DECK.find(([f]) => f === c.front);
        if (!c.example && starter && starter[2]) [, , c.example, c.exampleEn] = starter;
      }
      return saved;
    }
  } catch {}
  return STARTER_DECK.map((c) => makeCard(...c));
}

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cards)); } catch {}
}

let cards = load();
save();
let queue = [];
let current = null;

const $ = (id) => document.getElementById(id);

// Render a sentence into `el`, turning *word* into a highlighted <mark>.
function renderSentence(el, text) {
  el.replaceChildren();
  text.split("*").forEach((part, i) => {
    if (!part) return;
    if (i % 2) {
      const mark = document.createElement("mark");
      mark.textContent = part;
      el.appendChild(mark);
    } else {
      el.appendChild(document.createTextNode(part));
    }
  });
}

// Fill a .example block (sentence + translation) for a card; hide it if the card has none.
function renderExample(el, card) {
  el.classList.toggle("hidden", !card.example);
  if (!card.example) return;
  const sentence = el.querySelector(".sentence");
  sentence.lang = LANG;
  renderSentence(sentence, card.example);
  el.querySelector(".translation").textContent = card.exampleEn || "";
}

// ---- Study ----

function buildQueue(all = false) {
  const now = Date.now();
  queue = cards.filter((c) => all || c.due <= now).sort(() => Math.random() - 0.5);
}

function showNext() {
  current = queue.shift() || null;
  const due = cards.filter((c) => c.due <= Date.now()).length;
  $("stats").textContent = `${due} due · ${cards.length} cards total`;

  const hasCard = Boolean(current);
  $("card").classList.toggle("hidden", !hasCard);
  $("reveal").classList.toggle("hidden", !hasCard);
  $("grade").classList.add("hidden");
  $("done").classList.toggle("hidden", hasCard);
  if (!hasCard) return;

  $("front").textContent = current.front;
  $("meaning").textContent = current.back;
  renderExample($("example"), current);
  $("back").classList.add("hidden");
}

function reveal() {
  if (!current) return;
  $("back").classList.remove("hidden");
  $("reveal").classList.add("hidden");
  $("grade").classList.remove("hidden");
}

function grade(result) {
  if (!current) return;
  if (result === "good") {
    current.box = Math.min(current.box + 1, BOX_INTERVALS.length - 1);
  } else {
    current.box = 0;
    queue.push(current); // see it again this session
  }
  current.due = Date.now() + BOX_INTERVALS[current.box] * DAY_MS;
  save();
  showNext();
}

$("reveal").addEventListener("click", reveal);
$("card").addEventListener("click", reveal);
$("grade").addEventListener("click", (e) => {
  const g = e.target.dataset.grade;
  if (g) grade(g);
});
$("study-all").addEventListener("click", () => { buildQueue(true); showNext(); });

// Keyboard: Space/Enter reveals, 1 = again, 2 = got it.
document.addEventListener("keydown", (e) => {
  if (!$("study").classList.contains("active") || e.target.tagName === "INPUT") return;
  if (e.key === " " || e.key === "Enter") { e.preventDefault(); reveal(); }
  if ($("grade").classList.contains("hidden")) return;
  if (e.key === "1") grade("again");
  if (e.key === "2") grade("good");
});

// ---- Card management ----

// Tap a word in the list to show it in its example sentence.
function renderList() {
  const list = $("card-list");
  list.innerHTML = "";
  for (const c of cards) {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="row">
        <span class="term"></span><span class="meaning"></span><button aria-label="Delete">✕</button>
      </div>
      <div class="example hidden"><p class="sentence"></p><p class="translation"></p></div>`;
    li.querySelector(".term").textContent = c.front;
    li.querySelector(".term").lang = LANG;
    li.querySelector(".meaning").textContent = c.back;
    const example = li.querySelector(".example");
    if (c.example) {
      li.classList.add("has-example");
      li.querySelector(".row").addEventListener("click", () => {
        renderExample(example, c);
        example.classList.toggle("open");
        example.classList.toggle("hidden", !example.classList.contains("open"));
      });
    }
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      cards = cards.filter((x) => x.id !== c.id);
      save();
      renderList();
    });
    list.appendChild(li);
  }
}

$("add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let example = $("new-example").value.trim();
  const front = $("new-front").value.trim();
  // If the sentence has no *highlight*, highlight the word itself when it appears as typed.
  if (example && !example.includes("*")) {
    const i = example.toLowerCase().indexOf(front.toLowerCase());
    if (i >= 0) example = `${example.slice(0, i)}*${example.slice(i, i + front.length)}*${example.slice(i + front.length)}`;
  }
  cards.unshift(makeCard(front, $("new-back").value.trim(), example, $("new-example-en").value.trim()));
  save();
  e.target.reset();
  $("new-front").focus();
  renderList();
});

// Some hosts (like claude.ai pages) never show confirm() dialogs, so buttons that
// throw work away ask for a second tap instead, and reset after a few seconds.
function confirmTap(btn, prompt, action) {
  let timer = null;
  const label = btn.textContent;
  const disarm = () => { clearTimeout(timer); timer = null; btn.textContent = label; };
  btn.addEventListener("click", () => {
    if (timer) { disarm(); action(); return; }
    btn.textContent = prompt;
    timer = setTimeout(disarm, 4000);
  });
}

confirmTap($("reset"), "Tap again to replace all cards and progress", () => {
  cards = STARTER_DECK.map((c) => makeCard(...c));
  save();
  renderList();
});

// ---- Navigation ----

// Switch to a view: "home", "study", "read", "cards", or "grammar" (filled in by grammar.js).
function showView(view) {
  document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === view));
  closeSheet();
  if (view === "home") renderHome();
  else if (view === "study") { buildQueue(); showNext(); }
  else if (view === "read") renderReading();
  else if (view === "cards") renderList();
  window.scrollTo(0, 0);
}

document.querySelectorAll("nav button").forEach((btn) => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});

// The site name in the header goes back to the home page.
document.querySelector("h1").addEventListener("click", () => showView("home"));

// ---- Home ----

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

function renderHome() {
  const home = DECK.home || {};
  $("home-hello").textContent = home.hello || "";
  $("home-hello").lang = LANG;
  $("home-title").textContent = home.title || `Welcome to ${DECK.name}`;
  $("home-intro").textContent = home.intro || "";

  const due = cards.filter((c) => c.due <= Date.now()).length;
  $("tile-study").textContent = due ? `${plural(due, "card")} to review` : "All caught up for today";
  $("tile-read").textContent = plural(DECK.texts.length, "text");
  $("tile-grammar").textContent = plural(DECK.grammar?.topics.length || 0, "topic");
  $("tile-cards").textContent = plural(cards.length, "card");

  // Word of the day: a starter card that changes once a day, the same for everyone.
  const [word, meaning, example, exampleEn] = STARTER_DECK[Math.floor(Date.now() / DAY_MS) % STARTER_DECK.length];
  $("wod-label").textContent = home.wordOfTheDay || "Word of the day";
  $("wod-word").textContent = word;
  $("wod-word").lang = LANG;
  $("wod-meaning").textContent = meaning;
  renderExample($("wod-example"), { example, exampleEn });
}

document.querySelectorAll(".tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    // Grammar has no page of its own: open its first topic (the overview).
    if (tile.dataset.go === "grammar") openTopic(DECK.grammar.topics[0].id);
    else showView(tile.dataset.go);
  });
});

// Mark target-language text so browsers use the right pronunciation and hyphenation.
$("front").lang = LANG;
$("new-front").lang = LANG;
$("new-example").lang = LANG;
document.querySelector("h1").textContent = `Lingo Cards · ${DECK.name}`;

renderHome();

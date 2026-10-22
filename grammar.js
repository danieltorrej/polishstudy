// Grammar section: topic pages listed in the left-hand sidebar (a slide-in drawer
// on phones), and word pages with all forms of a word, opened with "See all forms"
// from the reading panel. Content comes from content/<lang>-grammar.js.
// Uses $, LANG, DECK, showView and renderSentence from app.js.

const GRAMMAR = DECK.grammar || { topics: [], words: {} };
const CASES = ["nominative", "accusative", "genitive", "dative", "locative", "instrumental", "vocative"];
const PERSONS = ["ja", "ty", "on / ona / ono", "my", "wy", "oni / one"];
const VIEW_LABELS = { home: "Home", study: "Study", read: "Read", cards: "My cards" };
let grammarBackTo = "home"; // view the back button returns to

function make(tag, className = "", text = "") {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Fill `node` with text where *asterisks* mark Polish words.
function renderRich(node, text) {
  node.replaceChildren();
  text.split("*").forEach((part, i) => {
    if (!part) return;
    if (i % 2) {
      const pl = make("strong", "pl", part);
      pl.lang = LANG;
      node.append(pl);
    } else {
      node.append(part);
    }
  });
  return node;
}

function topicLink(id, label) {
  const link = make("button", "topic-link", label);
  link.type = "button";
  link.addEventListener("click", () => openTopic(id));
  return link;
}

// A table in a scrollable wrapper. Options:
//   hit:       a word form to highlight wherever it appears
//   linkCases: turn case names in the first column into links to their topic
//   polish:    cells after the first column are Polish word forms
function renderTable(head, rows, { hit, linkCases, polish } = {}) {
  const table = document.createElement("table");
  if (head) {
    const tr = table.createTHead().insertRow();
    for (const h of head) tr.append(renderRich(make("th"), h));
  }
  const body = table.createTBody();
  for (const row of rows) {
    const tr = body.insertRow();
    row.forEach((cell, i) => {
      const td = make(i === 0 ? "th" : "td");
      if (i === 0) td.scope = "row";
      if (i === 0 && linkCases && CASES.includes(cell)) td.append(topicLink(cell, cell));
      else renderRich(td, cell);
      if (i > 0 && polish) td.lang = LANG;
      if (i > 0 && hit && cell.toLowerCase().split(/\s*\/\s*/).includes(hit)) td.classList.add("hit");
      tr.append(td);
    });
  }
  const wrap = make("div", "table-wrap");
  wrap.append(table);
  return wrap;
}

function renderSeeAlso(ids) {
  const p = make("p", "g-see", "See also: ");
  ids.map((id) => GRAMMAR.topics.find((t) => t.id === id)).filter(Boolean)
    .forEach((t, i) => p.append(i ? " · " : "", topicLink(t.id, t.title)));
  return p;
}

function renderBlocks(page, blocks) {
  for (const b of blocks) {
    if (b.h) page.append(make("h3", "", b.h));
    if (b.p) page.append(renderRich(make("p"), b.p));
    if (b.list) {
      const ul = make("ul", "g-list");
      for (const item of b.list) ul.append(renderRich(make("li"), item));
      page.append(ul);
    }
    if (b.table) page.append(renderTable(b.table.head, b.table.rows, { linkCases: true }));
    if (b.examples) {
      for (const [pl, en] of b.examples) {
        const ex = make("div", "example");
        const sentence = make("p", "sentence");
        sentence.lang = LANG;
        renderSentence(sentence, pl);
        ex.append(sentence, make("p", "translation", en));
        page.append(ex);
      }
    }
    if (b.see) page.append(renderSeeAlso(b.see));
  }
}

// ---- Pages ----

function openGrammarPage(fill, activeTopic = null) {
  const current = document.querySelector(".view.active")?.id;
  if (current && current !== "grammar") grammarBackTo = current;
  $("grammar-back").textContent = `← Back to ${VIEW_LABELS[grammarBackTo]}`;

  const page = $("grammar-page");
  page.replaceChildren();
  fill(page);
  document.querySelectorAll(".g-nav-item").forEach((b) => b.classList.toggle("active", b.dataset.topic === activeTopic));
  const activeItem = document.querySelector(".g-nav-item.active");
  if (activeItem) activeItem.closest("details").open = true;
  setDrawer(false);
  showView("grammar");
}

function openTopic(id) {
  const topic = GRAMMAR.topics.find((t) => t.id === id);
  if (!topic) return;
  openGrammarPage((page) => {
    page.append(make("p", "g-group", topic.group), make("h2", "", topic.title));
    renderBlocks(page, topic.blocks);
  }, id);
}

// All forms of a word, with the form that was tapped highlighted.
function openWordPage(lemma, form) {
  const word = GRAMMAR.words[lemma];
  if (!word) return;
  const hit = form?.toLowerCase();
  openGrammarPage((page) => {
    page.append(make("p", "g-group", [word.type, word.gender].filter(Boolean).join(" · ")));
    const title = make("h2", "", lemma);
    title.lang = LANG;
    page.append(title, make("p", "g-meaning", word.meaning));
    if (word.note) page.append(renderRich(make("p", "g-note"), word.note));

    if (word.type === "noun") {
      const rows = CASES.map((c, i) => (word.pl ? [c, word.sg[i], word.pl[i]] : [c, word.sg[i]]));
      page.append(renderTable(word.pl ? ["Case", "Singular", "Plural"] : ["Case", "Singular"], rows, { hit, linkCases: true, polish: true }));
      page.append(renderSeeAlso(["cases", "gender", "plural"]));
    } else if (word.type === "verb") {
      if (word.aspect) {
        // e.g. "Imperfective · perfective partner: zamówić (zamówię, zamówiłem) · About aspect"
        const other = word.aspect === "imperfective" ? "perfective" : "imperfective";
        const parts = [word.aspect[0].toUpperCase() + word.aspect.slice(1)];
        if (word.partner) parts.push(`${other} partner: *${word.partner}*${word.partnerNote ? ` (${word.partnerNote})` : ""}`);
        else if (word.partnerNote) parts.push(word.partnerNote);
        const line = renderRich(make("p", "g-aspect"), parts.join(" · ") + " · ");
        line.append(topicLink("aspect", "About aspect"));
        page.append(line);
      }
      page.append(make("h3", "", "Present tense"), make("p", "g-note", `Pattern: ${word.pattern}`));
      page.append(renderTable(null, PERSONS.map((p, i) => [p, word.present[i]]), { hit, polish: true }));
      if (word.past) {
        page.append(make("h3", "", "Past tense"));
        if (word.pastNote) page.append(renderRich(make("p", "g-note"), word.pastNote));
        const rows = PERSONS.map((p, i) => [p, word.past.m[i], word.past.f[i]]);
        page.append(renderTable(["", "Men, male people", "Women, everyone else"], rows, { hit, polish: true }));
        page.append(renderRich(make("p", "g-note"), `For “it” (ono): *${word.past.n}*`));
      }
      page.append(renderSeeAlso(["present-tense", "past-tense", "aspect"]));
    } else if (word.type === "adjective" || word.type === "possessive") {
      // Singular-only words (like każdy) have three columns per row instead of five.
      const head = ["Case", "Masculine", "Feminine", "Neuter", "Plural (male people)", "Plural (other)"]
        .slice(0, word.forms[0].length + 1);
      const rows = word.forms.map((forms, i) => [CASES[i], ...forms]);
      page.append(renderTable(head, rows, { hit, linkCases: true, polish: true }));
      page.append(renderSeeAlso(word.type === "possessive" ? ["possessives", "adjectives"] : ["adjectives", "adjective-plural"]));
    } else if (word.type === "pronoun") {
      page.append(renderTable(["Case", "Form"], word.forms.map((f, i) => [CASES[i], f]), { hit, linkCases: true, polish: true }));
      page.append(renderSeeAlso(["cases"]));
    }
    if (hit && hit !== lemma.toLowerCase()) {
      page.append(renderRich(make("p", "hint"), `The form you tapped, *${form}*, is highlighted.`));
    }
  });
}

$("grammar-back").addEventListener("click", () => showView(grammarBackTo));

// ---- Sidebar ----

// Each group (Cases, Nouns…) folds open and closed. Which groups are open is
// remembered on this device; the group of the topic you're reading always opens.
const NAV_OPEN_KEY = "lingo-grammar-open";
const openGroups = new Set(loadJSON(NAV_OPEN_KEY, []));

function renderGrammarNav() {
  const nav = $("grammar-topics");
  nav.replaceChildren();
  if (!GRAMMAR.topics.length) { nav.append(make("p", "hint", "No grammar topics for this language yet.")); return; }
  for (const group of new Set(GRAMMAR.topics.map((t) => t.group))) {
    const topics = GRAMMAR.topics.filter((t) => t.group === group);
    const section = make("details", "g-nav-section");
    section.open = openGroups.has(group);
    const summary = make("summary", "g-nav-group");
    summary.append(make("span", "", group), make("span", "g-nav-count", String(topics.length)));
    section.append(summary);
    for (const t of topics) {
      const item = make("button", "g-nav-item", t.title);
      item.type = "button";
      item.dataset.topic = t.id;
      item.addEventListener("click", () => openTopic(t.id));
      section.append(item);
    }
    section.addEventListener("toggle", () => {
      if (section.open) openGroups.add(group); else openGroups.delete(group);
      saveJSON(NAV_OPEN_KEY, [...openGroups]);
    });
    nav.append(section);
  }
}

// On phones the sidebar is a drawer opened from the header.
function setDrawer(open) {
  $("grammar-nav").classList.toggle("open", open);
  $("grammar-backdrop").classList.toggle("open", open);
  $("grammar-toggle").setAttribute("aria-expanded", String(open));
}

$("grammar-toggle").addEventListener("click", () => setDrawer(!$("grammar-nav").classList.contains("open")));
$("grammar-close").addEventListener("click", () => setDrawer(false));
$("grammar-backdrop").addEventListener("click", () => setDrawer(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setDrawer(false); });

renderGrammarNav();

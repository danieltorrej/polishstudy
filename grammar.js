// Grammar section: topic pages listed in the left-hand sidebar (a slide-in drawer
// on phones), and word pages with all forms of a word, opened with "See all forms"
// from the reading panel. Content comes from content/<lang>-grammar.js.
// Uses $, LANG, DECK, showView and renderSentence from app.js.

const GRAMMAR = DECK.grammar || { topics: [], words: {} };
// Every verb with all its forms, from content/<lang>-verbs.js (see that file for the format).
const VERBS = DECK.verbs || {};
const CASES = ["nominative", "accusative", "genitive", "dative", "locative", "instrumental", "vocative"];
const PERSONS = ["ja", "ty", "on / ona / ono", "my", "wy", "oni / one"];
const VIEW_LABELS = { home: "Home", study: "Study", read: "Read" };
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
      // Cells can hold several forms (“byłem/byłam”, “będę badał”); match any word in them.
      if (i > 0 && hit && cell && cell.toLowerCase().split(/[\s/]+/).includes(hit)) td.classList.add("hit");
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
  const group = document.querySelector(".g-nav-item.active")?.closest("details");
  if (group) group.open = true;
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

// Whether a word has a page of its own forms (noun, adjective, verb…).
function hasWordPage(lemma) {
  return Boolean(GRAMMAR.words[lemma] || VERBS[lemma]);
}

// All forms of a word, with the form that was tapped highlighted.
function openWordPage(lemma, form) {
  if (VERBS[lemma] || GRAMMAR.words[lemma]?.type === "verb") { openVerbPage(lemma, form); return; }
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

// ---- Verbs ----

const ASPECT_NAMES = { i: "imperfective", p: "perfective" };
const deaccent = (s) => s.normalize("NFD").replace(/\p{M}/gu, "").replace(/ł/g, "l").replace(/Ł/g, "L");

// “-am, -asz” etc. from the ja and ty forms of the present tense.
function presentPattern(pres) {
  const [ja, ty] = (pres || []).map((f) => f && f.replace(/ się$/, ""));
  if (!ja || !ty) return "";
  if (/m$/.test(ja)) return /asz$/.test(ty) ? "-am, -asz" : /esz$/.test(ty) ? "-em, -esz" : "";
  if (/ę$/.test(ja)) return /esz$/.test(ty) ? "-ę, -esz" : /[iy]sz$/.test(ty) ? "-ę, -isz / -ysz" : "";
  return "";
}

// A verb's data, combining content/<lang>-verbs.js with any hand-written notes from the
// grammar file (pattern notes, partner notes, stem-change notes).
function verbData(lemma) {
  const v = VERBS[lemma] || {};
  const hand = GRAMMAR.words[lemma]?.type === "verb" ? GRAMMAR.words[lemma] : {};
  const handPast = hand.past && hand.past.m.map((m, i) => [m, hand.past.f[i], i === 2 ? hand.past.n : null].filter(Boolean).join("/"));
  return {
    meaning: hand.meaning || v.m || "",
    aspect: hand.aspect || ASPECT_NAMES[v.a] || "",
    partner: hand.partner ?? v.p ?? null,
    partnerNote: hand.partnerNote || "",
    rel: v.rel || null,
    relKind: v.relKind || null,
    gov: v.g || "",
    pattern: hand.pattern || presentPattern(v.pres || hand.present),
    pastNote: hand.pastNote || "",
    pres: v.pres || hand.present || null,
    fut: v.fut || null,
    past: v.past || handPast || null,
    cond: v.cond || null,
    imp: v.imp || null,
  };
}

// A link to another verb's page (plain text if we don't have it).
function verbLink(lemma) {
  if (!VERBS[lemma] && GRAMMAR.words[lemma]?.type !== "verb") {
    const plain = make("strong", "pl", lemma);
    plain.lang = LANG;
    return plain;
  }
  const link = make("button", "topic-link", lemma);
  link.type = "button";
  link.lang = LANG;
  link.addEventListener("click", () => openVerbPage(lemma));
  return link;
}

// Rows of “masculine/feminine(/neuter)” forms as a men / women table, plus the neuter.
function genderTable(rows, hit) {
  // Some verbs have gaps (impersonal verbs like brakować); show those as “—”.
  const split = PERSONS.map((_, i) => (rows[i] || "").split("/"));
  const table = renderTable(["", "Men, male people", "Women, everyone else"],
    PERSONS.map((p, i) => [p, split[i][0] || "—", split[i][1] || "—"]), { hit, polish: true });
  const neuter = split[2]?.[2];
  return neuter ? [table, renderRich(make("p", "g-note"), `For “it” (ono): *${neuter}*`)] : [table];
}

function openVerbPage(lemma, form) {
  const v = verbData(lemma);
  const hit = form?.toLowerCase();
  openGrammarPage((page) => {
    const back = make("button", "topic-link", "← All verbs A–Z");
    back.type = "button";
    back.addEventListener("click", () => openVerbIndex());
    page.append(back, make("p", "g-group", ["verb", v.aspect].filter(Boolean).join(" · ")));
    const title = make("h2", "", lemma);
    title.lang = LANG;
    page.append(title, make("p", "g-meaning", v.meaning));

    // Aspect, partner and related verbs.
    const line = make("p", "g-aspect");
    if (v.aspect) line.append(v.aspect[0].toUpperCase() + v.aspect.slice(1));
    if (v.partner) {
      line.append(` · ${v.aspect === "perfective" ? "imperfective" : "perfective"} partner: `, verbLink(v.partner));
      if (v.partnerNote) line.append(` (${v.partnerNote.replace(/\*/g, "")})`);
    } else if (v.partnerNote) {
      line.append(" · ", renderRich(make("span"), v.partnerNote));
    }
    if (v.rel) {
      line.append(v.relKind === "motion" ? " · motion-verb pair: " : v.relKind === "frequentative" ? " · “from time to time” form: " : " · related: ", verbLink(v.rel));
    }
    line.append(" · ", topicLink("aspect", "About aspect"));
    page.append(line);
    if (v.relKind === "motion") {
      page.append(renderRich(make("p", "g-note"), "Motion verbs come in pairs: one for a single trip in one direction, happening now (*iść, jechać*), and one for going regularly, back and forth or in general (*chodzić, jeździć*)."));
    }
    if (v.gov) page.append(renderRich(make("p", "g-note"), `Used with: *${v.gov}* (the question words show which case follows).`));

    if (v.pres) {
      page.append(make("h3", "", "Present tense"));
      if (v.pattern) page.append(make("p", "g-note", `Pattern: ${v.pattern}`));
      page.append(renderTable(null, PERSONS.map((p, i) => [p, v.pres[i] || "—"]), { hit, polish: true }));
    }
    if (v.fut) {
      page.append(make("h3", "", "Future tense"));
      page.append(make("p", "g-note", v.aspect === "perfective"
        ? "Perfective verbs have no present tense: these present-looking forms mean the future."
        : "będę, będziesz… + the past form (or the infinitive)."));
      page.append(renderTable(null, PERSONS.map((p, i) => [p, v.fut[i] || "—"]), { hit, polish: true }));
    }
    if (v.past) {
      page.append(make("h3", "", "Past tense"));
      if (v.pastNote) page.append(renderRich(make("p", "g-note"), v.pastNote));
      page.append(...genderTable(v.past, hit));
    }
    if (v.imp && v.imp.some(Boolean)) {
      page.append(make("h3", "", "Commands"));
      page.append(renderTable(null, [
        ["to one person (ty)", v.imp[0] || "—"],
        ["to several people (wy)", v.imp[1] || "—"],
        ["let's… (my)", v.imp[2] || "—"],
      ], { hit, polish: true }));
    }
    if (v.cond) {
      const more = make("details", "g-more");
      more.append(make("summary", "", "Would… (conditional)"));
      more.append(...genderTable(v.cond, hit));
      if (v.cond.some((f) => f && f.split(/[\s/]+/).includes(hit))) more.open = true;
      page.append(more);
    }
    page.append(renderSeeAlso(["present-tense", "past-tense", "aspect"]));
    if (hit && hit !== lemma.toLowerCase()) {
      page.append(renderRich(make("p", "hint"), `The form you tapped, *${form}*, is highlighted.`));
    }
  }, "verbs");
}

// Search text for every verb: infinitive, meaning and all forms, without accents, so
// “wejsc”, “poszedl” or “to eat” all find their verb.
const VERB_NAMES = Object.keys(VERBS).sort((a, b) => a.localeCompare(b, "pl"));
let verbSearchIndex = null;
function verbSearchText(name) {
  const v = VERBS[name];
  const forms = [v.pres, v.fut, v.past, v.cond, v.imp].flat().filter(Boolean).join(" ");
  return { name: deaccent(name.toLowerCase()), meaning: (v.m || "").toLowerCase(), forms: ` ${deaccent(forms.toLowerCase()).replace(/\//g, " ")} ` };
}

function openVerbIndex() {
  verbSearchIndex ||= Object.fromEntries(VERB_NAMES.map((n) => [n, verbSearchText(n)]));
  openGrammarPage((page) => {
    page.append(make("p", "g-group", "Verbs"), make("h2", "", "Verbs A–Z"));
    page.append(renderRich(make("p", "g-note"),
      `${VERB_NAMES.length} verbs with all their forms. Search for an infinitive (*wejść*), any form (*poszedł*) or an English meaning (“to eat”). Polish letters are optional: *wejsc* works too.`));

    const search = make("input", "verb-search");
    search.type = "search";
    search.id = "verb-search";
    search.placeholder = "Search verbs… e.g. wejsc, poszedł, to eat";
    search.setAttribute("aria-label", "Search verbs");
    search.autocomplete = "off";
    const letters = make("nav", "letter-bar");
    letters.setAttribute("aria-label", "Jump to letter");
    const count = make("p", "g-note");
    const list = make("div", "verb-list");
    page.append(search, letters, count, list);

    const row = (name) => {
      const v = VERBS[name];
      const btn = make("button", "verb-row");
      btn.type = "button";
      const n = make("span", "verb-name", name);
      n.lang = LANG;
      btn.append(n, make("span", `aspect-badge ${v.a === "p" ? "pf" : "impf"}`, v.a === "p" ? "perf." : "imperf."), make("span", "verb-meaning", v.m || ""));
      btn.addEventListener("click", () => openVerbPage(name));
      return btn;
    };

    const render = () => {
      const q = deaccent(search.value.trim().toLowerCase());
      list.replaceChildren();
      let names = VERB_NAMES;
      if (q) {
        // Best matches first: the infinitive itself, then infinitives starting with it,
        // then verbs with a matching form, then English meanings.
        const score = (n) => {
          const s = verbSearchIndex[n];
          if (s.name === q) return 0;
          if (s.name.startsWith(q)) return 1;
          if (s.forms.includes(` ${q} `)) return 2;
          if (s.name.includes(q)) return 3;
          if (s.forms.includes(` ${q}`)) return 4;
          if (s.meaning.includes(q)) return 5;
          return 9;
        };
        names = VERB_NAMES.map((n) => [n, score(n)]).filter(([, s]) => s < 9).sort((a, b) => a[1] - b[1]).map(([n]) => n);
        for (const n of names) list.append(row(n));
        count.textContent = names.length ? `${names.length} found` : "No verbs found. Try fewer letters, or search in English.";
        letters.classList.add("hidden");
        return;
      }
      // No search: the whole list, A–Z, with a heading for each letter.
      letters.classList.remove("hidden");
      letters.replaceChildren();
      count.textContent = "";
      let letter = null;
      for (const n of names) {
        const first = n[0].toUpperCase();
        if (first !== letter) {
          letter = first;
          const heading = make("h3", "verb-letter", first);
          heading.id = `verbs-${first}`;
          list.append(heading);
          const jump = make("button", "letter", first);
          jump.type = "button";
          jump.addEventListener("click", () => heading.scrollIntoView({ behavior: "smooth", block: "start" }));
          letters.append(jump);
        }
        list.append(row(n));
      }
    };
    search.addEventListener("input", render);
    render();
  }, "verbs");
}

// ---- Sidebar ----

// Each group (Cases, Nouns…) folds open and closed. Which groups are open is
// remembered on this device; the group of the topic you're reading always opens.
const NAV_OPEN_KEY = "lingo-grammar-open";
const openGroups = new Set(loadJSON(NAV_OPEN_KEY, []));

function renderGrammarNav() {
  const nav = $("grammar-topics");
  nav.replaceChildren();
  if (VERB_NAMES.length) {
    const verbs = make("button", "g-nav-item g-nav-verbs");
    verbs.type = "button";
    verbs.dataset.topic = "verbs";
    verbs.append(make("span", "", "Verbs A–Z"), make("span", "g-nav-count", String(VERB_NAMES.length)));
    verbs.addEventListener("click", () => openVerbIndex());
    nav.append(verbs);
  }
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

// Polish Learning: lessons, stories and grammar for learning a language in context.
// Built-in content lives in content/<lang>.js (words, stories, word list, theme) and the
// other content/<lang>-*.js files (grammar, verbs, lessons). Progress is kept in
// localStorage, so it stays on this device for now.

const LANG = "pl";
const DECK = CONTENT[LANG];
const DAY_MS = 24 * 60 * 60 * 1000;

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
  // “html:root” outranks style.css's “:root”, so these colours win even when the
  // stylesheet loads later (as it does on claude.ai pages).
  style.textContent = `
    html:root { ${vars(theme.light)} }
    @media (prefers-color-scheme: dark) { html:root:not([data-theme="light"]) { ${vars(theme.dark)} } }
    html:root[data-theme="dark"] { ${vars(theme.dark)} }`;
  document.head.append(style);
}
applyTheme(DECK.theme);

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

// Fill a .example block (sentence + translation); hide it if there's no sentence.
function renderExample(el, { example, exampleEn }) {
  el.classList.toggle("hidden", !example);
  if (!example) return;
  const sentence = el.querySelector(".sentence");
  sentence.lang = LANG;
  renderSentence(sentence, example);
  el.querySelector(".translation").textContent = exampleEn || "";
}

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

// ---- Navigation ----

// Switch to a view: "home", "study", "read", or "grammar" (filled in by grammar.js).
function showView(view) {
  document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === view));
  closeSheet();
  if (view === "home") renderHome();
  else if (view === "study") renderLessons();
  else if (view === "read") renderReading();
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

  // Study = lessons: show the next lesson not yet done.
  const lessons = DECK.lessons || [];
  let done = [];
  try { done = JSON.parse(localStorage.getItem(`lingo-lessons-done-${LANG}`)) || []; } catch {}
  const next = lessons.find((l) => !done.includes(l.id));
  $("tile-study").textContent = !lessons.length ? "Lessons coming soon"
    : next ? `Next: Lekcja ${next.number} · ${next.titleEn}` : `All ${lessons.length} lessons done`;
  $("tile-read").textContent = plural(DECK.texts.length, "text");
  $("tile-grammar").textContent = plural(DECK.grammar?.topics.length || 0, "topic");

  // Word of the day: one of the language's starter words, changing once a day.
  const words = DECK.cards || [];
  $("word-of-day").classList.toggle("hidden", !words.length);
  if (!words.length) return;
  const [word, meaning, example, exampleEn] = words[Math.floor(Date.now() / DAY_MS) % words.length];
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

// The site's name, e.g. “Polish Learning”.
document.querySelector("h1").textContent = `${DECK.name} Learning`;
document.title = `${DECK.name} Learning`;

renderHome();

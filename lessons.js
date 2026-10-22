// Study tab: a course of lessons, in the order of a course book. Each lesson has
// dialogues and a short text about the country (words tappable, as in Read), useful
// phrases, and exercises. Content comes from content/<lang>-lessons.js.
// Uses $, LANG, DECK (app.js),
// renderTapText, renderExercises, refreshWordStates, loadJSON, saveJSON, el (reading.js)
// and topicLink, renderRich (grammar.js).

const LESSONS = DECK.lessons || [];
const DONE_KEY = `lingo-lessons-done-${LANG}`;
const doneLessons = new Set(loadJSON(DONE_KEY, []));
let currentLessonId = null;

function renderLessons() {
  const lesson = LESSONS.find((l) => l.id === currentLessonId);
  $("lesson-index").classList.toggle("hidden", Boolean(lesson));
  $("lesson").classList.toggle("hidden", !lesson);
  if (lesson) renderLesson(lesson);
  else renderLessonList();
}

function renderLessonList() {
  const list = $("lesson-list");
  list.replaceChildren();
  const done = LESSONS.filter((l) => doneLessons.has(l.id)).length;
  $("lesson-progress").textContent = LESSONS.length
    ? `${done} of ${LESSONS.length} lessons done. Each lesson has dialogues, a short text about Poland, useful phrases and exercises.`
    : "Lessons are coming soon.";
  const next = LESSONS.find((l) => !doneLessons.has(l.id));
  for (const lesson of LESSONS) {
    const item = el("button", "lesson-item");
    item.type = "button";
    const isDone = doneLessons.has(lesson.id);
    item.classList.toggle("done", isDone);
    item.classList.toggle("next", lesson === next);
    const num = el("span", "lesson-num", isDone ? "✓" : String(lesson.number));
    const text = el("span", "lesson-text");
    const title = el("span", "lesson-title", lesson.title);
    title.lang = LANG;
    text.append(title, el("span", "lesson-sub", `${lesson.titleEn} · ${lesson.level}`));
    item.append(num, text);
    if (lesson === next) item.append(el("span", "lesson-badge", isDone ? "" : "Next"));
    item.addEventListener("click", () => openLesson(lesson.id));
    list.append(item);
  }
}

function openLesson(id) {
  currentLessonId = id;
  renderLessons();
  window.scrollTo(0, 0);
}

function renderLesson(lesson) {
  const page = $("lesson");
  page.replaceChildren();

  const back = el("button", "topic-link back-to-lessons", "← All lessons");
  back.type = "button";
  back.addEventListener("click", () => { currentLessonId = null; renderLessons(); });
  page.append(back);

  const head = el("div", "lesson-head");
  const title = el("h2", "", lesson.title);
  title.lang = LANG;
  head.append(el("span", "level-badge", `Lekcja ${lesson.number} · ${lesson.level}`), title, el("p", "stats", lesson.titleEn));
  page.append(head);

  // What the lesson covers, with links to the grammar it practises.
  if (lesson.goals) {
    const goals = el("div", "lesson-goals");
    goals.append(el("h3", "", "In this lesson"));
    const ul = el("ul", "g-list");
    for (const can of lesson.goals.can || []) ul.append(el("li", "", can));
    for (const [text, topic] of lesson.goals.grammar || []) {
      const li = el("li");
      renderRich(li, text);
      if (topic) li.append(" · ", topicLink(topic, "grammar"));
      ul.append(li);
    }
    goals.append(ul);
    page.append(goals);
  }

  // Dialogues and texts about Poland.
  lesson.parts.forEach((part, n) => {
    const section = el("section", `lesson-part ${part.kind || ""}`);
    const label = part.kind === "culture" ? "Wiesz, że…? · Did you know?" : `Dialog ${lesson.parts.slice(0, n + 1).filter((p) => p.kind !== "culture").length}`;
    const h = el("h3", "", part.title);
    h.lang = LANG;
    section.append(el("p", "g-group", label), h, el("p", "stats", part.titleEn));
    const body = el("div", "reading-text");
    const translation = el("div", "lesson-translation");
    renderTapText(body, part.sentences, translation);
    const details = el("details");
    details.append(el("summary", "", "Show English translation"), translation);
    section.append(body, details);
    page.append(section);
  });
  page.append(el("p", "hint", "Tap any word to see what it means and how it changes."));

  // Useful phrases.
  if (lesson.phrases?.length) {
    const section = el("section", "lesson-part phrases");
    section.append(el("p", "g-group", "Przydatne zwroty · Useful phrases"));
    const table = el("table");
    const tbody = table.createTBody();
    for (const [pl, en] of lesson.phrases) {
      const tr = tbody.insertRow();
      const tdPl = el("td", "pl-cell", pl);
      tdPl.lang = LANG;
      tr.append(tdPl, el("td", "", en));
    }
    const wrap = el("div", "table-wrap");
    wrap.append(table);
    section.append(wrap);
    page.append(section);
  }

  if (lesson.exercises) {
    const box = el("section", "exercises");
    renderExercises(lesson.exercises, box, `lesson-${lesson.number}-gap`);
    page.append(box);
  }

  // Done / next.
  const footer = el("div", "lesson-footer");
  const mark = el("button", doneLessons.has(lesson.id) ? "" : "primary");
  mark.type = "button";
  mark.textContent = doneLessons.has(lesson.id) ? "✓ Done (tap to undo)" : "Mark lesson as done";
  mark.addEventListener("click", () => {
    if (doneLessons.has(lesson.id)) doneLessons.delete(lesson.id); else doneLessons.add(lesson.id);
    saveJSON(DONE_KEY, [...doneLessons]);
    renderLesson(lesson);
  });
  footer.append(mark);
  const next = LESSONS[LESSONS.indexOf(lesson) + 1];
  if (next) {
    const go = el("button", "", `Next: ${next.title} →`);
    go.type = "button";
    go.lang = LANG;
    go.addEventListener("click", () => openLesson(next.id));
    footer.append(go);
  }
  page.append(footer);
  refreshWordStates();
}

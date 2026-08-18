(function(){
  "use strict";

  const ALL_ITEMS = [
    ...PREFIX_DATA.map(item => ({ ...item, kategori: "prefix" })),
    ...SUFFIX_DATA.map(item => ({ ...item, kategori: "suffix" }))
  ];
  const quizFilterEl = document.getElementById("quizFilter");
  const quizTermEl = document.getElementById("quizTerm");
  const quizKatLabel = document.getElementById("quizKatLabel");
  const quizOptionsEl = document.getElementById("quizOptions");
  const quizFeedbackEl = document.getElementById("quizFeedback");
  const nextBtn = document.getElementById("nextBtn");
  const qNumEl = document.getElementById("qNum");
  const qScoreEl = document.getElementById("qScore");
  const qTotalEl = document.getElementById("qTotal");
  const qStreakEl = document.getElementById("qStreak");
  const SELECTION_STORAGE_KEY = "affix_selectedTerms";
  const allKeys = new Set(ALL_ITEMS.map(itemKey));
  const selectedKeys = loadSelectedKeys();
  const state = { cat: "alla", qNum: 1, score: 0, total: 0, streak: 0, current: null, answered: false };
  let oppositeMeanings = new Map();

  function itemKey(item){ return item.kategori + "::" + item.term; }

  function loadSelectedKeys(){
    const stored = localStorage.getItem(SELECTION_STORAGE_KEY);
    if (stored === null) return new Set(allKeys);
    try {
      const keys = JSON.parse(stored);
      return Array.isArray(keys) ? new Set(keys.filter(key => allKeys.has(key))) : new Set(allKeys);
    } catch {
      return new Set(allKeys);
    }
  }

  function shuffle(items){
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index--){
      const otherIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[otherIndex]] = [result[otherIndex], result[index]];
    }
    return result;
  }

  async function loadOppositeMeanings(){
    const response = await fetch("Prefix,Motsatt betydelse.txt");
    if (!response.ok) throw new Error("Kunde inte läsa motsatsdatan.");
    const text = await response.text();
    return new Map(text.split(/\r?\n/).flatMap(line => {
      const match = line.match(/^(.*?),(.*)$/);
      if (!match || match[1] === "Prefix" || match[1] === "Suffix") return [];
      return [[match[1].trim(), match[2].trim().replace(/^"|"$/g, "")]];
    }));
  }

  function pool(){
    return ALL_ITEMS.filter(item => selectedKeys.has(itemKey(item)) &&
      (state.cat === "alla" || item.kategori === state.cat) && oppositeMeanings.has(item.term));
  }

  function buildQuestion(){
    const items = pool();
    const correctItem = items[Math.floor(Math.random() * items.length)];
    const correct = oppositeMeanings.get(correctItem.term);
    const distractors = [];
    const seen = new Set([correct]);
    for (const item of shuffle(ALL_ITEMS)){
      const meaning = oppositeMeanings.get(item.term);
      if (meaning && !seen.has(meaning)) {
        seen.add(meaning);
        distractors.push(meaning);
        if (distractors.length === 4) break;
      }
    }
    return { term: correctItem.term, kategori: correctItem.kategori, correct, options: shuffle([correct, ...distractors]) };
  }

  function updateStats(){
    qScoreEl.textContent = state.score;
    qTotalEl.textContent = state.total;
    qStreakEl.textContent = state.streak;
  }

  function showEmptyState(message){
    state.current = null;
    state.answered = true;
    quizTermEl.textContent = "—";
    quizTermEl.className = "term-block";
    quizKatLabel.textContent = "Inga affix tillgängliga";
    quizOptionsEl.innerHTML = "";
    quizFeedbackEl.innerHTML = `<p class="quiz-empty-note">${message} <a href="browse.html">Välj affix i lexikonet.</a></p>`;
    nextBtn.style.display = "none";
    updateStats();
  }

  function newQuestion(){
    if (pool().length === 0) return showEmptyState("Det finns inga aktiva affix med en kontradiktion.");
    state.current = buildQuestion();
    state.answered = false;
    quizFeedbackEl.innerHTML = "";
    nextBtn.style.display = "none";
    quizTermEl.textContent = state.current.term;
    quizTermEl.className = "term-block " + state.current.kategori;
    quizKatLabel.textContent = state.current.kategori === "prefix" ? "Prefix" : "Suffix";
    quizOptionsEl.innerHTML = "";
    state.current.options.forEach(option => {
      const button = document.createElement("button");
      button.className = "option-btn";
      button.textContent = option;
      button.addEventListener("click", () => answer(button, option));
      quizOptionsEl.appendChild(button);
    });
    qNumEl.textContent = state.qNum;
    updateStats();
  }

  function answer(button, chosen){
    if (state.answered) return;
    state.answered = true;
    state.total++;
    const isCorrect = chosen === state.current.correct;
    document.querySelectorAll(".option-btn").forEach(candidate => {
      candidate.disabled = true;
      if (candidate.textContent === state.current.correct) candidate.classList.add("correct");
      else if (candidate === button) candidate.classList.add("wrong");
    });
    if (isCorrect) {
      state.score++;
      state.streak++;
      quizFeedbackEl.innerHTML = '<span class="stamp ratt">Rätt!</span>';
    } else {
      state.streak = 0;
      quizFeedbackEl.innerHTML = '<span class="stamp fel">Fel</span>';
    }
    updateStats();
    nextBtn.style.display = "inline-block";
    nextBtn.focus();
  }

  nextBtn.addEventListener("click", () => { state.qNum++; newQuestion(); });
  quizFilterEl.addEventListener("click", event => {
    const button = event.target.closest(".chip");
    if (!button) return;
    quizFilterEl.querySelectorAll(".chip").forEach(chip => chip.classList.remove("active"));
    button.classList.add("active");
    state.cat = button.dataset.cat;
    state.qNum = 1;
    state.score = 0;
    state.total = 0;
    state.streak = 0;
    newQuestion();
  });

  loadOppositeMeanings().then(data => {
    oppositeMeanings = data;
    newQuestion();
  }).catch(() => showEmptyState("Kontradiktionsdatan kunde inte läsas."));
})();
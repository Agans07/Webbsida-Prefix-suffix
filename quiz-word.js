(function(){
  "use strict";

  const MEANING_MAP = Object.fromEntries(
    [...PREFIX_DATA, ...SUFFIX_DATA].map(({ term, betydelse }) => [term, betydelse])
  );
  const wordBlock = document.getElementById("wordBlock");
  const splitPreview = document.getElementById("splitPreview");
  const questionText = document.getElementById("questionText");
  const answerForm = document.getElementById("answerForm");
  const answerLabel = document.getElementById("answerLabel");
  const answerInput = document.getElementById("answerInput");
  const answerSubmit = answerForm.querySelector("button[type=submit]");
  const feedbackEl = document.getElementById("quizFeedback");
  const meaningBox = document.getElementById("meaningBox");
  const nextBtn = document.getElementById("nextBtn");
  const qNumEl = document.getElementById("qNum");
  const qScoreEl = document.getElementById("qScore");
  const qTotalEl = document.getElementById("qTotal");
  const qStreakEl = document.getElementById("qStreak");
  const SELECTION_STORAGE_KEY = "affix_selectedTerms";
  const allKeys = new Set([
    ...PREFIX_DATA.map(item => itemKey({ ...item, kategori: "prefix" })),
    ...SUFFIX_DATA.map(item => itemKey({ ...item, kategori: "suffix" }))
  ]);
  const selectedKeys = loadSelectedKeys();

  const state = { order: [], pos: 0, round: 1, score: 0, total: 0, streak: 0, current: null, answered: false };

  function itemKey(item){ return item.kategori + "::" + item.term; }

  function loadSelectedKeys(){
    const stored = localStorage.getItem(SELECTION_STORAGE_KEY);
    if (stored === null) return new Set(allKeys);
    try {
      const keys = JSON.parse(stored);
      if (!Array.isArray(keys)) return new Set(allKeys);
      return new Set(keys.filter(key => allKeys.has(key)));
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

  function newOrder(){
    const targets = [];
    WORD_DATA.forEach(word => {
      const candidates = [];
      if (word.prefix && selectedKeys.has(itemKey({ kategori: "prefix", term: word.prefix.term }))){
        candidates.push({ kind: "prefix", affix: word.prefix });
      }
      if (word.suffix && selectedKeys.has(itemKey({ kategori: "suffix", term: word.suffix.term }))){
        candidates.push({ kind: "suffix", affix: word.suffix });
      }
      if (candidates.length) targets.push({ word, candidates });
    });
    state.order = shuffle(targets);
    state.pos = 0;
  }

  function escapeHTML(text){
    const element = document.createElement("div");
    element.textContent = text;
    return element.innerHTML;
  }

  function preview(word, kind, text){
    if (kind === "prefix") return `<span class="hit">${escapeHTML(text)}</span>${escapeHTML(word.ord.slice(text.length))}`;
    const cut = word.ord.length - text.length;
    return `${escapeHTML(word.ord.slice(0, cut))}<span class="hit">${escapeHTML(text)}</span>`;
  }

  function loadQuestion(){
    if (state.pos >= state.order.length) newOrder();
    if (state.order.length === 0){
      showEmptyState();
      return;
    }
    state.current = state.order[state.pos];
    state.answered = false;
    feedbackEl.innerHTML = "";
    meaningBox.innerHTML = "";
    splitPreview.innerHTML = "&nbsp;";
    nextBtn.style.display = "none";
    answerForm.style.display = "block";
    answerInput.disabled = false;
    answerSubmit.disabled = false;
    answerInput.value = "";

    const word = state.current.word;
    const candidates = state.current.candidates;
    wordBlock.textContent = word.ord;
    if (candidates.length === 2){
      questionText.textContent = "Vilken del av ordet är ett prefix eller suffix?";
      answerLabel.textContent = "Skriv ett affix";
      answerInput.placeholder = "Exempel: auto- eller -grafi";
    } else {
      const kind = candidates[0].kind;
      questionText.textContent = "Vilken del av ordet är ett " + kind + "?";
      answerLabel.textContent = "Skriv " + kind + "et";
      answerInput.placeholder = kind === "prefix" ? "Exempel: auto-" : "Exempel: -grafi";
    }
    qNumEl.textContent = state.round;
    updateStats();
    answerInput.focus();
  }

  function showEmptyState(){
    state.current = null;
    state.answered = true;
    wordBlock.textContent = "—";
    splitPreview.innerHTML = "&nbsp;";
    questionText.textContent = "Inga affix valda";
    answerForm.style.display = "none";
    feedbackEl.innerHTML = '<p class="quiz-empty-note">Det finns inga aktiva affix med ordexempel. <a href="browse.html">Välj affix i lexikonet.</a></p>';
    meaningBox.innerHTML = "";
    nextBtn.style.display = "none";
    updateStats();
  }

  function normalizedAffix(text){
    return text.trim().toLowerCase().replace(/^-+|-+$/g, "");
  }

  function answer(chosen){
    if (state.answered) return;
    state.answered = true;
    state.total++;
    const word = state.current.word;
    const target = state.current;
    const matchedCandidate = target.candidates.find(candidate =>
      normalizedAffix(chosen) === normalizedAffix(candidate.affix.text)
    );
    answerInput.disabled = true;
    answerSubmit.disabled = true;
    if (matchedCandidate){
      const { kind, affix } = matchedCandidate;
      state.score++;
      state.streak++;
      feedbackEl.innerHTML = '<span class="stamp ratt">Rätt!</span>';
      splitPreview.innerHTML = preview(word, kind, affix.text);
      meaningBox.innerHTML = `<div class="meaning-box"><b>${escapeHTML(affix.term)}</b> — ${escapeHTML(MEANING_MAP[affix.term] || "")}</div>`;
    } else {
      state.streak = 0;
      feedbackEl.innerHTML = '<span class="stamp fel">Fel</span>';
    }
    updateStats();
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = "Nästa ord →";
    nextBtn.focus();
  }

  function updateStats(){
    qScoreEl.textContent = state.score;
    qTotalEl.textContent = state.total;
    qStreakEl.textContent = state.streak;
  }

  nextBtn.addEventListener("click", () => {
    state.pos++;
    state.round++;
    loadQuestion();
  });

  answerForm.addEventListener("submit", event => {
    event.preventDefault();
    const chosen = answerInput.value.trim();
    if (!chosen || state.answered) return;
    answer(chosen);
  });

  newOrder();
  loadQuestion();
})();

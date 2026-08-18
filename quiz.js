(function(){
  "use strict";

  const ALL_ITEMS = [
    ...PREFIX_DATA.map(d => ({ ...d, kategori: "prefix" })),
    ...SUFFIX_DATA.map(d => ({ ...d, kategori: "suffix" }))
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

  const quizState = {
    cat: "alla",
    qNum: 1,
    score: 0,
    total: 0,
    streak: 0,
    bestStreak: Number(localStorage.getItem("affix_bestStreak") || 0),
    current: null,
    answered: false
  };

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

  function pool(){
    return ALL_ITEMS.filter(item =>
      selectedKeys.has(itemKey(item)) && (quizState.cat === "alla" || item.kategori === quizState.cat)
    );
  }

  function shuffle(arr){
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildQuestion(){
    const items = pool();
    const correctItem = items[Math.floor(Math.random() * items.length)];

    // Distraktorer: unika betydelser, olika från den rätta, från hela datasetet
    const seen = new Set([correctItem.betydelse]);
    const distractors = [];
    const shuffledAll = shuffle(ALL_ITEMS);
    for (const it of shuffledAll){
      if (distractors.length >= 4) break;
      if (it.term === correctItem.term) continue;
      if (seen.has(it.betydelse)) continue;
      seen.add(it.betydelse);
      distractors.push(it.betydelse);
    }

    const options = shuffle([correctItem.betydelse, ...distractors]);
    return { term: correctItem.term, kategori: correctItem.kategori, correct: correctItem.betydelse, options };
  }

  function newQuestion(){
    if (pool().length === 0){
      showEmptyState();
      return;
    }
    quizState.current = buildQuestion();
    quizState.answered = false;
    quizFeedbackEl.innerHTML = "";
    nextBtn.style.display = "none";

    quizTermEl.textContent = quizState.current.term;
    quizTermEl.className = "term-block " + quizState.current.kategori;
    quizTermEl.dataset.kat = quizState.current.kategori === "prefix" ? "prefix" : "suffix";
    quizKatLabel.textContent = quizState.current.kategori === "prefix" ? "Prefix" : "Suffix";

    quizOptionsEl.innerHTML = "";
    quizState.current.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => answer(btn, opt));
      quizOptionsEl.appendChild(btn);
    });

    qNumEl.textContent = quizState.qNum;
    updateStats();
  }

  function showEmptyState(){
    quizState.current = null;
    quizState.answered = true;
    quizTermEl.textContent = "—";
    quizTermEl.className = "term-block";
    quizTermEl.dataset.kat = "";
    quizKatLabel.textContent = "Inga affix valda";
    quizOptionsEl.innerHTML = "";
    quizFeedbackEl.innerHTML = '<p class="quiz-empty-note">Det finns inga aktiva affix för detta quizval. <a href="browse.html">Välj affix i lexikonet.</a></p>';
    nextBtn.style.display = "none";
    updateStats();
  }

  function answer(btn, chosen){
    if (quizState.answered) return;
    quizState.answered = true;
    quizState.total += 1;

    const correct = quizState.current.correct;
    const isCorrect = chosen === correct;

    document.querySelectorAll(".option-btn").forEach(b => {
      b.disabled = true;
      if (b.textContent === correct) b.classList.add("correct");
      else if (b === btn) b.classList.add("wrong");
    });

    if (isCorrect){
      quizState.score += 1;
      quizState.streak += 1;
      quizState.bestStreak = Math.max(quizState.bestStreak, quizState.streak);
      localStorage.setItem("affix_bestStreak", String(quizState.bestStreak));
      quizFeedbackEl.innerHTML = '<span class="stamp ratt">Rätt!</span>';
    } else {
      quizState.streak = 0;
      quizFeedbackEl.innerHTML = '<span class="stamp fel">Fel</span>';
    }

    updateStats();
    nextBtn.style.display = "inline-block";
    nextBtn.focus();
  }

  function updateStats(){
    qScoreEl.textContent = quizState.score;
    qTotalEl.textContent = quizState.total;
    qStreakEl.textContent = quizState.streak;
  }

  nextBtn.addEventListener("click", () => {
    quizState.qNum += 1;
    newQuestion();
  });

  quizFilterEl.addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    quizFilterEl.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    quizState.cat = btn.dataset.cat;
    quizState.qNum = 1;
    quizState.score = 0;
    quizState.total = 0;
    quizState.streak = 0;
    newQuestion();
  });

  newQuestion();
})();

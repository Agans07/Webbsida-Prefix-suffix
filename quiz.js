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

  function pool(){
    return quizState.cat === "alla" ? ALL_ITEMS : ALL_ITEMS.filter(i => i.kategori === quizState.cat);
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

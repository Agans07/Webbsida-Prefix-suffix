(function(){
  "use strict";

  const MEANING_MAP = Object.fromEntries(
    [...PREFIX_DATA, ...SUFFIX_DATA].map(({ term, betydelse }) => [term, betydelse])
  );
  const wordBlock = document.getElementById("wordBlock");
  const splitPreview = document.getElementById("splitPreview");
  const questionText = document.getElementById("questionText");
  const optionsEl = document.getElementById("quizOptions");
  const feedbackEl = document.getElementById("quizFeedback");
  const meaningBox = document.getElementById("meaningBox");
  const nextBtn = document.getElementById("nextBtn");
  const qNumEl = document.getElementById("qNum");
  const qScoreEl = document.getElementById("qScore");
  const qTotalEl = document.getElementById("qTotal");
  const qStreakEl = document.getElementById("qStreak");

  const state = { order: [], pos: 0, round: 1, score: 0, total: 0, streak: 0, current: null, answered: false };

  function shuffle(items){
    const result = items.slice();
    for (let index = result.length - 1; index > 0; index--){
      const otherIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[otherIndex]] = [result[otherIndex], result[index]];
    }
    return result;
  }

  function newOrder(){
    state.order = shuffle(WORD_DATA);
    state.pos = 0;
  }

  function fragmentOptions(word, correctText, fromStart){
    const maxLength = word.length - 1;
    const lengths = new Set([correctText.length]);
    for (const offset of [-1, 1, -2, 2, -3, 3]){
      const length = correctText.length + offset;
      if (length >= 1 && length <= maxLength) lengths.add(length);
      if (lengths.size === 3) break;
    }
    for (let length = 1; lengths.size < 3 && length <= maxLength; length++) lengths.add(length);
    return shuffle([...lengths].slice(0, 3)).map(length => ({
      text: fromStart ? word.slice(0, length) : word.slice(-length),
      kind: fromStart ? "prefix" : "suffix"
    }));
  }

  function distractorText(word, fromStart){
    return fromStart ? word.slice(0, 1) : word.slice(-1);
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
    state.current = state.order[state.pos];
    state.answered = false;
    feedbackEl.innerHTML = "";
    meaningBox.innerHTML = "";
    splitPreview.innerHTML = "&nbsp;";
    nextBtn.style.display = "none";

    const word = state.current;
    wordBlock.textContent = word.ord;
    questionText.textContent = "Vilken del av ordet är ett prefix eller suffix?";
    const options = [
      ...fragmentOptions(word.ord, word.prefix?.text || distractorText(word.ord, true), true),
      ...fragmentOptions(word.ord, word.suffix?.text || distractorText(word.ord, false), false)
    ];
    optionsEl.innerHTML = "";
    options.forEach(option => {
      const button = document.createElement("button");
      button.className = `option-btn affix-option ${option.kind}`;
      button.textContent = option.kind === "prefix" ? `${option.text}-` : `-${option.text}`;
      button.addEventListener("click", () => answer(button, option));
      optionsEl.appendChild(button);
    });
    qNumEl.textContent = state.round;
    updateStats();
  }

  function answer(button, option){
    if (state.answered) return;
    state.answered = true;
    state.total++;
    const word = state.current;
    const matchedAffix = option.kind === "prefix" && word.prefix && option.text.toLowerCase() === word.prefix.text.toLowerCase() ? word.prefix
      : option.kind === "suffix" && word.suffix && option.text.toLowerCase() === word.suffix.text.toLowerCase() ? word.suffix
      : null;
    document.querySelectorAll(".option-btn").forEach(candidate => { candidate.disabled = true; });
    if (matchedAffix){
      state.score++;
      state.streak++;
      button.classList.add("correct");
      feedbackEl.innerHTML = '<span class="stamp ratt">Rätt!</span>';
      splitPreview.innerHTML = preview(word, option.kind, matchedAffix.text);
      meaningBox.innerHTML = `<div class="meaning-box"><b>${escapeHTML(matchedAffix.term)}</b> — ${escapeHTML(MEANING_MAP[matchedAffix.term] || "")}</div>`;
    } else {
      state.streak = 0;
      button.classList.add("wrong");
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

  newOrder();
  loadQuestion();
})();

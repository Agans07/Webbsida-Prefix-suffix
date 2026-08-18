(function(){
  "use strict";

  const ALL_ITEMS = [
    ...PREFIX_DATA.map(d => ({ ...d, kategori: "prefix" })),
    ...SUFFIX_DATA.map(d => ({ ...d, kategori: "suffix" }))
  ];

  const searchInput = document.getElementById("searchInput");
  const termGrid = document.getElementById("termGrid");
  const resultCount = document.getElementById("resultCount");
  const browseFilter = document.getElementById("browseFilter");
  const enableAllBtn = document.getElementById("enableAllBtn");
  const disableAllBtn = document.getElementById("disableAllBtn");
  const selectionStatus = document.getElementById("selectionStatus");
  const selectionByLetter = document.getElementById("selectionByLetter");
  const SELECTION_STORAGE_KEY = "affix_selectedTerms";
  const allKeys = new Set(ALL_ITEMS.map(itemKey));
  const selectedKeys = loadSelectedKeys();
  let browseCat = "alla";

  function norm(str){ return str.toLowerCase(); }

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

  function saveSelectedKeys(){
    localStorage.setItem(SELECTION_STORAGE_KEY, JSON.stringify([...selectedKeys]));
  }

  function itemInitial(item){
    return item.term.replace(/^[^A-Za-zÅÄÖåäö]+/, "").charAt(0).toUpperCase();
  }

  function escapeHTML(str){
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function updateSelectionStatus(){
    selectionStatus.textContent = selectedKeys.size + " av " + ALL_ITEMS.length + " affix används i quiz";
  }

  function renderLetterControls(){
    const groups = new Map();
    ALL_ITEMS.forEach(item => {
      const groupKey = itemInitial(item) + "::" + item.kategori;
      if (!groups.has(groupKey)) groups.set(groupKey, []);
      groups.get(groupKey).push(item);
    });

    selectionByLetter.innerHTML = "";
    [...groups.entries()].sort(([first], [second]) => first.localeCompare(second, "sv")).forEach(([groupKey, items]) => {
      const [letter, category] = groupKey.split("::");
      const enabled = items.every(item => selectedKeys.has(itemKey(item)));
      const button = document.createElement("button");
      button.type = "button";
      button.className = "letter-selection" + (enabled ? " active" : "");
      button.dataset.letter = letter;
      button.dataset.category = category;
      button.setAttribute("aria-pressed", String(enabled));
      button.textContent = letter + " " + category;
      selectionByLetter.appendChild(button);
    });
  }

  function updateSelectionUI(){
    updateSelectionStatus();
    renderLetterControls();
  }

  function setItemsSelected(items, enabled){
    items.forEach(item => {
      const key = itemKey(item);
      if (enabled) selectedKeys.add(key);
      else selectedKeys.delete(key);
    });
    saveSelectedKeys();
    updateSelectionUI();
    renderBrowse();
  }

  function renderBrowse(){
    const q = norm(searchInput.value.trim());
    let items = ALL_ITEMS.filter(it => browseCat === "alla" || it.kategori === browseCat);
    if (q){
      items = items.filter(it =>
        norm(it.term).includes(q) || norm(it.betydelse).includes(q)
      );
    }
    resultCount.textContent = items.length + " träffar";
    termGrid.innerHTML = "";
    if (items.length === 0){
      termGrid.innerHTML = '<p class="empty-note">Inga träffar. Prova ett annat sökord.</p>';
      return;
    }
    const frag = document.createDocumentFragment();
    items.forEach(it => {
      const card = document.createElement("div");
      const selected = selectedKeys.has(itemKey(it));
      card.className = "term-card " + it.kategori + (selected ? "" : " is-disabled");
      card.innerHTML = `
        <span class="kat">${it.kategori}</span>
        <span class="term">${escapeHTML(it.term)}</span>
        <span class="betydelse">${escapeHTML(it.betydelse)}</span>
        <label class="quiz-inclusion"><input type="checkbox" data-key="${escapeHTML(itemKey(it))}" ${selected ? "checked" : ""}> Med i quiz</label>
      `;
      frag.appendChild(card);
    });
    termGrid.appendChild(frag);
  }

  searchInput.addEventListener("input", renderBrowse);
  browseFilter.addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    browseFilter.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    browseCat = btn.dataset.cat;
    renderBrowse();
  });

  termGrid.addEventListener("change", e => {
    const input = e.target.closest(".quiz-inclusion input");
    if (!input) return;
    if (input.checked) selectedKeys.add(input.dataset.key);
    else selectedKeys.delete(input.dataset.key);
    saveSelectedKeys();
    updateSelectionUI();
    renderBrowse();
  });

  enableAllBtn.addEventListener("click", () => setItemsSelected(ALL_ITEMS, true));
  disableAllBtn.addEventListener("click", () => setItemsSelected(ALL_ITEMS, false));

  selectionByLetter.addEventListener("click", e => {
    const button = e.target.closest(".letter-selection");
    if (!button) return;
    const groupItems = ALL_ITEMS.filter(item =>
      item.kategori === button.dataset.category && itemInitial(item) === button.dataset.letter
    );
    setItemsSelected(groupItems, !groupItems.every(item => selectedKeys.has(itemKey(item))));
  });

  updateSelectionUI();
  renderBrowse();
})();

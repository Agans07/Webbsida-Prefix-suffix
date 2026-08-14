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
  let browseCat = "alla";

  function norm(str){ return str.toLowerCase(); }

  function escapeHTML(str){
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
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
      card.className = "term-card " + it.kategori;
      card.innerHTML = `
        <span class="kat">${it.kategori}</span>
        <span class="term">${escapeHTML(it.term)}</span>
        <span class="betydelse">${escapeHTML(it.betydelse)}</span>
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

  renderBrowse();
})();

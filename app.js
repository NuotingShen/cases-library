const ALL = [
  ...PAPERS.map(p => ({ ...p, source: "Research paper" })),
  ...CASES.map(p => ({ ...p, source: "Dataphys case" }))
];

/* ---------- configuration ---------- */
const CATEGORIES = ["Pure Overlay", "Overlay (Physical tokens on display)", "Next to a physical object", "Actuated + Overlay", "Actuated"];
const DIMENSIONS = [
  { key: "source", label: "Source", values: ["Research paper", "Dataphys case"] },
  { key: "category", label: "Category", values: CATEGORIES },
  { key: "integration", label: "How combined", values: ["Projection on top", "AR overlay", "Screen underneath", "Separate screen / app", "Built-in", "Sensing around"], multi: true },
  { key: "flow", label: "Information flow", values: ["Digital → Physical", "Physical → Digital", "Bidirectional"] },
  { key: "collaboration", label: "Collaboration", values: ["Individual", "Presentation", "Shared", "Collaboration"] }
];

/* Colour = does the digital part move the physical object? (worked out from the category, so no "role" field is needed)
   static object + digital display → blue · actuated + display → purple · actuated only → orange */
const GROUP_OF = {
  "Pure Overlay": "Display",
  "Overlay (Physical tokens on display)": "Display",
  "Next to a physical object": "Display",
  "Actuated + Overlay": "Actuate + Display",
  "Actuated": "Actuate"
};
const GROUP_COLOR = { "Display": "var(--display)", "Actuate + Display": "var(--both)", "Actuate": "var(--actuate)" };
const groupOf = p => GROUP_OF[p.category] || "Display";
const colorOf = p => GROUP_COLOR[groupOf(p)];

const state = { q: "", filters: Object.fromEntries(DIMENSIONS.map(d => [d.key, new Set()])) };

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const valuesOf = (p, key) => Array.isArray(p[key]) ? p[key] : (p[key] == null ? [] : [p[key]]);

function placeholder(p) {
  const group = groupOf(p);
  const color = { "Display": "#3c7fa6", "Actuate + Display": "#7a5aa6", "Actuate": "#c2643a" }[group] || "#888";
  let glyph;
  if (group === "Display") {
    glyph = `<rect x="110" y="95" width="100" height="60" rx="6" fill="#fff" opacity=".9"/>
             <rect x="95" y="70" width="130" height="40" rx="6" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 5" opacity=".8"/>`;
  } else if (group === "Actuate") {
    glyph = [0, 1, 2, 3, 4].map(i => { const h = [30, 55, 40, 70, 50][i];
      return `<rect x="${102 + i * 24}" y="${150 - h}" width="16" height="${h}" rx="3" fill="#fff" opacity=".9"/>`; }).join("") +
      `<path d="M112 72 l0 -14 m-6 6 l6 -6 l6 6" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>`;
  } else {
    glyph = [0, 1, 2, 3, 4].map(i => { const h = [30, 55, 40, 70, 50][i];
      return `<rect x="${102 + i * 24}" y="${150 - h}" width="16" height="${h}" rx="3" fill="#fff" opacity=".9"/>`; }).join("") +
      `<rect x="92" y="62" width="136" height="96" rx="6" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 5" opacity=".8"/>`;
  }
  return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder for ${esc(p.title)}">
    <rect width="320" height="200" fill="${color}"/>
    <rect width="320" height="200" fill="url(#g${p.id})"/>
    <defs><linearGradient id="g${p.id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".15"/><stop offset="1" stop-color="#000" stop-opacity=".15"/></linearGradient></defs>
    ${glyph}
    <text x="16" y="186" fill="#fff" font-size="13" font-family="sans-serif" opacity=".9">${esc(p.year)}</text>
  </svg>`;
}

function imageHTML(p) {
  const src = p.image || `images/${p.id}.jpg`;
  return `<img src="${esc(src)}" alt="${esc(p.title)}" loading="lazy" data-id="${esc(p.id)}">`;
}
document.addEventListener("error", e => {
  const img = e.target;
  if (img.tagName === "IMG" && img.dataset.id) {
    const p = ALL.find(x => x.id === img.dataset.id);
    if (p) img.outerHTML = placeholder(p);
  }
}, true);

/* ---------- filtering ---------- */
function matches(p, skipKey) {
  const q = state.q.trim().toLowerCase();
  if (q) {
    const hay = [p.title, p.authors, p.category, p.physical, p.digital, p.combination, valuesOf(p, "integration").join(" "), p.notes].join(" ").toLowerCase();
    if (!hay.includes(q)) return false;
  }
  for (const d of DIMENSIONS) {
    if (d.key === skipKey) continue;
    const sel = state.filters[d.key];
    if (sel.size && !valuesOf(p, d.key).some(v => sel.has(v))) return false;
  }
  return true;
}
const filtered = () => ALL.filter(p => matches(p)).sort((a, b) => b.year - a.year); // newest first

/* ---------- rendering ---------- */
function renderFilters() {
  $("#filters").innerHTML = DIMENSIONS.map(d => {
    const pool = ALL.filter(p => matches(p, d.key));
    const chips = d.values.map(v => {
      const n = pool.filter(p => valuesOf(p, d.key).includes(v)).length;
      const on = state.filters[d.key].has(v);
      return `<button class="chip" aria-pressed="${on}" data-key="${d.key}" data-val="${esc(v)}">${esc(v)}<span class="n">${n}</span></button>`;
    }).join("");
    return `<div class="fgroup"><span class="label">${d.label}</span>${chips}</div>`;
  }).join("");
}

function tagsHTML(p) {
  return `<span class="tag role" style="background:${colorOf(p)}">${esc(p.category)}</span>` +
    valuesOf(p, "integration").map(s => `<span class="tag">${esc(s)}</span>`).join("") +
    `<span class="tag">${esc(p.flow)}</span>` +
    `<span class="tag">${esc(p.collaboration)}</span>` +
    `<span class="tag">${esc(p.source)}</span>`;
}

function renderCards(list) {
  if (!list.length) return `<div class="empty-state">No cases match these filters.</div>`;
  return `<div class="grid">` + list.map(p => `
    <article class="card" tabindex="0" data-open="${esc(p.id)}">
      <div class="thumb">${imageHTML(p)}</div>
      <div class="rolebar" style="background:${colorOf(p)}"></div>
      <div class="body">
        <div class="title">${esc(p.title)}</div>
        <div class="meta">${esc([p.authors, p.year].filter(Boolean).join(" · "))}</div>
        <div class="combo">${esc(p.combination)}</div>
        <div class="tags">${tagsHTML(p)}</div>
      </div>
    </article>`).join("") + `</div>`;
}

function render() {
  renderFilters();
  const list = filtered();
  const active = DIMENSIONS.reduce((n, d) => n + state.filters[d.key].size, 0) + (state.q ? 1 : 0);
  $("#status").innerHTML = `<span>${list.length} of ${ALL.length} cases</span>` + (active ? `<a id="clear">Clear filters</a>` : "");
  $("#view").innerHTML = renderCards(list);
}

function openDetail(id) {
  const p = ALL.find(x => x.id === id);
  if (!p) return;
  const rows = [
    ["Authors · Year", [p.authors, p.year].filter(Boolean).join(" · ")],
    ["Source", p.source],
    ["Category", p.category],
    ["Physicalization", p.physical],
    ["Digital", p.digital],
    ["How combined", p.combination],
    ["Integration", valuesOf(p, "integration").join(", ")],
    ["Information flow", p.flow],
    ["Collaboration", p.collaboration],
    ["Object encodes data", p.encodesData],
    ["Notes", p.notes],
    ["Link", p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.url)}</a>` : ""]
  ].filter(([, v]) => v);
  const d = $("#detail");
  d.innerHTML = `<div class="dhead"><h2 id="dtitle">${esc(p.title)}</h2><button class="close" aria-label="Close">×</button></div>
    <div class="dimg">${imageHTML(p)}</div>
    <dl class="fields">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${k === "Link" ? v : esc(v)}</dd>`).join("")}</dl>`;
  d.showModal();
}

/* ---------- events ---------- */
document.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (chip) {
    const set = state.filters[chip.dataset.key];
    set.has(chip.dataset.val) ? set.delete(chip.dataset.val) : set.add(chip.dataset.val);
    return render();
  }
  if (e.target.id === "clear") {
    DIMENSIONS.forEach(d => state.filters[d.key].clear());
    state.q = ""; $("#search").value = "";
    return render();
  }
  const opener = e.target.closest("[data-open]");
  if (opener) return openDetail(opener.dataset.open);
  if (e.target.closest(".close") || e.target === $("#detail")) $("#detail").close();
});
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.matches(".card")) openDetail(e.target.dataset.open);
});
$("#search").addEventListener("input", e => { state.q = e.target.value; render(); });
/* Only the card view is used: remove the old view (Cards / Design space) and sort (Newest / Oldest) buttons if index.html still has them */
function removeControls(ids) {
  const els = ids.map(id => document.getElementById(id)).filter(Boolean);
  if (!els.length) return;
  const parent = els[0].parentElement;
  const onlyThese = parent && els.every(el => el.parentElement === parent) &&
    [...parent.querySelectorAll("button, a, input, select")].every(el => els.includes(el));
  if (onlyThese && parent.id !== "view" && parent !== document.body) parent.remove();
  else els.forEach(el => el.remove());
}
removeControls(["viewCards", "viewMatrix"]);
removeControls(["sortNew", "sortOld"]);

$("#themeBtn").onclick = () => {
  const root = document.documentElement;
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
};

render();

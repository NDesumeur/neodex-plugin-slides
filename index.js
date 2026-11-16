// NeoSlides : ton appli d'origine (HTML et code inchangés), livrée en plugin.
// Ses données sont dans le dossier du plugin, que NeoDex sauvegarde (synchro cloud et sauvegardes) ; à la première ouverture elle reprend ce que tu avais dans NeoDex.
// Elle tourne dans le bac à sable de NeoDex, avec ses outils d'interface (ctx.host) et seulement les autorisations de son plugin.json.
const HTML = "";
/*CSS-MOVED*/ const CSS = `.ofMenu .tbtn{justify-content:flex-start;font:14px var(--text);letter-spacing:0}
.ofDropM .tbtn{justify-content:flex-start;font:14px var(--text);letter-spacing:0}
.ofApp{display:flex;background:var(--bg0)}
.ofSide{width:clamp(200px,14vw,290px);flex:none;display:flex;flex-direction:column;gap:10px;padding:18px 14px;border-right:3px solid var(--line);background:rgba(var(--d8),.6);overflow:hidden}
.ofSide .row{gap:8px}
.ofSide .btn{flex:1;padding:9px 6px;font-size:11px}
.ofSearch{padding:7px 10px;font-size:14px}
.ofList{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:2px;margin:0 -6px;padding:0 6px}
.ofItem{all:unset;cursor:var(--cp,pointer);display:flex;flex-direction:column;gap:2px;padding:8px 10px;color:var(--lilac)}
.ofItem .n{color:#fff;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ofItem .hint{font-size:14px}
.ofItem:hover{background:rgba(255,255,255,.04)}
.ofItem.on{background:rgba(var(--mgr),.18);box-shadow:inset 3px 0 0 var(--magenta)}
.ofBody{flex:1;min-width:0;display:flex;flex-direction:column}
.ofEmpty{flex:1;display:grid;place-items:center;padding:30px}
.ofEmptyIn{max-width:520px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px}
.ofEmptyIn img{width:96px;height:96px;image-rendering:pixelated}
.ofEmptyIn h2{font:16px var(--title);color:#fff;margin:0}
.ofEmptyIn p{font-size:16px;line-height:1.5;margin:0}
.ofMain{flex:1;min-height:0;display:flex;flex-direction:column}
.f.ofTitle{margin:12px 16px 0;width:auto;align-self:stretch;font-size:18px;padding:8px 12px;background:transparent;box-shadow:none}
.ofTitle:focus{background:var(--field)}
.ofBar{display:flex;flex-wrap:wrap;gap:3px;align-items:center;padding:8px 14px;border-bottom:3px solid var(--line)}
.ofTb{all:unset;cursor:var(--cp,pointer);min-width:30px;height:30px;padding:0 7px;display:grid;place-items:center;color:var(--lilac);font-size:15px;background:var(--btn)}
.ofTb:hover{background:var(--btnh);color:#fff}
.ofTb.on{background:rgba(var(--mgr),.4);color:#fff}
.ofTb.b{font-weight:bold}
.ofTb.i{font-style:italic}
.ofTb.u{text-decoration:underline}
.ofTb.s{text-decoration:line-through}
.ofSep{width:2px;height:22px;background:var(--line);margin:0 4px}
.ofSel{height:30px;padding:0 6px;font-size:14px}
.ofColor{width:30px;height:30px;padding:0;border:0;background:none;cursor:var(--cp,pointer)}
.ofDrop{position:relative}
.ofDrop .ofTb{font-size:14px}
.ofDropM{position:absolute;top:34px;left:0;z-index:20;--fill:var(--win);--c:var(--line2);display:none;flex-direction:column;min-width:210px;padding:6px;filter:drop-shadow(0 4px 0 var(--out))}
.ofDrop.on .ofDropM{display:flex}
.ofDropM .tbtn{padding:8px 10px}
.ofDropM .tbtn:hover{background:rgba(var(--mgr),.16);color:#fff}
.ofStatus{padding:7px 16px;font-size:15px;color:var(--muted);border-top:3px solid var(--line)}
.slRow{flex:1;min-height:0;display:flex}
.slThumbs{width:200px;flex:none;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px;border-right:3px solid var(--line)}
.slThumb{position:relative;cursor:var(--cp,pointer);display:flex;gap:6px}
.slThumb .n{font-size:14px;color:var(--muted);width:20px}
.slThumb.on .slMini{box-shadow:0 0 0 3px var(--magenta)}
.slMini{position:relative;width:960px;height:540px;zoom:.17;overflow:hidden;pointer-events:none;box-shadow:0 0 0 6px var(--line);flex:none}
.slCenter{flex:1;min-width:0;display:flex;flex-direction:column}
.slStageW{flex:1;min-height:0;position:relative;overflow:hidden;background:#1a1426;padding:10px}
.slStage{position:relative;width:960px;height:540px;overflow:hidden;transform-origin:0 0;box-shadow:0 6px 0 rgba(0,0,0,.4);user-select:none}
.slEl{position:absolute;overflow:hidden;line-height:1.25;word-wrap:break-word;cursor:move}
.slEl.sel{outline:2px dashed #ff5ad9;outline-offset:2px}
.slEl[contenteditable=true]{cursor:text;outline:2px solid #ff5ad9;user-select:text}
.slEl img{width:100%;height:100%;object-fit:contain;display:block}
.slEl ul{margin:0;padding-left:1.2em}
.slEl p{margin:0}
.slH{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;background:#fff;box-shadow:0 0 0 2px #e01ec8;z-index:5}
.slH.nw,.slH.se{cursor:nwse-resize}
.slH.ne,.slH.sw{cursor:nesw-resize}
.slNotes{width:auto;align-self:stretch;box-sizing:border-box;height:clamp(64px,9vh,120px);margin:8px 10px;resize:vertical;font-size:15px}
@media (max-width:1200px){.slThumbs{width:150px;padding:10px 8px}.slMini{zoom:.12}}
@media (min-width:1700px){.slThumbs{width:250px}.slMini{zoom:.22}}
.slShow{position:fixed;inset:0;z-index:60;background:#000;cursor:none}
.slShowStage{position:absolute;left:50%;top:50%;transform-origin:center;box-shadow:none}
.slShowStage .slEl{cursor:none}
.slShowN{position:fixed;right:18px;bottom:12px;color:rgba(255,255,255,.4);font:13px var(--title)}
.slShowStage.tr-fade{animation:slFade .5s ease}
.slShowStage.tr-zoom{animation:slZoom .45s ease}
.slShowStage.tr-slide.fwd{animation:slSlide .45s ease}
.slShowStage.tr-slide.back{animation:slSlideB .45s ease}
@keyframes slFade{from{opacity:0}}
@keyframes slZoom{from{opacity:0;scale:.85}}
@keyframes slSlide{from{translate:30% 0;opacity:0}}
@keyframes slSlideB{from{translate:-30% 0;opacity:0}}
`;  // le style de ce plugin (il utilise les variables du thème de NeoDex)
export default async function (ctx) {
  const view = ctx.view;
  if (!ctx.host) { view.textContent = "Ce plugin doit être approuvé par NeoDex pour s'ouvrir."; return; }
  const host = ctx.host, { el, toast, sfx, ask, newTab, pixIcon, PIX, WX } = host;
  const nbConfirm = host.confirm;  // la boîte de confirmation de NeoDex, à la place de celle de Windows
  const folder = ctx.folder, legacy = ctx.legacy || {};
  ctx.host.addStyle(CSS);
  view.innerHTML = HTML;
  const $ = id => id === "slidesApp" ? view : (view.querySelector('#' + id) || document.getElementById(id));  // les identifiants de ta vue d'abord, puis ceux de la page (fenêtres, menus)
  const doc = async n => { try { return await folder.read(n); } catch { return null; } };
  const __icon = () => ctx.icon;  // l'icône de ce plugin
  const __picks = { "office": d => ({...d, files: (d.files || []).filter(f => f.kind === 'slides')}) };
  const __storeGet = async n => {
    let d = await doc(n);
    if (d == null) { try { d = await neo.storeGet(n); } catch { d = null; } if (d && __picks[n]) d = __picks[n](d); if (d != null) await folder.write(n, d); }  // première ouverture : tu retrouves ce que tu avais
    return d;
  };
  const __storeSet = async (n, d) => { await folder.write(n, d); return true; };
  // ---- ton code d'origine ----
/* Office suite (NeoDocs, NeoSheets, NeoSlides): every file lives in office.json = {files: [{id, kind: 'doc' | 'sheet' | 'slides', name, created, t, data}]},
   synced between PCs and in the backups like the other data (more-main.js). This file holds what the three apps share:
   the store, and the page of each app (list of its files on the left: new, open a Word / Excel file, rename, duplicate, delete). */
let office = null, officeTimer = null;
const ofId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const officeReady = () => office ? Promise.resolve(office) : __storeGet('office').then(d => office = Array.isArray(d?.files) ? d : {files: []});
function officeSave() {
  clearTimeout(officeTimer);
  officeTimer = setTimeout(() => { officeTimer = null; __storeSet('office', office).catch(e => toast('Sauvegarde impossible : ' + e.message, true)); }, 600);
}
const officeFlush = () => { if (officeTimer) { clearTimeout(officeTimer); officeTimer = null; return __storeSet('office', office); } };
addEventListener('pagehide', () => { if (officeTimer) __storeSet('office', office); });
const OF_KIND = {};  // kind -> app ({key, name, newData(), open(file), close(), ui})
// another PC changed office.json: take it (unless a save of this PC is waiting), the file on screen is reopened
window.neo?.onDataChanged(async name => {
  if (name !== 'office' || officeTimer) return;
  const d = await __storeGet('office');
  if (!Array.isArray(d?.files) || JSON.stringify(d) === JSON.stringify(office)) return;
  office = d;
  for (const k of Object.values(OF_KIND)) if (k.ui) { ofList(k); const f = office.files.find(f => f.id === k.cur?.id); if (f && f.t !== k.cur.t) k.open(f); else if (!f && k.cur) ofPick(k, null); }
  toast('Mis à jour depuis un autre PC');
});
const ofWhen = t => { const d = new Date(t), now = new Date(); return d.toDateString() === now.toDateString() ? d.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'}) : d.toLocaleDateString('fr-FR', {day: 'numeric', month: 'short', year: d.getFullYear() === now.getFullYear() ? undefined : 'numeric'}); };
const ofFiles = k => office.files.filter(f => f.kind === k.kind).sort((a, b) => b.t - a.t);
function ofTouch(k, file) { file.t = Date.now(); officeSave(); ofList(k); }
function ofList(k) {
  const q = k.ui.search.value.trim().toLowerCase(), list = ofFiles(k).filter(f => !q || f.name.toLowerCase().includes(q));
  k.ui.list.replaceChildren(...(list.length ? list.map(f => {
    const b = el('button', 'ofItem' + (f.id === k.cur?.id ? ' on' : ''));
    b.append(el('span', 'n', f.name), el('span', 'hint', ofWhen(f.t)));
    b.onclick = () => ofPick(k, f);
    b.oncontextmenu = e => { e.preventDefault(); ofPick(k, f); ofMenu(k, f, e); };
    return b;
  }) : [el('div', 'hint', q ? 'Aucun fichier ne correspond.' : 'Aucun fichier pour l\'instant. Crée-en un ou ouvre un fichier de ton PC.')]));
}
function ofPick(k, f) {
  k.cur = f; ofList(k);
  k.ui.empty.style.display = f ? 'none' : ''; k.ui.main.style.display = f ? '' : 'none';
  if (f) k.open(f); else k.close?.();
}
async function ofNew(k, name, data) {
  await officeReady();
  const f = {id: ofId(), kind: k.kind, name: name || k.newName + ' ' + (ofFiles(k).length + 1), created: Date.now(), t: Date.now(), data: data ?? k.newData()};
  office.files.push(f); officeSave(); ofPick(k, f); sfx('open');
  return f;
}
async function ofImport(k, test) {
  try {
    const r = await window.neo.officeImport(k.kind, test); if (!r) return null;
    const f = await ofNew(k, r.name, k.fromImport(r)); toast('« ' + r.name + ' » ouvert dans ' + k.name); return f;
  } catch (e) { toast('Ouverture impossible : ' + e.message.replace(/^.*Error: /, ''), true); return null; }
}
async function ofExport(k, format, test) {
  const f = k.cur; if (!f) return '';
  try {
    const p = await window.neo.officeExport({kind: k.kind, name: f.name, format, ...await k.toExport(f, format)}, test);
    if (p) toast('Exporté : ' + p.split(/[\\/]/).pop());
    return p;
  } catch (e) { toast('Export impossible : ' + e.message.replace(/^.*Error: /, ''), true); return ''; }
}
function ofMenu(k, f, e) {
  document.querySelector('.ofMenu')?.remove();
  const m = el('div', 'tbPop ofMenu px on'), item = (label, fn) => { const b = el('button', 'tbtn tbFull', label); b.onclick = () => { m.remove(); fn(); }; m.append(b); };
  item('Renommer', async () => { const n = await ask('Nouveau nom', f.name); if (n?.trim()) { f.name = n.trim(); ofTouch(k, f); k.ui.title && (k.ui.title.value = f.name); } });
  item('Dupliquer', () => ofNew(k, f.name + ' (copie)', structuredClone(f.data)));
  item('Supprimer', async () => { if (!await nbConfirm('Supprimer « ' + f.name + ' » ? Ce sera aussi le cas sur tes autres PC synchronisés.')) return; office.files = office.files.filter(x => x !== f); officeSave(); ofPick(k, null); });
  m.style.left = Math.min(e.clientX, innerWidth - 240) + 'px'; m.style.top = Math.min(e.clientY, document.body.clientHeight - 160) + 'px'; m.style.right = 'auto';
  document.body.append(m);
  setTimeout(() => document.addEventListener('pointerdown', function off(ev) { if (!m.contains(ev.target)) { m.remove(); document.removeEventListener('pointerdown', off, true); } }, true));
}
// the page of an app: k = {key, kind, name, newName, newData, open, mount(main), fromImport, toExport, exports: [[format, label]]}
function ofRegister(k) {
  OF_KIND[k.kind] = k;
  const v = $(k.view), side = el('div', 'ofSide'), head = el('div', 'agHead'), newB = el('button', 'btn main px', '+ NOUVEAU'), openB = el('button', 'btn px', 'OUVRIR…');
  const search = el('input', 'f ofSearch'), list = el('div', 'ofList'), body = el('div', 'ofBody'), empty = el('div', 'ofEmpty'), main = el('div', 'ofMain');
  search.placeholder = 'Rechercher'; openB.title = k.openHint; newB.title = 'Nouveau fichier (enregistré tout seul et synchronisé)';
  head.append(el('span', 'label', k.name));
  const btns = el('div', 'row'); btns.append(newB, openB);
  side.append(head, btns, search, list);
  const big = el('div', 'ofEmptyIn');
  big.append(Object.assign(el('img'), {src: k.icon}), el('h2', '', k.name), el('p', 'hint', k.intro));
  const b2 = el('div', 'row'); const n2 = el('button', 'btn main px', '+ NOUVEAU'), o2 = el('button', 'btn px', 'OUVRIR UN FICHIER…'); b2.append(n2, o2); big.append(b2); empty.append(big);
  main.style.display = 'none';
  body.append(empty, main); v.replaceChildren(side, body); v.classList.add('ofApp');
  k.ui = {search, list, empty, main};
  newB.onclick = n2.onclick = () => ofNew(k);
  openB.onclick = o2.onclick = () => ofImport(k);
  search.oninput = () => ofList(k);
  k.mount(main);
}
async function ofOpen(kind) {
  const k = OF_KIND[kind]; await officeReady();
  ofList(k);
  if (!k.cur) { const f = ofFiles(k)[0]; if (f) ofPick(k, f); else ofPick(k, null); }
}
// a drop-down of buttons (used by the toolbars): [label, f] items
function ofDrop(label, items, title) {
  const w = el('div', 'ofDrop'), b = el('button', 'ofTb', label + ' ▾'), m = el('div', 'ofDropM px');
  b.title = title || '';
  for (const [l, f] of items) { const i = el('button', 'tbtn tbFull', l); i.onmousedown = e => e.preventDefault(); i.onclick = () => { w.classList.remove('on'); f(); }; m.append(i); }
  b.onmousedown = e => e.preventDefault();
  b.onclick = () => { const on = !w.classList.contains('on'); document.querySelectorAll('.ofDrop.on').forEach(d => d.classList.remove('on')); w.classList.toggle('on', on); };
  w.append(b, m); return w;
}
document.addEventListener('pointerdown', e => { if (!e.target.closest('.ofDrop')) document.querySelectorAll('.ofDrop.on').forEach(d => d.classList.remove('on')); }, true);
const ofBtn = (label, title, f, cls = '') => { const b = el('button', 'ofTb ' + cls, label); b.title = title; b.onmousedown = e => e.preventDefault(); b.onclick = f; return b; };  // mousedown: the text selection stays
const ofEsc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'})[c]);

/* NeoSlides, the presentations of the office suite: 16:9 slides with text boxes, images and shapes moved and resized with the mouse, themes, layouts,
   backgrounds, transitions, speaker notes, a full-window presentation mode (arrows, space, Échap), PDF export and .neoslides files.
   A presentation is {theme, slides: [{id, bg, tr, notes, els: [{id, t: 'text' | 'img' | 'shape', x, y, w, h, html, src, shape, fill, size, color, al, role}]}]}
   in office.json (office.js); positions are in a 960 x 540 frame. */
const SL_W = 960, SL_H = 540;
const SL_THEMES = {
  neo: {name: 'Néon', bg: 'linear-gradient(135deg,#1a0838,#0b031c)', text: '#f3eaff', title: '#ff5ad9', accent: '#8a5cf0', font: "'Pixelify Sans',sans-serif", tfont: "'Press Start 2P',monospace", tscale: .62},
  blanc: {name: 'Blanc', bg: '#ffffff', text: '#222233', title: '#5b2bc0', accent: '#e01ec8', font: 'Calibri,"Segoe UI",sans-serif', tfont: '"Segoe UI",sans-serif', tscale: 1},
  nuit: {name: 'Nuit', bg: 'linear-gradient(160deg,#0f1b3d,#050914)', text: '#dfe8ff', title: '#7fe0ee', accent: '#ffd07a', font: '"Segoe UI",sans-serif', tfont: '"Segoe UI",sans-serif', tscale: 1},
  aube: {name: 'Aube', bg: 'linear-gradient(135deg,#ff9a62,#e0407a)', text: '#fffaf5', title: '#ffffff', accent: '#3a0a30', font: '"Trebuchet MS",sans-serif', tfont: '"Trebuchet MS",sans-serif', tscale: 1},
  ocean: {name: 'Océan', bg: 'linear-gradient(135deg,#0d8a8a,#103a6a)', text: '#eafcff', title: '#ffffff', accent: '#ffd07a', font: 'Verdana,sans-serif', tfont: 'Georgia,serif', tscale: 1},
  foret: {name: 'Forêt', bg: 'linear-gradient(150deg,#124a35,#06170f)', text: '#e6fff0', title: '#8affb0', accent: '#ffd07a', font: '"Trebuchet MS",sans-serif', tfont: 'Georgia,serif', tscale: 1},
  rose: {name: 'Rose', bg: '#fff0f6', text: '#4a2040', title: '#d6247f', accent: '#7a3ad6', font: '"Segoe UI",sans-serif', tfont: '"Segoe UI",sans-serif', tscale: 1},
  mono: {name: 'Mono', bg: '#111111', text: '#eeeeee', title: '#ffffff', accent: '#f5c518', font: 'Consolas,monospace', tfont: 'Consolas,monospace', tscale: .9},
  ardoise: {name: 'Ardoise', bg: 'linear-gradient(160deg,#323a48,#222831)', text: '#e5e9f0', title: '#88c0d0', accent: '#ebcb8b', font: '"Segoe UI",sans-serif', tfont: '"Segoe UI",sans-serif', tscale: 1},
  papier: {name: 'Papier', bg: '#f5efe1', text: '#3a3025', title: '#8a3a1a', accent: '#2a6a5a', font: 'Georgia,serif', tfont: 'Georgia,serif', tscale: 1},
};
const slElId = () => Math.random().toString(36).slice(2, 9);
const slText = (x, y, w, h, html, size, role, al = 'left') => ({id: slElId(), t: 'text', x, y, w, h, html, size, role, al});
const SL_LAYOUTS = {
  title: ['Titre', () => [slText(80, 170, 800, 120, 'Titre de la présentation', 56, 'title', 'center'), slText(160, 310, 640, 70, 'Sous-titre', 26, 'sub', 'center')]],
  content: ['Titre et texte', () => [slText(60, 40, 840, 90, 'Titre', 40, 'title'), slText(60, 150, 840, 340, '<ul><li>Premier point</li><li>Deuxième point</li><li>Troisième point</li></ul>', 26)]],
  two: ['Deux colonnes', () => [slText(60, 40, 840, 90, 'Titre', 40, 'title'), slText(60, 150, 400, 340, '<ul><li>À gauche</li></ul>', 24), slText(500, 150, 400, 340, '<ul><li>À droite</li></ul>', 24)]],
  image: ['Image et texte', () => [slText(60, 40, 840, 90, 'Titre', 40, 'title'), slText(60, 150, 400, 340, '<ul><li>Premier point</li><li>Deuxième point</li></ul>', 24), {id: slElId(), t: 'shape', shape: 'round', x: 500, y: 150, w: 400, h: 340}]],
  quote: ['Citation', () => [slText(100, 130, 760, 230, '« Une phrase qui marque. »', 44, 'title', 'center'), slText(260, 390, 440, 50, '— Auteur', 24, 'sub', 'center')]],
  stats: ['Chiffres clés', () => [slText(60, 40, 840, 90, 'En chiffres', 40, 'title'), ...[0, 1, 2].flatMap(i => [slText(60 + i * 290, 170, 260, 110, ['42', '1 200', '98 %'][i], 72, 'title', 'center'), slText(60 + i * 290, 300, 260, 80, ['jours', 'utilisateurs', 'satisfaits'][i], 26, 'sub', 'center')])]],
  plan: ['Plan', () => [slText(60, 40, 840, 90, 'Plan', 40, 'title'), slText(60, 150, 840, 340, '<ol><li>Introduction</li><li>Développement</li><li>Conclusion</li></ol>', 30)]],
  merci: ['Merci', () => [slText(80, 170, 800, 130, 'Merci !', 72, 'title', 'center'), slText(160, 320, 640, 70, 'Des questions ?', 28, 'sub', 'center')]],
  section: ['Section', () => [slText(80, 210, 800, 120, 'Nouvelle partie', 48, 'title', 'center')]],
  blank: ['Vide', () => []],
};
const sl = {kind: 'slides', key: 'neodex:slides', view: 'slidesApp', name: 'NeoSlides', newName: 'Présentation', openHint: 'Ouvrir une présentation NeoSlides (.neoslides)',
  intro: 'Présentations : diapositives avec textes, images et formes à placer à la souris, thèmes, transitions, notes et mode présentation plein écran. Enregistrées toutes seules et synchronisées entre tes PC ; export en PDF et en PowerPoint.',
  newData: () => ({theme: 'neo', slides: [{id: slElId(), bg: null, tr: 'fade', notes: '', els: SL_LAYOUTS.title[1]()}]}),
  fromImport: r => r.slides,
  toExport: async (f, format) => format === 'neoslides' ? {slides: f.data} : format === 'pptx' ? {base64: slxB64(await slxBuild(f.data))} : {html: slPrintHtml(f.data)},
  idx: 0, selId: null,
};
const slTheme = d => SL_THEMES[d.theme] || SL_THEMES.neo;
// one slide drawn in a 960 x 540 box (stage, thumbnails, presentation and PDF use the same markup)
function slDraw(slide, d, box, edit) {
  const th = slTheme(d);
  box.style.background = slide.bg || th.bg; box.style.color = th.text; box.style.fontFamily = th.font;
  box.replaceChildren(...slide.els.map(e => {
    const n = el('div', 'slEl sl-' + e.t + (e.role ? ' sl-' + e.role : '')); n.dataset.id = e.id;
    Object.assign(n.style, {left: e.x + 'px', top: e.y + 'px', width: e.w + 'px', height: e.h + 'px'});
    if (e.t === 'text') {
      n.innerHTML = e.html; n.style.fontSize = (e.role === 'title' ? e.size * th.tscale : e.size) + 'px'; n.style.textAlign = e.al || 'left';
      n.style.color = e.color || (e.role === 'title' ? th.title : th.text); if (e.role === 'title') n.style.fontFamily = th.tfont;
    } else if (e.t === 'img') { const i = el('img'); i.src = e.src; i.draggable = false; n.append(i); }
    else {
      const fill = e.fill || th.accent, s = e.shape;
      n.innerHTML = `<svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">${s === 'ellipse' ? `<ellipse cx="50" cy="50" rx="50" ry="50" fill="${fill}"/>`
        : s === 'tri' ? `<polygon points="50,0 100,100 0,100" fill="${fill}"/>` : s === 'arrow' ? `<polygon points="0,35 65,35 65,10 100,50 65,90 65,65 0,65" fill="${fill}"/>`
        : s === 'star' ? `<polygon points="50,2 61,36 98,36 68,58 79,94 50,72 21,94 32,58 2,36 39,36" fill="${fill}"/>` : s === 'heart' ? `<path d="M50 92C8 62 0 36 20 18c15-12 30 0 30 12 0-12 15-24 30-12 20 18 12 44-30 74z" fill="${fill}"/>` : s === 'diamond' ? `<polygon points="50,0 100,50 50,100 0,50" fill="${fill}"/>` : s === 'bubble' ? `<path d="M8 4h84a6 6 0 0 1 6 6v58a6 6 0 0 1-6 6H40L18 96V74H8a6 6 0 0 1-6-6V10A6 6 0 0 1 8 4z" fill="${fill}"/>` : s === 'line' ? `<rect x="0" y="45" width="100" height="10" fill="${fill}"/>` : `<rect width="100" height="100" rx="${s === 'round' ? 12 : 0}" fill="${fill}"/>`}</svg>`;
    }
    if (edit && e.id === sl.selId) n.classList.add('sel');
    return n;
  }));
}
function slPrintHtml(d) {
  const pages = d.slides.map(s => { const b = el('div', 'slide'); slDraw(s, d, b, false); return b.outerHTML; }).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Pixelify+Sans&display=swap');
@page{size:13.333in 7.5in;margin:0}body{margin:0}.slide{position:relative;width:${SL_W}px;height:${SL_H}px;overflow:hidden;zoom:1.3333;page-break-after:always;break-after:page}
.slEl{position:absolute;overflow:hidden;line-height:1.25;word-wrap:break-word}.slEl img{width:100%;height:100%;object-fit:contain}.slEl ul{margin:0;padding-left:1.2em}.slEl p{margin:0}</style></head><body>${pages}</body></html>`;
}
// ---- export PowerPoint (.pptx) : les diapositives deviennent de vraies zones de texte, formes et images modifiables dans PowerPoint ----
// le .pptx est un zip (rangé sans compression) de fichiers XML ; positions : 1 px du cadre 960 × 540 = 12 700 EMU, une taille de 26 px = 26 pt
const SLX_EMU = 12700, slxX = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'})[c]);
const SLX_NS = 'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"';
const SLX_REL = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/', SLX_CT = 'application/vnd.openxmlformats-officedocument.';
const SLX_HEAD = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
const SLX_GRP = '<p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr>';
const SLX_SHAPES = {ellipse: 'ellipse', tri: 'triangle', arrow: 'rightArrow', star: 'star5', heart: 'heart', diamond: 'diamond', bubble: 'wedgeRoundRectCallout', round: 'roundRect'};
const slxColor = (() => { let g; return (c, def = '000000') => { g ||= document.createElement('canvas').getContext('2d'); g.fillStyle = '#' + def; g.fillStyle = c || '#' + def; const v = g.fillStyle;
  if (v[0] === '#') return v.slice(1).toUpperCase(); const m = v.match(/[\d.]+/g); return m ? m.slice(0, 3).map(n => (+n).toString(16).padStart(2, '0')).join('').toUpperCase() : def; }; })();
const slxFont = f => String(f || 'Calibri').split(',')[0].replace(/["']/g, '').trim();
function slxFill(bg) {  // un fond CSS (couleur ou dégradé linéaire) en remplissage PowerPoint
  const cols = String(bg || '').match(/#[0-9a-f]{3,8}\b|rgba?\([^)]*\)/gi) || [];
  if (/gradient/.test(bg) && cols.length > 1) {
    const deg = +((String(bg).match(/(-?[\d.]+)deg/) || [])[1] ?? 180), ang = Math.round(((deg - 90) % 360 + 360) % 360 * 60000);
    return `<a:gradFill rotWithShape="1"><a:gsLst>${cols.map((c, i) => `<a:gs pos="${Math.round(i / (cols.length - 1) * 100000)}"><a:srgbClr val="${slxColor(c)}"/></a:gs>`).join('')}</a:gsLst><a:lin ang="${ang}" scaled="0"/></a:gradFill>`;
  }
  return `<a:solidFill><a:srgbClr val="${slxColor(cols[0] || bg, 'FFFFFF')}"/></a:solidFill>`;
}
function slxParas(html, base) {  // le HTML d'une zone de texte en paragraphes : listes à puces ou numérotées, gras, italique, souligné, couleur, taille
  const box = document.createElement('div'); box.innerHTML = html; const paras = []; let cur = null;
  const para = (list) => { cur = {list, runs: []}; paras.push(cur); };
  const walk = (n, st, list) => {
    if (n.nodeType === 3) { if (!n.data.replace(/[\n\r\t]/g, '')) return; if (!cur) para(list); cur.runs.push({t: n.data.replace(/\s+/g, ' '), ...st}); return; }
    if (n.nodeType !== 1) return;
    const tag = n.nodeName, s = {...st};
    if (/^(B|STRONG)$/.test(tag) || +n.style.fontWeight >= 600 || n.style.fontWeight === 'bold') s.b = 1;
    if (/^(I|EM)$/.test(tag) || n.style.fontStyle === 'italic') s.i = 1;
    if (tag === 'U' || /underline/.test(n.style.textDecoration)) s.u = 1;
    if (n.style.color || n.getAttribute('color')) s.color = slxColor(n.style.color || n.getAttribute('color'));
    if (/px$/.test(n.style.fontSize)) s.size = parseFloat(n.style.fontSize); else if (/pt$/.test(n.style.fontSize)) s.size = parseFloat(n.style.fontSize) * 4 / 3;
    if (tag === 'BR') { if (!cur) para(list); cur.runs.push({br: 1}); return; }
    if (tag === 'UL' || tag === 'OL') { for (const c of n.children) if (c.nodeName === 'LI') { para(tag === 'UL' ? 'bu' : 'num'); for (const k of c.childNodes) walk(k, s, list); cur = null; } return; }
    const block = /^(P|DIV|H\d|LI|BLOCKQUOTE|PRE)$/.test(tag);
    if (block) { para(list); if (n.style.textAlign) cur.al = n.style.textAlign; }
    for (const k of n.childNodes) walk(k, s, list);
    if (block) cur = null;
  };
  for (const k of box.childNodes) walk(k, {}, null);
  if (!paras.length) para(null);
  const algn = a => ({center: 'ctr', right: 'r', justify: 'just'})[a] || 'l';
  const rpr = (r, tag = 'a:rPr') => `<${tag} lang="fr-FR" sz="${Math.round((r.size || base.size) * 100)}"${r.b ? ' b="1"' : ''}${r.i ? ' i="1"' : ''}${r.u ? ' u="sng"' : ''} dirty="0"><a:solidFill><a:srgbClr val="${r.color || base.color}"/></a:solidFill><a:latin typeface="${slxX(base.font)}"/></${tag}>`;
  return paras.map(p => {
    const bu = p.list === 'bu' ? '<a:buFont typeface="Arial"/><a:buChar char="•"/>' : p.list === 'num' ? '<a:buFont typeface="+mj-lt"/><a:buAutoNum type="arabicPeriod"/>' : '<a:buNone/>';
    const ind = p.list ? ` marL="${Math.round(base.size * 1.2 * SLX_EMU)}" indent="-${Math.round(base.size * 1.2 * SLX_EMU)}"` : '';
    const runs = p.runs.map(r => r.br ? `<a:br>${rpr(base)}</a:br>` : `<a:r>${rpr(r)}<a:t>${slxX(r.t)}</a:t></a:r>`).join('');
    return `<a:p><a:pPr algn="${algn(p.al || base.al)}"${ind}><a:lnSpc><a:spcPct val="105000"/></a:lnSpc>${bu}</a:pPr>${runs}${rpr(base, 'a:endParaRPr')}</a:p>`;
  }).join('');
}
async function slxImage(src) {  // PNG ou JPEG tels quels, le reste redessiné en PNG ; null si l'image ne se lit pas (lien bloqué…)
  try {
    const img = new Image(); img.src = src; await img.decode();
    const m = String(src).match(/^data:image\/(png|jpeg);base64,(.*)$/);
    if (m) return {ext: m[1], b64: m[2], w: img.naturalWidth, h: img.naturalHeight};
    const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight; c.getContext('2d').drawImage(img, 0, 0);
    return {ext: 'png', b64: c.toDataURL('image/png').split(',')[1], w: img.naturalWidth, h: img.naturalHeight};
  } catch { return null; }
}
const SLX_CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const slxCrc = u => { let c = 0xFFFFFFFF; for (let i = 0; i < u.length; i++) c = SLX_CRC[(c ^ u[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
function slxZip(files) {  // [[nom, Uint8Array]] → un zip sans compression
  const parts = [], central = []; let off = 0;
  for (const [name, data] of files) {
    const nm = new TextEncoder().encode(name), crc = slxCrc(data), h = new DataView(new ArrayBuffer(30));
    [[0, 0x04034b50, 4], [4, 20, 2], [6, 0x0800, 2], [8, 0, 2], [10, 0, 2], [12, 0x21, 2], [14, crc, 4], [18, data.length, 4], [22, data.length, 4], [26, nm.length, 2], [28, 0, 2]].forEach(([o, v, n]) => n === 4 ? h.setUint32(o, v, true) : h.setUint16(o, v, true));
    const c = new DataView(new ArrayBuffer(46));
    [[0, 0x02014b50, 4], [4, 20, 2], [6, 20, 2], [8, 0x0800, 2], [10, 0, 2], [12, 0, 2], [14, 0x21, 2], [16, crc, 4], [20, data.length, 4], [24, data.length, 4], [28, nm.length, 2], [30, 0, 2], [32, 0, 2], [34, 0, 2], [36, 0, 2], [38, 0, 4], [42, off, 4]].forEach(([o, v, n]) => n === 4 ? c.setUint32(o, v, true) : c.setUint16(o, v, true));
    parts.push(new Uint8Array(h.buffer), nm, data); central.push(new Uint8Array(c.buffer), nm); off += 30 + nm.length + data.length;
  }
  const size = central.reduce((a, u) => a + u.length, 0), e = new DataView(new ArrayBuffer(22));
  [[0, 0x06054b50, 4], [4, 0, 2], [6, 0, 2], [8, files.length, 2], [10, files.length, 2], [12, size, 4], [16, off, 4], [20, 0, 2]].forEach(([o, v, n]) => n === 4 ? e.setUint32(o, v, true) : e.setUint16(o, v, true));
  const all = [...parts, ...central, new Uint8Array(e.buffer)], out = new Uint8Array(all.reduce((a, u) => a + u.length, 0)); let p = 0; for (const u of all) { out.set(u, p); p += u.length; }
  return out;
}
async function slxBuild(d) {  // → les octets du .pptx
  const th = slTheme(d), enc = s => new TextEncoder().encode(SLX_HEAD + s), files = [], media = [], E = v => Math.round(v * SLX_EMU);
  const b64u = b => Uint8Array.from(atob(b), c => c.charCodeAt(0));
  const slides = [];
  for (const [si, s] of d.slides.entries()) {
    const rels = [`<Relationship Id="rId1" Type="${SLX_REL}slideLayout" Target="../slideLayouts/slideLayout1.xml"/>`]; let id = 2; const shapes = [];
    for (const e of s.els) {
      const xf = (x, y, w, h) => `<a:xfrm><a:off x="${E(x)}" y="${E(y)}"/><a:ext cx="${Math.max(1, E(w))}" cy="${Math.max(1, E(h))}"/></a:xfrm>`, n = id++;
      if (e.t === 'text') {
        const title = e.role === 'title', base = {size: title ? e.size * th.tscale : e.size, color: slxColor(e.color || (title ? th.title : th.text)), font: slxFont(title ? th.tfont : th.font), al: e.al || 'left'};
        shapes.push(`<p:sp><p:nvSpPr><p:cNvPr id="${n}" name="Texte ${n}"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr><p:spPr>${xf(e.x, e.y, e.w, e.h)}<a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/></p:spPr><p:txBody><a:bodyPr wrap="square" lIns="0" tIns="0" rIns="0" bIns="0" rtlCol="0" anchor="t"><a:noAutofit/></a:bodyPr><a:lstStyle/>${slxParas(e.html || '', base)}</p:txBody></p:sp>`);
      } else if (e.t === 'img') {
        const im = await slxImage(e.src); if (!im) continue;
        const k = media.length + 1, name = `image${k}.${im.ext}`; media.push([name, b64u(im.b64)]); rels.push(`<Relationship Id="rId${n}" Type="${SLX_REL}image" Target="../media/${name}"/>`);
        const r = Math.min(e.w / im.w, e.h / im.h) || 1, w = im.w * r, h = im.h * r;  // « contain », comme à l'écran
        shapes.push(`<p:pic><p:nvPicPr><p:cNvPr id="${n}" name="Image ${n}"/><p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr><p:nvPr/></p:nvPicPr><p:blipFill><a:blip r:embed="rId${n}"/><a:stretch><a:fillRect/></a:stretch></p:blipFill><p:spPr>${xf(e.x + (e.w - w) / 2, e.y + (e.h - h) / 2, w, h)}<a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr></p:pic>`);
      } else {
        shapes.push(`<p:sp><p:nvSpPr><p:cNvPr id="${n}" name="Forme ${n}"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr>${xf(e.x, e.y, e.w, e.h)}<a:prstGeom prst="${SLX_SHAPES[e.shape] || 'rect'}"><a:avLst/></a:prstGeom><a:solidFill><a:srgbClr val="${slxColor(e.fill || th.accent)}"/></a:solidFill><a:ln><a:noFill/></a:ln></p:spPr></p:sp>`);
      }
    }
    const tr = s.tr === 'fade' ? '<p:transition spd="med"><p:fade/></p:transition>' : s.tr === 'slide' ? '<p:transition spd="med"><p:push dir="l"/></p:transition>' : s.tr === 'zoom' ? '<p:transition spd="med"><p:zoom/></p:transition>' : '';
    files.push([`ppt/slides/slide${si + 1}.xml`, enc(`<p:sld ${SLX_NS}><p:cSld><p:bg><p:bgPr>${slxFill(s.bg || th.bg)}<a:effectLst/></p:bgPr></p:bg><p:spTree>${SLX_GRP}${shapes.join('')}</p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>${tr}</p:sld>`)]);
    files.push([`ppt/slides/_rels/slide${si + 1}.xml.rels`, enc(`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rels.join('')}</Relationships>`)]);
    slides.push(si + 1);
  }
  const clr = (n, v) => `<a:${n}><a:srgbClr val="${v}"/></a:${n}>`, font = slxFont(th.font), ph = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
  const theme = `<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="NeoSlides"><a:themeElements><a:clrScheme name="NeoSlides">${clr('dk1', '000000')}${clr('lt1', 'FFFFFF')}${clr('dk2', slxColor(th.text))}${clr('lt2', 'EEEEEE')}${clr('accent1', slxColor(th.accent))}${clr('accent2', slxColor(th.title))}${clr('accent3', '5FD08A')}${clr('accent4', '4F9FE0')}${clr('accent5', 'FFD07A')}${clr('accent6', 'FF4F6D')}${clr('hlink', '6A2BD8')}${clr('folHlink', '8A5CF0')}</a:clrScheme>`
    + `<a:fontScheme name="NeoSlides"><a:majorFont><a:latin typeface="${slxX(slxFont(th.tfont))}"/><a:ea typeface=""/><a:cs typeface=""/></a:majorFont><a:minorFont><a:latin typeface="${slxX(font)}"/><a:ea typeface=""/><a:cs typeface=""/></a:minorFont></a:fontScheme>`
    + `<a:fmtScheme name="NeoSlides"><a:fillStyleLst>${ph.repeat(3)}</a:fillStyleLst><a:lnStyleLst>${`<a:ln w="6350">${ph}</a:ln>`.repeat(3)}</a:lnStyleLst><a:effectStyleLst>${'<a:effectStyle><a:effectLst/></a:effectStyle>'.repeat(3)}</a:effectStyleLst><a:bgFillStyleLst>${ph.repeat(3)}</a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>`;
  const R = (id, type, target) => `<Relationship Id="${id}" Type="${SLX_REL}${type}" Target="${target}"/>`, rels = x => `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${x}</Relationships>`;
  const exts = [...new Set(media.map(([n]) => n.split('.').pop()))];
  return slxZip([
    ['[Content_Types].xml', enc(`<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${exts.map(x => `<Default Extension="${x}" ContentType="image/${x}"/>`).join('')}`
      + `<Override PartName="/ppt/presentation.xml" ContentType="${SLX_CT}presentationml.presentation.main+xml"/><Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="${SLX_CT}presentationml.slideMaster+xml"/><Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="${SLX_CT}presentationml.slideLayout+xml"/><Override PartName="/ppt/theme/theme1.xml" ContentType="${SLX_CT}theme+xml"/>`
      + slides.map(i => `<Override PartName="/ppt/slides/slide${i}.xml" ContentType="${SLX_CT}presentationml.slide+xml"/>`).join('') + '</Types>')],
    ['_rels/.rels', enc(rels(R('rId1', 'officeDocument', 'ppt/presentation.xml')))],
    ['ppt/presentation.xml', enc(`<p:presentation ${SLX_NS} saveSubsetFonts="1"><p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst><p:sldIdLst>${slides.map(i => `<p:sldId id="${255 + i}" r:id="rId${i + 2}"/>`).join('')}</p:sldIdLst><p:sldSz cx="12192000" cy="6858000"/><p:notesSz cx="6858000" cy="9144000"/></p:presentation>`)],
    ['ppt/_rels/presentation.xml.rels', enc(rels(R('rId1', 'slideMaster', 'slideMasters/slideMaster1.xml') + R('rId2', 'theme', 'theme/theme1.xml') + slides.map(i => R('rId' + (i + 2), 'slide', `slides/slide${i}.xml`)).join('')))],
    ['ppt/slideMasters/slideMaster1.xml', enc(`<p:sldMaster ${SLX_NS}><p:cSld><p:bg><p:bgRef idx="1001"><a:schemeClr val="bg1"/></p:bgRef></p:bg><p:spTree>${SLX_GRP}</p:spTree></p:cSld><p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/><p:sldLayoutIdLst><p:sldLayoutId id="2147483649" r:id="rId1"/></p:sldLayoutIdLst><p:txStyles><p:titleStyle/><p:bodyStyle/><p:otherStyle/></p:txStyles></p:sldMaster>`)],
    ['ppt/slideMasters/_rels/slideMaster1.xml.rels', enc(rels(R('rId1', 'slideLayout', '../slideLayouts/slideLayout1.xml') + R('rId2', 'theme', '../theme/theme1.xml')))],
    ['ppt/slideLayouts/slideLayout1.xml', enc(`<p:sldLayout ${SLX_NS} type="blank" preserve="1"><p:cSld name="Vide"><p:spTree>${SLX_GRP}</p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sldLayout>`)],
    ['ppt/slideLayouts/_rels/slideLayout1.xml.rels', enc(rels(R('rId1', 'slideMaster', '../slideMasters/slideMaster1.xml')))],
    ['ppt/theme/theme1.xml', enc(theme)],
    ...files, ...media.map(([n, u]) => ['ppt/media/' + n, u]),
  ]);
}
function slxB64(u) { let s = ''; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode(...u.subarray(i, i + 0x8000)); return btoa(s); }
function slxRead(u) {  // relit un zip sans compression : [[nom, octets, crc lu]] (pour la vérification)
  const v = new DataView(u.buffer, u.byteOffset, u.byteLength), out = []; let p = 0;
  while (p + 30 <= u.length && v.getUint32(p, true) === 0x04034b50) { const n = v.getUint32(p + 18, true), l = v.getUint16(p + 26, true), name = new TextDecoder().decode(u.subarray(p + 30, p + 30 + l)), data = u.subarray(p + 30 + l, p + 30 + l + n); out.push([name, data, v.getUint32(p + 14, true)]); p += 30 + l + n; }
  return out;
}
async function slxCheck() {  // vérification : un diaporama de chaque sorte d'élément → zip relisible, CRC justes, chaque XML bien formé, les bonnes pièces
  const bad = [], c = document.createElement('canvas'); c.width = 4; c.height = 2; c.getContext('2d').fillRect(0, 0, 2, 2);
  const d = {theme: 'neo', slides: [{bg: null, tr: 'fade', els: [slText(80, 170, 800, 120, 'Titre <b>gras</b> & « guillemets »', 56, 'title', 'center'), slText(60, 150, 400, 340, '<ul><li>Un</li><li><i>Deux</i><br>suite</li></ul><ol><li>A</li></ol>', 24),
    {t: 'shape', shape: 'star', x: 500, y: 150, w: 200, h: 200}, {t: 'img', src: c.toDataURL('image/webp'), x: 700, y: 300, w: 200, h: 200}]}, {bg: '#ffffff', tr: 'none', els: []}]};
  const z = slxRead(await slxBuild(d)), names = z.map(f => f[0]);
  for (const need of ['[Content_Types].xml', '_rels/.rels', 'ppt/presentation.xml', 'ppt/slides/slide1.xml', 'ppt/slides/slide2.xml', 'ppt/theme/theme1.xml', 'ppt/media/image1.png']) if (!names.includes(need)) bad.push('manque ' + need);
  for (const [n, u, crc] of z) { if (slxCrc(u) !== crc) bad.push('crc ' + n); if (/\.(xml|rels)$/.test(n) && new DOMParser().parseFromString(new TextDecoder().decode(u), 'application/xml').querySelector('parsererror')) bad.push('xml ' + n); }
  const s1 = new TextDecoder().decode(z.find(f => f[0] === 'ppt/slides/slide1.xml')[1]);
  if (!/prst="star5"/.test(s1) || !/buAutoNum/.test(s1) || !/buChar/.test(s1) || !/b="1"/.test(s1) || !/gradFill/.test(s1) || !/&amp; « guillemets »/.test(s1)) bad.push('contenu de la diapositive');
  console.assert(!bad.length, 'slides pptx', bad); return bad.join(' | ') || 'ok';
}
sl.mount = main => {
  const title = el('input', 'f ofTitle'), bar = el('div', 'ofBar'), row = el('div', 'slRow'), thumbs = el('div', 'slThumbs'), center = el('div', 'slCenter'), stageW = el('div', 'slStageW'), stage = el('div', 'slStage'), notes = el('textarea', 'f slNotes'), status = el('div', 'ofStatus');
  title.spellcheck = false; title.placeholder = 'Nom de la présentation'; notes.placeholder = 'Notes de l\'orateur pour cette diapositive (visibles seulement ici)';
  const imgIn = Object.assign(el('input'), {type: 'file', accept: 'image/*', hidden: true});
  imgIn.onchange = () => { const f = imgIn.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => slAddImg(r.result); r.readAsDataURL(f); imgIn.value = ''; };
  const theme = el('select', 'ofSel'), tr = el('select', 'ofSel'), color = Object.assign(el('input', 'ofColor'), {type: 'color', title: 'Couleur du texte ou de la forme'}), bg = Object.assign(el('input', 'ofColor'), {type: 'color', title: 'Fond de la diapositive'});
  theme.title = 'Thème'; tr.title = 'Transition à l\'arrivée de cette diapositive';
  theme.append(...Object.entries(SL_THEMES).map(([k, t]) => Object.assign(el('option', '', 'Thème ' + t.name), {value: k})));
  tr.append(...[['none', 'Sans transition'], ['fade', 'Fondu'], ['slide', 'Glissement'], ['zoom', 'Zoom']].map(([v, l]) => Object.assign(el('option', '', l), {value: v})));
  theme.onchange = () => { sl.cur.data.theme = theme.value; slSaved(); };
  tr.onchange = () => { slCur().tr = tr.value; slSaved(); };
  bg.oninput = () => { slCur().bg = bg.value; slSaved(); };
  color.oninput = () => { const e = slSel(); if (!e) return; if (e.t === 'shape') e.fill = color.value; else e.color = color.value; slSaved(); };
  bar.append(
    ofDrop('+ Diapo', Object.entries(SL_LAYOUTS).map(([k, [l]]) => [l, () => slAddSlide(k)]), 'Nouvelle diapositive'),
    ofBtn('⧉', 'Dupliquer la diapositive', () => { const s = structuredClone(slCur()); s.id = slElId(); s.els.forEach(e => e.id = slElId()); sl.cur.data.slides.splice(sl.idx + 1, 0, s); sl.idx++; slSaved(true); }),
    ofBtn('🗑', 'Supprimer la diapositive', () => { const d = sl.cur.data; if (d.slides.length < 2) return; d.slides.splice(sl.idx, 1); sl.idx = Math.min(sl.idx, d.slides.length - 1); slSaved(true); }), el('i', 'ofSep'),
    ofBtn('T', 'Zone de texte', () => slAdd(slText(120, 200, 520, 90, 'Texte', 28))),
    ofDrop('Image', [['Depuis un fichier…', () => imgIn.click()], ['Depuis un lien…', async () => { const u = await ask('Lien de l\'image'); if (u) slAddImg(u); }], ['Coller une image (Ctrl+V)', () => toast('Copie une image puis fais Ctrl+V sur la diapositive')]]),
    ofDrop('Forme', [['Rectangle', 'rect'], ['Rectangle arrondi', 'round'], ['Ellipse', 'ellipse'], ['Triangle', 'tri'], ['Flèche', 'arrow'], ['Étoile', 'star'], ['Cœur', 'heart'], ['Losange', 'diamond'], ['Bulle', 'bubble'], ['Ligne', 'line']].map(([l, s]) => [l, () => slAdd({id: slElId(), t: 'shape', shape: s, x: 380, y: 190, w: 200, h: s === 'line' ? 30 : 160})])),
    ofBtn('A−', 'Texte plus petit', () => slFont(-4)), ofBtn('A+', 'Texte plus grand', () => slFont(4)),
    ofBtn('G', 'Gras', () => slExec('bold'), 'b'), ofBtn('I', 'Italique', () => slExec('italic'), 'i'),
    ofDrop('Aligner', [['À gauche', () => slAlign('left')], ['Centré', () => slAlign('center')], ['À droite', () => slAlign('right')]]), color,
    ofDrop('Placer', [['Centrer horizontalement', () => slPlaceEl('h')], ['Centrer verticalement', () => slPlaceEl('v')], ['Aligner en haut', () => slPlaceEl('top')], ['Aligner en bas', () => slPlaceEl('bottom')], ['Aligner à gauche', () => slPlaceEl('left')], ['Aligner à droite', () => slPlaceEl('right')]], 'Placer l\'élément sélectionné sur la diapositive'),
    ofDrop('Ordre', [['Premier plan', () => slOrder(1)], ['Arrière-plan', () => slOrder(-1)]], 'Ordre de l\'élément sélectionné'), el('i', 'ofSep'),
    theme, bg, ofBtn('⌀', 'Fond du thème', () => { slCur().bg = null; slSaved(); }), tr, el('i', 'ofSep'),
    ofDrop('▶ Présenter', [['Depuis le début', () => slPresent(0)], ['Depuis cette diapositive', () => slPresent(sl.idx)]], 'Mode présentation'),
    ofDrop('Exporter', [['PDF…', () => ofExport(sl, 'pdf')], ['PowerPoint (.pptx)…', () => ofExport(sl, 'pptx')], ['Fichier NeoSlides…', () => ofExport(sl, 'neoslides')]]), imgIn);
  stageW.append(stage); center.append(stageW, notes); row.append(thumbs, center);
  main.append(title, bar, row, status);
  Object.assign(sl, {title, thumbs, stage, stageW, notes, status, theme, tr, bg, color});
  title.oninput = () => { if (sl.cur) { sl.cur.name = title.value.trim() || 'Sans titre'; ofTouch(sl, sl.cur); } };
  notes.oninput = () => { slCur().notes = notes.value; sl.cur.t = Date.now(); officeSave(); };
  new ResizeObserver(slFit).observe(stageW);
  // select, move, resize, edit
  stage.onpointerdown = e => {
    const n = e.target.closest('.slEl'), h = e.target.closest('.slH');
    if (n?.isContentEditable) return;
    if (!n && !h) { slSelect(null); return; }
    if (h) return slResize(e, h.dataset.h);
    const id = n.dataset.id; if (sl.selId !== id) slSelect(id);
    const elm = slSel(), s = sl.scale, x0 = e.clientX, y0 = e.clientY, ox = elm.x, oy = elm.y;
    let moved = false;
    const mv = m => { const dx = (m.clientX - x0) / s, dy = (m.clientY - y0) / s; if (!moved && Math.hypot(dx, dy) < 3) return; moved = true;
      elm.x = Math.round(Math.min(SL_W - 20, Math.max(20 - elm.w, ox + dx))); elm.y = Math.round(Math.min(SL_H - 20, Math.max(20 - elm.h, oy + dy))); slPlace(elm); };
    addEventListener('pointermove', mv);
    addEventListener('pointerup', () => { removeEventListener('pointermove', mv); if (moved) slSaved(); }, {once: true});
  };
  stage.ondblclick = e => {
    const n = e.target.closest('.sl-text'); if (!n) return;
    n.contentEditable = 'true'; n.spellcheck = true; n.focus();
    const done = () => { n.contentEditable = 'false'; const elm = slCur().els.find(x => x.id === n.dataset.id); if (elm && elm.html !== n.innerHTML) { elm.html = n.innerHTML; slSaved(); } };
    n.addEventListener('blur', done, {once: true});
  };
  main.tabIndex = -1;
  main.addEventListener('keydown', e => {
    if (e.target.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    const elm = slSel();
    if (elm && (e.key === 'Delete' || e.key === 'Backspace')) { e.preventDefault(); slCur().els = slCur().els.filter(x => x !== elm); sl.selId = null; slSaved(); }
    else if (elm && e.key.startsWith('Arrow')) { e.preventDefault(); const d = e.shiftKey ? 10 : 2; elm.x += e.key === 'ArrowLeft' ? -d : e.key === 'ArrowRight' ? d : 0; elm.y += e.key === 'ArrowUp' ? -d : e.key === 'ArrowDown' ? d : 0; slSaved(); }
    else if (elm && e.ctrlKey && e.key.toLowerCase() === 'd') { e.preventDefault(); slAdd({...structuredClone(elm), id: slElId(), x: elm.x + 20, y: elm.y + 20}); }
    else if (!elm && (e.key === 'PageDown' || e.key === 'ArrowDown')) { e.preventDefault(); slGo(sl.idx + 1); }
    else if (!elm && (e.key === 'PageUp' || e.key === 'ArrowUp')) { e.preventDefault(); slGo(sl.idx - 1); }
    else if (e.key === 'F5') { e.preventDefault(); slPresent(e.shiftKey ? sl.idx : 0); }
  });
  main.addEventListener('paste', e => {  // a copied picture becomes an image of the slide
    if (e.target.isContentEditable || /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    const f = [...e.clipboardData.files].find(f => f.type.startsWith('image/')); if (!f) return;
    e.preventDefault(); const r = new FileReader(); r.onload = () => slAddImg(r.result); r.readAsDataURL(f);
  });
};
const slCur = () => sl.cur.data.slides[sl.idx];
const slSel = () => slCur()?.els.find(e => e.id === sl.selId) || null;
function slFit() { if (!sl.stage) return; const w = sl.stageW.clientWidth - 20, h = sl.stageW.clientHeight - 20; sl.scale = Math.max(.2, Math.min(w / SL_W, h / SL_H)); sl.stage.style.transform = `scale(${sl.scale})`; sl.stage.style.marginLeft = Math.max(0, (sl.stageW.clientWidth - SL_W * sl.scale) / 2) + 'px'; }
function slSaved(all) { sl.cur.t = Date.now(); officeSave(); clearTimeout(sl.listT); sl.listT = setTimeout(() => ofList(sl), 600); slRender(all); }
function slPlace(e) { const n = sl.stage.querySelector(`[data-id="${e.id}"]`); if (n) Object.assign(n.style, {left: e.x + 'px', top: e.y + 'px', width: e.w + 'px', height: e.h + 'px'}); slHandles(); }
function slSelect(id) { sl.selId = id; slRender(false); sl.ui.main.focus({preventScroll: true}); }
function slHandles() {
  sl.stage.querySelectorAll('.slH').forEach(h => h.remove());
  const e = slSel(); if (!e) return;
  for (const k of ['nw', 'ne', 'sw', 'se']) { const h = el('div', 'slH ' + k); h.dataset.h = k; h.style.left = (e.x + (k[1] === 'e' ? e.w : 0)) + 'px'; h.style.top = (e.y + (k[0] === 's' ? e.h : 0)) + 'px'; sl.stage.append(h); }
}
function slResize(e, k) {
  e.preventDefault();
  const elm = slSel(), s = sl.scale, x0 = e.clientX, y0 = e.clientY, o = {...elm}, ratio = o.w / o.h;
  const mv = m => {
    let dx = (m.clientX - x0) / s, dy = (m.clientY - y0) / s;
    if ((elm.t === 'img') !== m.shiftKey) dy = (k === 'se' || k === 'nw' ? dx : -dx) / ratio;  // images keep their proportions (Maj: free), other elements the opposite
    if (k.includes('e')) elm.w = Math.max(20, o.w + dx); else { elm.w = Math.max(20, o.w - dx); elm.x = o.x + o.w - elm.w; }
    if (k.includes('s')) elm.h = Math.max(16, o.h + dy); else { elm.h = Math.max(16, o.h - dy); elm.y = o.y + o.h - elm.h; }
    elm.x = Math.round(elm.x); elm.y = Math.round(elm.y); elm.w = Math.round(elm.w); elm.h = Math.round(elm.h); slPlace(elm);
  };
  addEventListener('pointermove', mv);
  addEventListener('pointerup', () => { removeEventListener('pointermove', mv); slSaved(); }, {once: true});
}
function slAdd(e) { slCur().els.push(e); sl.selId = e.id; slSaved(); }
function slAddImg(src) { const i = new Image(); i.onload = () => { const r = Math.min(600 / i.width, 400 / i.height, 1), w = Math.round(i.width * r), h = Math.round(i.height * r); slAdd({id: slElId(), t: 'img', src, x: (SL_W - w) / 2 | 0, y: (SL_H - h) / 2 | 0, w, h}); }; i.onerror = () => toast('Image illisible', true); i.src = src; }
function slAddSlide(k) { const s = {id: slElId(), bg: null, tr: slCur()?.tr || 'fade', notes: '', els: SL_LAYOUTS[k][1]()}; sl.cur.data.slides.splice(sl.idx + 1, 0, s); sl.idx++; sl.selId = null; slSaved(true); }
function slFont(d) { const e = slSel(); if (e?.t !== 'text') return toast('Sélectionne une zone de texte', true); e.size = Math.max(10, Math.min(160, e.size + d)); slSaved(); }
function slAlign(a) { const e = slSel(); if (e?.t !== 'text') return toast('Sélectionne une zone de texte', true); e.al = a; slSaved(); }
function slExec(c) {  // inside the text being edited, else on the whole box
  const n = document.activeElement; if (n?.isContentEditable && sl.stage.contains(n)) { document.execCommand(c); return; }
  const e = slSel(); if (e?.t !== 'text') return toast('Sélectionne une zone de texte', true);
  const t = c === 'bold' ? 'b' : 'i', wrapped = new RegExp('^<' + t + '>([\\s\\S]*)</' + t + '>$').exec(e.html);
  e.html = wrapped ? wrapped[1] : '<' + t + '>' + e.html + '</' + t + '>'; slSaved();
}
function slPlaceEl(k) {  // l'élément sélectionné, centré ou collé à un bord (marge de 40)
  const e = slSel(); if (!e) return toast('Sélectionne un élément', true);
  if (k === 'h') e.x = Math.round((SL_W - e.w) / 2); else if (k === 'v') e.y = Math.round((SL_H - e.h) / 2);
  else if (k === 'top') e.y = 40; else if (k === 'bottom') e.y = SL_H - 40 - e.h; else if (k === 'left') e.x = 40; else e.x = SL_W - 40 - e.w;
  slSaved();
}
function slOrder(d) { const s = slCur(), e = slSel(); if (!e) return; s.els = s.els.filter(x => x !== e); d > 0 ? s.els.push(e) : s.els.unshift(e); slSaved(); }
function slGo(i) { const n = sl.cur.data.slides.length; if (i < 0 || i >= n) return; sl.idx = i; sl.selId = null; slRender(true); }
function slRender(all) {
  if (!sl.cur) return;
  const d = sl.cur.data, s = slCur();
  slDraw(s, d, sl.stage, true); slHandles();
  sl.theme.value = d.theme; sl.tr.value = s.tr || 'none'; sl.bg.value = /^#/.test(s.bg || '') ? s.bg : '#1a0838';
  const e = slSel(); if (e) sl.color.value = (e.t === 'shape' ? e.fill : e.color) || '#ffffff';
  if (document.activeElement !== sl.notes) sl.notes.value = s.notes || '';
  sl.status.textContent = 'Diapositive ' + (sl.idx + 1) + ' sur ' + d.slides.length + ' · double-clic : écrire dans un texte · Suppr : effacer l\'élément · Maj pendant un redimensionnement : proportions libres · enregistré';
  // thumbnails, reordered by dragging
  const keep = sl.thumbs.scrollTop;
  sl.thumbs.replaceChildren(...d.slides.map((x, i) => {
    const t = el('div', 'slThumb' + (i === sl.idx ? ' on' : '')), box = el('div', 'slMini');
    slDraw(x, d, box, false); t.append(el('span', 'n', String(i + 1)), box);
    t.onclick = () => slGo(i); t.draggable = true;
    t.ondragstart = ev => { ev.dataTransfer.setData('text/x-slide', String(i)); };
    t.ondragover = ev => ev.preventDefault();
    t.ondrop = ev => { ev.preventDefault(); const from = +ev.dataTransfer.getData('text/x-slide'); if (isNaN(from) || from === i) return; const [m] = d.slides.splice(from, 1); d.slides.splice(i, 0, m); sl.idx = i; slSaved(true); };
    return t;
  }));
  sl.thumbs.scrollTop = keep;
  void all;
}
// presentation: the whole NeoDex window, one slide at a time
function slPresent(from) {
  const d = sl.cur.data, ov = el('div', 'slShow'), box = el('div', 'slStage slShowStage'), count = el('div', 'slShowN');
  let i = from;
  const fit = () => { const s = Math.min(innerWidth / SL_W, innerHeight / SL_H); box.style.transform = `translate(-50%,-50%) scale(${s})`; };
  const show = (n, dir = 1) => {
    if (n < 0 || n >= d.slides.length) { if (n >= d.slides.length) end(); return; }
    i = n; const s = d.slides[i]; slDraw(s, d, box, false);
    box.className = 'slStage slShowStage'; void box.offsetWidth; if (s.tr && s.tr !== 'none') box.classList.add('tr-' + s.tr, dir < 0 ? 'back' : 'fwd');
    count.textContent = (i + 1) + ' / ' + d.slides.length;
  };
  const key = e => { e.preventDefault(); if (['ArrowRight', 'ArrowDown', ' ', 'PageDown', 'Enter'].includes(e.key)) show(i + 1); else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(e.key)) show(i - 1, -1); else if (e.key === 'Home') show(0); else if (e.key === 'End') show(d.slides.length - 1); else if (e.key === 'Escape') end(); };
  const end = () => { removeEventListener('keydown', key, true); removeEventListener('resize', fit); ov.remove(); sl.idx = i; slRender(true); };
  ov.append(box, count); document.body.append(ov);
  ov.onclick = e => show(e.clientX < innerWidth / 4 ? i - 1 : i + 1, e.clientX < innerWidth / 4 ? -1 : 1);
  addEventListener('keydown', key, true); addEventListener('resize', fit);
  fit(); show(i); window.neo?.win('focus');
}
sl.open = f => { sl.cur = f; sl.idx = 0; sl.selId = null; sl.title.value = f.name; slRender(true); setTimeout(slFit, 20); };
sl.close = () => { sl.cur = null; };
sl.icon = __icon('slides'); ofRegister(sl);
$(sl.view).__slx = test => ofExport(sl, 'pptx', test); slxCheck().then(r => { $(sl.view).dataset.pptx = r; }, e => { $(sl.view).dataset.pptx = 'erreur : ' + e.message; });  // (non indenté : les textes sur plusieurs lignes restent exactement les tiens)
  // ---- fin ----
  ctx.onOpen(() => { ofOpen('slides'); });
}

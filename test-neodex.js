// lancé par le test « local » de NeoDex : la vérification de l'export PowerPoint, puis un vrai .pptx écrit sur le disque (zip relu ici), la scène tient dans l'écran
module.exports = async ({ pj, sleep }) => {
  const fs = require('fs'), path = require('path'), os = require('os');
  await sleep(900);
  for (let i = 0; i < 20 && !(await pj(`document.querySelector('.ofApp')?.dataset.pptx || ''`)); i++) await sleep(250);
  const chk = await pj(`document.querySelector('.ofApp').dataset.pptx`); if (chk !== 'ok') throw new Error('vérification pptx : ' + chk);
  await pj(`(() => { if (!document.querySelector('.slStage')?.offsetParent) [...document.querySelectorAll('button')].find(b => b.textContent === '+ NOUVEAU' && b.offsetParent).click(); })(), 0`);
  await sleep(700);
  const f = path.join(os.tmpdir(), 'essai-neoslides.pptx'); fs.rmSync(f, { force: true });
  const p = await pj(`document.querySelector('.ofApp').__slx(${JSON.stringify(f)})`);
  if (!p || !fs.existsSync(f)) throw new Error('pas de fichier .pptx écrit : ' + p);
  const u = fs.readFileSync(f), names = []; let o = 0;
  while (o + 30 <= u.length && u.readUInt32LE(o) === 0x04034b50) { const n = u.readUInt32LE(o + 18), l = u.readUInt16LE(o + 26); names.push(u.toString('utf8', o + 30, o + 30 + l)); o += 30 + l + n; }
  if (u.readUInt32LE(u.length - 22) !== 0x06054b50) throw new Error('fin du zip absente');
  for (const need of ['[Content_Types].xml', 'ppt/presentation.xml', 'ppt/slides/slide1.xml']) if (!names.includes(need)) throw new Error('il manque ' + need + ' : ' + names.join(', '));
  fs.rmSync(f, { force: true });
  const r = await pj(`(() => { const s = document.querySelector('.slStage').getBoundingClientRect(), w = document.querySelector('.slStageW').getBoundingClientRect();
    return { w: Math.round(s.width), fits: s.right <= w.right + 1 && s.bottom <= w.bottom + 1, over: [...document.querySelectorAll('.ofApp *')].filter(e => e.offsetParent && !e.closest('.slStage') && e.getBoundingClientRect().right > innerWidth + 1).map(e => e.tagName + '.' + e.className + ' ' + Math.round(e.getBoundingClientRect().right)).join(', ') }; })()`);
  if (!r.fits || r.over) throw new Error('mise en page : ' + JSON.stringify(r));
  // la vue présentateur : notes, diapo suivante, chrono, laser ; elle reste ouverte pour la capture
  const pv = await pj(`(() => { const v = document.querySelector('.ofApp'), sl0 = v.__present; const k = [...document.querySelectorAll('.slThumbs *')].length;
    const P = v.__present(0, true); const ok = P.pres && document.querySelector('.slShow.pres .slPresSide') && getComputedStyle(document.querySelector('.slPresSide')).display === 'flex';
    const n0 = P.notes.textContent, nx = P.next.children.length, clk = /⏱ 00:0\\d/.test(P.clock.textContent);
    P.key('l'); const las = getComputedStyle(document.querySelector('.slLaser')).display; P.key('p'); const off = P.pres; P.key('p');
    return {ok: !!ok, n0, nx, clk, las, off}; })()`);
  if (!pv.ok || !pv.clk || pv.las === 'none' || pv.off || !pv.nx || !pv.n0) throw new Error('vue présentateur : ' + JSON.stringify(pv));
  await sleep(300);
  return 'vue présentateur ok (' + pv.n0.slice(0, 30) + ') · pptx vérifié et écrit (' + names.length + ' fichiers, ' + Math.round(u.length / 1024) + ' Ko), scène de ' + r.w + ' px';
};

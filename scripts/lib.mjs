// Plantillas de láminas. Cada función devuelve { cls, inner } y build.mjs las envuelve en <section class="slide …">.
// Los colores de fondo salen de yale.css: bg-cream · bg-sand · bg-tan · bg-ink · bg-red (+ hearts para el patrón de corazones).

const A = '../../assets';
export const cut = (src, style) => `<img class="cut" src="${A}/cut/${src}" style="${style}" alt="">`;
export const ph = (src) => `${A}/photos/${src}`;
const wa = (txt = 'Escríbenos por WhatsApp') => `<span class="wa lg"><i class="ic" data-ic="wa" style="width:44px;height:44px;display:inline-block"></i>${txt}</span>`;
export const chips = (arr) => `<div class="chips">${arr.map((c) => `<span>${c}</span>`).join('')}</div>`;
const dec = (o) => (o.cuts || []).map((c) => cut(c.src, c.style)).join('');
const isDark = (bg) => /ink|red/.test(bg);

export const T = {
  // Portada con foto a sangre
  coverPhoto: (o) => ({
    cls: `cov on-dark ${o.bg || 'bg-ink'}`,
    inner: `<div class="photo"><img src="${o.photo}" style="--op:${o.op || '50% 50%'}" alt=""></div><div class="shade"></div>
      <div class="t"><div class="kick">${o.kick}</div><h1 style="${o.hs || ''}">${o.h}</h1>${o.sub ? `<p class="sub">${o.sub}</p>` : ''}</div>`,
  }),
  // Portada con recorte de producto sobre fondo de color
  coverCut: (o) => ({
    cls: `cov ${o.bg || 'bg-red hearts'} ${isDark(o.bg || 'bg-red') ? 'on-dark' : ''}`,
    inner: `${o.glow ? `<div class="glow" style="${o.glow}"></div>` : ''}${(o.cuts || []).map((c) => cut(c.src, c.style)).join('')}
      <div class="t"><div class="kick">${o.kick}</div><h1 style="${o.hs || ''}">${o.h}</h1>${o.sub ? `<p class="sub">${o.sub}</p>` : ''}</div>`,
  }),
  // Declaración tipográfica
  statement: (o) => ({
    cls: `st ${o.bg || 'bg-ink'} ${isDark(o.bg || 'bg-ink') ? 'on-dark' : ''} ${o.hearts ? 'hearts' : ''}`,
    inner: `${o.numeral ? `<div class="numeral" style="color:${isDark(o.bg || 'bg-ink') ? '#fff' : '#14100d'}">${o.numeral}</div>` : ''}
      <div class="t"><div class="kick">${o.kick}</div><h2 style="${o.hs || ''}">${o.h}</h2>${o.body ? `<p class="body" style="max-width:${o.bw || '900px'}">${o.body}</p>` : ''}</div>${o.cuts ? o.cuts.map((c) => cut(c.src, c.style)).join('') : ''}${o.tag ? `<div class="tag">${o.tag}</div>` : ''}`,
  }),
  // Tarjetas 2×2 (o 2×3)
  cards: (o) => ({
    cls: `cd ${o.bg || 'bg-cream'} ${isDark(o.bg || 'bg-cream') ? 'on-dark' : ''} ${o.items.length > 4 ? 'six' : ''} ${o.hearts ? 'hearts' : ''}`,
    inner: `${dec(o)}<div class="head"><div class="kick">${o.kick}</div><h2>${o.h}</h2></div>
      <div class="grid">${o.items.map((i) => `<div class="card"><div class="ico"><i class="ic" data-ic="${i.ic}"></i></div><h3>${i.h}</h3><p>${i.p}</p></div>`).join('')}</div>`,
  }),
  // Pasos numerados
  steps: (o) => ({
    cls: `sp ${o.bg || 'bg-red hearts'} ${isDark(o.bg || 'bg-red') ? 'on-dark' : ''}`,
    inner: `${dec(o)}<div class="head"><div class="kick">${o.kick}</div><h2>${o.h}</h2></div>
      <div class="list">${o.items.map((s, i) => `<div class="row"><i class="hn" data-n="${i + 1}"></i><div><b>${s.h}</b><span class="d">${s.p}</span></div></div>`).join('')}</div>${o.note ? `<div class="note">${o.note}</div>` : ''}`,
  }),
  // Filas (días, precios)
  rows: (o) => ({
    cls: `rw ${o.bg || 'bg-ink'} ${isDark(o.bg || 'bg-ink') ? 'on-dark' : ''}`,
    inner: `${dec(o)}<div class="head"><div class="kick">${o.kick}</div><h2>${o.h}</h2></div>
      <div class="list">${o.rows.map((r) => `<div class="ln"><span class="d">${r.d}</span><span class="f">${r.f}${r.s ? `<small>${r.s}</small>` : ''}</span>${r.p ? `<span class="p">${r.p}</span>` : ''}</div>`).join('')}</div>${o.note ? `<div class="note">${o.note}</div>` : ''}`,
  }),
  // Precio con cinta roja y producto
  price: (o) => ({
    cls: `pr ${o.bg || 'bg-tan'} ${isDark(o.bg || 'bg-tan') ? 'on-dark' : ''}`,
    inner: `${(o.cuts || []).map((c) => cut(c.src, c.style)).join('')}
      <div class="t" style="${o.ts || 'bottom:128px'}"><div class="kick">${o.kick}</div><h2>${o.h}</h2><div style="margin-top:28px"><span class="ribbon">${o.price}</span></div>
      <div class="each">${o.each}</div>${o.chips ? chips(o.chips) : ''}</div>`,
  }),
  // Promo 15+1
  promo: (o) => ({
    cls: `pm ${o.bg || 'bg-red hearts'} ${isDark(o.bg || 'bg-red') ? 'on-dark' : ''}`,
    inner: `${dec(o)}<div class="head"><div class="kick">${o.kick}</div><h2>${o.h}</h2></div>
      <div class="duo">${o.duo.map((d) => `<div class="big"><div class="n">${d.n}<i>+1</i></div><h3>${d.h}</h3><p>${d.p}</p></div>`).join('')}</div>${o.calc ? `<div class="calc">${o.calc}</div>` : ''}`,
  }),
  // Pregunta / respuesta
  faq: (o) => ({
    cls: `fq ${o.bg || 'bg-ink'} ${isDark(o.bg || 'bg-ink') ? 'on-dark' : ''} ${o.hearts ? 'hearts' : ''}`,
    inner: `${dec(o)}<div class="q"><div class="mk">${o.mk || 'Pregunta'}</div><h2>${o.q}</h2></div>
      <div class="a"><div class="big">${o.a}</div>${o.p ? `<p>${o.p}</p>` : ''}${o.chips ? chips(o.chips) : ''}</div>`,
  }),
  // Quiz de sabores (3 por lámina)
  quiz: (o) => ({
    cls: `qz ${o.bg || 'bg-red hearts'} ${isDark(o.bg || 'bg-red') ? 'on-dark' : ''}`,
    inner: `${dec(o)}<div class="head"><div class="kick">${o.kick}</div><h2>${o.h}</h2></div>
      <div class="list">${o.items.map((i) => `<div class="it"><i class="hn" data-n="${i.n}"></i><div><h3>${i.h}</h3><p>${i.p}</p></div></div>`).join('')}</div>`,
  }),
  // Capas de la lasaña
  layers: (o) => ({
    cls: `ly ${o.bg || 'bg-cream'} ${isDark(o.bg || 'bg-cream') ? 'on-dark' : ''}`,
    inner: `${dec(o)}<div class="head"><div class="kick">${o.kick}</div><h2>${o.h}</h2></div>
      <div class="stack">${o.layers.map((l) => `<div class="layer">${l.h}<small>${l.s}</small></div>`).join('')}</div>`,
  }),
  // Estadística gigante
  stat: (o) => ({
    cls: `sa ${o.bg || 'bg-red hearts'} ${isDark(o.bg || 'bg-red') ? 'on-dark' : ''}`,
    inner: `${(o.cuts || []).map((c) => cut(c.src, c.style)).join('')}<div class="t"><div class="kick">${o.kick}</div><div class="big">${o.big}<sup>${o.unit}</sup></div><h2>${o.h}</h2>${o.body ? `<p class="body" style="--bw:${o.bw || '880px'}">${o.body}</p>` : ''}</div>`,
  }),
  // Cierre con WhatsApp
  cta: (o) => ({
    cls: `ct ${o.bg || 'bg-cream'} ${isDark(o.bg || 'bg-cream') ? 'on-dark' : ''} ${o.hearts ? 'hearts' : ''}`,
    inner: `${(o.cuts || []).map((c) => cut(c.src, c.style)).join('')}<div class="t"><div class="kick">${o.kick}</div><h2>${o.h}</h2>${o.body ? `<p class="body">${o.body}</p>` : ''}${o.chips ? chips(o.chips) : ''}</div>
      <div class="act">${wa(o.btn)}<div class="num">300 516 2421</div><div class="meta">${o.meta || 'La Séptima, Cl. 7 #4-79, Cajicá · @yoamolaempanada'}</div></div>`,
  }),
  // Foto arriba + texto
  photoText: (o) => ({
    cls: `pt ${o.bg || 'bg-cream'} ${isDark(o.bg || 'bg-cream') ? 'on-dark' : ''}`,
    inner: `<div class="photo" style="--ph:${o.ph || '760px'}"><img src="${o.photo}" style="--op:${o.op || '50% 50%'}" alt=""></div>
      <div class="txt"><div class="kick">${o.kick}</div><h2>${o.h}</h2>${o.body ? `<p class="body">${o.body}</p>` : ''}${o.chips ? `<div style="margin-top:26px">${chips(o.chips)}</div>` : ''}</div>`,
  }),

  // ---------- Historias (1080×1920) ----------
  sCover: (o) => ({
    cls: `story sc on-dark ${o.bg || 'bg-ink'}`,
    inner: `<div class="photo"><img src="${o.photo}" style="--op:${o.op || '50% 50%'}" alt=""></div><div class="shade"></div>
      <div class="t"><div class="kick">${o.kick}</div><h1>${o.h}</h1>${o.sub ? `<p class="sub">${o.sub}</p>` : ''}</div><div class="tap">${o.tap || 'Toca para pedir'}</div>`,
  }),
  sPoll: (o) => ({
    cls: `story sp2 ${o.bg || 'bg-red hearts'} ${isDark(o.bg || 'bg-red') ? 'on-dark' : ''}`,
    inner: `<div class="t"><div class="kick">${o.kick}</div><h2>${o.h}</h2><div class="opts">${o.opts.map((x, i) => `<div class="opt"><i class="hn" data-n="${i + 1}"></i>${x}</div>`).join('')}</div></div><div class="hint">${o.hint || 'Vota en la encuesta'}</div>`,
  }),
  sInfo: (o) => ({
    cls: `story sa2 ${o.bg || 'bg-ink'} ${isDark(o.bg || 'bg-ink') ? 'on-dark' : ''} ${o.hearts ? 'hearts' : ''}`,
    inner: `<div class="t"><div class="kick">${o.kick}</div><h2>${o.h}</h2>${o.body ? `<p class="body">${o.body}</p>` : ''}${o.info ? `<div class="info">${o.info.map((x) => `<div><i class="ic" data-ic="${x.ic}"></i>${x.t}</div>`).join('')}</div>` : ''}</div>
      ${o.cta ? `<div class="act">${wa(o.cta)}<div class="num">300 516 2421</div></div>` : ''}`,
  }),
};

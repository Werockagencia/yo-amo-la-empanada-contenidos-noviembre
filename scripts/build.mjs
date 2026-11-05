// Genera piezas/NN-slug/slides.html y copy.md, CAPTIONS.md y plan.json a partir de piezas.mjs
// Uso: node scripts/build.mjs [filtro]    (p. ej. node scripts/build.mjs 09)
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { T } from './lib.mjs';
import { piezas, DATA_BLOCK } from './piezas.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const filter = process.argv[2] ?? '';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

const fileOf = (p, s, i) => `${p.n}-${p.slug}-${s.file || i + 1}.png`;

for (const p of piezas) {
  if (!`${p.n}-${p.slug}`.includes(filter)) continue;
  const dir = path.join(ROOT, 'piezas', `${p.n}-${p.slug}`);
  await mkdir(dir, { recursive: true });
  const carousel = p.kind.startsWith('Carrusel');
  const total = p.slides.length;
  const body = p.slides.map((s, i) => {
    const { cls, inner } = T[s.t](s);
    const story = /story/.test(cls);
    const attrs = [`data-file="${fileOf(p, s, i)}"`, `data-n="${p.n}"`];
    if (carousel && !story) { attrs.push(`data-i="${i + 1}"`, `data-of="${total}"`); if (i === total - 1) attrs.push('data-last'); }
    if (story) attrs.push('data-nomast');
    return `<!-- ${i + 1} · ${s.t} -->\n<section class="slide ${cls}" ${attrs.join(' ')}>\n${inner}\n</section>`;
  }).join('\n\n');
  const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Nº ${p.n} · ${p.title} — Yo Amo la Empanada</title>
<link rel="stylesheet" href="../../assets/css/yale.css">
<link rel="stylesheet" href="../../assets/css/nov.css">
</head>
<body>

${body}

<script src="../../assets/js/slide.js"></script>
</body>
</html>
`;
  await writeFile(path.join(dir, 'slides.html'), html);

  const alts = p.slides.map((s, i) => `${i + 1}. ${s.alt || ''}`).join('\n');
  const copy = `# Nº ${p.n} · ${p.title}
**Capítulo ${p.cap}** · ${p.kind} · ${p.date} · ${p.time}
**Rol en la narrativa:** ${p.rol}
**Audiencia:** ${p.aud}

## Caption
${p.caption}

${DATA_BLOCK}

## Versión corta
${p.short}

## Hashtags
${p.tags}

## Texto alternativo
${alts}

## Notas
${p.notes.map((n) => `- ${n}`).join('\n')}
`;
  await writeFile(path.join(dir, 'copy.md'), copy);
  console.log(`piezas/${p.n}-${p.slug}  (${total} láminas)`);
}

// CAPTIONS.md y plan.json con todas las piezas (siempre completo)
let md = `# Captions en orden de publicación · Noviembre–Diciembre 2026

> Generado con \`node scripts/build.mjs\` desde \`scripts/piezas.mjs\`. Para editar un caption, cambiar \`piezas.mjs\` y volver a generar.

`;
for (const p of piezas) {
  md += `---\n\n## Nº ${p.n} · ${p.title}\n**${p.date} · ${p.time}** · ${p.kind} · Capítulo ${p.cap}\n\n### Caption\n\n${p.caption}\n\n${DATA_BLOCK}\n\n### Versión corta\n\n${p.short}\n\n### Hashtags\n\n${p.tags}\n\n`;
}
await writeFile(path.join(ROOT, 'CAPTIONS.md'), md);
await writeFile(path.join(ROOT, 'scripts', 'plan.json'), JSON.stringify(piezas.map((p) => ({ n: p.n, dir: `${p.n}-${p.slug}`, title: p.title, cap: p.cap, kind: p.kind, date: p.date, time: p.time, files: p.slides.map((s, i) => fileOf(p, s, i)) })), null, 2));
console.log('CAPTIONS.md · plan.json');

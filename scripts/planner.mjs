// Prepara la carpeta planner/: una carpeta por publicación (en orden de fecha), con imágenes numeradas, caption.txt y planner.csv
// Uso: node scripts/planner.mjs
import { mkdir, copyFile, writeFile, rm, readdir } from 'node:fs/promises';
import path from 'node:path';
import { piezas, DATA_BLOCK } from './piezas.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'planner');
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const MES = { oct: 10, nov: 11, dic: 12 };
const iso = (s) => { const m = s.match(/(\d+)\s+(\w+)$/); return `2026-${String(MES[m[2]]).padStart(2, '0')}-${String(+m[1]).padStart(2, '0')}`; };
const hora = (s) => { const m = s.match(/(\d+):(\d+)\s*([ap])/); let h = +m[1] % 12; if (m[3] === 'p') h += 12; return `${String(h).padStart(2, '0')}:${m[2]}`; };
const q = (v) => `"${String(v).replace(/"/g, '""')}"`;

const rows = [['fecha', 'hora', 'nro', 'pieza', 'formato', 'carpeta', 'imagenes_feed', 'imagenes_historias', 'caption_completo', 'hashtags', 'notas']];
for (const p of piezas) {
  const fecha = iso(p.date), h = hora(p.time);
  const carpeta = `${fecha}_${h.replace(':', '-')}_N${p.n}_${p.slug}`;
  const dir = path.join(OUT, carpeta);
  await mkdir(dir, { recursive: true });
  const exp = path.join(ROOT, 'piezas', `${p.n}-${p.slug}`, 'export');
  const files = (await readdir(exp)).filter((f) => f.endsWith('.png')).sort();
  const feed = files.filter((f) => !/historia/.test(f));
  const hist = files.filter((f) => /historia/.test(f));
  let i = 1;
  for (const f of feed) await copyFile(path.join(exp, f), path.join(dir, `${String(i++).padStart(2, '0')}.png`));
  if (hist.length) {
    await mkdir(path.join(dir, 'historias'), { recursive: true });
    let j = 1;
    for (const f of hist) await copyFile(path.join(exp, f), path.join(dir, 'historias', `historia-${j++}.png`));
  }
  const cap = `${p.caption}\n\n${DATA_BLOCK}\n\n${p.tags}`;
  await writeFile(path.join(dir, 'caption.txt'), cap + '\n');
  await writeFile(path.join(dir, 'LEEME.txt'), `Nº ${p.n} · ${p.title}\nPublicar: ${fecha} a las ${h}\nFormato: ${p.kind}\n\nNotas:\n${p.notes.map((n) => '- ' + n).join('\n')}\n`);
  rows.push([fecha, h, p.n, p.title, p.kind, carpeta, feed.length, hist.length, cap, p.tags, p.notes.join(' | ')].map(q));
}
await writeFile(path.join(OUT, 'planner.csv'), '﻿' + rows.map((r) => r.join(',')).join('\r\n'));

await writeFile(path.join(OUT, 'GUIA-PLANNER.md'), `# Cómo cargar en el planner de Meta Business Suite

Cada carpeta es una publicación, ordenada por fecha. Para cada una:

1. Meta Business Suite → **Planner** → **Crear publicación** (o **Crear historia** para las de la carpeta \`historias/\`).
2. En **Publicar en**, elegir la página de Facebook **Yo amo la Empanada** y la cuenta de Instagram **@yoamolaempanada**.
3. **Agregar foto/video** → subir las imágenes de la carpeta en orden (01, 02, 03…). Instagram permite hasta 10 imágenes por carrusel.
4. Pegar el contenido de \`caption.txt\` en **Texto**.
5. **Programar** → fecha y hora que dice el nombre de la carpeta (\`AAAA-MM-DD_HH-MM\`) o \`planner.csv\`.
6. Revisar la vista previa y pulsar **Programar**.

**Historias** (Nº 11 y Nº 17): programarlas el mismo día; agregar los stickers que indica \`LEEME.txt\` (encuesta y enlace de WhatsApp).

Antes de programar, revisar la checklist de validación del README.
`);
console.log(`planner/: ${piezas.length} carpetas · planner.csv · GUIA-PLANNER.md`);

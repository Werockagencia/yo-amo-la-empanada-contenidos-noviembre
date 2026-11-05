// Cómo se ve el perfil: portadas de las 12 piezas en cuadrícula 3×4 (la más reciente, arriba a la izquierda), recorte 4:5 del feed.
import sharp from 'sharp';
import path from 'node:path';
import { readFile } from 'node:fs/promises';
const ROOT = path.resolve(import.meta.dirname, '..');
const plan = JSON.parse(await readFile(path.join(ROOT, 'scripts', 'plan.json'), 'utf8'));
const W = 360, H = 450, G = 6, cols = 3;
// orden de publicación inverso: la última publicada va primero
const covers = [...plan].reverse();
const tiles = await Promise.all(covers.map(async (p) => {
  const f = p.files.find((x) => !/historia/.test(x)) || p.files[0];
  return sharp(path.join(ROOT, 'piezas', p.dir, 'export', f)).resize(W, H, { fit: 'cover' }).toBuffer();
}));
const rows = Math.ceil(tiles.length / cols);
await sharp({ create: { width: cols * W + (cols + 1) * G, height: rows * H + (rows + 1) * G, channels: 3, background: '#111' } })
  .composite(tiles.map((b, i) => ({ input: b, left: G + (i % cols) * (W + G), top: G + Math.floor(i / cols) * (H + G) })))
  .jpeg({ quality: 88 }).toFile(path.join(ROOT, 'preview', 'feed-grid.jpg'));
console.log('preview/feed-grid.jpg');

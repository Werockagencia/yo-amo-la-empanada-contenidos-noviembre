// Hoja de contacto de los carruseles vivos en Meta (orden real de tarjetas)
import sharp from 'sharp';
import path from 'node:path';
const DIR = path.resolve(import.meta.dirname, '..', '..', 'subir-ads-v2');
const OUT = path.resolve(import.meta.dirname, '..', 'preview');
const S = 400, G = 10;
const sheet = async (files, name) => {
  const tiles = await Promise.all(files.map((f) => sharp(path.join(DIR, f)).resize(S, S).toBuffer()));
  const cols = 4, rows = Math.ceil(tiles.length / cols);
  await sharp({ create: { width: cols * S + (cols + 1) * G, height: rows * S + (rows + 1) * G, channels: 3, background: '#14100d' } })
    .composite(tiles.map((b, i) => ({ input: b, left: G + (i % cols) * (S + G), top: G + Math.floor(i / cols) * (S + G) })))
    .jpeg({ quality: 88 }).toFile(path.join(OUT, name));
  console.log(name);
};
await sheet(['A1.jpg', 'A2.jpg', 'A3.jpg', 'A4-v2.jpg', 'A5.jpg', 'A6-bandejas.jpg', 'X1-ia.jpg', 'X2-ia.jpg'], 'ads-carrusel-A.jpg');
await sheet(['D1-v2.jpg', 'D2.jpg', 'D3.jpg', 'D4-v2.jpg', 'D5-v2.jpg', 'D6.jpg', 'X3-ia.jpg', 'X4-ia.jpg'], 'ads-carrusel-D-B2B.jpg');

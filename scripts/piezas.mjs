// Contenido de las 12 piezas (Nº 09–20) · 4 semanas · 3 por semana (martes, jueves y sábado).
// Única fuente de verdad: calendario, láminas, captions, textos alternativos y notas.
// Reglas: todo claim sale del brief, de la información comercial del negocio o de las instrucciones de la asistente. Lo que no esté confirmado va a la checklist del README.
import { ph } from './lib.mjs';

const IA = {
  quesoPersonal: ph('ia/lasana-queso-personal.png'),
  familiaPersonal: ph('ia/familia-personal.png'),
  oficina: ph('ia/oficina-empanadas.png'),
  horno: ph('ia/manos-horno.png'),
  vitrina: ph('ia/vitrina-cafeteria.png'),
};
const DATOS = `La Séptima, Cl. 7 #4-79, Cajicá (al lado del parasol rojo)
Pedidos por WhatsApp: 300 516 2421
Lunes a sábado, 8:00 a. m. a 9:00 p. m.`;
const CUT = { cong: 'empanadas-congeladas.png', horn: 'empanadas-horneadas.png', tapa: 'tapa-etiqueta.png', lasT: 'lasana-con-tapa-v2.png', lasH: 'lasana-horneada-v2.png', lasQ: 'lasana-queso-estirado-v2.png', plato: 'plato-corte.png' };

export const piezas = [
  // ───────────── SEMANA 1 · Tu semana resuelta ─────────────
  {
    n: '09', slug: 'tu-semana-resuelta', cap: 'IV · Tu semana, resuelta', title: 'Tu semana, resuelta', kind: 'Carrusel · 6',
    date: 'Mar 10 nov', time: '12:30 p. m.', rol: 'Abre el capítulo. Muestra el uso cotidiano de las bandejas x5 (hogares ocupados).', aud: 'B2C-1 · hogares y personas ocupadas',
    slides: [
      { t: 'coverCut', bg: 'bg-red hearts', kick: 'De lunes a viernes', h: 'Tu semana,<br><em class="r">resuelta.</em>', sub: 'Una bandeja en el congelador y la cena ya está.',
        cuts: [{ src: CUT.horn, style: 'left:-30px;top:215px;width:430px;transform:rotate(-7deg)' }, { src: CUT.cong, style: 'left:380px;top:120px;width:470px;transform:rotate(5deg)' }], alt: 'Dos bandejas de empanadas, una horneada y una congelada, sobre fondo rojo. Texto: Tu semana, resuelta.' },
      { t: 'statement', bg: 'bg-cream hearts', kick: 'La pregunta de siempre', h: '¿Qué hacemos<br>de <em class="r">cena</em><br>hoy?', body: 'Cuesta tiempo, plata y paciencia. Mejor ten la respuesta guardada en el congelador.', bw: '540px', cuts: [{ src: CUT.horn, style: 'right:-60px;bottom:90px;width:470px;transform:rotate(6deg)' }], alt: 'Texto: ¿Qué hacemos de cena hoy?' },
      { t: 'rows', bg: 'bg-ink', kick: 'Cinco cenas, cinco sabores', h: 'Tu semana<br>en bandejas.', rows: [
        { d: 'Lunes', f: 'Res' }, { d: 'Martes', f: 'Pechuga y queso' }, { d: 'Miércoles', f: 'Hawaiana' }, { d: 'Jueves', f: 'Jamón ahumado y queso' }, { d: 'Viernes', f: 'Pavo y queso' }],
        note: 'Es un ejemplo: tú eliges el sabor de cada día. Tenemos 9.', alt: 'Lista de cinco días con un sabor de empanada para cada uno, de lunes a viernes.' },
      { t: 'steps', bg: 'bg-tan', kick: 'Del congelador a la mesa', h: 'Tres pasos,<br>cero drama.', items: [
        { h: 'Precalienta 5 minutos', p: 'Horno o air fryer a 200–220 °C.' }, { h: 'Hornea unos 12 minutos', p: 'Directo del congelador.' }, { h: 'Sirve caliente', p: 'Con lo que tengas en casa.' }],
        note: 'Tiempos orientativos; dependen de tu horno.', cuts: [{ src: CUT.cong, style: 'right:-30px;top:330px;width:340px;transform:rotate(7deg)' }], alt: 'Tres pasos para calentar las empanadas: precalentar 5 minutos, hornear unos 12 y servir.' },
      { t: 'rows', bg: 'bg-red hearts', kick: 'Bandeja x5 · para hornear', h: 'Dos opciones,<br>un precio.', rows: [
        { d: 'Gourmet', f: '7 sabores', s: 'A $3.980 cada una', p: '$19.900' }, { d: 'Tradicional', f: '2 sabores', s: 'A $2.580 cada una', p: '$12.900' }],
        note: 'Gourmet: 7 sabores. Tradicional: carne con arroz y pollo con arroz.', cuts: [{ src: CUT.cong, style: 'right:-20px;top:240px;width:320px;transform:rotate(8deg)' }], alt: 'Precios: bandeja gourmet x5 $19.900 y bandeja tradicional x5 $12.900.' },
      { t: 'cta', bg: 'bg-ink', kick: 'Pide hoy', h: 'Arma tu semana<br>por <em class="r">WhatsApp.</em>', body: 'Escríbenos el sabor de cada día y te confirmamos entrega o recogida.', chips: ['Cajicá y Chía', 'Lunes a sábado'], cuts: [{ src: CUT.tapa, style: 'right:-60px;bottom:300px;width:330px;transform:rotate(8deg)' }], alt: 'Cierre con el botón de WhatsApp y el número 300 516 2421.' },
    ],
    caption: `¿Qué hacemos de cena hoy? Esa pregunta ya no tiene que dolerte.

Una bandeja de 5 empanadas en el congelador y la cena está lista en unos 12 minutos de horno. Lunes, martes, miércoles… cada día un sabor distinto.

Gourmet x5 · $19.900
Tradicional x5 · $12.900

¿Cuál sería tu empanada del lunes? Te leemos 👇`,
    short: 'Tu semana resuelta: bandejas x5 congeladas, gourmet $19.900 y tradicional $12.900. Pide por WhatsApp 300 516 2421.',
    tags: '#CenaResuelta #EmpanadasAlHorno #Cajicá #Chía #YoAmoLaEmpanada #ComidaEnCasa #ComidaCajicá',
    notes: ['Preguntar en comentarios: "¿Cuál sería tu empanada del lunes?" y responder cada uno en la primera hora.', 'Tiempos de horno son orientativos (fuente: documento comercial del negocio).'],
  },
  {
    n: '10', slug: 'lasana-en-5-minutos', cap: 'IV · Tu semana, resuelta', title: 'Lasaña lista en 5 minutos', kind: 'Carrusel · 5',
    date: 'Jue 12 nov', time: '12:30 p. m.', rol: 'Lleva a la lasaña personal como solución de entre semana.', aud: 'B2C-1 y B2C-2',
    slides: [
      { t: 'coverCut', bg: 'bg-cream', kick: 'Horneada y congelada', h: 'Lasaña lista<br><em class="r">en 5 minutos.</em>', sub: 'Solo calientas y a la mesa.', glow: 'left:140px;top:60px;width:800px;height:700px;background:radial-gradient(#ffe3bb,rgba(255,227,187,0) 68%)',
        cuts: [{ src: CUT.lasT, style: 'left:30px;top:115px;width:870px' }], alt: 'Lasaña horneada en bandeja de aluminio individual con su tapa con la marca. Texto: Lasaña lista en 5 minutos.' },
      { t: 'stat', bg: 'bg-red hearts', kick: 'Tamaño personal', big: '440', unit: 'g', h: 'Una lasaña,<br>una persona.', body: 'De res o de pechuga, con queso gratinado. Horneada y congelada.', bw: '500px', cuts: [{ src: CUT.lasH, style: 'right:-80px;bottom:150px;width:560px;transform:rotate(-6deg)' }], alt: 'Texto: 440 gramos. Una lasaña, una persona.' },
      { t: 'steps', bg: 'bg-cream', kick: 'Así de fácil', h: 'Tres pasos<br>y a comer.', items: [
        { h: 'Sácala del congelador', p: 'Sin cocinar nada.' }, { h: 'Caliéntala', p: 'En el microondas, unos 5 minutos.' }, { h: 'Sírvela', p: 'Sola o con ensalada, como prefieras.' }],
        note: 'Tiempo orientativo; depende de tu microondas.', cuts: [{ src: CUT.lasH, style: 'right:-60px;top:330px;width:430px;transform:rotate(7deg)' }], alt: 'Tres pasos: sacarla del congelador, calentarla unos 5 minutos en microondas y servirla.' },
      { t: 'cards', bg: 'bg-ink', kick: 'Por qué la queremos', h: 'Lo que la hace<br><em class="r">distinta.</em>', items: [
        { ic: 'flame', h: 'Gratinada de verdad', p: 'Queso dorado por encima.' }, { ic: 'check', h: 'Res o pechuga', p: 'Tú eliges el relleno.' }, { ic: 'snow', h: 'Para guardar', p: 'Congelada, hasta que la quieras.' }, { ic: 'clock', h: 'Lista en minutos', p: 'Sin ensuciar la cocina.' }], alt: 'Cuatro razones: gratinada, res o pechuga, congelada y lista en minutos.' },
      { t: 'cta', bg: 'bg-red hearts', kick: 'Lasaña personal', h: '$19.900.<br>Pídela <em class="r">hoy.</em>', body: 'Lasaña de res o pechuga, lista para calentar. Entregamos en Cajicá y Chía.', chips: ['Res', 'Pechuga'], cuts: [{ src: CUT.lasT, style: 'right:-90px;bottom:300px;width:520px;transform:rotate(-4deg)' }], alt: 'Lasaña personal a $19.900. Pedidos por WhatsApp 300 516 2421.' },
    ],
    caption: `Cinco minutos de microondas y la cena está servida. 🧀

Lasaña personal de 440 g, horneada y congelada. De res o de pechuga, con el queso bien gratinado. Para guardarla en el congelador y sacarla justo cuando la necesites.

Lasaña lista para calentar · $19.900

¿Res o pechuga? Cuéntanos en comentarios.`,
    short: 'Lasaña personal de 440 g, de res o pechuga, lista en 5 minutos. $19.900. Pide al 300 516 2421.',
    tags: '#LasañaCajicá #CenaRápida #Lasaña #Cajicá #Chía #YoAmoLaEmpanada #ComidaEnCasa',
    notes: ['Validar con el negocio: peso de 440 g horneada o congelada, y precio de la lasaña lista para calentar ($19.900 en el documento comercial; en la web sigue también $23.900 "al horno").', 'Tiempo de microondas (5 min) viene de las instrucciones de preparación del negocio.'],
  },
  {
    n: '11', slug: 'el-queso-que-se-estira', cap: 'IV · Tu semana, resuelta', title: 'El queso que se estira', kind: 'Post · 1 + Historias · 3',
    date: 'Sáb 14 nov', time: '10:00 a. m.', rol: 'La pieza antojo del fin de semana. Imagen provocativa de la lasaña personal.', aud: 'B2C-2 · el antojo',
    slides: [
      { t: 'coverPhoto', file: 'post', bg: 'bg-ink', photo: IA.quesoPersonal, op: '50% 40%', kick: 'Sábado de antojo', h: 'El queso que<br><em class="r">se estira.</em>', sub: 'Lasaña personal de res o pechuga · $19.900', alt: 'Un tenedor levanta un trozo de lasaña de una bandeja de aluminio individual y el queso se estira en hilos. Texto: El queso que se estira.' },
      { t: 'sCover', file: 'historia-1', photo: IA.quesoPersonal, op: '50% 40%', kick: 'Hoy toca', h: 'Lasaña.<br><em class="r">Y queso.</em>', sub: 'De res o de pechuga. Personal, lista para calentar.', tap: 'Pídela por WhatsApp', alt: 'Historia: lasaña con el queso estirándose. Texto: Hoy toca lasaña.' },
      { t: 'sPoll', file: 'historia-2', bg: 'bg-red hearts', kick: 'Tú decides', h: '¿Res o<br>pechuga?', opts: ['Res', 'Pechuga'], hint: 'Vota en la encuesta', alt: 'Historia con encuesta: ¿Res o pechuga?' },
      { t: 'sInfo', file: 'historia-3', bg: 'bg-ink', hearts: true, kick: 'Pide la tuya', h: 'Hoy atendemos<br>hasta las <em class="r">9&nbsp;p.&nbsp;m.</em>', body: 'Entregamos en Cajicá y Chía.', info: [{ ic: 'clock', t: 'Lunes a sábado · 8 a. m. a 9 p. m.' }, { ic: 'pin', t: 'La Séptima, Cl. 7 #4-79, Cajicá' }], cta: 'Pedir por WhatsApp', alt: 'Historia de cierre con horario y el botón de WhatsApp 300 516 2421.' },
    ],
    caption: `Mira cómo se estira. 🧀

Lasaña personal de res o de pechuga, con el queso gratinado y listo para derretirte el sábado. Horneada y congelada: la calientas y a la mesa.

Lasaña lista para calentar · $19.900

¿Res o pechuga? Te leemos 👇`,
    short: 'Lasaña personal de res o pechuga con el queso que se estira. $19.900. Pide al 300 516 2421.',
    tags: '#QuesoQueSeEstira #LasañaCajicá #Lasaña #Cajicá #YoAmoLaEmpanada #ComidaCajicá',
    notes: ['Historia 2: agregar sticker de **encuesta** (Res / Pechuga) en la zona libre inferior (y ≈ 1450–1650).', 'Historia 3: agregar sticker de **enlace** a `https://wa.me/573005162421?text=Hola%2C%20quiero%20pedir%20una%20lasa%C3%B1a` (zona libre y ≈ 1500–1700).', 'La imagen de la lasaña fue generada con IA a partir de la foto real del producto (bandeja individual): publicar como imagen de ambiente. Meta puede mostrar la etiqueta "Info de IA".'],
  },

  // ───────────── SEMANA 2 · Por dentro ─────────────
  {
    n: '12', slug: 'la-lasana-por-dentro', cap: 'IV · Tu semana, resuelta', title: 'La lasaña por dentro', kind: 'Carrusel · 6',
    date: 'Mar 17 nov', time: '12:30 p. m.', rol: 'Confianza: qué lleva y cómo es la lasaña personal.', aud: 'B2C-2 · el antojo',
    slides: [
      { t: 'coverCut', bg: 'bg-ink', kick: 'Capa por capa', h: 'La lasaña<br><em class="r">por dentro.</em>', sub: 'Personal. De res o de pechuga.', glow: 'left:200px;top:40px;width:700px;height:760px;background:radial-gradient(rgba(255,150,60,.35),rgba(255,150,60,0) 66%)',
        cuts: [{ src: CUT.lasQ, style: 'left:210px;top:105px;width:610px' }], alt: 'Lasaña en bandeja con un tenedor levantando queso estirado. Texto: La lasaña por dentro.' },
      { t: 'layers', bg: 'bg-cream', kick: 'Las capas', h: 'Cinco capas,<br>un solo bocado.', layers: [
        { h: 'Queso gratinado', s: 'Dorado por encima' }, { h: 'Doble crema', s: 'Para que quede cremosa' }, { h: 'Relleno', s: 'De res o de pechuga' }, { h: 'Salsa criolla', s: 'Cebolla y tomate' }, { h: 'Pasta', s: 'En láminas' }], alt: 'Esquema de las capas de la lasaña: queso gratinado, doble crema, relleno, salsa criolla y pasta.' },
      { t: 'statement', bg: 'bg-red hearts', kick: 'La base de la casa', h: 'Salsa<br><em class="r">criolla.</em>', body: 'Cebolla y tomate cocinados con calma. Es lo que le da su sabor a casa a la lasaña.', bw: '520px', cuts: [{ src: CUT.lasQ, style: 'right:-70px;bottom:100px;width:500px;transform:rotate(5deg)' }], alt: 'Texto: Salsa criolla. La base de la casa.' },
      { t: 'stat', bg: 'bg-tan', kick: 'Tamaño personal', big: '440', unit: 'g', h: 'Una porción<br>para ti.', body: 'No necesitas compartirla. Tampoco tienes que contar porciones.', bw: '500px', cuts: [{ src: CUT.lasH, style: 'right:-60px;bottom:140px;width:540px;transform:rotate(-5deg)' }], alt: 'Texto: 440 gramos. Una porción para ti.' },
      { t: 'photoText', bg: 'bg-ink', photo: IA.quesoPersonal, op: '50% 38%', ph: '820px', kick: 'Así se sirve', h: 'Gratinada y<br>caliente.', body: 'Res o pechuga, tú eliges.', alt: 'Un tenedor levanta lasaña con queso estirado.' },
      { t: 'cta', bg: 'bg-cream', kick: 'Pruébala', h: 'Lasaña personal,<br><em class="r">$19.900.</em>', body: 'Pídela por WhatsApp y te confirmamos entrega o recogida.', chips: ['Res', 'Pechuga', 'Cajicá y Chía'], cuts: [{ src: CUT.lasH, style: 'right:-70px;bottom:300px;width:470px;transform:rotate(-6deg)' }], alt: 'Cierre: lasaña personal a $19.900 y WhatsApp 300 516 2421.' },
    ],
    caption: `¿Qué lleva nuestra lasaña? 🧀

Pasta, relleno de res o de pechuga en salsa criolla, doble crema y el queso gratinado por encima. Todo en una porción personal de 440 g, horneada y congelada.

Sin compartir. Sin contar porciones.

Lasaña lista para calentar · $19.900`,
    short: 'Cinco capas, 440 g, de res o pechuga. Lasaña personal $19.900. Pide al 300 516 2421.',
    tags: '#LasañaCajicá #LasañaDeRes #LasañaDePechuga #Cajicá #YoAmoLaEmpanada #ComidaCajicá',
    notes: ['Validar con el negocio: las capas y los ingredientes (doble crema, salsa criolla de cebolla y tomate, pasta en láminas) salen de las fichas de costos; confirmar que se pueden publicar así.'],
  },
  {
    n: '13', slug: 'que-empanada-eres', cap: 'IV · Tu semana, resuelta', title: '¿Qué empanada eres?', kind: 'Carrusel · 6',
    date: 'Jue 19 nov', time: '12:30 p. m.', rol: 'Interacción: los 9 sabores en clave de personalidad. Comentarios y guardados.', aud: 'B2C-1 y B2C-2',
    slides: [
      { t: 'coverPhoto', bg: 'bg-ink', photo: IA.horno, op: '50% 45%', kick: '9 sabores', h: '¿Qué empanada<br><em class="r">eres?</em>', sub: 'Una de estas es la tuya.', alt: 'Unas manos con guantes sacan del horno una bandeja de empanadas doradas y humeantes. Texto: ¿Qué empanada eres?' },
      { t: 'quiz', bg: 'bg-cream', kick: 'Gourmet · 1 a 3', h: 'Las de siempre.', items: [{ n: 1, h: 'Res', p: 'Firme y clásica. Nunca falla.' }, { n: 2, h: 'Pechuga', p: 'Tranquila y constante.' }, { n: 3, h: 'Pechuga y queso', p: 'Cálida. Siempre abraza.' }], alt: 'Sabores 1 a 3: res, pechuga y pechuga y queso.' },
      { t: 'quiz', bg: 'bg-ink', kick: 'Gourmet · 4 a 6', h: 'Las atrevidas.', items: [{ n: 4, h: 'Jamón ahumado y queso', p: 'Práctica. Siempre acompañada.' }, { n: 5, h: 'Hawaiana', p: 'Dulce y salada, sin pedir permiso.' }, { n: 6, h: 'Pavo y queso', p: 'Elegante y sin afán.' }], alt: 'Sabores 4 a 6: jamón ahumado y queso, hawaiana y pavo y queso.' },
      { t: 'quiz', bg: 'bg-tan', kick: 'Gourmet y tradicionales · 7 a 9', h: 'Las de casa.', items: [{ n: 7, h: 'Champiñón, cebolla y queso', p: 'La vegetariana de la casa.' }, { n: 8, h: 'Carne con arroz', p: 'De domingo en familia.' }, { n: 9, h: 'Pollo con arroz', p: 'De confianza.' }], alt: 'Sabores 7 a 9: champiñón cebolla y queso, carne con arroz y pollo con arroz.' },
      { t: 'statement', bg: 'bg-red hearts', kick: 'Ahora tú', h: 'Cuéntanos<br>cuál <em class="r">eres.</em>', body: 'Comenta el número de tu empanada y la de quien te la pidió siempre.', bw: '560px', cuts: [{ src: CUT.cong, style: 'right:-30px;bottom:100px;width:380px;transform:rotate(7deg)' }], alt: 'Texto: Cuéntanos cuál eres. Comenta el número de tu empanada.' },
      { t: 'cta', bg: 'bg-cream', kick: 'Pide la tuya', h: '9 sabores,<br>una <em class="r">bandeja.</em>', body: 'Gourmet x5 $19.900 · Tradicional x5 $12.900. Congeladas, listas para hornear.', chips: ['Cajicá y Chía'], cuts: [{ src: CUT.tapa, style: 'right:-60px;bottom:300px;width:400px;transform:rotate(8deg)' }], alt: 'Cierre con precios de bandeja y WhatsApp 300 516 2421.' },
    ],
    caption: `¿Qué empanada eres? 🔥

1 Res · 2 Pechuga · 3 Pechuga y queso · 4 Jamón ahumado y queso · 5 Hawaiana · 6 Pavo y queso · 7 Champiñón, cebolla y queso · 8 Carne con arroz · 9 Pollo con arroz.

Comenta el número de la tuya. Y el de quien te la pide siempre. 👇

Gourmet x5 · $19.900  |  Tradicional x5 · $12.900`,
    short: '9 sabores: ¿cuál eres? Comenta tu número. Bandejas x5 desde $12.900. Pide al 300 516 2421.',
    tags: '#QuéEmpanadaEres #EmpanadasAlHorno #9Sabores #Cajicá #YoAmoLaEmpanada #ComidaCajicá',
    notes: ['Responder cada comentario con el sabor y una frase corta; mejora el alcance orgánico.', 'Las descripciones de personalidad son juego creativo, no claims del producto.'],
  },
  {
    n: '14', slug: 'tu-vitrina-tu-cafeteria', cap: 'V · Fin de año', title: 'Empanadas para tu negocio', kind: 'Carrusel · 5',
    date: 'Sáb 21 nov', time: '9:00 a. m.', rol: 'Prospección B2B: precio por mayor y promoción 15 + 1.', aud: 'B2B · tiendas, cafeterías, minimercados',
    slides: [
      { t: 'coverPhoto', bg: 'bg-ink', photo: IA.vitrina, op: '50% 50%', kick: 'Empanadas gourmet', h: 'Para tu<br><em class="r">negocio.</em>', sub: 'Congeladas, con etiqueta y listas para vender.', alt: 'Una barista entrega una empanada a un cliente frente a una vitrina llena de empanadas horneadas. Texto: Empanadas gourmet para tu negocio.' },
      { t: 'cards', bg: 'bg-cream', kick: 'Para quién', h: 'Donde hay clientes,<br>hay empanadas.', items: [{ ic: 'store', h: 'Tiendas', p: 'De barrio y minimercados.' }, { ic: 'users', h: 'Cafeterías', p: 'Algo rico para acompañar el café.' }, { ic: 'box', h: 'Supermercados', p: 'Bandejas listas para exhibir.' }, { ic: 'cal', h: 'Eventos', p: 'Reuniones y celebraciones.' }], alt: 'Para tiendas, cafeterías, supermercados y eventos.' },
      { t: 'rows', bg: 'bg-tan', kick: 'Precio por mayor', h: 'Desde 10<br>unidades.', rows: [{ d: 'Gourmet', f: 'Bandeja x5', p: '$17.900' }, { d: 'Tradicional', f: 'Bandeja x5', p: '$11.000' }, { d: 'Lasaña', f: 'Personal', p: '$17.900' }],
        note: 'Empanadas sueltas desde 40 unidades: gourmet $3.900 · tradicional $2.600. Pago: 50% de anticipo y 50% contra entrega.', cuts: [{ src: CUT.cong, style: 'right:-20px;top:270px;width:300px;transform:rotate(7deg)' }], alt: 'Precios por mayor: bandeja gourmet x5 $17.900, tradicional $11.000, lasaña $17.900.' },
      { t: 'promo', bg: 'bg-red hearts', kick: 'Promoción', h: 'Compra 15,<br>recibe 16.', duo: [{ n: '15', h: 'Bandejas', p: '+ 1 bandeja gratis' }, { n: '15', h: 'Lasañas', p: '+ 1 lasaña gratis' }], calc: 'Aplica a pedidos por mayor. Pregúntanos por tu pedido.', alt: 'Promoción: 15 bandejas más 1 gratis, o 15 lasañas más 1 gratis.' },
      { t: 'cta', bg: 'bg-ink', kick: 'Cotiza', h: 'Cuéntanos<br>de tu <em class="r">negocio.</em>', body: 'Te respondemos con la lista de precios y las condiciones.', chips: ['Tiendas', 'Cafeterías', 'Minimercados'], cuts: [{ src: CUT.horn, style: 'right:-60px;bottom:300px;width:380px;transform:rotate(7deg)' }], alt: 'Cierre: cotiza por WhatsApp 300 516 2421.' },
    ],
    caption: `Si tienes una tienda, una cafetería o un minimercado, esto te interesa. 🧀

Empanadas gourmet y tradicionales congeladas, con etiqueta, y lasañas personales listas para calentar. Precio por mayor desde 10 unidades:

Bandeja gourmet x5 · $17.900
Bandeja tradicional x5 · $11.000
Lasaña personal · $17.900

Y la promo: compra 15 y recibe 16 (bandejas o lasañas). Cuéntanos de tu negocio por WhatsApp.`,
    short: 'Empanadas y lasañas para tu negocio: precio por mayor desde 10 unidades y promo 15+1. Cotiza al 300 516 2421.',
    tags: '#EmpanadasPorMayor #NegociosCajicá #Cafeterías #Tiendas #Cajicá #YoAmoLaEmpanada #Mayoristas',
    notes: ['Validar con el negocio antes de publicar: precios por mayor (documento comercial) y que la promo 15+1 aplique a todo pedido por mayor.', 'CTA con botón "Enviar mensaje" si se promociona como anuncio B2B.'],
  },

  // ───────────── SEMANA 3 · Fin de año ─────────────
  {
    n: '15', slug: 'reunion-fin-de-ano', cap: 'V · Fin de año', title: 'La reunión de fin de año, resuelta', kind: 'Carrusel · 6',
    date: 'Mar 24 nov', time: '12:30 p. m.', rol: 'Captación de eventos: pasos y plazos reales.', aud: 'Eventos y oficinas',
    slides: [
      { t: 'coverPhoto', bg: 'bg-ink', photo: IA.oficina, op: '50% 40%', kick: 'Fin de año', h: 'Tu reunión,<br><em class="r">resuelta.</em>', sub: 'Empanadas para oficinas, familias y celebraciones.', alt: 'Cuatro compañeros de trabajo ríen y comen empanadas horneadas en una mesa de reuniones. Texto: Tu reunión de fin de año, resuelta.' },
      { t: 'cards', bg: 'bg-cream', kick: 'Para cada mesa', h: 'Donde hay gente,<br>hay empanadas.', items: [{ ic: 'cal', h: 'Celebraciones', p: 'Cumpleaños y reuniones.' }, { ic: 'users', h: 'Oficinas', p: 'El almuerzo o el once del equipo.' }, { ic: 'box', h: 'Familias', p: 'Para la mesa grande.' }, { ic: 'store', h: 'Empresas', p: 'Cierres de año y lanzamientos.' }], alt: 'Celebraciones, oficinas, familias y empresas.' },
      { t: 'steps', bg: 'bg-ink', kick: 'Así de simple', h: 'Tu evento<br>en 3 pasos.', items: [{ h: 'Cuéntanos', p: 'La fecha, la hora y cuántas personas serán.' }, { h: 'Te proponemos', p: 'Sabores y cantidades para tu grupo.' }, { h: 'Coordinamos', p: 'Entrega unas 2 a 3 horas antes del consumo.' }], cuts: [{ src: CUT.plato, style: 'right:-170px;top:410px;width:620px;transform:rotate(-4deg)' }], alt: 'Tres pasos para pedir para un evento.' },
      { t: 'rows', bg: 'bg-tan', kick: 'Con cuánto tiempo', h: 'Avísanos<br>con tiempo.', rows: [{ d: 'Hasta 50', f: 'Empanadas', p: '1 día' }, { d: '50 a 100', f: 'Empanadas', p: '2 días' }, { d: 'Más de 100', f: 'Empanadas', p: '4 días' }], note: 'Plazos de anticipación orientativos. Sujetos a disponibilidad: pregúntanos por tu fecha.', alt: 'Plazos para pedir: hasta 50 empanadas, 1 día; de 50 a 100, 2 días; más de 100, 4 días.' },
      { t: 'statement', bg: 'bg-red hearts', kick: 'Sin vueltas', h: 'Pocas o<br>muchas.<br><em class="r">Sin mínimo.</em>', body: 'No exigimos un pedido mínimo especial para eventos.', bw: '600px', cuts: [{ src: CUT.plato, style: 'left:-100px;bottom:130px;width:760px;transform:rotate(-3deg)' }], alt: 'Texto: Pocas o muchas. Sin mínimo.' },
      { t: 'cta', bg: 'bg-cream', kick: 'Escríbenos', h: 'Cuéntanos<br>tu <em class="r">reunión.</em>', body: 'Con la fecha y el número de personas te armamos la propuesta.', chips: ['Cumpleaños', 'Oficinas', 'Familias', 'Empresas'], cuts: [{ src: CUT.tapa, style: 'right:-60px;bottom:300px;width:360px;transform:rotate(8deg)' }], alt: 'Cierre: cuéntanos tu reunión por WhatsApp 300 516 2421.' },
    ],
    caption: `Las reuniones de fin de año se planean ahora. 🔥

Cuéntanos la fecha, la hora y cuántas personas serán, y te armamos la propuesta de empanadas. Entregamos unas 2 a 3 horas antes del consumo.

¿Con cuánto tiempo avisar? Hasta 50 empanadas: 1 día · De 50 a 100: 2 días · Más de 100: 4 días.

Sin pedido mínimo especial para eventos.`,
    short: 'Tu reunión de fin de año, resuelta. Cuéntanos fecha y cantidad: 300 516 2421.',
    tags: '#EventosCajicá #EmpanadasParaEventos #FinDeAño #Cajicá #Chía #YoAmoLaEmpanada #Oficinas',
    notes: ['Validar plazos (1 / 2 / 4 días) y "sin mínimo especial" con el negocio: salen del documento comercial.', 'Para pauta B2B de eventos, mensaje prellenado: "Quiero cotizar para un evento".'],
  },
  {
    n: '16', slug: 'llena-el-congelador', cap: 'V · Fin de año', title: 'Llena el congelador: 15 + 1', kind: 'Carrusel · 5',
    date: 'Jue 26 nov', time: '12:30 p. m.', rol: 'Promoción 15 + 1 para pedidos por mayor.', aud: 'B2B y familias grandes',
    slides: [
      { t: 'coverCut', bg: 'bg-tan', kick: 'Fin de mes', h: 'Llena el<br><em class="r">congelador.</em>', sub: 'Compra 15, recibe 16.', cuts: [{ src: CUT.cong, style: 'left:-30px;top:170px;width:380px;transform:rotate(-8deg)' }, { src: CUT.lasT, style: 'left:300px;top:230px;width:640px;transform:rotate(3deg)' }, { src: CUT.horn, style: 'left:690px;top:120px;width:390px;transform:rotate(7deg)' }], alt: 'Bandejas de empanadas y lasaña personal sobre fondo arena. Texto: Llena el congelador.' },
      { t: 'promo', bg: 'bg-red hearts', kick: 'La promoción', h: '15 + 1<br>gratis.', duo: [{ n: '15', h: 'Bandejas', p: '+ 1 bandeja gratis' }, { n: '15', h: 'Lasañas', p: '+ 1 lasaña gratis' }], calc: 'Pagas 15 y recibes 16.', alt: 'Promoción: 15 bandejas más 1 gratis o 15 lasañas más 1 gratis.' },
      { t: 'rows', bg: 'bg-ink', kick: 'Precio por mayor', h: 'Las cuentas,<br>claras.', rows: [{ d: 'Bandeja', f: 'Gourmet x5', s: '15 bandejas = 16', p: '$17.900' }, { d: 'Bandeja', f: 'Tradicional x5', s: '15 bandejas = 16', p: '$11.000' }, { d: 'Lasaña', f: 'Personal', s: '15 lasañas = 16', p: '$17.900' }], note: 'Precio por mayor desde 10 unidades. Ejemplo: 15 lasañas a $17.900 = $268.500 y recibes 16.', alt: 'Precios por mayor y ejemplo: 15 lasañas a $17.900 son $268.500 y recibes 16.' },
      { t: 'steps', bg: 'bg-cream', kick: 'Cómo pedir', h: 'Tres pasos<br>y listo.', items: [{ h: 'Escríbenos', p: 'Cuántas bandejas o lasañas quieres.' }, { h: 'Te confirmamos', p: 'Total, fecha y forma de entrega.' }, { h: 'Recibe y guarda', p: 'Directo al congelador.' }], cuts: [{ src: CUT.lasT, style: 'right:-120px;top:330px;width:540px;transform:rotate(5deg)' }], alt: 'Tres pasos para pedir la promoción.' },
      { t: 'cta', bg: 'bg-red hearts', kick: 'Aprovecha', h: 'Pide tu<br><em class="r">15 + 1.</em>', body: 'Cuéntanos qué quieres llevar y armamos tu pedido.', chips: ['Bandejas', 'Lasañas'], cuts: [{ src: CUT.cong, style: 'right:-30px;bottom:300px;width:350px;transform:rotate(8deg)' }], alt: 'Cierre: pide tu 15 más 1 por WhatsApp 300 516 2421.' },
    ],
    caption: `Fin de mes: llena el congelador. 🧀

Compra 15 bandejas y llévate 1 gratis. O 15 lasañas y llévate 1 gratis. Pagas 15 y recibes 16.

Precio por mayor desde 10 unidades:
Bandeja gourmet x5 · $17.900
Bandeja tradicional x5 · $11.000
Lasaña personal · $17.900

Cuéntanos qué quieres llevar y armamos tu pedido por WhatsApp.`,
    short: 'Compra 15 y recibe 16: bandejas o lasañas. Precio por mayor desde 10 unidades. Pide al 300 516 2421.',
    tags: '#Promo151 #EmpanadasPorMayor #LlenaElCongelador #Cajicá #YoAmoLaEmpanada #Lasaña',
    notes: ['Validar con el negocio: condiciones de la promo 15 + 1 (vigencia, si aplica a precio normal o por mayor) y los precios por mayor.', 'La cuenta del ejemplo: 15 × $17.900 = $268.500.'],
  },
  {
    n: '17', slug: 'sabado-de-pedidos', cap: 'V · Fin de año', title: 'Hoy atendemos hasta las 9 p. m.', kind: 'Post · 1 + Historias · 3',
    date: 'Sáb 28 nov', time: '10:00 a. m.', rol: 'Recordatorio de servicio: horario y cobertura. Convierte el sábado.', aud: 'B2C · Cajicá y Chía',
    slides: [
      { t: 'coverCut', file: 'post', bg: 'bg-ink', kick: 'Sábado de pedidos', h: 'Hoy hasta las<br><em class="r">9&nbsp;p.&nbsp;m.</em>', sub: 'Atendemos en Cajicá y Chía. Pide por WhatsApp.', glow: 'left:200px;top:50px;width:700px;height:700px;background:radial-gradient(rgba(228,30,19,.45),rgba(228,30,19,0) 66%)', cuts: [{ src: CUT.lasT, style: 'left:100px;top:130px;width:800px' }], alt: 'Lasaña personal con su tapa sobre fondo negro. Texto: Hoy atendemos hasta las 9 p. m.' },
      { t: 'sCover', file: 'historia-1', photo: IA.familiaPersonal, op: '50% 50%', kick: 'Sábado de pedidos', h: 'Una lasaña<br>para <em class="r">cada uno.</em>', sub: 'Personal, de res o de pechuga.', tap: 'Pide por WhatsApp', alt: 'Historia: una familia en la mesa con lasañas personales. Texto: Una lasaña para cada uno.' },
      { t: 'sPoll', file: 'historia-2', bg: 'bg-red hearts', kick: 'Hoy en casa', h: '¿Lasaña o<br>empanadas?', opts: ['Lasaña', 'Empanadas'], hint: 'Vota en la encuesta', alt: 'Historia con encuesta: ¿Lasaña o empanadas?' },
      { t: 'sInfo', file: 'historia-3', bg: 'bg-ink', hearts: true, kick: 'Así pides', h: 'Escríbenos<br>y listo.', body: 'Te confirmamos entrega o recogida.', info: [{ ic: 'clock', t: 'Hoy hasta las 9 p. m.' }, { ic: 'pin', t: 'Entregas en Cajicá y Chía' }], cta: 'Pedir por WhatsApp', alt: 'Historia de cierre con horario y WhatsApp 300 516 2421.' },
    ],
    caption: `Hoy sábado atendemos hasta las 9:00 p. m. 🔥

Pide tus empanadas o tu lasaña personal y te las llevamos en Cajicá y Chía, o pasa por la tienda. Escríbenos y te confirmamos entrega o recogida.

Recuerda: de lunes a sábado, de 8:00 a. m. a 9:00 p. m.`,
    short: 'Hoy atendemos hasta las 9 p. m. Entregas en Cajicá y Chía. Pide al 300 516 2421.',
    tags: '#Cajicá #Chía #DomiciliosCajicá #SábadoDeAntojo #YoAmoLaEmpanada #ComidaCajicá',
    notes: ['Historia 2: agregar sticker de **encuesta** (Lasaña / Empanadas).', 'Historia 3: sticker de **enlace** a `https://wa.me/573005162421`.', 'Validar el valor del domicilio y la forma de entrega con el negocio antes de mencionarlos: aquí solo se dice "entregas en Cajicá y Chía".'],
  },

  // ───────────── SEMANA 4 · Diciembre llega ─────────────
  {
    n: '18', slug: 'diciembre-en-bandeja', cap: 'V · Fin de año', title: 'Diciembre se sirve en bandeja', kind: 'Carrusel · 6',
    date: 'Mar 1 dic', time: '12:30 p. m.', rol: 'Abre diciembre: reuniones, novenas y visitas en casa.', aud: 'B2C y eventos',
    slides: [
      { t: 'coverCut', bg: 'bg-red hearts', kick: 'Llega diciembre', h: 'Diciembre se sirve<br><em class="r">en bandeja.</em>', sub: 'Ten con qué recibir a tu gente.', cuts: [{ src: CUT.cong, style: 'left:-40px;top:190px;width:380px;transform:rotate(-8deg)' }, { src: CUT.lasT, style: 'left:290px;top:250px;width:640px;transform:rotate(3deg)' }, { src: CUT.horn, style: 'left:700px;top:130px;width:380px;transform:rotate(7deg)' }], alt: 'Bandejas de empanadas y lasaña personal sobre fondo rojo. Texto: Diciembre se sirve en bandeja.' },
      { t: 'statement', bg: 'bg-cream hearts', kick: 'Lo sabes', h: 'Diciembre trae<br><em class="r">gente</em><br>a tu casa.', body: 'Visitas, reuniones, novenas. Mejor tener algo rico en el congelador.', bw: '540px', cuts: [{ src: CUT.cong, style: 'right:-30px;bottom:100px;width:400px;transform:rotate(7deg)' }], alt: 'Texto: Diciembre trae gente a tu casa.' },
      { t: 'cards', bg: 'bg-ink', kick: 'Para cada plan', h: 'Siempre hay<br>una <em class="r">razón.</em>', items: [{ ic: 'cal', h: 'La novena', p: 'Con algo rico para compartir.' }, { ic: 'users', h: 'La oficina', p: 'El cierre de año del equipo.' }, { ic: 'box', h: 'La visita', p: 'Que llegó sin avisar.' }, { ic: 'snow', h: 'El congelador', p: 'Listo para lo que venga.' }], alt: 'Para la novena, la oficina, la visita y el congelador.' },
      { t: 'steps', bg: 'bg-tan', kick: 'Fácil', h: 'Pide hoy,<br>hornea después.', items: [{ h: 'Pide con tiempo', p: 'Escríbenos qué y cuánto necesitas.' }, { h: 'Guárdalo congelado', p: 'Bandejas x5 y lasañas listas.' }, { h: 'Caliéntalo cuando llegue la visita', p: 'Unos 12 minutos de horno.' }], note: 'Tiempo de horno orientativo.', cuts: [{ src: CUT.lasH, style: 'right:-60px;top:360px;width:420px;transform:rotate(7deg)' }], alt: 'Tres pasos: pedir con tiempo, guardar congelado y calentar cuando llegue la visita.' },
      { t: 'rows', bg: 'bg-red hearts', kick: 'Lo que puedes pedir', h: 'Tres opciones.', rows: [{ d: 'Gourmet', f: 'Bandeja x5', p: '$19.900' }, { d: 'Tradicional', f: 'Bandeja x5', p: '$12.900' }, { d: 'Lasaña', f: 'Personal', p: '$19.900' }], note: 'Para eventos y pedidos grandes, cuéntanos la fecha: te armamos la propuesta.', cuts: [{ src: CUT.lasT, style: 'right:-110px;top:300px;width:520px;transform:rotate(5deg)' }], alt: 'Precios: gourmet x5 $19.900, tradicional x5 $12.900, lasaña personal $19.900.' },
      { t: 'cta', bg: 'bg-ink', kick: 'Pide ya', h: 'Que no te<br>falte <em class="r">nada.</em>', body: 'Escríbenos y te confirmamos entrega o recogida.', chips: ['Cajicá y Chía'], cuts: [{ src: CUT.horn, style: 'right:-50px;bottom:300px;width:370px;transform:rotate(7deg)' }], alt: 'Cierre: WhatsApp 300 516 2421.' },
    ],
    caption: `Diciembre trae gente a la casa. ¿Ya tienes con qué recibirla? 🎄

Bandejas x5 congeladas y lasañas personales listas para calentar: pídelas hoy y guárdalas hasta que lleguen las visitas.

Gourmet x5 · $19.900
Tradicional x5 · $12.900
Lasaña personal · $19.900

¿Reunión grande? Cuéntanos la fecha y la cantidad y armamos la propuesta.`,
    short: 'Diciembre se sirve en bandeja: empanadas x5 desde $12.900 y lasaña personal $19.900. Pide al 300 516 2421.',
    tags: '#Diciembre #Novena #EmpanadasAlHorno #Cajicá #Chía #YoAmoLaEmpanada #ComidaCajicá',
    notes: ['Mencionar novenas en comentarios: las novenas empiezan el 16 de dic; a partir del 7 de dic se puede reforzar el tema.'],
  },
  {
    n: '19', slug: 'lo-que-nos-preguntan', cap: 'V · Fin de año', title: 'Lo que nos preguntan', kind: 'Carrusel · 6',
    date: 'Jue 3 dic', time: '12:30 p. m.', rol: 'Quita fricción: respuestas claras a las dudas que frenan un pedido.', aud: 'Todos',
    slides: [
      { t: 'coverCut', bg: 'bg-ink', kick: 'Preguntas frecuentes', h: 'Lo que nos<br><em class="r">preguntan.</em>', sub: 'Y lo que respondemos.', cuts: [{ src: CUT.tapa, style: 'right:-60px;top:140px;width:520px;transform:rotate(7deg)' }, { src: CUT.horn, style: 'left:-70px;top:230px;width:420px;transform:rotate(-8deg)' }], alt: 'Texto: Lo que nos preguntan.' },
      { t: 'faq', bg: 'bg-red hearts', mk: 'Pregunta 1', q: '¿Hacen<br>domicilio?', a: 'Sí, en Cajicá y Chía.', p: 'El valor depende de la dirección. Te lo confirmamos por WhatsApp antes de cerrar tu pedido.', chips: ['Cajicá', 'Chía'], alt: 'Pregunta: ¿Hacen domicilio? Sí, en Cajicá y Chía.' },
      { t: 'faq', bg: 'bg-ink', mk: 'Pregunta 2', q: '¿Cómo las<br>caliento?', a: 'Horno o air fryer: 200–220 °C.', p: 'Empanadas: unos 12 minutos. Lasaña: unos 5 minutos en el microondas. Los tiempos son orientativos.', chips: ['Horno', 'Air fryer', 'Microondas'], alt: 'Cómo calentarlas: horno o air fryer a 200 a 220 grados; la lasaña en microondas.' },
      { t: 'faq', bg: 'bg-cream', mk: 'Pregunta 3', q: '¿Tienen opción<br>vegetariana?', a: 'Sí: champiñón, cebolla y queso.', p: 'Es la única de los 9 sabores sin carne.', chips: ['Champiñón', 'Cebolla', 'Queso'], alt: 'Opción vegetariana: empanada de champiñón, cebolla y queso.' },
      { t: 'faq', bg: 'bg-tan', mk: 'Pregunta 4', q: '¿Tienen<br>gluten?', a: 'La masa contiene gluten de trigo.', p: 'También lecitina de soya, y puede tener trazas de leche. Los sabores con queso llevan lácteos. Si tienes alguna alergia, pregúntanos antes de pedir.', alt: 'La masa contiene gluten de trigo y lecitina de soya; puede tener trazas de leche.' },
      { t: 'cta', bg: 'bg-red hearts', kick: '¿Otra duda?', h: 'Pregúntanos<br>lo que <em class="r">quieras.</em>', body: 'Te respondemos por WhatsApp.', chips: ['Lunes a sábado', '8 a. m. a 9 p. m.'], alt: 'Cierre: escríbenos por WhatsApp 300 516 2421.' },
    ],
    caption: `Las preguntas que más nos hacen (y las respuestas). 👇

¿Hacen domicilio? Sí, en Cajicá y Chía. El valor depende de la dirección.
¿Cómo las caliento? Horno o air fryer a 200–220 °C; la lasaña, unos 5 minutos en el microondas.
¿Hay opción vegetariana? Sí: champiñón, cebolla y queso.
¿Tienen gluten? La masa contiene gluten de trigo y lecitina de soya, y puede tener trazas de leche.

¿Otra duda? Escríbenos.`,
    short: 'Domicilio, cómo calentarlas, opción vegetariana y alérgenos: las respuestas, claras. WhatsApp 300 516 2421.',
    tags: '#PreguntasFrecuentes #EmpanadasAlHorno #Cajicá #Chía #YoAmoLaEmpanada #ComidaCajicá',
    notes: ['La respuesta de alérgenos es textual de la información del negocio; no afirmar "sin gluten" ni "sin lácteos".', 'Validar el tema domicilio (quién hace la entrega y cómo se cobra) antes de publicar; aquí solo se dice cobertura y que el valor depende de la dirección.'],
  },
  {
    n: '20', slug: 'velitas-y-domingo', cap: 'V · Fin de año', title: 'Velitas, familia y empanadas', kind: 'Carrusel · 5',
    date: 'Sáb 5 dic', time: '10:00 a. m.', rol: 'Cierre del plan: pedido anticipado para el fin de semana y la noche de velitas.', aud: 'B2C y eventos',
    slides: [
      { t: 'coverCut', bg: 'bg-red hearts', kick: 'Semana de velitas', h: 'Velitas, familia<br>y <em class="r">empanadas.</em>', sub: 'Pide con tiempo y disfruta sin cocinar.', cuts: [{ src: CUT.plato, style: 'left:140px;top:320px;width:800px' }], alt: 'Plato con empanadas horneadas sobre fondo rojo. Texto: Velitas, familia y empanadas.' },
      { t: 'statement', bg: 'bg-ink', hearts: true, kick: 'Dato importante', h: 'Los domingos<br><em class="r">no atendemos.</em>', body: 'Atendemos de lunes a sábado. Si quieres algo rico para el domingo, pídelo hoy.', bw: '560px', cuts: [{ src: CUT.lasT, style: 'right:-100px;bottom:120px;width:560px;transform:rotate(-4deg)' }], alt: 'Texto: Los domingos no atendemos. Pide hoy para el fin de semana.' },
      { t: 'cards', bg: 'bg-cream', kick: 'Pide hoy para', h: 'Que no se<br>apague la <em class="r">mesa.</em>', items: [{ ic: 'cal', h: 'La noche de velitas', p: 'Algo rico para compartir.' }, { ic: 'users', h: 'La familia', p: 'Reunida en casa.' }, { ic: 'snow', h: 'El congelador', p: 'Listo para el domingo.' }, { ic: 'box', h: 'Los vecinos', p: 'Que siempre aparecen.' }], alt: 'Para la noche de velitas, la familia, el congelador y los vecinos.' },
      { t: 'rows', bg: 'bg-tan', kick: 'Para pedidos grandes', h: 'Avisa con<br>tiempo.', rows: [{ d: 'Hasta 50', f: 'Empanadas', p: '1 día' }, { d: '50 a 100', f: 'Empanadas', p: '2 días' }, { d: 'Más de 100', f: 'Empanadas', p: '4 días' }], note: 'Plazos orientativos, sujetos a disponibilidad. Atendemos de lunes a sábado.', cuts: [{ src: CUT.plato, style: 'right:-160px;top:320px;width:640px;transform:rotate(-4deg)' }], alt: 'Plazos: hasta 50 empanadas 1 día; 50 a 100, 2 días; más de 100, 4 días.' },
      { t: 'cta', bg: 'bg-red hearts', kick: 'Gracias por acompañarnos', h: 'Pide hoy.<br>Disfruta <em class="r">mañana.</em>', body: 'Gracias, Cajicá y Chía, por recibirnos en su mesa este mes.', chips: ['Cajicá y Chía', 'Lunes a sábado'], cuts: [{ src: CUT.horn, style: 'right:-50px;bottom:300px;width:370px;transform:rotate(7deg)' }], alt: 'Cierre: gracias, Cajicá y Chía. WhatsApp 300 516 2421.' },
    ],
    caption: `Se acercan las velitas y las reuniones en familia. 🕯️

Recuerda: atendemos de lunes a sábado, así que si quieres algo rico para el domingo, pídelo hoy. Empanadas x5, lasaña personal y, para pedidos grandes, avísanos con tiempo.

Hasta 50 empanadas: 1 día · 50 a 100: 2 días · Más de 100: 4 días.

Gracias, Cajicá y Chía, por recibirnos en su mesa este mes. ❤️`,
    short: 'Pide hoy para el domingo y las velitas. Atendemos de lunes a sábado. WhatsApp 300 516 2421.',
    tags: '#Velitas #DíaDeVelitas #EmpanadasAlHorno #Cajicá #Chía #YoAmoLaEmpanada #ComidaCajicá',
    notes: ['Validar el horario del festivo del 8 de dic y del lunes 7 con el negocio antes de mencionarlos: aquí solo se afirma "lunes a sábado" y "domingos no atendemos".'],
  },
];

export const DATA_BLOCK = DATOS;

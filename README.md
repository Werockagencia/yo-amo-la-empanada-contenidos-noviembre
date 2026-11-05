# Yo ❤ La Empanada · Contenidos noviembre–diciembre 2026

12 contenidos orgánicos (Nº 09 a Nº 20) para promocionar los productos durante **4 semanas, 3 por semana** (martes, jueves y sábado). Continúan la campaña de octubre (Nº 01 a Nº 08) con el mismo objetivo: pedidos por WhatsApp de lasañas y empanadas congeladas, y abrir los canales de eventos y de tiendas.

## Idea y capítulos
Capítulo **IV · Tu semana, resuelta** (semanas 1 y 2) y capítulo **V · Fin de año** (semanas 3 y 4).

| Sem. | Nº | Día | Pieza | Formato | Rol |
|---|---|---|---|---|---|
| 1 | 09 | Mar 10 nov · 12:30 p. m. | Tu semana, resuelta | Carrusel · 6 | Uso cotidiano de las bandejas x5 |
| 1 | 10 | Jue 12 nov · 12:30 p. m. | Lasaña lista en 5 minutos | Carrusel · 5 | La lasaña personal (440 g) como solución |
| 1 | 11 | Sáb 14 nov · 10:00 a. m. | El queso que se estira | Post + 3 historias | El antojo del fin de semana |
| 2 | 12 | Mar 17 nov · 12:30 p. m. | La lasaña por dentro | Carrusel · 6 | Confianza: qué lleva |
| 2 | 13 | Jue 19 nov · 12:30 p. m. | ¿Qué empanada eres? | Carrusel · 6 | Interacción: los 9 sabores |
| 2 | 14 | Sáb 21 nov · 9:00 a. m. | Empanadas para tu negocio | Carrusel · 5 | B2B: precio por mayor y 15 + 1 |
| 3 | 15 | Mar 24 nov · 12:30 p. m. | La reunión de fin de año, resuelta | Carrusel · 6 | Eventos: pasos y plazos |
| 3 | 16 | Jue 26 nov · 12:30 p. m. | Llena el congelador: 15 + 1 | Carrusel · 5 | Promoción por mayor |
| 3 | 17 | Sáb 28 nov · 10:00 a. m. | Hoy atendemos hasta las 9 p. m. | Post + 3 historias | Horario y cobertura |
| 4 | 18 | Mar 1 dic · 12:30 p. m. | Diciembre se sirve en bandeja | Carrusel · 6 | Novenas, visitas y reuniones |
| 4 | 19 | Jue 3 dic · 12:30 p. m. | Lo que nos preguntan | Carrusel · 6 | Quitar fricción: domicilio, calentado, alérgenos |
| 4 | 20 | Sáb 5 dic · 10:00 a. m. | Velitas, familia y empanadas | Carrusel · 5 | Pedido anticipado para el domingo y las velitas |

Total: **64 imágenes** (58 de feed 1080×1350 y 6 de historias 1080×1920). Captions, versión corta, hashtags, texto alternativo y notas de cada pieza están en `piezas/NN-slug/copy.md` y reunidos en `CAPTIONS.md`.

## Sistema visual
Mismo lenguaje de octubre: rojo `#E41E13`, negro cálido `#14100d`, crema `#F8F3E7`, arena y tan; **Russo One** (títulos) y **Poppins** (texto); masthead con número de edición, folio y grano de película. Plantillas en `scripts/lib.mjs`; contenido y calendario en `scripts/piezas.mjs`.

**Mezcla de imagen:** producto real (recortes de la sesión propia de octubre) + imágenes de ambiente creadas con IA a partir de la foto real del producto, para mostrar gente y momentos de consumo. Las imágenes de IA muestran siempre la **lasaña personal en bandeja individual** (el producto real es de 440 g).

## Checklist: validar con el negocio antes de publicar
- [ ] **Precio de la lasaña:** $19.900 (documento comercial). La web todavía muestra $19.900 "lista para hornear" y $23.900 "al horno". Aparece en Nº 10, 11, 12, 18.
- [ ] **Peso de la lasaña personal:** 440 g (confirmado por el dueño); falta decir si es horneada o congelada.
- [ ] **Tiempos de preparación** (horno o air fryer 200–220 °C: precalentar 5 min y unos 12 min; lasaña en microondas unos 5 min): salen de las instrucciones del negocio y se presentan como orientativos.
- [ ] **Precios por mayor y promoción 15 + 1** (Nº 14 y 16): bandeja gourmet x5 $17.900, tradicional x5 $11.000, lasaña $17.900; sueltas desde 40: $3.900 y $2.600; pago 50% de anticipo y 50% contra entrega. Confirmar vigencia y que la promo aplique a todo pedido por mayor.
- [ ] **Plazos de eventos** (Nº 15 y 20): hasta 50 empanadas, 1 día; 50 a 100, 2 días; más de 100, 4 días; sin mínimo especial.
- [ ] **Capas y receta de la lasaña** (Nº 12): doble crema, salsa criolla de cebolla y tomate, pasta en láminas. Salen de las fichas de costos; confirmar que se pueden publicar.
- [ ] **Alérgenos** (Nº 19): texto literal de la información del negocio. No afirmar "sin gluten" ni "sin lácteos".
- [ ] **Domicilio:** las piezas solo dicen "entregamos en Cajicá y Chía" y que el valor depende de la dirección. Falta aclarar quién hace la entrega y cómo se cobra.
- [ ] **Festivos:** no se afirma horario del lunes 7 ni del martes 8 de diciembre. Solo "lunes a sábado" y "los domingos no atendemos".

## Nota sobre las imágenes de IA
Las 5 imágenes de ambiente (`assets/photos/ia/`) se generaron con ChatGPT usando como referencia la foto real de la lasaña y descripciones de la bandeja individual. **No son fotos del producto real**: sirven como imagen de ambiente. Meta puede mostrar la etiqueta "Info de IA". En las piezas donde el producto es el protagonista (Nº 09, 10, 12, 16) se usan los recortes reales.

## Cómo re-exportar
```bash
node scripts/build.mjs        # genera slides.html, copy.md, CAPTIONS.md y plan.json desde piezas.mjs
node scripts/render.mjs 09    # renderiza solo la pieza 09 (sin filtro: todas)
node scripts/preview.mjs      # hojas de contacto en preview/
node scripts/feed-grid.mjs    # cuadrícula del perfil
```
Requiere Node y Chrome instalado; usa `sharp` y `puppeteer-core` (`npm install`).

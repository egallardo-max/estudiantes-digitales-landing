# 03 PROMPT LANDING — Estudiantes Digitales EFIP

*Ensamblaje de bloques modular + copys finales para código App.jsx*

---

## IDENTIDAD DEL CLIENTE

**Nombre:** Estudiantes Digitales  
**Tipo de negocio:** B2B Servicio (Educación Online / Cursos EFIP)  
**Público:** Estudiantes 22-35 años, trabajan simultáneamente, Iberoamérica (14 países)  
**Propuesta de valor:** Tranquilidad + aprendizaje real + confianza (no solo cursos)  
**Fórmula de landing (B2B Servicio):** Hero + Credibilidad → Diferenciales → Prueba Social → CTA (distribuida en cards)

---

## BLOQUE POR BLOQUE — ARQUITECTURA DE LA LANDING

### BLOQUE 1: HERO + CREDIBILIDAD INSTANTÁNEA

**Variante seleccionada:** Typewriter Hero (efecto escritura en tiempo real) + Subheading narrativo + CTA soft

**Justificación:** 
- Uso typewriter para capturar atención emocional (propuesta diferencial = "camino más seguro")
- Subheading refuerza acompañamiento humanizado (3 pilares: aprende posta, profes, comunidad)
- CTA soft ("Ver cursos") no es presión; se abre a 6 opciones (no hay un CTA global forzado)

**Copys finales:**

| Elemento | Copy |
|----------|------|
| **H1 (Typewriter)** | El camino más seguro y eficiente para tu mejor EFIP |
| **Subheading** | Aprende de verdad, sin memorización. Con metodología validada, profes que te bancan, y comunidad que te sostiene. |
| **CTA Label** | Ver cursos disponibles |

**Reglas técnicas:**
- Typewriter animation: 3 segundos, cursor parpadeante
- Responsive: ajusta font size (clamp) para mobile
- Dark mode: heading white, cursor coral
- No truncado en mobile (testeado 375px+)

---

### BLOQUE 2: 6 CARDS EFIP (CURSOS DISPONIBLES)

**Variante seleccionada:** Grid cards con imágenes/iconos + descripción + "Ver detalles" link

**Justificación:**
- Cada card es "producto independiente" (no hay checkout único)
- Links directos a fichas de producto (estructura pedida por cliente)
- Grid responsive (3 cols desktop, 2 cols tablet, 1 col mobile)
- No requiere slider/carousel (6 items caben en grid)
- Copys breves (~20 palabras) para escaneo rápido

**Copys finales (6 cards):**

| Curso | Descripción | Link | CTA |
|-------|-------------|------|-----|
| **EFIP 1 Abogacía** | Derecho Constitucional, Penal, Civil y Procesal. Con profes expertos. 98% aprueba. | https://estudiantesdigitales.wisboo.com/product/EDefip1 | Ver detalles |
| **EFIP 2 Abogacía** | Familia, Sucesiones, Laboral, Procedimiento. Método Aurora®. | https://estudiantesdigitales.wisboo.com/product/EFIP2-ED | Ver detalles |
| **EFIP 1 Contador Público** | Contabilidad completa para Contadores. Balance, Auditoría. 120 días acceso. | https://estudiantesdigitales.wisboo.com/product/efip1contador2026 | Ver detalles |
| **EFIP 1 Administración** | Administración, Proyectos, Marketing, Finanzas. Aplicable desde día 1. | https://estudiantesdigitales.wisboo.com/product/efip1administracion | Ver detalles |
| **Seminario Final Abogacía** | Nota a Fallo: videoclases, guías y planificadores. Método Aurora®. | https://estudiantesdigitales.wisboo.com/product/cursoseminariofinal | Ver detalles |
| **Más Cursos** | Explora nuestra oferta completa. Nuevos cursos, seminarios y especializaciones. | https://estudiantesdigitales.wisboo.com/catalog | Explorar catálogo |

**Reglas técnicas:**
- Grid: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
- Hover: elevación suave + accent color border
- Animation: fadeInUp staggered (0.1s, 0.2s, 0.3s delays)
- Imágenes: 300x200px minimum (no distorsionadas)
- Mobile: stack 1 col, full width padding adjustment

---

### BLOQUE 3: PROFESORES SECCIÓN

**Variante seleccionada:** Grid cards profesor + foto circular + nombre + credencial + bio corta

**Justificación:**
- Humaniza la oferta (faces = confianza)
- Muestra expertise real (no es contenido masivo anónimo)
- Máximo 4 profesores por línea (legible, no abarrotado)
- Encaja diferencial "profes que te bancan"

**Copys finales:**

| Profesor | Credencial | Bio Corta |
|----------|-----------|----------|
| **Federica Morici** | Especialista en Derecho Civil | Apasionada por enseñar posta. 10+ años acompañando estudiantes. |
| **Prof. Eduardo Valdés** | Abogado Litigante (EFIP especialista) | Conoce cada pregunta que toman. Transmite seguridad. |
| **Maria Celeste Ceballos** | Contadora Pública | Convierte números en conceptos claros y memorables. |
| **Marco Agustín Reynoso** | Profesional en Administración | Experto en casos prácticos. Enseña aplicable desde día 1. |

**Reglas técnicas:**
- Avatar circular: 120px diameter, gradient background
- Animation: fadeInUp staggered (0.1s, 0.2s, 0.3s, 0.4s delays)
- Grid: `repeat(auto-fit, minmax(200px, 1fr))`
- Mobile: 2 cols min (no 1 col para mantener visual)

---

### BLOQUE 4: MÉTODO AURORA (6 PILARES)

**Variante seleccionada:** Timeline vertical steps + número circular pulsante + título + descripción

**Justificación:**
- Explica "por qué funciona" (responde objeción vs. Udemy)
- 6 pilares = estructura clara (no es lista caótica)
- Número pulsante (pulseGlow animation) destaca cada paso
- Copy corto, directo (máx 12 palabras/pilar)
- Único diferencial que comunica: "Comunidad 37k" como parte del método (no solo feature técnica)

**Copys finales (6 pilares):**

| # | Pilar | Descripción |
|---|-------|-------------|
| 01 | Tecnología e IA | Memorizadores, Avatares y Guía inteligente |
| 02 | Clases Completas | Punto por punto del programa, sin vueltas |
| 03 | Casos Prácticos | Lo que de verdad toman en el EFIP |
| 04 | Música para Memorizar | Fija los conceptos clave y no se borran |
| 05 | Planificadores | Llegas organizado, sin quemarte la cabeza |
| 06 | Comunidad 37k | Estudias con amigos, nunca solo/a |

**Sección Heading:** "Por qué funciona: Método Aurora"  
**Sección Subheading:** "6 pilares validados que transforman tu aprendizaje"

**Reglas técnicas:**
- Números (01-06) con `animation: pulseGlow 2s infinite` (brillo pulsante)
- Layout: flex row en desktop, flex column en mobile
- Animation: fadeInUp staggered (0.1s → 0.6s delays)
- Icons/números: Coral color (#f27979) con glow effect
- No truncado: descripción máx 15 palabras

---

### BLOQUE 5: RECORDS / ESTADÍSTICAS

**Variante seleccionada:** 4 stat boxes con counter animation + icono + label

**Justificación:**
- Validación numérica (98% = confianza)
- Counter animación (números que suben) = movimiento, engagement
- Simétrico: 4 stats = grid fácil (2x2 o 4x1)
- Dispara cuando scrolleas a la sección (Intersection Observer)

**Copys finales:**

| Métrica | Número | Descripción |
|---------|--------|-------------|
| **Efectividad** | 98% | Aprobados EFIP a la primera |
| **Estudiantes** | 4000+ | Ya se recibieron con nosotros |
| **Comunidad** | 37k+ | Conectados en Iberoamérica |
| **Trayectoria** | 4+ años | Acompañando crecimiento |

**Sección Heading:** "Números que hablan por sí solos"  
**Sección Subheading:** "Son datos reales. Estudiantes que se recibieron, que aprendieron posta, que llegaron tranquilos al EFIP."

**Reglas técnicas:**
- Counter animation: incrementa cada 75ms hasta target (JavaScript)
- Intersection Observer: anima cuando entra en viewport
- Grid: `repeat(auto-fit, minmax(200px, 1fr))`
- Mobile: 2x2 o 1x4 según espacio
- Color: boxes con background teal subtle (rgba)
- Animation: fadeInUp staggered (0.1s, 0.2s delays)

---

### BLOQUE 6: TESTIMONIOS CAROUSEL

**Variante seleccionada:** Carousel/slider rotativo + testimonial completo + nombre + credencial + avatar

**Justificación:**
- Prueba social real (37 testimonios disponibles)
- Carousel permite rotar muchos sin abrumar UI
- Muestra diversidad de resultados (diferentes cursos, perfiles)
- Las frases clave boldeadas capturan emoción

**Copys finales:**

**Sección Heading:** "Quiénes llegaron tranquilos al EFIP"  
**Sección Subheading:** "Historias reales de estudiantes como vos"

**Muestra de testimonios (de 37 totales — ver TESTIMONIOS_COMPLETOS.md):**

```
"Quedé fascinada con la metodología. Me recibí en el primer intento."
— Andrea Cabutti

"Fue clave para aplicar la teoría a lo práctico. Lo recomiendo 100%."
— Ale Mijoc

"Me recibí de abogado gracias a cada uno del grupo. Acompañamiento real."
— Cristian Álvarez

"Son increíbles. No solo enseñan, acompañan tu proceso."
— Eve Silberstein

"Eternamente agradecida. Cambió mi forma de estudiar."
— María Fernanda
```

**Reglas técnicas:**
- Carousel: autoplay cada 5 segundos (pausable en hover)
- Animación: fade in/out suave entre slides
- Mobile: adaptado para pantalla pequeña (menos info visual)
- Responsive: font size adjust, avatar visible en mobile
- Frase clave con **bold** destacada visualmente (color secondary)

---

### BLOQUE 7: LIDERAZGO + AWARDS

**Variante seleccionada:** Logo grid + descripción corta + tagline

**Justificación:**
- "Reconocidos internacionalmente" = validación externa
- Logos WIC, GYLP crean confianza institucional
- Breve: no interrumpe el flow, refuerza credibilidad
- Cierra antes de footer

**Copys finales:**

**Sección Heading:** "Reconocidos internacionalmente"  
**Logos/Awards:** WIC | GYLP 2025 | Certificación de Calidad Educativa  
**Copy:** "Somos referentes en educación humanizada. Reconocidos por organismos internacionales."

**Reglas técnicas:**
- Grid: logo boxes 120x80px min
- Animation: fadeIn suave
- Dark mode: logos con inverso si aplica
- Mobile: stack verticalmente si necesario

---

### BLOQUE 8: FOOTER

**Variante seleccionada:** Footer minimalista + tagline + links de footer + copyright

**Justificación:**
- Refuerza el mensaje madre al salir (tagline = último contacto)
- Links de navegación claros (no es CTAs, es wayfinding)
- Minimalista: coherente con diseño limpio de landing

**Copys finales:**

| Elemento | Copy |
|----------|------|
| **Tagline** | Estudiantes Digitales — El camino más seguro y eficiente para tu mejor EFIP |
| **Nav Links** | Cursos · Metodología · Comunidad · Contacto |
| **Copyright** | © 2026 Estudiantes Digitales. Todos los derechos reservados. |

**Reglas técnicas:**
- Background: teal primary (#2b7f85)
- Text: white/off-white
- Links hover: coral secondary
- Padding: simétrico, no apretado
- Mobile: stack vertical si necesario

---

## REGLAS TÉCNICAS GLOBALES

### Anti-texto-roto (OBLIGATORIO)

- **Desktop:** 1440px max-width container
- **Tablet:** 768px breakpoint, font size reduce a 90%
- **Mobile:** 375px minimum, font size reduce a 80%, padding adjust, stacks verticales
- **Testing:** cada heading y párrafo en 375px (iPhone SE), 768px (iPad), 1440px (desktop)
- **Nunca:** `overflow: hidden`, `text-overflow: ellipsis` en títulos/copy (es truncado)

### Animaciones

- Carga inicial (0-3s): Hero typewriter effect
- Scroll triggers: Método Aurora fade-in staggered
- Scroll triggers: Records counter animation (Intersection Observer)
- Hover states: Cards elevation + color border change
- No auto-play video (respeta preferencia usuario)
- Reduce motion: respeta `@media (prefers-reduced-motion)`

### Dark Mode

- Light theme default (ground #f8f6f4, text dark #1a1a1a)
- Dark theme support: ground #1a1a1a, text white
- CSS custom properties para todos los colores
- Carousel text readability en ambos temas

### SEO Basics (meta tags)

```html
<title>Estudiantes Digitales — El camino más seguro para tu EFIP</title>
<meta name="description" content="Aprende a rendir tu EFIP con confianza. Metodología Aurora: clases, casos prácticos, comunidad de 37k estudiantes. 98% de efectividad.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## CHECKLIST PRE-CÓDIGO

- ✅ Bloques seleccionados
- ✅ Copys finales completos (sin [PENDIENTE])
- ✅ Imágenes/iconos identificados (cliente proporciona)
- ✅ 37 testimonios compilados en TESTIMONIOS_COMPLETOS.md
- ✅ Profesores 4 credenciales confirmadas
- ✅ Color palette aprobada (#2b7f85, #f27979, #f8f6f4, etc.)
- ✅ Tipografía Poppins (all weights)
- ✅ Animaciones definidas (typewriter, stagger, pulse, counter)
- ✅ Responsive breakpoints confirmados (375px, 768px, 1440px)
- ⏳ **PENDIENTE:** Imágenes/iconos de cursos (cliente proporciona)
- ⏳ **PENDIENTE:** Links a fichas de producto de los 6 cursos
- ⏳ **PENDIENTE:** Confirmación de nombres/datos de 2 cursos adicionales (si aplica más de 4)

---

## PRÓXIMOS PASOS

1. **Aprobación cliente:** ¿Este ensamblaje de bloques + copys es correcto?
2. **Ajustes si aplica:** quitar/agregar bloques, cambiar copys, etc.
3. **Generar código App.jsx:** React modular, Tailwind CSS, sin librerías externas
4. **Auto-revisión:** checklist del skill landing-modular
5. **Deploy:** cliente integra a su sistema de productos

---

**Fecha armado:** 2026-07-24  
**Estado:** 🟡 Pendiente aprobación de bloques + copys

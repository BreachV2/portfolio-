---
name: modern-3d-web
description: Erstelle moderne, professionelle Webseiten mit 3D-Elementen, Glassmorphism, seriösem Unternehmensdesign und aktuellen Frontend-Design-Standards 2025. Verwende diesen Skill immer, wenn der Nutzer eine Website mit 3D-Effekten, modernem Design, Tiefe, Depth-Effekten, Three.js, CSS-3D, seriöse Unternehmensseite, Enterprise-Design, professioneller Web-Präsenz, Corporate Website, hochwertige Agenturseite oder visuell beeindruckende Webseite erstellen möchte – auch wenn er nur "seriöse Webseite", "moderne Webseite mit 3D", "professionell und modern" sagt. Für alle Projekte, die Vertrauen, Qualität und technische Exzellenz ausstrahlen sollen.
---

# Modern 3D Web — Professionelle Webseiten mit Tiefe

Erstellt vollständig funktionale, produktionsreife Webseiten mit echten 3D-Elementen, modernstem Design-Standard 2025 und seriöser, vertrauenswürdiger Ausstrahlung.

---

## Phase 1: Kontext klären

Aus dem Gespräch extrahieren oder kurz nachfragen:

- **Branche / Unternehmen**: Tech-Startup, Beratung, Kanzlei, Agentur, Medizin, Finance, Industrie?
- **Hauptziel**: Lead-Generierung, Markenaufbau, Portfolio, Produktpräsentation, Recruiting?
- **Zielgruppe**: B2B-Entscheider, Konsumenten, Investoren, Talente?
- **Farbwelt oder CI bereits vorhanden?**
- **Ausgabeformat**: Einzelne HTML-Datei, React-Komponente, vollständige Seite?

Wenn nicht alle Infos vorhanden: **intelligent defaulten** — nie blockieren. Im Zweifel für B2B-Tech-Unternehmen mit dunklem, seriösen Look.

---

## Phase 2: Design-Entscheidungen 2025

### 2.1 Ästhetik-Richtung wählen

Exakt **eine** Richtung wählen und konsequent durchhalten:

| Richtung | Wann | Signatur |
|---|---|---|
| **Dark Luxury** | Finance, Premium-SaaS, Legal | Tiefes Schwarz/Slate, Gold/Platin-Akzente, Glasseffekte |
| **Corporate 3D** | Enterprise, Industrie, B2B | Mitternachtsblau, strukturierte Geometrien, Depth-Shadows |
| **Clean Tech** | SaaS-Produkte, Startups | Sehr helles Grau + tiefes Navy, präzise Linien, subtile 3D |
| **Professional White** | Beratung, Medizin, Recht | Weiß-dominant, Akzentfarbe stark, 3D-Highlights dezent |
| **Bold Enterprise** | Industrie, Maschinenbau, Energie | Dunkelgrau, starke Kontraste, kraftvolle Typografie |

**VERBOTEN**: Lila-Gradienten auf Weiß, generisches SaaS-Blau, Stockfoto-Ästhetik, bunte Kinderspielzeug-Palette.

### 2.2 Farb-System

```css
:root {
  /* Beispiel Dark Luxury */
  --bg-primary: #0a0a0f;
  --bg-secondary: #111118;
  --bg-surface: rgba(255, 255, 255, 0.04);
  --border: rgba(255, 255, 255, 0.08);
  --accent: #c9a96e;        /* Gold / Markenfarbe */
  --accent-glow: rgba(201, 169, 110, 0.15);
  --text-primary: #f0efe8;
  --text-secondary: rgba(240, 239, 232, 0.55);
  --text-muted: rgba(240, 239, 232, 0.3);
  --shadow-deep: 0 32px 80px rgba(0,0,0,0.6);
  --radius: 12px;
  --transition: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
```

Farben IMMER als CSS-Variablen — nie hardcoded im Markup.

### 2.3 Typografie 2025

Keine generischen Schriften. Immer via Google Fonts einbinden:

**Empfohlene Paare für seriöse Seiten:**
- `Instrument Serif` + `DM Sans` → Premium, modern-klassisch
- `Playfair Display` + `Inter` → Eleganz mit Klarheit
- `Cormorant` + `Outfit` → Luxus, exklusiv
- `Syne` + `Manrope` → Tech, zeitgemäß
- `PP Neue Montreal` simulieren mit `Barlow` + `DM Mono` → SaaS/Tech

```css
/* Typografie-Hierarchie */
.display    { font-size: clamp(48px, 7vw, 96px); line-height: 1.05; letter-spacing: -0.03em; }
.headline   { font-size: clamp(32px, 4vw, 56px); line-height: 1.15; letter-spacing: -0.02em; }
.subhead    { font-size: clamp(18px, 2.5vw, 24px); line-height: 1.4; }
.body       { font-size: 16px; line-height: 1.7; }
.caption    { font-size: 13px; line-height: 1.5; letter-spacing: 0.04em; text-transform: uppercase; }
```

---

## Phase 3: 3D-Elemente implementieren

### 3.1 Methoden-Auswahl (nach Komplexität)

**Methode A — CSS 3D Transform (leicht, immer verfügbar)**
Für: Karten-Tilt, perspektivische Layouts, Hover-Effekte
```css
.card-3d {
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform var(--transition);
}
.card-3d:hover {
  transform: rotateX(-8deg) rotateY(12deg) translateZ(20px);
}
```

**Methode B — CSS 3D Geometry (mittel)**
Für: Geometrische Hero-Elemente, Floating Objects
```css
.cube {
  width: 120px; height: 120px;
  transform-style: preserve-3d;
  animation: cube-rotate 12s linear infinite;
}
@keyframes cube-rotate {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to   { transform: rotateX(360deg) rotateY(360deg); }
}
```

**Methode C — Three.js Canvas (schwer, maximal eindrucksvoll)**
Für: Hero-Hintergründe, Partikel-Systeme, interaktive 3D-Szenen
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
```
Einsatz für: Hero-Section mit rotierendem 3D-Mesh, Partikelfeld, abstrakte geometrische Form.

**Entscheidungsregel:**
- Einfache Seite / schnelle Lieferung → Methode A + B
- Beeindruckende Hero-Section gewünscht → Methode C für Hero, A+B für Rest
- Nur HTML ohne externe Libs → nur A + B

### 3.2 3D Design-Patterns 2025

**Floating Cards mit Glassmorphism:**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius);
  box-shadow:
    0 4px 24px rgba(0,0,0,0.4),
    0 1px 0 rgba(255,255,255,0.06) inset;
}
```

**Depth Layers (Tiefe durch Ebenen):**
```css
/* Hintergrund = weit weg */
.layer-bg    { transform: translateZ(-100px) scale(1.1); }
/* Midground */
.layer-mid   { transform: translateZ(0px); }
/* Foreground = nah, prominenter Schatten */
.layer-fg    { transform: translateZ(40px);
               filter: drop-shadow(0 20px 60px rgba(0,0,0,0.5)); }
```

**3D-Tilt bei Mouse-Movement (JavaScript):**
```javascript
document.querySelectorAll('[data-tilt]').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `
      perspective(800px)
      rotateX(${-y * 14}deg)
      rotateY(${x * 14}deg)
      translateZ(10px)
    `;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
  });
});
```

**Hero-Partikel mit Three.js (Grundgerüst):**
```javascript
// Minimales Three.js Partikelfeld für Hero
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('hero-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Partikel
const count = 1200;
const geo = new THREE.BufferGeometry();
const positions = new Float32Array(count * 3);
for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 40;
geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const mat = new THREE.PointsMaterial({ color: 0xc9a96e, size: 0.05, transparent: true, opacity: 0.6 });
scene.add(new THREE.Points(geo, mat));

camera.position.z = 15;
const animate = () => {
  requestAnimationFrame(animate);
  scene.rotation.y += 0.0005;
  renderer.render(scene, camera);
};
animate();
```

---

## Phase 4: Seitenstruktur

### Pflicht-Bereiche (anpassen je nach Zweck):

```
┌─────────────────────────────────────┐
│  Navigation (sticky, blurred bg)    │
├─────────────────────────────────────┤
│  Hero (3D-Hintergrund, Headline,    │
│        CTA, Scroll-Indikator)       │
├─────────────────────────────────────┤
│  Social Proof / Logos / Kennzahlen  │
├─────────────────────────────────────┤
│  Services / Features (3D-Karten)    │
├─────────────────────────────────────┤
│  About / Story (mit Depth-Layern)   │
├─────────────────────────────────────┤
│  Case Studies / Portfolio           │
├─────────────────────────────────────┤
│  Testimonials                       │
├─────────────────────────────────────┤
│  CTA-Sektion                        │
├─────────────────────────────────────┤
│  Footer                             │
└─────────────────────────────────────┘
```

### Navigation — 2025 Standard:
```css
nav {
  position: fixed; top: 0; width: 100%; z-index: 100;
  padding: 0 40px;
  background: rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: background var(--transition);
}
```

### Hero — muss einschlagen:
- Volle Viewport-Höhe (`100svh`)
- 3D-Hintergrund (Canvas oder CSS-3D-Shapes)
- Headline: `clamp(52px, 7vw, 100px)`, tight letter-spacing
- Subline: dezenter, max. 2 Zeilen
- CTA-Button: eindeutig, Hover mit 3D-Lift-Effekt
- Scroll-Indicator: animierter Pfeil unten

---

## Phase 5: Animations-System

### Einblend-Animationen (Scroll):
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
```

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(30px) translateZ(-20px);
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
}
[data-reveal].visible {
  opacity: 1;
  transform: translateY(0) translateZ(0);
}
:root { --ease: cubic-bezier(0.16, 1, 0.3, 1); }
```

### Gestaffelte Kinder (Stagger):
```css
.stagger-group > *:nth-child(1) { transition-delay: 0.1s; }
.stagger-group > *:nth-child(2) { transition-delay: 0.2s; }
.stagger-group > *:nth-child(3) { transition-delay: 0.3s; }
.stagger-group > *:nth-child(4) { transition-delay: 0.4s; }
```

### Cursor-Glow (optional, Premium-Effekt):
```javascript
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});
```
```css
.cursor-glow {
  position: fixed; pointer-events: none; z-index: 9999;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: left 0.08s, top 0.08s;
}
```

---

## Phase 6: Responsive Design

Breakpoints (Mobile-first):
```css
/* Mobile:  default (320px+) */
/* Tablet:  @media (min-width: 768px) */
/* Desktop: @media (min-width: 1024px) */
/* Wide:    @media (min-width: 1440px) */
```

3D-Effekte auf Mobile:
- Tilt-Effekte deaktivieren auf Touch-Devices (`@media (hover: none)`)
- Three.js: Partikel-Count auf Mobile reduzieren (`window.innerWidth < 768 ? 400 : 1200`)
- `backdrop-filter` polyfill beachten (Safari-Prefix `-webkit-backdrop-filter`)

---

## Phase 7: Performance & Qualität

### Pflicht-Checks vor Ausgabe:
- [ ] 3D-Elemente laufen flüssig (60fps ziel) — keine Layout-Thrashing
- [ ] `will-change: transform` nur auf animierten Elementen
- [ ] Three.js nur wenn wirklich nötig — CSS-3D bevorzugen wo möglich
- [ ] Google Fonts mit `display=swap` geladen
- [ ] Semantisches HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] `lang="de"` im `<html>`-Tag
- [ ] Alle Bilder mit `alt`-Text und `object-fit: cover`
- [ ] Navigation funktioniert (smooth scroll)
- [ ] Kein Content-Layout-Shift durch Animations-Starts

### Code-Qualität:
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[Beschreibung]">
  <title>[Seitenname] | [Unternehmen]</title>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=...:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>/* Alles CSS hier */</style>
</head>
<body>
  <!-- Semantisches Markup -->
  <script>/* JS am Ende */</script>
</body>
</html>
```

---

## Phase 8: Häufige Fehler vermeiden

| Fehler | Richtig |
|---|---|
| Three.js für alles nutzen | CSS-3D für kleine Effekte, Three.js nur für Hero |
| `backdrop-filter` ohne `-webkit-` | Immer beide Prefixe setzen |
| Glassmorphism auf hellem Hintergrund | Funktioniert nur auf dunklen/farbigen Hintergründen gut |
| 3D-Tilt auf Touch-Devices | Mit `@media (hover: none)` deaktivieren |
| `transform` und `filter` zusammen | Filter erzeugt neuen Stacking-Context — testen |
| Zu viele gleichzeitige Animationen | Max. 3–5 animierende Elemente gleichzeitig im Viewport |
| Generische Farben (Blau #007bff) | Immer eigene Farbpalette, nie Bootstrap-Defaults |
| System-Schriften | Immer externe Schriften einbinden |

---

## Ausgabe-Standard

**Immer vollständige, sofort lauffähige Dateien** — nie Fragmente.

Für HTML-Output:
- Komplette `<!DOCTYPE html>` Datei
- Alle CSS in `<style>`-Block
- Alle JS am Ende in `<script>`-Block
- Externe Libs (Three.js, Fonts) über CDN
- Keine externen CSS-Dateien — alles inline

Für React-Output:
- Einzelne `.jsx`-Datei mit default export
- Styled-Components oder Tailwind (nach Kontext)
- Three.js via `@react-three/fiber` wenn vorhanden

---

## Goldene Regeln

1. **Seriös ≠ langweilig.** Tiefe, Qualität und Präzision machen Vertrauen — nicht Sterilität.
2. **3D muss funktional sein.** Jedes 3D-Element muss die Botschaft verstärken, nicht ablenken.
3. **Performance ist Teil des Designs.** Ruckeln zerstört Premium-Wahrnehmung sofort.
4. **Eine starke Idee.** Lieber ein 3D-Element perfekt als fünf mittelmäßige.
5. **Fertig ist fertig.** Immer vollständige, lauffähige Seiten — keine Platzhalter.

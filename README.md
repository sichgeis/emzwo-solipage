# EmZwo – Solipage

Kleine, statische Landing Page für das Projekt **EmZwo (Mühlenstraße 2)** / **Unser Viertel e.V.**.

## Inhalte

- `index.html` – Landing Page
- `style.css` – Stylesheet

## Development Server starten

Da es sich um eine statische Seite handelt, reicht ein einfacher lokaler HTTP-Server.

### Option A: Python (empfohlen, ohne Installation)

1. Stelle sicher, dass du im Projektordner bist.
2. Starte den Server:

```bash
python3 -m http.server 5173
```

3. Öffne dann im Browser:

- http://localhost:5173

### Option B: Node.js (falls installiert)

```bash
npx serve .
```

Dann die URL aus der Ausgabe öffnen.

## Deploy

Die Seite ist vollständig statisch und kann z.B. über GitHub Pages, Netlify oder jeden Webspace deployed werden.

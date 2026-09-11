# CLAUDE.md

Konventionen für die Arbeit an kevinheyland.com. Diese Datei gehört ins Repository-Root und gilt für jede Änderung.

---

## 1. Was diese Seite ist

Die persönliche Seite von Kevin Heyland. Sie verkauft KI-Beratung, Schulung und Werkstattformate an kleine Betriebe und Institutionen in Magdeburg, Sachsen-Anhalt und dem DACH-Raum.

**Zielgruppe:** Inhaberinnen und Inhaber kleiner Betriebe, der eine digitalaffine Mensch im Büro, Schulen, Kitas, Vereine. Keine Entwickler, keine Konzern-IT.

**Positionierung:** Enterprise-Standards für Betriebe, die sich keine große Beratung leisten können. DEVDEER liefert die Kapazität im Hintergrund, Kevin ist Kopf und Bürge.

**Was die Seite nicht ist:** kein Lebenslauf, kein Portfolio, keine DEVDEER-Unterseite. Der bisherige Bestand ist genau das und wird schrittweise umgebaut.

Wenn eine Änderung diesem Zweck nicht dient, ist sie falsch, auch wenn sie technisch sauber ist.

---

## 2. Nicht verhandelbar

| Thema | Regel |
|---|---|
| Stack | Next.js und Tailwind. Kein Framework-Wechsel, keine zusätzliche UI-Bibliothek ohne Rückfrage |
| Design | Apple-Produktseiten-Grammatik auf visionOS-Material: dunkler Kosmos (Marineblau, Sterne), zentrierte Überschriften, rahmenlose Kacheln, große Bilder, viel Luft. Kein Redesign, keine neue Schrift. Palette bleibt kalt, ein warmer Lichtton `lamp` #ef9a41 (gemessen aus den Kugellampen der Raumfotos) kommt nur als Licht hinzu, nie als Fläche, Button, Rahmen oder Überschrift |
| Tracking | keine Analytics, keine Cookies, keine Drittanbieter-Skripte. Steht so im Footer und bleibt so |
| Sprache | Deutsch, `lang="de"`, `og:locale: de_DE`. Keine englische Parallelfassung |
| Ansprache | Du, durchgängig, auch in Formularen, Fehlermeldungen und Buttons |

---

## 3. Zielstruktur

| Route | Zweck | Status |
|---|---|---|
| `/` | Positionierung, Angebote, Belege, ein CTA | umgebaut (2026-09) |
| `/ki-workshop-magdeburg` | KI-Werkstatt, dreitägig, sechs Plätze | gebaut (2026-09); Livegang wartet auf Termine, Gehminuten, Stufenfreiheit, Fotofreigabe |
| `/ki-schulung` | Inhouse-Schulung beim Kunden | offen |
| `/foerderung` | Förderlandschaft erklären, Interessenten sammeln | offen |
| `/ki-beratung` | 1:1 Begleitung, Automatisierung, Wissensmanagement | offen |
| `/chatgpt-im-unternehmen` | Türöffner, Datenschutz, was erlaubt ist | offen |
| `/ki-tools-bauen` | Beleg der Bauerfahrung, Peer-Publikum | offen |
| `/institutionen` | Schulen, Kitas, Vereine | offen |
| `/referenzen` | Tonnentour, Ausfüllhilfe, Pace Planer, je Unterseite | Übersicht live, Unterseiten offen |
| `/ueber-mich` | Werdegang, Prinzipien, E-E-A-T | live, aus Bestand |
| `/notizen` | Longtail-Artikel, Zitierbarkeit für Sprachmodelle | offen |
| `/impressum`, `/datenschutz` | Pflicht | live, deutsche Fassung |

**Slug-Regeln:** kleingeschrieben, Bindestrich als Trenner, keine Umlaute und kein ß (`foerderung`, `ueber-mich`). Ein Slug wird nach Livegang nicht mehr geändert.

**Reserviert:** `/ki-werkstatt` als 301 auf `/ki-workshop-magdeburg`. Der Slug wird gesucht, der Name bleibt hängen. Der Redirect ist in `next.config.mjs` gesetzt.

---

## 4. Migration des Bestands

Der bestehende One-Pager wurde im September 2026 zerlegt.

| Bestand | Ziel | Status |
|---|---|---|
| Hero mit DEVDEER-Titel | neue H1 auf `/`, DEVDEER wandert in den Belegabschnitt | erledigt |
| About-Block, Abschlüsse, Zertifikate | `/ueber-mich` | erledigt |
| Career-Timeline 2006 bis heute | `/ueber-mich`, Markup unverändert, Text nach `content/` und ins Deutsche | erledigt |
| Drei Prinzipien | eines auf `/` (Verstehen kommt vor Bauen), zwei nach `/ueber-mich` | erledigt |
| Produktkarten | gekürzt auf `/`, ausführlich auf `/referenzen` | erledigt |
| Open-Source-Feed | `/ueber-mich` (Entscheidung `/ki-tools-bauen` steht noch aus, siehe §11) | erledigt |
| Portrait und Bildassets | bleiben unverändert | erledigt |

**Redirects:** `/imprint` → `/impressum`, `/privacy` → `/datenschutz`, jeweils 301 in `next.config.mjs`. Bestand: `/blog` → `/` bleibt.

**Anker:** `#about`, `#career`, `#products`, `#opensource` lassen sich serverseitig nicht umleiten, weil Fragmente nicht gesendet werden. Interne Links sind auf die neuen Routen umgestellt, externe Aufrufe landen weiterhin auf `/`. Kein Handlungsbedarf darüber hinaus.

---

## 5. Content-Architektur

Inhalt ist Daten, kein JSX. Fließtext, Überschriften, Preise, FAQ und Metadaten liegen als typisiertes Content-Objekt unter `content/` (im Repository-Root, neben `components/`), nicht hartcodiert in Komponenten. Ein MDX-Setup existiert nicht; wird es für `/notizen` gebraucht, ist das eine eigene Entscheidung.

Grund: Texte werden getrennt vom Layout überarbeitet, oft mehrfach. Ein Text, der in einer Komponente steht, wird nicht mehr angefasst.

Eine Seite besteht aus:
- `src/app/<slug>/page.tsx` mit Route, Metadata und Komposition
- `content/<slug>.ts` mit dem gesamten Text
- wiederverwendeten Komponenten aus `components/`

Neue Komponenten nur, wenn keine bestehende passt. Vorher im Bestand nachsehen.

---

## 6. Metadata und strukturierte Daten

Jede Seite liefert über die Next Metadata API:
- `title`, maximal 60 Zeichen
- `description`, 140 bis 155 Zeichen, mit Nutzen und Ort
- `canonical` auf die absolute URL
- Open Graph mit `de_DE`
- `robots: index, follow`, außer bei Dank- und Fehlerseiten

`sitemap.xml` und `robots.txt` werden generiert (`src/app/sitemap.ts`, `src/app/robots.ts`), nicht gepflegt.

**JSON-LD:**
- `Person` genau einmal im Root-Layout, nirgends sonst
- `Course` mit `CourseInstance` auf Workshop- und Schulungsseiten
- `FAQPage` wortgleich zum sichtbaren Text, sonst gar nicht
- `LocalBusiness` erst, wenn die Adressfrage entschieden ist

---

## 7. Design

Die visionOS-Sprache aus dem Bestand ist die Vorgabe. Die Tokens liegen in `components/theme.ts` und werden von dort wiederverwendet, nicht neu erfunden:
- Textrollen `textPrimary`, `textHeading`, `textBody`, `textMuted`, `textMeta`, dazu `textData` (Mono, nur für Zahlen, Preise, Termine, Kapazitäten)
- Kachel `tile` (rahmenlos, rounded-3xl, bg-white/6) für alles Flächige; die Werkbank steigert die Kachelhelligkeit je Station (4, 7, 11 Prozent). `glass` bleibt nur für Dock, Mobilmenü und die Rechtsseiten
- Knöpfe: `buttonPrimary` (gefüllt in `ink`, einer pro Abschnitt) und `pillButton` (Glaspille, sekundär)
- Farben und Typoskala als `@theme`-Werte in `src/app/globals.css`: `navy-950`, `navy-900`, `ink`, `ink-body`, `ink-muted`, `lamp`; Größen `text-h1`, `text-h2`, `text-h3`, `text-body`, `text-data-xl` (fluid über clamp)
- Warmes Licht über die Klasse `.lamp-light`, höchstens zweimal pro Seite (Hero und Schluss-CTA)

Die Sprache heißt „Kosmos": eine Apple-Produktseite bei Nacht. Ihre Zeichen:
- **Navigation** (`components/navigationTop`): eine zentrierte, schwebende Glas-Werkzeugleiste wie in visionOS, bleibt beim Scrollen oben. Logo und Name am linken Ende, daneben die Links, aktiver Eintrag als gefüllte Pille. Unterseiten zeigen darunter eine Brotkrume
- **Sterne** (`.stars` im Root-Layout): deterministische SVG-Kachel, fest zum Viewport, ohne Bewegung
- **Kacheln** (`tile`): rahmenlos, `rounded-3xl`, leicht hellere Fläche. Wichtige Kacheln tragen ein Bild, nicht nur Text. Anordnung als Bento: eine große Kachel, dann zwei kleine
- **Zentrierte Überschriften**: H1 und H2 mittig, darunter eine graue Unterzeile, Text auf `max-w-2xl`
- **Zahlen groß in der Display-Schrift** (`text-stat`), nur belegte Zahlen. Mono (`textData`) bleibt für Tabellen und Datenblätter
- **Ein Knopf** (`buttonPrimary`, gefüllt in `ink`), daneben höchstens ein zweiter als Pille
- **Substantive werden großgeschrieben.** Keine dekorativen Wörter in Kleinschreibung, keine Versalien
- Kein Stempel, keine Passermarken, keine versetzten Rahmen: das war ein Versuch und ist verworfen

Leitlinien, wenn eine neue Fläche entsteht:
- Tiefe entsteht durch Ebenen, Unschärfe und Helligkeit, nicht durch Schlagschatten und Rahmen
- Große weiche Radien, aber nicht derselbe Radius auf jedem Element. Radius kodiert Hierarchie
- Der Inhalt trägt den Kontrast, die Fläche bleibt zurückhaltend
- Kein zusätzlicher Signalton im Farbsystem
- Keine ALL-CAPS-Labels über Überschriften, keine Pfeile in Buttontexten, keine Meta-Zeilen mit Mittelpunkten
- JSX-Whitespace beachten: Text, der über mehrere Zeilen umbricht, braucht explizite Leerzeichen

**Fließtext:** maximal rund 70 Zeichen Zeilenlänge (`max-w-[58ch]`). Keine Mono-Untertitel unter Überschriften.

**Bewegung:** höchstens eine orchestrierte Bewegung pro Seite. Kein Fade-and-slide-up auf jedem Abschnitt, keine Hover-Animation auf jeder Karte. Bewegung, die auf eine Handlung antwortet, ist willkommen. `prefers-reduced-motion` wird immer respektiert (steht in `globals.css`).

**Bilder:** `next/image` mit `sizes`, keine Layoutsprünge. Bildassets liegen in `public/` und werden statisch importiert.

---

## 8. Textregeln

- Du, aktiv, Sätze in normaler Schreibung
- Der Nutzen steht vor der Methode. Nicht "RAG-basierte Wissensdatenbank", sondern "dein Handbuch beantwortet Fragen"
- Buttons sagen, was passiert: "Platz anfragen", nicht "Absenden"
- Preise immer netto ausgewiesen
- Keine Zahlen, Zitate, Logos oder Referenzen, die nicht belegt sind
- Keine Platzhalter im Livegang. Lieber ein Abschnitt weniger als ein "demnächst"

**Inhaltliche Sperren:**
- Roche wird nicht genannt. DEVDEER darf genannt werden
- Keine Aussage in Richtung "bei mir 80 Prozent gefördert" oder "autorisierter INQA-Coach". Die Autorisierung liegt nicht vor. `/foerderung` erklärt die Landschaft und sammelt Interessenten
- Kontakt läuft über mail@kevinheyland.com, solange kein Formular entschieden ist

---

## 9. Definition of Done pro Seite

- [ ] Route, Metadata, Canonical gesetzt
- [ ] Text liegt in `content/`, nicht in der Komponente
- [ ] Genau eine H1, saubere H2- und H3-Hierarchie
- [ ] Interne Links laut Verlinkungstabelle der Seiten-Copy gesetzt, eingehende Links ergänzt
- [ ] JSON-LD, wo vorgesehen, valide
- [ ] Ab 360 Pixel Breite benutzbar
- [ ] Tastaturfokus sichtbar, Bilder mit sinnvollem Alt-Text
- [ ] `prefers-reduced-motion` respektiert
- [ ] Keine neuen Drittanbieter-Requests, keine neue Font-Quelle
- [ ] Sitemap enthält die Seite

---

## 10. Verboten ohne Rückfrage

- Stack, Styling-System oder Design ändern
- Analytics, Cookie-Banner, Consent-Layer, Chat-Widgets einbauen
- Testimonials, Kundenlogos, Bewertungen oder Erfolgszahlen erfinden
- Bestehende Slugs ändern
- Englische Fassungen anlegen
- Preise oder Termine ohne Freigabe ins Live-Deployment schreiben

---

## 11. Offene Entscheidungen

1. Preise der KI-Werkstatt final (aktuell Vorschlag: 690 / 1.190 / 1.590 Euro netto, exklusiv 7.900 Euro)
2. Steht Herderstraße 31 öffentlich auf der Seite oder erst in der Terminbestätigung? Impressum bleibt davon unberührt
3. Was passiert mit dem Open-Source-Feed (aktuell auf `/ueber-mich`, Alternative `/ki-tools-bauen`)
4. Kontaktformular oder dauerhaft nur Mail

---

## 12. Abgleich mit dem Repository

Erledigt am 2026-09-03. Ergebnis:

- **Router:** App Router unter `src/app/`, Next.js 16, React 19, TypeScript strict
- **Tailwind:** Version 4 (CSS-first, `@theme` in `src/app/globals.css`). Design-Tokens existieren in `components/theme.ts`
- **Komponenten:** liegen im Repository-Root unter `components/<name>/<name>Component.tsx` mit `index.ts`-Re-Export. Bestand: `busySpinner`, `career`, `footer`, `gitRepos`, `navigationTop`, `sectionHeader`, `valueCard`, `werkbank`
- **Bildassets:** in `public/`, statisch importiert über `next/image`
- **Deployment:** Serverprofis GmbH (laut Datenschutzerklärung), Node-Server. Redirects in `next.config.mjs` greifen dort (der `/blog`-Redirect lief bereits so); nach jedem Deployment einmal `/imprint` und `/privacy` prüfen
- **MDX:** kein Setup vorhanden. Content liegt als typisierte TS-Objekte unter `content/`
- **Paketmanager:** Yarn 1 (`yarn.lock`), Formatierung über Prettier (4 Spaces, keine Semikolons, `printWidth` 180)

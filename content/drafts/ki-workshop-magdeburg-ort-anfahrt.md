# Entwurf: Ort und Anfahrt für /ki-workshop-magdeburg

Ergänzung zur Workshop-Copy (Hauptcopy liegt noch nicht im Repo). Gehört auf
`/ki-workshop-magdeburg`, nach dem Ablauf der drei Tage und vor den Preisen.
Wird beim Bau der Seite nach `content/ki-workshop-magdeburg.ts` überführt und
dann hier gelöscht.

Recherchestand 2026-09-04:

- **PLZ korrigiert:** Die angelieferte Copy nannte 39110. Richtig ist
  **39108** (Impressum dieser Seite, devdeer.com und OpenStreetMap stimmen
  überein). Adresse bleibt zeichengleich mit dem Impressum.
- **Straßenbahnlinien:** Am Wilhelmstädter Platz halten laut MVB-Fahrplan die
  Linien **2, 3 und 4** (Linie 6 nicht). Vor Livegang wegen Baustellen noch
  einmal gegen mvbnet.de prüfen.
- **Stadtteil:** Stadtfeld Ost (Haltestelle und Herderstraße 31 liegen beide
  dort).
- **Gehminuten:** Karte ergibt gut 500 Meter, etwa **7 Minuten** — VON KEVIN
  ABLAUFEN UND BESTÄTIGEN, nicht schätzen.
- **Stufenfreiheit:** OFFEN, nur Kevin kann das bestätigen. Erdgeschoss heißt
  nicht schwellenlos; hinschreiben, was stimmt, auch wenn es eine Stufe ist.

---

## H2: Wo wir arbeiten

Die Werkstatt findet in den Räumen der DEVDEER GmbH statt, Herderstraße 31 in
39108 Magdeburg. Kein Hotelkonferenzraum mit Flipchart und lauwarmem Kaffee,
sondern das Büro einer Azure-Beratung. Ordentliche Technik, ordentliche
Bildschirme, und wenn eine Frage tiefer geht, sitzen Leute im Haus, die sie
beantworten können.

Am Klingelschild und am Empfang steht DEVDEER, nicht mein Name. Du bist
trotzdem richtig.

### H3: Anfahrt

**Mit der Straßenbahn**
Haltestelle Wilhelmstädter Platz, Linien 2, 3 und 4. Von dort sind es
[GEHMINUTEN BESTÄTIGEN, Kartenwert: etwa 7] Minuten zu Fuß.

**Mit dem Auto**
In der Herderstraße parkst du kostenfrei und in aller Regel ohne Suchen. Kein
Parkhaus, keine Parkscheibe.

**Zugang**
Die Räume liegen im Erdgeschoss. [STUFENFREIHEIT BESTÄTIGEN: stufenfrei ab
Eingang, ja oder nein.]

---

## Kurzfassung für die FAQ

**Wo findet die Werkstatt statt?**
In den Räumen der DEVDEER GmbH, Herderstraße 31, 39108 Magdeburg. Straßenbahn
bis Wilhelmstädter Platz, mit dem Auto kostenfrei in der Herderstraße parken.

**Muss ich Treppen steigen?**
Nein, die Räume liegen im Erdgeschoss. [STUFENFREIHEIT BESTÄTIGEN oder
korrigieren.]

**Warum steht am Eingang DEVDEER?**
Ich bin Partner und Head of Operations dort. Die Werkstatt ist mein eigenes
Angebot, die Räume sind die der Firma.

---

## JSON-LD

Kein `LocalBusiness`. An der Adresse ist die DEVDEER GmbH bereits als
Unternehmen ausgezeichnet, ein zweiter Eintrag unter derselben Anschrift
erzeugt einen Konflikt. Der Veranstaltungsort ist ein Ort, kein Unternehmen.

```json
{
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "KI-Werkstatt Magdeburg",
    "provider": {
        "@type": "Person",
        "name": "Kevin Heyland",
        "url": "https://kevinheyland.com"
    },
    "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "location": {
            "@type": "Place",
            "name": "DEVDEER GmbH",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Herderstraße 31",
                "postalCode": "39108",
                "addressLocality": "Magdeburg",
                "addressCountry": "DE"
            }
        }
    }
}
```

Adresse zeichengleich mit dem Impressum halten.

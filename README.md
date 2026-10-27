# UNIKAT – spletna aplikacija za poročne storitve, ličenje in cvetlična naročila

## 1. Opis projekta

UNIKAT je spletna aplikacija za podjetje, katerega lastnica organizira poroke, izvaja ličenje ter pripravlja šopke in cvetlične aranžmaje.

Namen aplikacije je združiti povpraševanja, rezervacije terminov in naročila cvetličnih izdelkov na enem mestu. Komunikacija prek različnih sporočil, družbenih omrežij in telefonskih klicev lahko povzroči izgubo podatkov, prekrivanje terminov ali spregledana naročila.

Aplikacija bo strankam omogočala oddajo zahtev za rezervacijo terminov in naročilo šopkov, lastnici pa pregledovanje, potrjevanje in zavračanje prejetih zahtev. Sistem bo upošteval razpoložljivost terminov in omejitev naročanja cvetličnih izdelkov največ en mesec vnaprej.

Ob novih naročilih ali rezervacijah bo sistem lastnici pošiljal dnevni e-poštni povzetek.

## 2. Ciljni uporabniki

- **Stranke:** ustvarijo uporabniški račun, rezervirajo termine, naročajo šopke oziroma aranžmaje ter objavljajo komentarje in fotografije.
- **Lastnica podjetja UNIKAT:** upravlja razpoložljivost terminov, pregleduje in potrjuje ali zavrača zahteve, spremlja naročila ter skrbi za vsebino.
- **Administrator:** skrbi za uporabniške račune in pravilno delovanje aplikacije. V prvi različici je lahko njegova vloga združena z vlogo lastnice, vendar so pravice logično ločene.

## 3. Glavne funkcionalnosti

- Registracija uporabnikov in prijava v aplikacijo.
- Pregled koledarja in razpoložljivih terminov.
- Oddaja zahtev za rezervacijo posvetovanja ali ličenja.
- Potrjevanje in zavračanje rezervacij.
- Naročanje šopkov in cvetličnih aranžmajev.
- Omejitev datuma naročila na obdobje od tekočega dne do največ enega meseca vnaprej.
- Dodajanje komentarjev in fotografij.
- Upravljanje razpoložljivosti terminov.
- Pregled in moderiranje komentarjev.
- Dnevno pošiljanje e-poštnega povzetka novih naročil in rezervacij.

## 4. Potek uporabe

1. Stranka ustvari uporabniški račun in se prijavi.
2. V koledarju izbere razpoložljiv termin ter odda zahtevo za posvetovanje ali ličenje.
3. Zahteva je do odločitve lastnice v stanju čakanja. Po potrditvi postane potrjena rezervacija.
4. Stranka izpolni naročilo za šopek ali aranžma, določi želeni datum prevzema oziroma dostave in po potrebi doda opombo.
5. Stranka lahko objavi komentar in priloži fotografijo, na primer fotografijo navdiha ali končnega izdelka.
6. Lastnica v skrbniškem delu pregleda prejeta naročila in rezervacije ter jih potrdi ali zavrne. Prav tako lahko upravlja razpoložljivost terminov in odstranjuje neprimerne komentarje.
7. Sistem enkrat dnevno preveri, ali so bila oddana nova naročila ali rezervacije. Če so bila, lastnici pošlje e-poštni povzetek z bistvenimi podatki.

## 5. Tehnološki sklad

Predvideni tehnološki sklad aplikacije:

- **Frontend:** React, TypeScript.
- **Backend:** Node.js, Express, TypeScript.
- **Podatkovna baza:** PostgreSQL.
- **Dostop do podatkovne baze:** Prisma ORM.
- **Avtentikacija:** sejni piškotki HttpOnly in varno shranjevanje gesel z uporabo Argon2 ali bcrypt.
- **E-pošta:** Nodemailer in SMTP.
- **Dnevna opravila:** node-cron.
- **Testiranje:** Vitest ali Jest ter Supertest.

Končna izbira in konfiguracija tehnologij bosta določeni med razvojem.

## 6. Struktura projekta

```text
UNIKAT/
├── README.md
├── .gitignore
├── frontend/
├── backend/
└── docs/
    ├── 01-zasnova-resitve.md
    ├── 02-funkcionalnosti-in-obseg.md
    ├── 03-podatkovni-model.md
    ├── 04-arhitektura-in-tehnoloski-sklad.md
    ├── 05-uporabniske-zgodbe.md
    ├── 06-wireframes.md
    ├── wireframes/
    └── adr/
        ├── adr-template.md
        ├── 0001-postgresql-kot-relacijska-podatkovna-baza.md
        ├── 0002-poslovna-pravila-in-pravice-na-backendu.md
        └── 0003-locena-frontend-in-backend-arhitektura.md

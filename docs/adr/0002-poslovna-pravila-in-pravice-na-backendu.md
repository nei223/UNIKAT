# ADR-0002: Poslovna pravila in preverjanje pravic na backendu

- **Status:** Sprejeto
- **Datum:** 2026-10-27

## Kontekst in problem

UNIKAT ima različne vloge (stranka, lastnica in administrator), pravila glede datumov naročil ter zahtevo, da se potrjene rezervacije ne prekrivajo. Preverjanje samo v uporabniškem vmesniku bi bilo mogoče zaobiti z neposrednimi zahtevami API-ju.

## Obravnavane alternative

### Alternativa 1: Preverjanje samo v frontendu

Uporabniški obrazci bi preverjali podatke pred oddajo. To bi lahko izboljšalo uporabniško izkušnjo, vendar ne bi zagotovilo varnosti ali pravilnosti zahtev.

### Alternativa 2: Preverjanje na backendu

Backend preveri identiteto, pravice in poslovna pravila ob vsaki ustrezni zahtevi. Frontend lahko dodatno preverja podatke za boljšo uporabniško izkušnjo.

## Odločitev

Poslovna pravila in pravice se obvezno preverjajo na backendu. Frontend lahko izvaja dodatna predhodna preverjanja, vendar se nanje ne zanašamo kot na varnostno mejo.

## Posledice

### Pozitivne

- Uporabniki ne morejo pridobiti pravic samo s spremembo vmesnika.
- Pravila za datum naročila in prekrivanje rezervacij veljajo tudi pri neposrednih zahtevah API-ju.
- Pravila so centralizirana in jih je mogoče sistematično testirati.

### Negativne

- Potrebna je dodatna implementacija in testiranje strežniških preverjanj.
- Napake pri preverjanju pravic lahko vplivajo na več funkcionalnosti, zato so potrebni dobri testi.

## Povezane odločitve

- ADR-0001: PostgreSQL kot relacijska podatkovna baza.

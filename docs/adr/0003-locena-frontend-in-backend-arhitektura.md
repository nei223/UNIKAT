# ADR-0003: Ločena frontend in backend dela

- **Status:** Sprejeto
- **Datum:** 2026-10-27

## Kontekst in problem

UNIKAT potrebuje uporabniški vmesnik za stranke ter skrbniški pogled za lastnico in administratorja. Poleg prikaza podatkov mora sistem izvajati avtentikacijo, preverjanje vlog, poslovna pravila, shranjevanje podatkov in pošiljanje e-pošte.

## Obravnavane alternative

### Alternativa 1: Enotna aplikacija brez jasne ločitve

Vmesnik in strežniška logika bi bila tesno povezana. Za manjši prototip je to lahko preprosto, vendar se lahko odgovornosti prepletajo.

### Alternativa 2: Ločen frontend in backend API

Frontend skrbi za uporabniški vmesnik, backend API pa za avtentikacijo, pravice, poslovna pravila in dostop do podatkov.

## Odločitev

Izberemo ločena frontend in backend dela. Predvideni sklad je React + TypeScript za frontend ter Node.js + Express + TypeScript za backend, ki komunicirata prek REST API-ja.

## Posledice

### Pozitivne

- Jasnejša ločitev odgovornosti in lažje samostojno testiranje.
- Backend ostane osrednja točka za preverjanje pravic in poslovnih pravil.
- Dela je mogoče razvijati in spreminjati z manj neposrednega prepletanja kode.

### Negativne

- Treba je določiti in vzdrževati pogodbo REST API-ja.
- Lokalni razvoj zahteva konfiguracijo obeh delov in njune povezave.
- Napake v komunikaciji med frontendom in backendom zahtevajo dodatno diagnostiko.

## Povezane odločitve

- ADR-0002: Poslovna pravila in preverjanje pravic na backendu.

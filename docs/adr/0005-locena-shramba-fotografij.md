# ADR 0005: Fotografije hranimo zunaj relacijske podatkovne baze

## Kontekst in problem

Stranke lahko komentarjem priložijo fotografije. Fotografije so večje datoteke, medtem ko PostgreSQL primarno hrani strukturirane podatke in povezave med njimi. Aplikacija mora fotografije povezati z objavami, ne da bi po nepotrebnem povečevala podatkovno bazo.

## Obravnavane možnosti

- **Datoteke v relacijski bazi:** poenostavi transakcijsko shranjevanje vsebine, vendar poveča velikost in obremenitev baze.
- **Ločena datotečna oziroma objektna shramba, v bazi pa pot ali URL:** loči vsebino datotek od metapodatkov.
- **Zunanja storitev za galerije:** lahko nudi dodatne funkcije, vendar za MVP ni nujna.

## Odločitev

V razvoju uporabljamo lokalno mapo, v produkciji pa po potrebi objektno shrambo. V PostgreSQL shranimo samo pot oziroma URL fotografije in podatke, potrebne za povezavo z objavo. Nalaganje mora omejevati velikost in dovoljene vrste datotek ter preverjati dostop do datotek.

## Posledice

### Pozitivne

- Podatkovna baza ostane osredotočena na strukturirane podatke.
- Shrambo fotografij je mogoče v prihodnje zamenjati brez večjih sprememb relacijskega modela.
- Vsebino datotek je mogoče upravljati ločeno od zapisov komentarjev.

### Negativne in kompromisi

- Aplikacija mora upravljati poti, dovoljenja in življenjski cikel datotek.
- Varnostne kopije baze same po sebi ne vključujejo fotografij.
- Pri produkcijski objektni shrambi je potrebna dodatna konfiguracija.

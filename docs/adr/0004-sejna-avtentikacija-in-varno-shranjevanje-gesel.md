# ADR 0004: Sejna avtentikacija in varno shranjevanje gesel

## Kontekst in problem

Stranke se morajo registrirati in prijaviti, sistem pa mora varno prepoznati prijavljenega uporabnika pri naslednjih zahtevah. Gesla ne smejo biti shranjena ali prikazana v berljivi obliki.

## Obravnavane možnosti

- **Seja s piškotkom `HttpOnly`:** brskalnik pošilja sejni piškotek, JavaScript pa njegove vrednosti ne more neposredno prebrati.
- **Avtentikacija z žetoni, shranjenimi v `localStorage`:** pogosto uporabljena možnost, vendar so žetoni ob določenih vrstah napadov izpostavljeni JavaScriptu.
- **Gesla v čisti obliki:** nesprejemljivo, ker bi razkritje baze razkrilo gesla uporabnikov.

## Odločitev

Izberemo sejno avtentikacijo s piškotkom `HttpOnly`. Gesla shranjujemo samo kot varne zgoščene vrednosti, na primer z Argon2 ali bcrypt. V produkciji uporabljamo HTTPS in ustrezne nastavitve piškotkov. Za seje je treba določiti tudi ustrezno zaščito pred ponarejanjem zahtev (CSRF), kjer je relevantna.

## Posledice

### Pozitivne

- Gesla niso shranjena v čisti obliki.
- Piškotek `HttpOnly` ni neposredno dostopen odjemalskemu JavaScriptu.
- Seje se dobro ujemajo s klasično spletno aplikacijo, kjer frontend komunicira z lastnim backendom.

### Negativne in kompromisi

- Potrebno je upravljanje življenjske dobe sej in varno uničenje ob odjavi.
- Piškotki zahtevajo pravilno nastavitev `Secure`, `SameSite` in zaščite CSRF glede na zasnovo aplikacije.
- Produkcijsko okolje mora uporabljati HTTPS.


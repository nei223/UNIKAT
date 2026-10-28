# ADR 0001: Relacijska podatkovna baza PostgreSQL

## Kontekst in problem

Podatki UNIKAT-a so medsebojno povezani: uporabniki oddajajo rezervacije in naročila, uporabniki objavljajo komentarje, lastnica pa pregleduje zahteve in nastavlja razpoložljivost. Potrebujemo zanesljive povezave, omejitve celovitosti ter poizvedbe po datumih in statusih.

## Obravnavane možnosti

- **PostgreSQL:** relacijski model, tuji ključi, transakcije in omejitve.
- **Dokumentna baza:** prilagodljiva struktura dokumentov, vendar je treba povezave in doslednost med povezanimi zapisi načrtovati drugače.
- **Shranjevanje v datotekah:** preprosto za prototip, a neprimerno za sočasne spremembe, povezave in filtriranje zahtev.

## Odločitev

Izberemo PostgreSQL. Relacijski model ustreza entitetam `users`, `appointments`, `flower_orders`, `comments` in `availability_blocks`. Tuji ključi in transakcije pomagajo ohranjati doslednost podatkov.

## Posledice

### Pozitivne

- Povezave med strankami in njihovimi zahtevami so jasno določene.
- Podatke je mogoče učinkovito filtrirati po datumu, uporabniku in statusu.
- Omejitve in transakcije pomagajo preprečevati nekonsistentne spremembe.

### Negativne in kompromisi

- Potrebno je načrtovati shemo in upravljati migracije.
- Spremembe podatkovnega modela zahtevajo premišljene migracije, zlasti ko je baza že v uporabi.

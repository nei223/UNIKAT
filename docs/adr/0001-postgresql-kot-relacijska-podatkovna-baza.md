# ADR-0001: PostgreSQL kot relacijska podatkovna baza

- **Status:** Sprejeto
- **Datum:** 2026-10-27

## Kontekst in problem

UNIKAT hrani povezane podatke o uporabnikih, rezervacijah, naročilih, komentarjih in razpoložljivosti. Sistem mora ohraniti povezave med zapisi ter omogočiti poizvedbe po datumih in statusih. Podatkovni model predvideva tuje ključe in relacije med temi entitetami.

## Obravnavane alternative

### Alternativa 1: PostgreSQL

Relacijska baza z omejitvami, tujimi ključi in podporo za transakcije.

### Alternativa 2: Dokumentna podatkovna baza

Podatki bi bili shranjeni v dokumentih, kar lahko ponuja prilagodljivo strukturo, vendar bi bilo treba povezave in integriteto podatkov obravnavati drugače.

## Odločitev

Izberemo PostgreSQL, ker so podatki aplikacije medsebojno povezani, referenčna celovitost pa je pomembna pri rezervacijah, naročilih in uporabniških pravicah.

## Posledice

### Pozitivne

- Tuji ključi in omejitve pomagajo ohranjati konsistentnost podatkov.
- Poizvedbe po datumih in statusih ustrezajo potrebam aplikacije.
- Relacijski model omogoča jasno predstavitev povezav med uporabniki, rezervacijami in naročili.
- Jasna shema in omejitve prispevajo k predvidljivemu vzdrževalnemu odtisu.

### Negativne

- Potrebno je načrtovati shemo in upravljati migracije.
- Spremembe podatkovnega modela zahtevajo usklajene spremembe migracij in aplikacijske kode.

## Povezane odločitve

- ADR-0002: Poslovna pravila in preverjanje pravic na backendu.

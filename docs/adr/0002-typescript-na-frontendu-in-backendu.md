# ADR 0002: TypeScript na frontend in backend strani
## Kontekst in problem

UNIKAT ima obrazce, koledar, več uporabniških vlog in statuse rezervacij ter naročil. Napačne vrednosti ali nedosledna imena polj lahko povzročijo napake med frontend in backend delom.

## Obravnavane možnosti

- **JavaScript:** manj začetne tipizacijske nastavitve, vendar se veliko napak pokaže šele med izvajanjem.
- **TypeScript na obeh straneh:** omogoča preverjanje tipov med razvojem in doslednejše modele, zahteva pa prevajanje in urejanje tipov.
- **Različna jezika na frontend in backend strani:** lahko sta primerna v določenih ekipah, vendar povečata raznolikost orodij za ta projekt.

## Odločitev

Izberemo React + TypeScript na frontendu in Node.js + Express + TypeScript na backendu. Enak jezik in skupen pristop k tipom zmanjšata kognitivno obremenitev pri razvoju.

## Posledice

### Pozitivne

- Veliko napak pri tipih in strukturi podatkov je mogoče odkriti pred izvajanjem.
- Lažje je ohranjati doslednost med obrazci, API-jem in podatkovnimi modeli.
- Orodja za razvoj in testiranje so lahko podobna na obeh straneh.

### Negativne in kompromisi

- Potrebna je dodatna konfiguracija TypeScripta in gradnje.
- Tipi sami po sebi ne nadomestijo preverjanja nepreverjenih podatkov, ki prispejo prek API-ja.

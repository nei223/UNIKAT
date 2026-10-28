# ADR 0007: Preprečevanje časovnega prekrivanja potrjenih rezervacij

## Kontekst in problem

Več strank lahko hkrati izbere isti termin. Oddaja zahteve ne pomeni potrditve, vendar sistem ne sme potrditi dveh rezervacij, ki se časovno prekrivata. Preverjanje samo v brskalniku ni dovolj, saj lahko zahteve prispejo sočasno ali pa se podatki spremenijo pred potrditvijo.

## Obravnavane možnosti

- **Preverjanje samo v frontendu:** izboljša uporabniško izkušnjo, vendar ne zagotavlja pravilnosti.
- **Preverjanje prekrivanja v backendu ob potrditvi:** uveljavlja poslovno pravilo na strežniku, vendar mora biti varno tudi ob sočasnih zahtevah.
- **Dovoliti prekrivanje in ga reševati ročno:** poenostavi implementacijo, a ne izpolnjuje zahteve projekta.

## Odločitev

Backend preveri razpoložljivost ob oddaji zahteve in ponovno ob potrditvi. Potrjevanje mora biti izvedeno tako, da sočasni potrditvi ne moreta obe uspeti za prekrivajoča se termina. V PostgreSQL uporabimo transakcijsko zaščito in, če je skladno z modelom terminov, ustrezno omejitev za izključevanje prekrivajočih se časovnih intervalov; alternativa je dosledno zaklepanje in preverjanje znotraj transakcije.

## Posledice

### Pozitivne

- Zmanjša se tveganje dvojnih rezervacij.
- Poslovno pravilo se izvaja na strežniku in ni odvisno od uporabniškega vmesnika.
- Potrjene rezervacije bolje odražajo dejansko razpoložljivost.

### Negativne in kompromisi

- Sočasnost zahteva skrbno zasnovo transakcij in testiranje.
- Posebne omejitve PostgreSQL lahko zahtevajo dodatno konfiguracijo in migracijo.
- Stranki je treba jasno sporočiti, če termin med oddajo in potrditvijo ni več na voljo.


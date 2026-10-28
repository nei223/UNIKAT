# ADR 0003: Preverjanje pravic na strežnikus

## Kontekst in problem

Sistem razlikuje med vlogami `CUSTOMER`, `OWNER` in `ADMIN`. Stranka sme dostopati samo do svojih podatkov, lastnica upravlja rezervacije in naročila, administrator pa upravlja račune. Samo skrivanje gumbov v uporabniškem vmesniku ne prepreči neposrednih zahtev do API-ja.

## Obravnavane možnosti

- **Preverjanje samo v frontendu:** preprosto za prikaz različnih zaslonov, vendar ni varnostna meja.
- **Preverjanje na strežniku pri vsaki zaščiteni zahtevi:** zahteva dosledno implementacijo, vendar omogoča uveljavljanje pravil ne glede na uporabniški vmesnik.
- **Preverjanje samo na podlagi prijave:** ne razlikuje dovolj med vlogami in lastništvom podatkov.

## Odločitev

Backend preveri prijavo, vlogo in lastništvo podatkov pri vsaki zaščiteni zahtevi. Registracija javno ustvari samo vlogo `CUSTOMER`; vloga `OWNER` se nastavi ročno oziroma prek začetne administrativne nastavitve. Pravice administratorja ostanejo ločene od poslovnih odločitev lastnice.

## Posledice

### Pozitivne

- Stranke ne morejo dostopati do naročil ali rezervacij drugih strank zgolj s spremembo identifikatorja.
- Uporabnik si ne more sam dodeliti lastniških ali skrbniških pravic prek obrazca.
- Pravila dostopa so uveljavljena na osrednjem mestu.

### Negativne in kompromisi

- Vsak API-endpoint mora imeti ustrezno preverjanje in teste.
- Napake v pravilih avtorizacije so še vedno možne, zato so potrebni pregledi in varnostni testi.

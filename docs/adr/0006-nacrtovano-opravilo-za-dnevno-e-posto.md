# ADR 0006: Načrtovano opravilo za dnevni e-poštni povzetek


## Kontekst in problem

Lastnica želi ob koncu dneva prejeti povzetek novih rezervacij in naročil. Povzetek se pošlje samo, če so bile tisti dan oddane nove zahteve. Čas pošiljanja mora upoštevati slovenski časovni pas, podvojena pošiljanja pa je treba omejiti.

## Obravnavane možnosti

- **Ročno pregledovanje aplikacije:** ne zahteva avtomatizacije, vendar je odvisno od tega, ali se lastnica spomni preveriti sistem.
- **Načrtovano opravilo v backendu:** preprosto za manjšo aplikacijo in omogoča uporabo obstoječe poslovne logike.
- **Zunanji razporejevalnik ali upravljana storitev opravil:** lahko je zanesljivejša v nekaterih produkcijskih okoljih, vendar zahteva dodatno konfiguracijo.

## Odločitev

Za MVP uporabimo dnevno načrtovano opravilo, na primer `node-cron`, ki poišče zahteve, ustvarjene v tekočem dnevu, in pošlje povzetek prek SMTP/Nodemailerja ali ponudnika transakcijske e-pošte. Časovni pas nastavimo na `Europe/Ljubljana`. V produkciji z več instancami mora biti zagotovljeno, da opravilo teče samo enkrat; priporočena je tudi evidenca poslanih povzetkov.

## Posledice

### Pozitivne

- Lastnica prejme proaktiven pregled novih zahtev.
- E-pošta se ne pošilja po nepotrebnem, kadar novih zahtev ni.
- Za manjši MVP je rešitev razmeroma preprosta.

### Negativne in kompromisi

- Opravilo je odvisno od delovanja aplikacije in pravilne konfiguracije časovnega pasu.
- Več instanc aplikacije lahko povzroči podvojena opravila, če izvajanje ni usklajeno.
- Napake pri pošiljanju e-pošte je treba beležiti in po potrebi ponovno obdelati.

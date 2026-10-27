# 1. Zasnova rešitve – UNIKAT

## Ime rešitve
**UNIKAT – spletna aplikacija za poročne storitve, ličenje in cvetlična naročila**

## Namen in problem
UNIKAT je spletna aplikacija za podjetje, katerega lastnica organizira poroke, izvaja ličenje in pripravlja šopke oziroma cvetlične aranžmaje. Namen aplikacije je združiti povpraševanja, rezervacije terminov in naročila šopkov na enem mestu. Komunikacija prek različnih sporočil, družbenih omrežij in telefonskih klicev lahko povzroči, da se podatki izgubijo, termini prekrivajo ali pa lastnica spregleda naročilo.

Aplikacija bo strankam omogočila, da same oddajo zahtevo za termin ali naročilo šopka, lastnica pa bo lahko vse prejete zahteve pregledala in jih potrdila ali zavrnila. Sistem bo upošteval razpoložljivost terminov in omejitev naročanja šopkov največ en mesec vnaprej. Lastnica bo vsak dan, ko prejme nova naročila ali rezervacije, dobila e-poštni povzetek.

## Ciljni uporabniki
- **Stranke:** osebe, ki želijo rezervirati posvetovanje ali ličenje, naročiti šopek oziroma aranžma ali objaviti komentar in fotografijo.
- **Lastnica podjetja UNIKAT:** oseba, ki upravlja termine, pregleduje in potrjuje naročila, skrbi za vsebino ter spremlja dnevne obveznosti.
- **Administrator:** tehnični skrbnik aplikacije, ki skrbi za uporabniške račune in pravilno delovanje sistema. V prvi različici je lahko ta vloga združena z vlogo lastnice, vendar sta pravici logično ločeni.

## Kako bo rešitev delovala
1. Stranka ustvari uporabniški račun in se prijavi.
2. V koledarju izbere prost termin za posvetovanje ali ličenje ter odda zahtevo. Termin je do odločitve lastnice prikazan kot čakajoč; po potrditvi postane potrjena rezervacija.
3. Stranka izpolni naročilo za šopek ali aranžma, izbere želeni datum prevzema oziroma dostave in po potrebi doda opombo. Datum mora biti od današnjega dne do enega meseca vnaprej.
4. Stranka lahko objavi komentar in priloži svojo fotografijo, na primer fotografijo navdiha ali končnega izdelka.
5. Lastnica v skrbniškem delu vidi seznam novih naročil in rezervacij, jih potrdi ali zavrne, upravlja razpoložljivost terminov ter odstrani neprimerne komentarje.
6. Sistem enkrat dnevno preveri, ali so bila tisti dan oddana nova naročila ali rezervacije. Če so bila, lastnici pošlje e-poštni povzetek z bistvenimi podatki.

## Meje prve različice
Prva različica je namenjena osnovnemu spletnemu naročanju in upravljanju zahtev. Ne vključuje spletnega plačevanja, samodejnega izračuna dostave ali popolnega sistema za načrtovanje porok. Podrobnejši obseg je opredeljen v dokumentu `02-funkcionalnosti-in-obseg.md`.

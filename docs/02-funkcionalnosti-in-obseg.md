# 2. Funkcionalnosti in obseg – UNIKAT

## Uporabniške vloge

### 1. Stranka
**Lahko:**
- ustvari račun, se prijavi in ureja osnovne podatke svojega profila;
- pregleda razpoložljive termine in odda zahtevo za posvetovanje ali ličenje;
- odda naročilo šopka oziroma aranžmaja za dovoljen datum;
- pregleda stanje svojih naročil in rezervacij;
- objavi komentar ter naloži fotografijo;
- ureja ali prekliče svojo čakajočo zahtevo, če še ni bila potrjena.

**Ne more:**
- videti zasebnih podatkov, naročil ali rezervacij drugih strank;
- sama potrditi rezervacije ali naročila;
- upravljati koledarja lastnice ali brisati komentarjev drugih uporabnikov.

### 2. Lastnica UNIKAT
**Lahko:**
- pregleda vsa naročila, rezervacije in njihove podrobnosti;
- potrdi ali zavrne zahteve ter po potrebi doda razlog za zavrnitev;
- nastavlja razpoložljivost terminov in označi zasedene dneve;
- pregleda komentarje in odstrani neprimerne;
- pregleda fotografije, povezane z objavami oziroma naročili;
- prejema dnevne e-poštne povzetke novih zahtev.

**Ne more:**
- spreminjati gesel strank ali dostopati do njihovih gesel v berljivi obliki;
- spreminjati tehničnih nastavitev strežnika ali podatkovne baze prek uporabniškega vmesnika;
- pregledovati podatkov, ki jih aplikacija sploh ne zbira.

### 3. Administrator
**Lahko:**
- upravlja uporabniške račune in vloge;
- deaktivira račun ob utemeljenem razlogu;
- pregleda osnovne sistemske podatke in pomaga pri odpravljanju težav;
- dodeli skrbniške pravice po vnaprej določenih pravilih.

**Ne more:**
- brez potrebe spreminjati vsebine naročil ali potrjevati terminov namesto lastnice;
- videti uporabniških gesel;
- obiti preverjanja pravic ali dostopati do funkcij, ki jih sistem ne dovoljuje.

## Predvidene funkcionalnosti

Oznaka **MVP** pomeni, da je funkcionalnost vključena v prvo delujočo različico.

1. **MVP – Uporabniški računi in vloge:** registracija, prijava, odjava ter razlikovanje med stranko, lastnico in administratorjem.
2. **MVP – Koledar razpoložljivih terminov:** prikaz prostih terminov za posvetovanje in ličenje; zasedeni oziroma nedostopni termini niso na voljo za izbiro.
3. **MVP – Zahteva za rezervacijo termina:** stranka izbere storitev, datum in uro ter odda zahtevo, ki do odločitve lastnice ostane v stanju »čaka na potrditev«.
4. **MVP – Potrjevanje ali zavračanje rezervacij:** lastnica odloči o zahtevi; potrjen termin se označi kot zaseden, da ne pride do dvojne rezervacije.
5. **MVP – Naročilo šopka ali aranžmaja:** stranka izbere vrsto izdelka, količino oziroma velikost, doda opombo in izbere datum prevzema/dostave. Sistem dovoljuje samo datume od danes do enega koledarskega meseca vnaprej.
6. **MVP – Upravljanje naročil šopkov:** lastnica pregleda podrobnosti ter naročilo potrdi ali zavrne; stranka lahko spremlja stanje.
7. **MVP – Dnevni e-poštni povzetek:** ob koncu dneva sistem pošlje lastnici seznam novih naročil in rezervacij, če so bile tisti dan oddane. Povzetek vključuje vrsto zahteve, stranko, želeni datum in trenutno stanje.
8. Komentarji in fotografije: prijavljena stranka objavi komentar in po želji naloži fotografijo, ki je povezana z objavo.
9. Moderiranje komentarjev: lastnica lahko skrije ali izbriše neprimerne komentarje.
10. Profil stranke: stranka lahko posodobi ime, kontaktne podatke in druge osnovne podatke.
11. Obvestila o spremembi stanja: stranka prejme e-poštno obvestilo, ko je njena rezervacija ali naročilo potrjeno ali zavrnjeno.
12. Osebni pregled: stranka na enem mestu vidi svoje prihodnje termine, pretekle rezervacije in naročila.
13. Upravljanje delovnega časa: lastnica nastavi delovne dneve, ure in dneve, ko ni na voljo.
14. Podrobnosti naročila: lastnica lahko pri naročilu zabeleži interne opombe, ki niso vidne stranki.
15. Osnovno iskanje in filtriranje: lastnica filtrira zahteve po vrsti, datumu in stanju.

## Kasnejše nadgradnje

1. Samodejni izračun cene glede na velikost šopka, izbrane dodatke in dostavo.
2. Izbira območja dostave ter izračun stroška dostave.
3. Naprednejši koledar z več vrstami storitev, trajanjem terminov in samodejnim predlaganjem prostih terminov.
4. Galerija portfelja porok, ličenj in cvetličnih aranžmajev z možnostjo filtriranja.
5. Samodejni opomniki strankam pred rezervacijo ali datumom prevzema.
6. Večjezični vmesnik.
7. Statistika naročil, najbolj priljubljenih izdelkov in sezonskega povpraševanja.

## Out of scope – izven obsega projekta

- Integracija s plačilnimi sistemi in spletno plačevanje.
- Samodejno računovodstvo, izdajanje računov in davčno poročanje.
- Mobilna aplikacija za Android ali iOS; projekt bo spletna aplikacija, prilagojena tudi mobilnim zaslonom.
- Popoln sistem za načrtovanje porok z upravljanjem gostov, sedežnega reda in izvajalcev.
- Integracija z zunanjimi dostavnimi službami ali sledenje pošiljkam.
- Klepet v realnem času med stranko in lastnico.
- Samodejno prepoznavanje vsebine ali moderiranje fotografij z umetno inteligenco.
- Javno objavljanje osebnih podatkov strank ali zasebnih podrobnosti naročil.

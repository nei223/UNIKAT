# Uporabniške zgodbe – UNIKAT

Dokument opredeljuje uporabniške zgodbe za funkcionalnosti iz dokumenta `02-funkcionalnosti-in-obseg.md`. Zgodbe so zapisane z vidika uporabnika; pogoji sprejema so preverljivi. Oznake statusov v nadaljevanju pomenijo: `PENDING` – čaka na odločitev, `APPROVED` – potrjeno, `REJECTED` – zavrnjeno, `CANCELLED` – preklicano, `COMPLETED` – zaključeno.

## US-01 – Uporabniški računi in vloge

- **Povezana funkcionalnost:** MVP – Uporabniški računi in vloge
- **Uporabniška vloga:** Stranka
- **Uporabniška zgodba:** Kot stranka želim ustvariti račun, se prijaviti in odjaviti, da lahko varno upravljam svoje rezervacije in naročila.

**Acceptance criteria**
1. Ob registraciji mora uporabnik vnesti ime in priimek, veljaven e-poštni naslov ter geslo; manjkajoča ali neveljavna polja povzročijo prikaz napake.
2. E-poštni naslov mora biti unikaten; registracija z že uporabljenim naslovom se zavrne z razumljivim sporočilom.
3. Ob uspešni registraciji sistem računu dodeli vlogo `CUSTOMER`; uporabnik si ne more sam izbrati vlog `OWNER` ali `ADMIN`.
4. Prijava z veljavnimi podatki odpre uporabniški del, odjava pa zaključi sejo in zaščitene strani niso več dostopne brez ponovne prijave.
5. Geslo se ne shrani ali prikaže v čisti obliki.

## US-02 – Koledar razpoložljivih terminov

- **Povezana funkcionalnost:** MVP – Koledar razpoložljivih terminov
- **Uporabniška vloga:** Stranka
- **Uporabniška zgodba:** Kot stranka želim pregledati proste termine za posvetovanje in ličenje, da lahko izberem čas, ki mi ustreza.

**Acceptance criteria**
1. Koledar omogoča pregled datumov in terminov ter jasno razlikuje proste, čakajoče, potrjene in nedostopne termine.
2. Stranka lahko izbira samo termine, ki so označeni kot prosti.
3. Termini v obdobju, ki ga je lastnica označila kot nedostopnega, niso na voljo za izbiro.
4. Pri vsakem prostem terminu je razvidno, za katero storitev ga je mogoče rezervirati, če je razpoložljivost vezana na storitev.
5. Če v izbranem obdobju ni prostih terminov, sistem prikaže obvestilo in omogoči pregled drugega obdobja.

## US-03 – Oddaja zahteve za rezervacijo

- **Povezana funkcionalnost:** MVP – Zahteva za rezervacijo termina
- **Uporabniška vloga:** Stranka
- **Uporabniška zgodba:** Kot stranka želim izbrati storitev, datum in uro ter oddati zahtevo za rezervacijo, da lahko zaprosim za želeni termin.

**Acceptance criteria**
1. Obrazec zahteva izbiro storitve (`posvetovanje` ali `ličenje`), datuma in razpoložljive ure; opomba je neobvezna.
2. Sistem zavrne oddajo, če obvezna polja niso izpolnjena ali izbrani termin ni več prost.
3. Po uspešni oddaji se zahteva shrani s statusom `PENDING` in stranki se prikaže potrditev oddaje.
4. Oddaja zahteve sama po sebi ne pomeni potrjene rezervacije; uporabniku je prikazano, da čaka na odločitev lastnice.
5. Stranka lahko vidi podrobnosti svoje zahteve, ne pa zahtev drugih strank.

## US-04 – Potrjevanje ali zavračanje rezervacij

- **Povezana funkcionalnost:** MVP – Potrjevanje ali zavračanje rezervacij
- **Uporabniška vloga:** Lastnica UNIKAT
- **Uporabniška zgodba:** Kot lastnica želim zahtevo za rezervacijo potrditi ali zavrniti, da lahko nadzorujem svoj urnik in preprečim prekrivanje terminov.

**Acceptance criteria**
1. Lastnica vidi seznam rezervacij, ki vključuje stranko, storitev, datum, uro in trenutno stanje.
2. Lastnica lahko zahtevo v stanju `PENDING` potrdi ali zavrne; pri zavrnitvi lahko vnese razlog.
3. Ob potrditvi se stanje spremeni v `APPROVED`, termin pa postane zaseden.
4. Sistem ne dovoli potrditve termina, ki se časovno prekriva z drugo potrjeno rezervacijo; uporabniku prikaže razlog.
5. Odločitev in čas odločitve se shranita, stranka pa vidi posodobljeno stanje.

## US-05 – Naročilo šopka ali aranžmaja

- **Povezana funkcionalnost:** MVP – Naročilo šopka ali aranžmaja
- **Uporabniška vloga:** Stranka
- **Uporabniška zgodba:** Kot stranka želim naročiti šopek ali aranžma za izbrani datum prevzema oziroma dostave, da lahko pravočasno naročim cvetlični izdelek po svojih željah.

**Acceptance criteria**
1. Obrazec omogoča izbiro vrste izdelka, velikosti, pozitivne količine, načina izvedbe (`prevzem` ali `dostava`), želenega datuma in neobvezne opombe.
2. Dovoljen je samo datum od današnjega dne do enega koledarskega meseca vnaprej; datum zunaj tega obdobja je zavrnjen tudi pri strežniškem preverjanju.
3. Količina mora biti celo število, večje od nič; neveljavna vrednost prepreči oddajo.
4. Ob uspešni oddaji sistem shrani naročilo s statusom `PENDING` in prikaže povzetek naročila.
5. Sistem ne prikazuje možnosti spletnega plačila, ker ta funkcionalnost ni vključena v prvo različico.

## US-06 – Upravljanje naročil šopkov

- **Povezana funkcionalnost:** MVP – Upravljanje naročil šopkov
- **Uporabniška vloga:** Lastnica UNIKAT
- **Uporabniška zgodba:** Kot lastnica želim pregledati ter potrditi ali zavrniti naročilo šopka, da lahko uskladim izdelavo z željami stranke in svojimi zmožnostmi.

**Acceptance criteria**
1. Lastnica lahko odpre naročilo in vidi vrsto izdelka, velikost, količino, datum, način prevzema/dostave, opombo stranke in status.
2. Lastnica lahko naročilo v stanju `PENDING` potrdi ali zavrne.
3. Ob zavrnitvi lahko lastnica zabeleži razlog; razlog je prikazan stranki, če je tako predvideno v uporabniškem vmesniku.
4. Po odločitvi se stanje spremeni v `APPROVED` ali `REJECTED` in je vidno stranki v njenem pregledu.
5. Samo pooblaščena vloga lastnice lahko spreminja stanje naročila.

## US-07 – Dnevni e-poštni povzetek

- **Povezana funkcionalnost:** MVP – Dnevni e-poštni povzetek
- **Uporabniška vloga:** Lastnica UNIKAT
- **Uporabniška zgodba:** Kot lastnica želim ob koncu dneva prejeti e-poštni povzetek novih zahtev, da lahko hitro pregledam dnevne rezervacije in naročila.

**Acceptance criteria**
1. Načrtovano opravilo se izvede enkrat dnevno ob nastavljeni uri v časovnem pasu `Europe/Ljubljana`.
2. Povzetek vključuje samo rezervacije in naročila, oddana na dan izvajanja opravila.
3. Vsaka postavka vsebuje vrsto zahteve, ime stranke, želeni datum in trenutno stanje.
4. Če tisti dan ni bilo novih zahtev, sistem e-pošte ne pošlje.
5. Ista dnevna vsebina se zaradi ponovnega zagona opravila ne pošlje večkrat po nepotrebnem.

## US-08 – Komentarji in fotografije

- **Povezana funkcionalnost:** Komentarji in fotografije
- **Uporabniška vloga:** Prijavljena stranka
- **Uporabniška zgodba:** Kot prijavljena stranka želim objaviti komentar in po želji dodati fotografijo, da lahko delim svoje mnenje ali vizualni navdih.

**Acceptance criteria**
1. Objavo lahko odda samo prijavljena stranka.
2. Komentar mora vsebovati besedilo; fotografija je neobvezna.
3. Sistem sprejme samo dovoljene vrste fotografij in zavrne datoteke, ki presegajo nastavljeno omejitev velikosti.
4. Po uspešni oddaji se komentar shrani z avtorjem in časom objave; fotografija je povezana z objavo.

## US-09 – Moderiranje komentarjev

- **Povezana funkcionalnost:** Moderiranje komentarjev
- **Uporabniška vloga:** Lastnica UNIKAT
- **Uporabniška zgodba:** Kot lastnica želim skriti ali izbrisati neprimeren komentar, da lahko vzdržujem ustrezno vsebino na strani.

**Acceptance criteria**
1. Lastnica vidi seznam komentarjev z besedilom, avtorjem, časom objave in povezano fotografijo, če obstaja.
2. Lastnica lahko komentar označi kot skrit ali ga izbriše.
3. Skriti komentar ni prikazan v javnem seznamu komentarjev.
4. Ob moderiranju sistem zabeleži uporabnika, ki je ukrep izvedel, in čas ukrepa.
5. Stranka ne more moderirati komentarjev drugih uporabnikov.

## US-10 – Urejanje profila stranke

- **Povezana funkcionalnost:** Profil stranke
- **Uporabniška vloga:** Stranka
- **Uporabniška zgodba:** Kot stranka želim posodobiti svoje osnovne podatke, da lahko lastnica uporablja moje aktualne kontaktne podatke.

**Acceptance criteria**
1. Stranka lahko ureja svoje ime in priimek ter telefonsko številko; e-poštni naslov se obravnava skladno s pravili računa.
2. Obvezna polja ne smejo biti prazna, telefonska številka pa je lahko neobvezna.
3. Neveljavni podatki se ne shranijo in sistem označi polja, ki jih je treba popraviti.
4. Po uspešnem shranjevanju se prikaže potrditev, nove vrednosti pa so vidne ob ponovnem odprtju profila.
5. Stranka ne more urejati profila drugega uporabnika.

## US-11 – Obvestila o spremembi stanja

- **Povezana funkcionalnost:** Obvestila o spremembi stanja
- **Uporabniška vloga:** Stranka
- **Uporabniška zgodba:** Kot stranka želim prejeti e-poštno obvestilo, ko se stanje moje rezervacije ali naročila spremeni, da vem, ali je moja zahteva sprejeta.

**Acceptance criteria**
1. Ko lastnica rezervacijo ali naročilo potrdi oziroma zavrne, sistem sproži e-poštno obvestilo stranki.
2. Sporočilo vsebuje vrsto zahteve, datum oziroma želeni datum ter novo stanje.
3. Obvestilo se pošlje na e-poštni naslov, povezan z računom stranke.
4. Sprememba stanja ostane shranjena tudi, če pošiljanje e-pošte začasno ne uspe; napaka pri pošiljanju se lahko zabeleži za ponovno obdelavo.
5. Obvestilo ne vsebuje podatkov o naročilih ali rezervacijah drugih strank.

## US-12 – Osebni pregled rezervacij in naročil

- **Povezana funkcionalnost:** Osebni pregled
- **Uporabniška vloga:** Stranka
- **Uporabniška zgodba:** Kot stranka želim na enem mestu videti svoje prihodnje termine, pretekle rezervacije in naročila, da lahko spremljam svoje obveznosti.

**Acceptance criteria**
1. Osebni pregled prikazuje strankine rezervacije in naročila, razvrščene po datumu.
2. Pri vsaki postavki so prikazani vrsta, datum, status in povezava do podrobnosti.
3. Prihodnje rezervacije so ločene od preteklih rezervacij.
4. Če stranka še nima zahtev, sistem prikaže prazno stanje z možnostjo začetka nove rezervacije ali naročila.
5. Zahteve drugih strank niso vključene v osebni pregled in niso dostopne prek neposredne povezave.

## US-13 – Upravljanje delovnega časa

- **Povezana funkcionalnost:** Upravljanje delovnega časa
- **Uporabniška vloga:** Lastnica UNIKAT
- **Uporabniška zgodba:** Kot lastnica želim nastaviti delovne dneve, delovne ure in odsotnosti, da koledar strankam ponuja samo termine, ko sem na voljo.

**Acceptance criteria**
1. Lastnica lahko nastavi delovne dneve in čas začetka ter konca razpoložljivosti.
2. Lastnica lahko označi posamezen dan ali časovno obdobje kot nedostopno in mu doda oznako, na primer »dopust«.
3. Koledar strank ne ponuja terminov zunaj nastavljenega delovnega časa ali znotraj nedostopnega obdobja.
4. Sistem zavrne časovni blok, pri katerem je konec pred začetkom ali sta začetek in konec enaka.
5. Spremembe razpoložljivosti se po shranjevanju upoštevajo pri naslednjem prikazu koledarja.

## US-14 – Interne opombe pri naročilu ali rezervaciji

- **Povezana funkcionalnost:** Podrobnosti naročila / interne opombe
- **Uporabniška vloga:** Lastnica UNIKAT
- **Uporabniška zgodba:** Kot lastnica želim dodati interno opombo k rezervaciji ali naročilu, da si lahko zabeležim priprave in posebnosti, ki niso namenjene stranki.

**Acceptance criteria**
1. Lastnica lahko pri rezervaciji ali naročilu vnese in shrani interno opombo.
2. Interna opomba je vidna samo lastnici oziroma pooblaščeni skrbniški vlogi.
3. Stranka interne opombe ne vidi niti na strani s podrobnostmi niti prek svojega osebnega pregleda ali API-ja.
4. Po ponovnem odprtju zahteve je shranjena opomba še vedno prikazana lastnici.
5. Urejanje interne opombe ne spremeni statusa ali drugih podatkov zahteve.

## US-15 – Iskanje in filtriranje zahtev

- **Povezana funkcionalnost:** Osnovno iskanje in filtriranje
- **Uporabniška vloga:** Lastnica UNIKAT
- **Uporabniška zgodba:** Kot lastnica želim filtrirati zahteve po vrsti, datumu in stanju, da lahko hitro najdem zahteve, ki jih moram obravnavati.

**Acceptance criteria**
1. Seznam omogoča filtriranje po vrsti zahteve, časovnem obdobju in statusu.
2. Uporabnik lahko uporabi en filter ali kombinacijo več filtrov.
3. Rezultati ustrezajo vsem izbranim filtrom; neustrezne postavke niso prikazane.
4. Lastnica lahko filtre ponastavi in ponovno prikaže vse zahteve, do katerih ima dostop.
5. Če ni zadetkov, sistem prikaže sporočilo, da zahtevam ne ustreza noben rezultat, brez napake strani.


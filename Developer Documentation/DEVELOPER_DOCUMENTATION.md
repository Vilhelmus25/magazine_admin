## **Magazin - Magazine**
---
---

## Az alkalmazás leírása

**Célja:**

Az alkalmazás feladata, hogy a Koala képességfejlesztő gyermekmagazin előfizetőinek az adatait nyilvántartsa, kezelje, valamint az előfizetésekről szóló szerződést kiállítsa.

**Technikai követelmények, előírások:**
- Az alkalmazás Angular-alapú, model-service-component architektúra jellemzi
- Az egyes service-eket egy base service szolgálja ki
- A dizájnért a Bootstrap, a Font Awesome, a CSS/SCSS és a jQuery felel
- MongoDB, NoSQL
- NodeJS API: saját API szolgálja ki a frontendet
- Minden API útvonalhoz egy unit teszt kapcsolódik
- Az API-hoz Swagger alapú dokumentáció tartozik
- A felület bizonyos oldalai csak belépés után elérhetőek (JWT autentikáció) 
- Adminisztrátori szerepkört leíró User Story a README.md-ben
- Markdown dokumentáció a documentaton.md-ben
- Az alkalmazás dockerizálva van, konténerből futtatható 

**Megjelenése:**

- Az alkalmazás egy fejléces navigációval rendelkezik, amelyen az egyes oldalak között lehet váltani.
- Teljesen reszponzív, mobile-first szemléletű.

---
---

## **Főbb részei:**

---
---
## _**1. Főoldal**_

**Komponens neve:** home  
**Komponens helye:** page/home

Egy mobiloptimalizált, látványos felületen nagyban a Koala magazin logója látható, alatta a legutóbbi számok kisképe jelenik meg, majd pár fontos információ.

_Megjegyzés_: Opcionálisan képek jelennek meg egy BS carousel komponensben.

---
---
## _**2. Navigáció**_

**Komponens neve:** side-nav  
**Komponens helye:** common/side-nav
**Komponens neve:** navigation  
**Komponens helye:** common/navigation

Az egyes side-nav oldalakra az Angular routing segítségével lehet navigálni egy BS navbar segítségével.

- A Subscribers menügombra kattintva az alkalmazás az előfizetőket listázó aloldalra navigálva megjeleníti az összes előfizető adatbázisban tárolt adatait.
- Az Archive menügombra kattintva az alkalmazás az Archivált előfizetők aloldalra navigálva megjeleníti a archivált előfizetők adatbázisban tárolt adatait.
- A Colleagues menügombra kattintva az alkalmazás a Kollégákat kilistázó aloldalra navigálva megjeleníti az összes Kolléga adatbázisban tárolt adatait.
- A Certificate-Edit sablon menügombra kattintva az alkalmazás az Igazolás sablon aloldalra navigálva megjeleníti az aktuális igazolás sablon adatbázisban tárolt adatait.
- A Statistics menügombra kattintva az alkalmazás a Statisztikák aloldalra navigálva megjeleníti a statisztikák adatbázisban tárolt adatokat.

Kezelési felületek, mint például navigáiós sáv elrejtése és bejelentkezés/kijelentkezés funkciók.

- "Bars" ikonra kattintva az oldalnavigációs sáv kezelhető.
- "Login/Logout" ikonra kattintva a ki- és bejelentkezés kezelhető. 

---
---
## _**3. Előfizetők adatbázis**_
---

**Osztály neve:** subscriber   
**Osztály helye:** model/subscriber

**Service neve:** subscriber  
**Service helye:** service/subscriber

**Komponens neve:** subscriber  
**Komponens helye:** page/subscriber

Az oldalon megjelenik az összes előfizető adata egy helyen.  

Ezek az adatok a következők:
- id (azonosító - nem lesz mgejelenítve)
- date (dátum)
- name (előfizető neve)
- postalcode (irányítószám)
- city (város)
- address (cím)
- licence_id (szerződés azonosító)
- licenced_seasons (a kezdeti előfizetési évszakszám mennyisége)
- seasons_left (hátralévő előfizetői évszak)
- amount (rendelt mennyiség évszakonként)
- colleague (a diszpécser kolléga, aki meggyőzte az előfizetőt)

---

**Create:**

> _Az Create New Subscriber gombra kattintva egy űrlap segítségével 
> új előfizető adatai vehetők fel és menthetők el az adatbázisban._

- A Create New Subscriber gombra való kattintással egy új oldal nyílik meg, ahol egy új előfizető adatait lehet input mezők segítségével bevinni.
- A Send gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes előfizetőt listázó oldalra navigál vissza az alkalmazás.

---

**Archiválás:**

> _Legyen lehetőség archiválásra évszak záráskor. Az Archiválás gombra kattintva,
> az összes előfizető hátralévő évszámainak a száma 1-el csökken és akié 0 lett
> vagyis lejárt az előfizettési kvótája, kikerül az előfizetői adatbázisból és átkerül az archiválás táblába._

- Az Archive gombra kattintva egy felugró ablak megkérdezi a felhasználót, hogy valóban végre szeretné-e hajtani az archiválást, mert ez egy nem visszafordítható folyamat.
- Ha Proceed-re kattint, akkor végrehajtódik az archiválás, a felugró ablak eltűnik és a táblázat frissül.
- Ha a Discard-ra kattint a felhasználó, akkor eltűnik a felugró ablak és nem történik archiválás.

---

**Edit:**

> _Az Edit ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kiválaszott előfizető adatai szerkeszthetők és menthetők az adatbázisban._

- Az Edit gombra való kattintással az előfizető egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott előfizető adatait lehet szerkeszthető mezők segítségével módosítani.
- A Send gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes előfizetőt listázó oldalra navigál vissza az alkalmazás.

---

**Előfizetői igazolás kiállítása:**

> _Az Igazolás Kiállítása gombra kattintva, az aktuális előfizető adatai alapján
> egy aloldalon lesz látható a kiállításra váró igazolás mintája._

- Az Igazolás Kiállítása gombra kattintva betöltődik az aktuális előfizető adataiból képzett kiállításra váró igazolás előnézeti képe, ahol át lehet nézni az adatokat. A mintán szerepel az előfizető adatai, valamint a kibocsájtó cég adatai, jogi hivatkozás, aláírás és pecsét helyével.
- A Print gombra kattintva lementődik a formanyomtatvány pdf formátumban, a Windows-intéző által kiválasztható lesz a mentés helye, alapból lesz erre a programon belül egy mappa fenntartva. A fájl neve tartalmazni fogja az előfizető nevét és az előfizetési azonosítót, valamint a kiállítás dátumát.
-  A Back gombra kattintva az összes előfizetőt listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy előfizető törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás megkérdezi, hogy valóban törölni szeretnénk a kijelölt előfizetőt, egy felugró ablakban (modal). Ha a felugró ablakban a Confirm gombra kattint a felhasználó, akkor törli az előfizető entitását az adatbázisból. Ha a Cancel gombra kattint a felhasználó, eltűnik a felugró ablak és minden változatlan marad.
- Törlés esetén az alkalmazás frissíti a listaoldalt, ahol a már törölt előfizető nem lesz látható.

---

**Szabadszavas keresés:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra lehet keresni az
> adatbázisban a választott kategórián belül._

- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő entitásokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**Rendezés:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe
> rendezhetőek a szám típusú adatok, illetve abc-sorrendbe, valamint fordított
> abc-sorrendbe rendezhetőek a szöveges adatok._

- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott adatok szerint az entitásokat.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott adatok szerint az entitásokat.

---
---
## _**4. Az Archivált előfizetők oldala**_
---

_Megjegyzés:_ Az elérési útvonalban az aloldalak elnevezése előtt szerepel a `archive/` kifejezés.

---

> _Az alkalmazás az Archivált előfizetők oldalra navigálva megjeleníti az
> archivált előfizetők adatbázisban tárolt adatait egy listában._

**Osztály neve:** archive  
**Osztály helye:** model/archive 

**Service neve:** archive
**Service helye:** service/archive

**Komponens neve:** archive    
**Komponens helye:** page/archive  

Az aloldal megjeleníti az összes archivált előfizetők adatait lista formátumban.
Csak nézegetős felület, nem lehet módosítani az adatokat!  

Ezek az adatok megegyeznek szinte teljesen Előfizetők adatbázisa oldallal, ezek a következők:
- id (azonosító - nem lesz mgejelenítve)
- date (dátum)
- name (előfizető neve)
- postalcode (irányítószám)
- city (város)
- address (cím)
- licence_id (szerződés azonosító)
- licenced_seasons (a kezdeti előfizetési évszakszám)
- amount (rendelt mennyiség évszakonként)
- colleague (a diszpécser kolléga, aki meggyőzte az előfizetőt)

---

**Szabadszavas keresés:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra lehet keresni az
> adatbázisban a választott kategórián belül._

- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő entitásokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**Rendezés:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe
> rendezhetőek a szám típusú adatok, illetve abc-sorrendbe, valamint fordított
> abc-sorrendbe rendezhetőek a szöveges adatok._

- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott adatok szerint az entitásokat.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott adatok szerint az entitásokat.

---
---
## _**5. Kollégák adatbázis**_
---

**Osztály neve:** colleague   
**Osztály helye:** model/colleague

**Service neve:** colleague  
**Service helye:** service/colleague

**Komponens neve:** colleague  
**Komponens helye:** page/colleague

Az oldalon megjelenik az összes kolléga adata egy helyen.  

Ezek az adatok a következők:
- id (azonosító - nem lesz mgejelenítve)
- name (előfizető neve)
- birth_date (születési dátum)
- postalcode (irányítószám)
- city (város)
- address (cím)
- salary (a kolléga, havi fizetése)

---

**Create:**

> _Az Create New Colleague gombra kattintva egy űrlap segítségével 
> új kolléga adatai vehetők fel és menthetők el az adatbázisban._

- A Create New Colleague gombra való kattintással egy új oldal nyílik meg, ahol egy új kolléga adatait lehet input mezők segítségével bevinni.
- A Send gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes kollégát listázó oldalra navigál vissza az alkalmazás.

---

**Edit:**

> _Az Edit ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kiválaszott kolléga adatai szerkeszthetők és menthetők az adatbázisban._

- Az Edit gombra való kattintással a kolléga egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott kolléga adatait lehet szerkeszthető mezők segítségével módosítani.
- A Send gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes kollégát listázó oldalra navigál vissza az alkalmazás.

---

**Delete:**

> _A Delete ikonnal ellátott gombra kattintva 
> egy kolléga törölhető az adatbázisból._

- A Delete gombra való kattintással az alkalmazás megkérdezi, hogy valóban törölni szeretnénk a kijelölt kollégát, egy felugró ablakban (modal). Ha a felugró ablakban a Confirm gombra kattint a felhasználó, akkor törli a kolléga entitását az adatbázisból. Ha a Cancel gombra kattint a felhasználó, eltűnik a felugró ablak és minden változatlan marad.
- Törlés esetén az alkalmazás frissíti a listaoldalt, ahol a már törölt kolléga nem lesz látható.

---

**Szabadszavas keresés:**

> _Egy szabadszavas input mező segítségével bármilyen kulcsszóra lehet keresni az
> adatbázisban a választott kategórián belül._

- A Search gombra való kattintással az alkalmazás kikeresi a kulcsszónak megfelelő entitásokat az adatbázisnak a legördülő menüben választott kategóriájából, és listázza azokat.

---

**Rendezés:**

> _A lista oszlopainak fejlécére való kattintással növekvő és csökkenő sorrendbe
> rendezhetőek a szám típusú adatok, illetve abc-sorrendbe, valamint fordított
> abc-sorrendbe rendezhetőek a szöveges adatok._

- A fejlécen található lefelé mutató nyíl ikonra kattintva az alkalmazás sorba rendezi a választott adatok szerint az entitásokat.
- A fejlécen található felfelé mutató nyíl ikonra kattintva az alkalmazás fordított sorba rendezi a választott adatok szerint az entitásokat.

---
---
## _**6. Az Igazolás sablon oldala**_
---

_Megjegyzés:_ Az elérési útvonalban az aloldalak elnevezése előtt szerepel a `certificate/edit/` kifejezés.

---

> _Az alkalmazás a Certificate-Edit oldalra navigálva megjeleníti az igazolás
> cég oldali adatait, ahol azokon lehet módosítani, bármilyen változás esetén._

**Osztály neve:** certificate  
**Osztály helye:** model/certificate  

**Service neve:** certificate  
**Service helye:** service/certificate  

**Komponens neve:** certificate    
**Komponens helye:** page/certificate  

Az aloldal megjeleníti az Igazolás sablont a cég adataival, megtekintés céljából, szerkeszteni egy gomb lenyomása után lehet.
A sablon adatai a következők:

- name (A cég neve)
- taxNumber (adószám)
- headquarters (székhely)
- date (dátum, az aktuális, nem szerkeszthető)
- legalReference (jogi hivatkozás)
- director(felelős ügyvezető igazgató)

---

**Adatok módosítása:**

> _Egy Send gombra kattintva elküldésre kerül a változás.

- A Send data gombra kattintva az esetlegesen felvitt változások mentésre kerülnek, mostantól az igazolásokon ezen adatok szerepelnek.
- A Confirm gombra kattintva a bevitt változtatások megtörténnek, a sablon adatbázisa frissül.
- a Discard gombra kattintva az esetlegesen bevitt változtatások nem kiviteleződnek, eltűnik a Confirm és a Discard gomb, visszakerül az Edit data gomb.
- A Return to Subscribers gomb lenyomásakkor visszanavigál az oldal az Előfizetők adatbázisához oldalra.

---
---
## _**7. Statisztikák**_
---

**Osztály neve:** statistics   
**Osztály helye:** model/statistics

**Service neve:** statistics  
**Service helye:** service/statistics

**Komponens neve:** statistics  
**Komponens helye:** page/statistics

Különböző statisztikai diagramok megjelenítése 'barChart' formában.

- Egy statisztikai diagram az egyes évek-ről, hogy az év hónapjaiban hány ügyféllel köttetett szerződés.

**RefreshAll:**

> _A RefreshAll gombra kattintva 
> betölti az aktuális statisztikákat._

---
---

## **További fejlesztési lehetőségek:**  
- Statisztika a diszpécser kollégákról, hogy ki hány előfizetőt/rendelőt győzött meg az előfizetésről, vásárlásról, havi és/vagy globális lebontásban.
- Hibaüzenetek megjelenítése (validálás).
- Toasterek a műveletek sikerességének visszajelzéséről.
- Top # legrégebb óta partner (hűségkedvezmény). Esetleg a nevük megjelenhet a főoldalon.

---
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/Vilhelmus25/magazine_admin/blob/main/README.md)

- [A dokumentáció itt érhető el.](https://github.com/Vilhelmus25/magazine_admin/blob/main/Developer%20Documentation/DEVELOPER_DOCUMENTATION.md)

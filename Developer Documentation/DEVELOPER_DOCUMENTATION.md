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

Egy mobiloptimalizált, látványos felületen nagyban a Koala magazin logója látható, alatta egy carousel-ben a legutóbbi számok kisképe jelenik meg, majd az aktuális hónapban eddig szerzett új előfizetések száma.

_Megjegyzés_: Opcionálisan képek jelennek meg egy BS carousel komponensben.

---
---
## _**2. Navigáció**_

**Komponens neve:** navigation  
**Komponens helye:** common/navigation

Az egyes aloldalakra az Angular routing segítségével lehet navigálni egy BS navbar segítségével.

- Az Előfizetők menügombra kattintva az alkalmazás az előfizetőket listázó aloldalra navigálva megjeleníti az összes előfizető adatbázisban tárolt adatait.
- Az Archivált előfizetők menügombra kattintva az alkalmazás az Archivált előfizetők aloldalra navigálva megjeleníti a archivált előfizetők adatbázisban tárolt adatait.
- Az Igazolás sablon menügombra kattintva az alkalmazás az Igazolás sablon aloldalra navigálva megjeleníti az aktuális igazolás sablon adatbázisban tárolt adatait.
- A Statisztikák menügombra kattintva az alkalmazás a Statisztikák aloldalra navigálva megjeleníti a statisztikák adatbázisban tárolt adatokat.

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
- licenced_seasons (a kezdeti előfizetési évszakszám)
- seasons_left (hátralévő előfizetői évszak)
- amount (rendelt mennyiség évszakonként)
- colleague (a diszpécser kolléga, aki meggyőzte az előfizetőt)

---

**Create:**

> _Az Add New Subscriber gombra kattintva egy űrlap segítségével 
> új előfizető adatai vehetők fel és menthetők el az adatbázisban._

- A Add New Subscriber gombra való kattintással egy új oldal nyílik meg, ahol egy új előfizető adatait lehet input mezők segítségével bevinni.
- A Save gombra kattintva a program az adatbázisba menti a megadott adatokat.
- A Back gombra kattintva az összes előfizetőt listázó oldalra navigál vissza az alkalmazás.

---

**Edit:**

> _Az Edit ikonnal ellátott gombra kattintva egy űrlap segítségével
> a kiválaszott előfizető adatai szerkeszthetők és menthetők az adatbázisban._

- Az Edit gombra való kattintással az előfizető egyedi adatait tartalmazó aloldal nyílik meg, ahol a választott előfizető adatait lehet szerkeszthető mezők segítségével módosítani.
- A Save gombra kattintva a program az adatbázisba menti a módosított adatokat.
- A Back gombra kattintva az összes előfizetőt listázó oldalra navigál vissza az alkalmazás.

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

**Archiválás:**

> _Legyen lehetőség archiválásra évszak záráskor. Az Archiválás gombra kattintva,
> az összes előfizető hátralévő évszámainak a száma 1-el csökken és akié 0 lett
> vagyis lejárt az előfizettési kvótája, az archiválásra kerül._

- Az Archive gombra kattintva egy felugró ablak megkérdezi a felhasználót, hogy valóban végre szeretné-e hajtani az archiválást, mert ez egy nem visszafordítható folyamat.
- Ha Proceed-re kattint, akkor végrehajtódik az archiválás, a felugró ablak eltűnik és a táblázat frissül.
- Ha a Discard-ra kattint a felhasználó, akkor eltűnik a felugró ablak és nem történik archiválás.

---

**Előfizetői igazolás kiállítása:**

> _Az Igazolás Kiállítása gombra kattintva, az aktuális előfizető adatai alapján
> egy aloldalon lesz látható a kiállításra váró igazolás mintája._

- Az Igazolás Kiállítása gombra kattintva betöltődik az aktuális előfizető adataiból képzett kiállításra váró igazolás előnézeti képe, ahol át lehet nézni az adatokat. A mintán szerepel az előfizető adatai, valamint a kibocsájtó cég adatai, jogi hivatkozás, aláírás és pecsét helyével.
- A Print gombra kattintva lementődik a formanyomtatvány pdf formátumban, a Windows-intéző által kiválasztható lesz a mentés helye, alapból lesz erre a programon belül egy mappa fenntartva. A fájl neve tartalmazni fogja az előfizető nevét és az előfizetési azonosítót, valamint a kiállítás dátumát.
-  A Back gombra kattintva az összes előfizetőt listázó oldalra navigál vissza az alkalmazás.

---
---
## _**4. Az Archivált előfizetők oldala**_
---

_Megjegyzés:_ Az elérési útvonalban az aloldalak elnevezése előtt szerepel a `archive/` kifejezés.

---

> _Az alkalmazás az Archivált előfizetők oldalra navigálva megjeleníti az
> archivált előfizetők adatbázisban tárolt adatait egy listában._

**Osztály neve:** archived-subscriber  
**Osztály helye:** model/archived-subscriber  

**Service neve:** archived-subscriber   
**Service helye:** service/archived-subscriber  

**Komponens neve:** archived-subscriber    
**Komponens helye:** page/archived-subscriber  

Az aloldal megjeleníti az összes archivált előfizetők adatait lista formátumban.
Csak nézegetős felület, nem lehet módosítani az adatokat.  

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
## _**5. Az Igazolás sablon oldala**_
---

_Megjegyzés:_ Az elérési útvonalban az aloldalak elnevezése előtt szerepel a `sample/` kifejezés.

---

> _Az alkalmazás az Igazolás sablon oldalra navigálva megjeleníti az igazolás
> sablonját egy dummy adattal, ahol a cég adatait lehet módosítani az igazoláson,
> bármilyen változás esetén._

**Osztály neve:** certificate-sample  
**Osztály helye:** model/certificate-sample  

**Service neve:** certificate-sample  
**Service helye:** service/certificate-sample  

**Komponens neve:** certificate-sample    
**Komponens helye:** page/certificate-sample  

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

> _Egy Edit data módosítása gombra kattintva szerkeszthető lesz valamennyi adat.

- Az Edit data módosítása gombra kattintva a legtöbb adat szerkeszthetővé válik, a gomb eltűnik és helyette egy Confirm és egy Discard gomb jelenik meg. A Return to Subscribers gomb inaktiválódik.
- A Confirm gombra kattintva a bevitt változtatások megtörténnek, a sablon adatbázisa frissül.
- a Discard gombra kattintva az esetlegesen bevitt változtatások nem kiviteleződnek, eltűnik a Confirm és a Discard gomb, visszakerül az Edit data gomb.
- A Return to Subscribers gomb lenyomásakkor visszanavigál az oldal az Előfizetők adatbázisához oldalra.

---
---
## _**6. Statisztikák**_
---

**Osztály neve:** statistics   
**Osztály helye:** model/statistics

**Service neve:** statistics  
**Service helye:** service/statistics

**Komponens neve:** statistics  
**Komponens helye:** page/statistics

Különböző statisztikai diagramok megjelenítése dashboard formában.

- Egy statisztikai diagram az egyes évek-ről, hogy az év hónapjaiban hány megrendelés érkezett, az évek között lehet navigálni.

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

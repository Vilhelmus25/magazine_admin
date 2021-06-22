# **User Story - Adminisztrátori szerepkör**


## **Magazin - Magazine**
---
---
## _**1. Főoldal**_
---

**1. agilis felhasználói történet:**
> _A főoldal egy üdvözlő képernyő a magazin ikonikus logójával._

**Elfogadási kritérium:**  

Egy mobiloptimalizált, a szemnek vonzó és látványos felületen egy jól látható logóval, ezzel is motiválva az elvégzendő adminisztrátori feladatokra a leendő felhasználót.

---
---
## _**2. Előfizetői adatbázis**_
---

**1. agilis felhasználói történet:**
> _Egy helyen áttekinthetők a magazin több,
> mint ezer ügyfelének legfontosabb adatai
> egy jól átlátható, táblázatos weboldalon._


**Elfogadási kritérium:**  
Az oldalra navigálva megjelenik az összes ügyfél adata egy helyen kilistázva.  
Ezek az adatok a számlaszám, a név/cégnév, a postázási cím (ami szeparáltan, irányítószám, város, cím), mennyi évszámra szólt az előfizetés a szerződés megkötésekor, hány évszámra szól még a megrendelő előfizetése, hány darab-ot rendelt (évszámonként), illetve melyik diszpécser kollégán keresztül bonyolódott le az előfizetés.

---

**2. agilis felhasználói történet:**

> _Új előfizető adatai vehetők fel._

**Elfogadási kritérium:**  
- A kötelező adatok megadásával egy új előfizető adatait lehet felvinni, minden ponton a helyes névkonvenciót betartva nyílik lehetőség az új előfizetőt felvenni.
- Az oldalon lehetőség van arra, hogy az összes előfizetőt listázó oldalra navigáljon vissza az alkalmazás.

---

**3. agilis felhasználói történet:**

> _Az előfizetők adatai szerkeszthetők._

**Elfogadási kritérium:**  
- Egy előfizetőre kattintva a választott előfizető adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon.
- Az oldalon lehetőség van arra, hogy az összes előfizetőt listázó oldalra navigáljon vissza az alkalmazás.

---

**4. agilis felhasználói történet:**

> _Az előfizető törölhető._

**Elfogadási kritérium:**  
- A előfizető kiválasztásával törölhető a rekord.
- A törlést követően frissül a listaoldal, ahol a már törölt előfizető nem szerepel.

---

**5. agilis felhasználói történet:**

> _Bármilyen kulcsszóra lehet keresni egy választott kategórián belül._

**Elfogadási kritérium:**  
A kategória kiválasztásával és a kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

**6. agilis felhasználói történet:**

> _Különbözőképpen sorrendbe rendezhetőek az előfizetők egyes kategóriái._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni az előfizetőket.
- A szöveges adatok alapján abc-szerinti és fordított sorrendben lehet rendezni az előfizetőket.

---

**7. agilis felhasználói történet:**

> _Archiválás_

**Elfogadási kritérium:**  
- Az előfizetők részére egy új szám megjelenésekor és annak kipostázása után, legyen lehetőség archiválásra, ami műveletet végrehajtva minden hátralévő előfizetés évszáma eggyel csökken és a listából kikerülnek azon előfizetők, akik felé már nincs előfizetői példány kipostázási kötelezettsége a forgalmazónak egy új szám megjelenése idején, mivel lejárt az előfizetési kvóta.

---

**8. agilis felhasználói történet:**

> _Előfizetői igazolás kiállítása_

**Elfogadási kritérium:**  
- Legyen lehetőség egy kiválasztott előfizető esetén egy előfizetői igazolás kiállításáról, tartalmazva az adott előfizető adatait (név/cégnév, cím, adószám, szerződéskötés dátuma, hátralévő előfizetési évszám, rendelt darabszám), a magazint kibocsájtó cég adataival (cím, adószám, vezető neve), jogi hivatkozás, aláírás, pecsét helyével.  

---

---
---
## _**3. Az archivált előfizetők**_
---

**1. agilis felhasználói történet:**
> _Az archivált előfizetők megjelenítése_

**Elfogadási kritérium:**  
Az oldal megjeleníti az összes archivált előfizetőt egy táblázatban, ugyanazon adatok szerint, mint az _Előfizetői adatbázisban_, kivéve a hány évre szóló előfizetés adatot, mivel az irreleváns itt. Az adatokat csak olvasni lehet, nem lehet módosítani.

---

**2. agilis felhasználói történet:**
> _Különbözőképpen sorrendbe rendezhetőek az előfizetők egyes kategóriái._

**Elfogadási kritérium:**  
- A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni az előfizetőket.
- A szöveges adatok alapján abc-szerinti és fordított sorrendben lehet rendezni az előfizetőket.

---

**3. agilis felhasználói történet:**

> _Bármilyen kulcsszóra lehet keresni egy választott kategórián belül._

**Elfogadási kritérium:**  
- A kategória kiválasztásával és a kulcsszónak megfelelően frissül a listaoldal, ahol csak a szűrt adatok láthatók.

---

---
---
## _**4. Az igazolás sablon**_
---

**1. agilis felhasználói történet:**
> _Az igazolás sablon megjelenítése_

**Elfogadási kritérium:**  
- Az aktuális igazolás sablon megjelenítése, megtekintés céljából.

---

**2. agilis felhasználói történet:**
> _Az igazolás sablon szerkesztése/módosítása_

**Elfogadási kritérium:**  
- Adószám, vezető, cím, módosulás esetén a kibocsájtó cég részéről, vagy jogi hivatkozás módosulása esetén, az igazolás sablonban szereplő előbbi adatoknak módosíthatónak kell lenniük.

---

---
---
## _**5. Statisztikák**_
---

**1. agilis felhasználói történet:**
> _Éves előfizetési statisztika megjelenítése_

**Elfogadási kritérium:**  
- Egy statisztikai diagram az egyes évek-ről, hogy az év hónapjaiban hány megrendelés érkezett, az évek között lehet navigálni.

---

---
---

## _A projekt egyéb adatai:_

**Prioritás:**  
magas

**Megvalósítás időtartama:**  
10 hét

**További fejlesztési lehetőségek:**  
- Statisztika a diszpécser kollégákról, hogy ki hány előfizetőt/rendelőt győzött meg az előfizetésről, vásárlásról, havi és/vagy globális lebontásban.
- Hibaüzenetek megjelenítése (validálás).
- Felugró ablakok, a kritikus műveletek rákérdezésére.
- Toasterek a műveletek sikerességének visszajelzéséről.
- Top # legrégebb óta partner (hűségkedvezmény). Esetleg a nevük megjelenhet a főoldalon.

---
---
---

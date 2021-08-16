## **1. Az alkalmazás célja**

Az alkalmazás feladata, hogy a Koala képességfejlesztő gyermekmagazin előfizetőinek/kollégáinak az adatait nyilvántartsa, kezelje, valamint az előfizetésekről szóló szerződést kiállítsa.

## **2. Az alkalmazás telepítése**

- Forkolni kell az adott GitHub repository tartalmát:
    https://github.com/Vilhelmus25/magazine_admin
- A célgépre le kell klónozni az adott GitHub repository tartalmát.
    `git clone https://github.com/Vilhelmus25/magazine_admin.git`
- Telepíteni kell az alkalmazás függőségeit:
    - Backend
        - A terminálon be kell lépni a /backend mappába és futtatni az `npm i` parancsot.
    - Frontend
        - A terminálon be kell lépni a /frontend mappába és futtatni az `npm i` parancsot.
- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal.
- A terminálban a /backend mappába ki kell adni az `npm run build` parancsot.

VAGY

- A /frontend/dist/frontend mappa tartalmát be kell másolni a /backend/public mappába.

## **3. Az alkalmazás konfigurálása**

A /frontend/environments mappában be kell állítani az API végpont elérési útvonalát: 

  - _environment.ts_ állomány: http://127.0.0.1:3000/  
  - _environment.prod.ts_ állomány: http://localhost:3000/ 

## **4. Az alkalmazás indítása**

A megadott Docker container indítása és inicializálása:

- El kell indítani a Docker Desktop alkalmazást.
- A /backend mappába belépve a terminálban ki kell adni az `npm run dev` parancsot.  
(Ha szükséges, a /frontend mappába belépve a terminálban az `npm start` paranccsal indítható a frontend.) 

_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó páros (példa):  

E-mail | Jelszó
------------ | -------------
magazineAdmin@gmail.com | koalamagazine

## **5. A végpontok dokumentációja**

Swagger 
- Az alábbi URL-t kell beírni a böngészőbe: https://localhost:3000/api-docs

---
---

## **Linkek:**  

- [A User Story (adminisztrátori szerepkör) itt érhető el.](https://github.com/Vilhelmus25/magazine_admin/blob/main/README.md)

- [A kiegészítő anyagok itt érhetők el.](https://github.com/Vilhelmus25/magazine_admin/blob/main/Developer%20Documentation/DEVELOPER_DOCUMENTATION.md)

# Kliensoldali webprogramozás -- Gyakorlati feladatok, formagyakorlatok

## Ismétlés -- nyelvi elemek

1. 

## Ismétlés -- DOM és események

1. 

## Progresszív fejlesztés

Az alábbi feladatok mindegyikénél az a cél, hogy egy meglévő funkciót JavaScript segítségével felfejlesszünk. A fejlesztés végén próbáljuk ki, hogy kikapcsolt JavaScript mellett az eredeti funkcionalitás még mindig jól működik-e!

### Landing page

Az alábbi feladatokat a `landing_page.html` oldalon oldd meg! A feladatokat natívan is meg lehet oldani, illetve lehet találni rá valamilyen kész megoldást és azt alkalmazni. A külső könyvtárakat CDN-ről húzzátok be, ajánlom a jsdelvr-t használatra. Opcionálisan jQuery is használható!

1. **Landing page -- belső linkek** A landing page oldalon a navigációs fejlécben lévő belső linkekre kattintva az oldal gördülve menjen az adott helyre.

2. **Landing page -- navigáció rögzítése** Ha elgördült az oldal 200px-nyit, akkor alkalmazzuk a `navbar-scrolled` stílusosztályt a `nav` elemen. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!

3. **Landing page -- animáció megjelenéskor** Ha egy elem gördítés közben a viewportba ér, akkor valamilyen animáció segítségével jelenjen meg! Az elemeket deklaratívan jelöljük meg HTML5 data attribútumokat használva, pl. `data-scroll`. Az animáció nevét is eltárolhatod data attribútumban, pl. `data-scroll-animation="fadeInUp"`. Animációhoz használhatod az `animate.css` könyvtárat. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!

4. **Landing page -- folyamatsáv** Helyezz el egy olvasási folyamatsávot az oldal tetején. A gördítés mértéke szerint változzon 0 és 100% között a szélessége!

5. **Landing page -- aktív menüpont jelzése** Az oldal gördítése közben jelezd a navigációs sorban, hogy melyik menüpontnál tartunk éppen. Az adott menüpont linkjének stílusosztályai közé adjuk az `active` stílusosztályt.

6. **Landing page -- számláló pörgetése** Tedd lehetővé, hogy egy számot tartalmazó elem 0-tól felpörögjön az aktuális értékére! Az elemet deklaratívan paraméterezzük fel data attribútumokon keresztül! Eleinte az elemre kattintva történjen meg a számlálás, később a viewportba érve induljon el!

7. **Landing page -- képnagyítás** Tedd lehetővé, hogy egy olyan elem fölé víve az egeret, amely háttérképet tartalmaz, a kép nagyobban jelenjen meg ugyanakkora helyen, és az egeret mozgatva az elem fölött lehessen a kép minden részletét megtekinteni.

### jQuery

Az alábbi feladatokat a `recipe_list.html` oldalon oldd meg!

1. **Kiválasztás** Írd ki a konzolra! (kiválasztás szelektorokkal vagy jQuery metódussal)
    - a. a listaelemeket (`li`)
    - b. a `navbar-brand` stílusosztályú elemet
    - c. a `row` stílusosztályú elemeket
    - d. az összes `col-*` stílusosztályú elemet
    - e. a `list-group` stílusosztályú listán belüli `list-group-item` stílusosztályú elemek közül az elsőket
    - f. az összes ételre mutató linket

2. **Bejárás**
    - a. Válassz ki egy kategóriát, és utána írd ki a konzolra az összes benne lévő `list-group-item` stílusosztályú elemet!
    - b. Válassz ki egy ételhez tartozó linket az oldalon, és add meg a kategóriája nevét!
    - c. Konzolra írd ki, mindegyik kategóriára, hogy hány étel tartalmaz!

3. **Manipulálás**
    - a. Írd ki a kategóriák mellé zárójelben, hogy hány étel jelenik meg alattuk!
    - b. A túl rövid nevű (<5) recepteket keretezd be pirosan!
    - c. A kategórianevekre kattintva csukódjon össze a kategória! Újra rákattintva jelenjen meg!

4. **Létrehozás**
    - a. Készíts egy felsorolás az oldalon a kategórianevekkel!
    - b. Mindegyik kategóriafejlécbe generálj egy gombot, amire kattintva az adott kategória kitölti a teljes sort (12 egység széles lesz)!
    - c. Legyen az oldalon egy gomb, aminek hatására a kategória dobozok eltűnnek, helyette egyetlen lista jelenik meg az összes étellel, mögötte zárójelben a kategória nevével!


### "Komponensek": az oldal egyes részeit felfejlesztő szkriptek

Az alábbi feladatokat próbaképpen akár jQuery-vel is meg lehet oldani, de alapvetően a natív megoldás a preferált!

1. **Rendezhető táblázat** Adott egy táblázat az oldalon. JavaScript segítségével tedd lehetővé, hogy az oszlopok fejlécére kattintva a táblázat az adott oszlop szerint rendezve jelenjen meg!

    ```html
    <table>
        <tr>
            <th>Gyümölcs</th>
            <th>Megye</th>
        </tr>
        <tr>
            <td>Alma</td>
            <td>Békés</td>
        </tr>
        <tr>
            <td>Szilva</td>
            <td>Hajdú-Dorog</td>
        </tr>
        <tr>
            <td>Gesztenye</td>
            <td>Vas</td>
        </tr>
    </table>
    ```

2. **Időintervallumok** Adott egy űrlap, ahol több időpontot is fel lehet venni. Minden időpontnál meg kell adni a dátumot és egy tól-ig intervallumot. Ellenőrizzük le JavaScript segítségével, hogy a tól mindig kisebb legyen az ig-nél. Ha rossz, akkor mind a két mező legyen piros keretes. Legyen lehetőség új időpont-blokkot felvenni.

    ```html
    <form action="">
        <div class="idopont">
            <input type="date" name="datum[]">
            <input type="time" name="tol[]">
            <input type="time" name="ig[]">
        </div>
        <div class="idopont">
            <input type="date" name="datum[]">
            <input type="time" name="tol[]">
            <input type="time" name="ig[]">
        </div>
    </form>
    ```

3. **Kaszkád legördülők** Adott egy legördülő menü, benne az opciók csoportosítva. Alakítsd át ezt úgy, hogy két legördülő legyen: az elsőben a csoportok neve, majd abból választva a másodikban a csoporton belüli opciók jelenjenek meg!

    ```html
    <label>Please choose one or more pets:
        <select name="pets">
            <optgroup label="4-legged pets">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
            </optgroup>
            <optgroup label="Flying pets">
                <option value="parrot">Parrot</option>
                <option value="macaw">Macaw</option>
                <option value="albatross">Albatross</option>
            </optgroup>
        </select>
    </label>
    ```

4. **Carousel** Adott képek listája. Alakítsd át ezt úgy, hogy filmszalag-szerűen egymás mellé rendezed a képeket, de csak egynek hagysz helyet, hogy látszódjon. A jobbra-balra billentyűkkel csúsztasd arrébb a filmszalagot úgy, hogy a következő kép látszódjék! Sablon: `carousel.html`

5. **Hozzávalók szerkesztése** Adott egy űrlap, ahol receptet lehet megadni. Ezen belül van egy többsoros szöveges beviteli mező, amelyben a hozzávalókat soroljuk soronként. Fejleszd fel ezt az oldalt úgy, hogy minden sorhoz két input mezőt rendelsz: elsőben a mennyiség, másodikban a hozzávaló. Legyen lehetőség sorokat törölni, és új sort hozzáadni. Az űrlap elküldésekor az eredeti formátumban kell az adatokat küldeni! Sablon: `new_recipe.html`

    ```html
    <textarea>1csipet Cordon
    3csipet Bleu
    1tasak szárított burgonyapüré</textarea>
    ```

6. **Fotóalbum** Készíts egy fotóalbumot, ami úgy néz ki, mintha az asztalra kiszórtak volna sok képet. A képek egy felsorolásban legyenek. A képeknek ne csak a pozíciója, hanem elforgatása is változzon. Lehessen a képeket megtekinteni rájuk kattintva, vagy a jobbra-balra billentyűvel navigálva. Sablon: `photo_album.html`

7. **Színes mező** Készíts egy olyan input mezőt, ami 0-tól 360-ig fogad el értékeket, és a beállított értéknek megfelelően állítja be az input mező háttérszínét: `hsl(érték, 50%, 50%)`

8. **Textarea hosszal** Készíts olyan textarea mezőt, amely alatt fel van tüntetve, hogy eddig hány karaktert írtunk be.

9. **Olvasható jelszó** Készíts olyan jelszó mezőt, amely mellett megjelenik egy gomb is, amelyre kattintva a jelszó olvasható formában megjelenik.

10. **GYIK** Adott egy GYIK-gyűjtemény, ahol a kérdéseket különböző kategóriákba sorolták. Írj olyan szkriptet, amely kigyűjti a kategóriákat, azokat linkekként a gyűjtemény fölött megjeleníti, és ezekre kattintva csak az adott kategóriájú elemeket jeleníti meg!

    ```html
    <section>
      <h2>GYIK</h2>
      <details>
        <summary>Kérdés1 <small>Kategória1</small></summary>
        <p>Válasz1</p>
      </details>
      <details>
        <summary>Kérdés2 <small>Kategória2</small></summary>
        <p>Válasz2</p>
      </details>
    </section>
    ```

### Web components

Az előző feladatcsoportba tartozó feladatokat meg lehet oldani web komponensek definiálásával is. Néhány további feladat:

1. **Jóváhagyó link** Készíts egy olyan komponenst, amely egy linket úgy fejleszt fel, hogy rákattintva megkérdezi, hogy biztos akarja-e követni a linket!

2. **Összecsukható lista** 
    - a. Egy listát úgy fejlessz tovább, hogy rákattintva összecsúkódik, majd kinyílik.
    - b. Működjön tetszőleges mélységben egymásba ágyazott listákra is.

3. **Dialógusablak** Készíts egy komponenst, amely egy gombot generál, amelyre kattintva egy dialógusablak jelenik meg. Legyen lehetőség egyedi tartalmat a dialógusablakba tenni.



## React

1. 

## GraphQL

1. 

## Websocket

1.

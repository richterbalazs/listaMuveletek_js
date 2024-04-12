# Listakezelő függvények gyakorlás

## Specifikáció

jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl név szerint, ha rákattintunk a táblázat
fejlécére akkor rendezze be a tábla sorait. tudjunk szűrni név alapján, tudjunk új adatot
hozzáadni a táblázathoz, tudjuk törölni a táblázat egy sorát.

## metódusok 

1. **htmlOsszeallit(lista)->txt** |Összeállítja a táblázat html szerkeztét egy szöveges változóba
2. **htmlMegjelenit(txt)** -> megjelenítette egy adott html elemben a paraméterében kapott szöveget.
3. **rendez(lista,irany) -> rendezettLista** | A paraméterében kapott listát név szerint megrendezi; a fügvény akkor fut le, ha
a táblázat név fejlécére kattintunk.
4. **adatHozzadasa(lista) ->kibovitettLista**  | Összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot,
 majd az objektumot beleteszi a listába.
5. **torol(lista)**-> Kitörli a listából az adott idjű elemet. Akkor fog lefutni, ha sor melletti torol gombra kattintunk.
6. **szures(lista,keresoSzoveg) ->szurtList**| A keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében,
mindez akkor fut le, ha beirunk valamit a keresőmezőbe.
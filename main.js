import { emberekLISTA } from "./adat.js";
import { htmlOsszeallit, htmlMegjelenit } from "./listaMegjelenit.js";
import { rendez } from "./adatkezelo.Js";
import { szures } from "./adatkezelo.Js";
import { torol } from "./adatkezelo.Js";
/* jelenítsük meg a listánkat egy táblázatban, majd a listát tudjuk rendezni pl név szerint, ha rákattintunk a táblázat
fejlécére akkor rendezze be a tábla sorait. tudjunk szűrni név alapján, tudjunk új adatot
hozzáadni a táblázathoz, tudjuk törölni a táblázat egy sorát. */
/* Függvények és eljárások 
1. htmlOsszeallit(lista)->txt |Összeállítja a táblázat html szerkeztét egy szöveges változóba
2. htmlMegjelenit(txt) -> megjelenítette egy adott html elemben a paraméterében kapott szöveget.
3. rendez(lista) -> rendezettLista | A paraméterében kapott listát név szerint megrendezi; a fügvény akkor fut le, ha
a táblázat név fejlécére kattintunk.
4. adatHozzadasa(lista) ->kibovitettLista | Összegyűjti az űrlapról az adatokat és összeállít belőlük egy objektumot,
 majd az objektumot beleteszi a listába.
5. torol(lista)-> Kitörli a listából az adott idjű elemet. Akkor fog lefutni, ha sor melletti torol gombra kattintunk.
6. szures(lista,keresoSzoveg) ->szurtLista | A keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében,
mindez akkor fut le, ha beirunk valamit a keresőmezőbe.
*/
let irany=1 // 1 - növekvő rendezés, a -1 pedig a csökkenő rendezés
init(emberekLISTA);
szuresEsemeny();

function init(lista) {
    htmlMegjelenit(htmlOsszeallit(lista));
    rendezEsemeny()
}
// a függvény akkor fut le, ha a táblázat név fejlécére kattintunk.
function rendezEsemeny(){

    const nevELEM=$(".adatok table th").eq(0);
    nevELEM.on("click",function() {
        const rLISTA = rendez(emberekLISTA);
        console.log(rLISTA);
        irany*=(-1)
        });
}
/* akkor kell lefutnia, ha megváltozik a keresőmező tartalma */

function szuresEsemeny() {
    const keresoELEM = $("#szuro");
    keresoELEM.on("keyup", function(){
    let keresoSzoveg = keresoELEM.val()
    const szLISTA=szures(emberekLISTA,keresoSzoveg)
    init(szLISTA)
});
}

const torolGOMB=$(".torol");
torolGOMB.on("click", function(event){
    let id = event.target.id;
    const LISTA = torol(emberekLISTA, id);
    init(LISTA);
});
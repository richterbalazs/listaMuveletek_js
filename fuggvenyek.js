import { emberekLISTA } from "./adat.js";

function kiir(lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element);
        console.log(lista[index]);
    }
}
kiir(emberekLISTA);

/*függvény kifejezés változónak adjuk értékül a függvény - nem működik a hoisting */

const kiir2= function(lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element);
        console.log(lista[index]);
    }
}
kiir2(emberekLISTA)

function kiir3(lista){
    console.log("forEach csak listához használható");
    /* lista.forEach((element, index) => {
        console.log(element, index);
    })
 */
    lista.forEach(function ( ember, i){
        console.log(ember, i)
    });
}
kiir3(emberekLISTA)

function idosebb20(lista){
    const idosebb20LISTA = lista.filter(function(ember){
        return ember.kor > 20
    })

    console.log(idosebb20LISTA)
}

idosebb20(emberekLISTA);

function FERFIAK(lista){
    const ferfiakLISTA = lista.filter(function(ember){
        return ember.nem;
    })
    console.log(ferfiakLISTA)
}

FERFIAK(emberekLISTA);

function NOK(lista){
    const nokLISTA = lista.filter(function(ember){
        return !ember.nem;
    })
    console.log(nokLISTA);
}

NOK(emberekLISTA);

/* lista rendezése kor szerint növekvő */
function rendez(lista){
    lista.sort(function(e1,e2){
        return e1.kor-e2.kor;
    })
    console.log(lista)
}
rendez(emberekLISTA)

/* lista rendezése kor szerint csökkenő */
function rendez2(lista){
    lista.sort(function(e2,e1){
        return e2.kor-e1.kor;
    })
    console.log(lista)
}
rendez2(emberekLISTA)

/* véletlen keverés */

function kever(lista){
    console.log("Véletlen sorrend ***********");
    lista.sort(function(){
        return Math.random() - 0.5;
    });
    console.log(lista);
}
kever(emberekLISTA);
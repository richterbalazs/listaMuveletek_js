export function rendez(lista, irany){
   /* 3. rendez(lista) -> rendezettLista | A paraméterében kapott listát név szerint megrendezi; a fügvény akkor fut le, ha
    a táblázat név fejlécére kattintunk. */
    lista.sort(function(e1,e2) {
        /* név szerint */
        let eredmeny = 1;
        if (e1.nev < e2.nev) {
            eredmeny = -1;
        }
        /* a sort minden lehetséges listaelem párt összehasonlít (név) ha a visszatérési értéke pozitív, akkor nem cserél
        ha negativ akkor cserél*/
        return eredmeny*irany;
    });
    /* szorgalmi: írj egy olyan függvényt ami az ékezetes karakterek átmenetileg kicseri Á-ról A-ra */
    return lista
}

export function szures(lista, keresoSzoveg){
    /*6. szures(lista,keresoSzoveg) ->szurtLista | A keresőmezőbe beírt szöveget keresi a lista objektumainak
    név mezőjében,mindez akkor fut le, ha beirunk valamit a keresőmezőbe.
    */
    const szurtLISTA = lista.filter(function (ember){
    return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
   });
}

export function torol(lista, id) {
    // torol(lista)-> Kitörli a listából az adott idjű elemet. Akkor fog lefutni, ha sor melletti torol gombra kattintunk.
    lista.splice(id, 1);
    return lista;
}
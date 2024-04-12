export function htmlOsszeallit(lista){
    /* táblázatot szeretnénk */
    let txt="<table class='table table-striped'>";
    txt +="<thead><tr><th>Név</th><th>Kor</th><th>Nem</th></tr></thead>"
    txt+="<tbody>"
    lista.forEach(elem, index => {
        /* a tábla egy sora */
        txt += '<tr>';
        console.log(elem)
        for (const kulcs in elem) {
            // objektumokat zárhatunk be
            //console.log("key: ",kulcs,elem(kulcs))
            txt += `<td>${elem[kulcs]}</td>`;
        }
        txt += "<td class=`torol` id=${index}>🗑️</td>";
        txt += '</tr>';
    });
    txt+="</tbody></table>"
    return txt;
}

export function htmlMegjelenit(txt){
    const divELEM=$(".adatok")
    divELEM.html(txt)
}  
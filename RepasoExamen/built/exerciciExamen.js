"use strict";
/*
Es una función que dependiendo que inputs recibe, muestra en pantalla una cosa u otra.
*/
function repasoExtra() {
    const frase = document.getElementById("texto1");
    const input2 = document.getElementById("num");
    const fraseStr = frase.value; /*Fila actual y la siguiente casting de los inputs recogidos en las dos anteriores */
    const numInp = Number(input2.value);
    if (fraseStr == "palabra" || fraseStr == "numero") { /*Condicional que, dependiendo de si fraseStr vale "palabra" o "numero",muestra una palabra o abre ventanas
                                                               y, en caso de no ser ninguna de las dos, hace el exponencial del número del segundo input (numImp) */
        if (fraseStr == "palabra") {
            var fraseMayus = fraseStr.toUpperCase();
            alert(fraseMayus);
        }
        else if (fraseStr == "numero") {
            var len = fraseStr.length;
            for (let i = 1; i <= len; i++) {
                const newWindow = window.open('', '', 'width=200,height=200');
            }
        }
    }
    else {
        alert(Math.pow(numInp, numInp));
    }
}

"use strict";
let dinersInput = Number(prompt("Cuánto dinero tienes?"));
//Transformo la variable a Number.
do {
    let intProd = prompt("Quieres introducir un producto?");
    if ((intProd === null || intProd === void 0 ? void 0 : intProd.toLowerCase()) == "no") { //Cambio a minuscula el valor del string para que no me importe como escriba la respuesta.
        alert("Hasta la próxima!");
        break;
    }
    else {
        var productName = prompt("Introduce el nombre del producto");
        var productPrice = Number(prompt("Introduce el precio del producto"));
        var productQuant = Number(prompt("Introduce la cantidad del producto"));
        var confirmation = prompt("Es correcto si o no?");
        if ((productPrice * productQuant) > dinersInput) {
        }
        else {
        }
    }
} while ((confirmation === null || confirmation === void 0 ? void 0 : confirmation.toLowerCase()) != "si");

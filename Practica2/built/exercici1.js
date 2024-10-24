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
        let productName = prompt("Introduce el nombre del producto");
        let productPrice = Number(prompt("Introduce el precio del producto"));
        let productQuant = Number(prompt("Introduce la cantidad del producto"));
        var confirmation = prompt("Es correcto si o no?");
        let total = productPrice * productQuant;
        let restant = dinersInput - total;
        //Todo el bloque anterior es de declaración de variables y sus respectivos parses.
        if (total > dinersInput) { //Condicional para saber si se acepta la comanda o no dependiendo si se tiene más dinero de lo que cuesta.
            console.log("ORDRE REBUTJADA");
            console.log(`${productName} - ${productPrice}`);
            console.log(`Quantitat demanada - ${productQuant}`);
            console.log(`Total - ${total}`);
        }
        else {
            console.log("ORDRE CONFIRMADA");
            console.log(`${productName} - ${productPrice}`);
            console.log(`Quantitat demanada - ${productQuant}`);
            console.log(`Diners restants - ${restant}`);
        }
    }
} while ((confirmation === null || confirmation === void 0 ? void 0 : confirmation.toLowerCase()) != "si"); //Bucle que te hace volver al inicio en caso de que te hayas equivocado al editar el producto o, ya no quieras añadir uno.

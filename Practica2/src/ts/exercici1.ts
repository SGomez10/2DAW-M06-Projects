let dinersInput:number = Number(prompt("Cuánto dinero tienes?"));
//Transformo la variable a Number.

do{
    let intProd: string | null = prompt("Quieres introducir un producto?");
    if (intProd?.toLowerCase() == "no"){ //Cambio a minuscula el valor del string para que no me importe como escriba la respuesta.
        alert("Hasta la próxima!");
        break;
    }
    else{

        let productName: string | null = prompt("Introduce el nombre del producto");        
        let productPrice: number = Number(prompt("Introduce el precio del producto"));
        let productQuant: number= Number(prompt("Introduce la cantidad del producto"));
        var confirmation: string | null = prompt("Es correcto si o no?");
        
        let total: number = productPrice * productQuant;
        let restant: number = dinersInput - total;
        
        //Todo el bloque anterior es de declaración de variables y sus respectivos parses.

        if(total > dinersInput){   //Condicional para saber si se acepta la comanda o no dependiendo si se tiene más dinero de lo que cuesta.
            console.log("ORDRE REBUTJADA");
            console.log(`${productName} - ${productPrice}`);
            console.log(`Quantitat demanada - ${productQuant}`);
            console.log(`Total - ${total}`);
        }
        else{
            console.log("ORDRE CONFIRMADA");
            console.log(`${productName} - ${productPrice}`);
            console.log(`Quantitat demanada - ${productQuant}`);
            console.log(`Diners restants - ${restant}`);
        }
        
    }
    
} while (confirmation?.toLowerCase() !="si") //Bucle que te hace volver al inicio en caso de que te hayas equivocado al editar el producto o, ya no quieras añadir uno.


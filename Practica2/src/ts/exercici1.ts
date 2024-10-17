let dinersInput:number = Number(prompt("Cuánto dinero tienes?"));
//Transformo la variable a Number.

do{
    let intProd: string | null = prompt("Quieres introducir un producto?");
    if (intProd?.toLowerCase() == "no"){ //Cambio a minuscula el valor del string para que no me importe como escriba la respuesta.
        alert("Hasta la próxima!");
        break;
    }
    else{
        var productName: string | null = prompt("Introduce el nombre del producto");
        var productPrice: number = Number(prompt("Introduce el precio del producto"));
        var productQuant: number= Number(prompt("Introduce la cantidad del producto"));
        var confirmation: string | null = prompt("Es correcto si o no?");
        
        if((productPrice * productQuant) > dinersInput){
    
        }
        else{
        
        }
        
    }

    
    
} while (confirmation?.toLowerCase() !="si") 


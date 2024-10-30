/*
Es una función que dependiendo que inputs recibe, muestra en pantalla una cosa u otra.
*/

function repasoExtra(){

    const frase: HTMLInputElement | null = document.getElementById("texto1") as HTMLInputElement;  
    const input2: HTMLInputElement | null = document.getElementById("num") as HTMLInputElement;    

    const fraseStr: string = frase.value;                   /*Fila actual y la siguiente casting de los inputs recogidos en las dos anteriores */
    const numInp: number = Number(input2.value);

    if(fraseStr == "palabra" || fraseStr == "numero"){       /*Condicional que, dependiendo de si fraseStr vale "palabra" o "numero",muestra una palabra o abre ventanas
                                                               y, en caso de no ser ninguna de las dos, hace el exponencial del número del segundo input (numImp) */

        if(fraseStr =="palabra"){
            var fraseMayus = fraseStr.toUpperCase();
            alert(fraseMayus);
        }else if(fraseStr == "numero"){
            var len: number = fraseStr.length;
            for (let i:number = 1; i <= len; i++) {
                const newWindow = window.open('', '', 'width=200,height=200');
            }
        }
    }else{

        alert(Math.pow(numInp,numInp));
    }
    
}
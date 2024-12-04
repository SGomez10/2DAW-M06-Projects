function classificarParaules(paraules:string[]): string[]{
    return paraules.filter(palabra => palabra.length > 5);
}

function analitzarTemperatures(...temperaturas: number[]): void{

    const tabla = document.getElementById('taulaTemperatures') as HTMLTableElement;

    const nuevaFila = tabla.insertRow();
    const celda1 = nuevaFila.insertCell(0);
    const celda2 = nuevaFila.insertCell(1);
    const celda3 = nuevaFila.insertCell(2);

    const tempMax:number = Math.max(...temperaturas);
    const tempMin:number = Math.min(...temperaturas);
    const total:number = temperaturas.length;
    const sumTotal:number= temperaturas.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const tempMitjana:number = parseFloat((sumTotal / total).toFixed(2));

    celda1.textContent=String(tempMitjana.toFixed(2));
    celda2.textContent=String(tempMax);
    celda3.textContent=String(tempMin);
}

function enviarMissatges(input1:string, input2:string): void;
function enviarMissatges(input1: number, input2:string): void;

function enviarMissatges(input1:string | number, input2:string ){

    if(typeof input1 === "string" && input1.includes("@")){
        console.log("Missatge enviat a l'email ", + "contingut: "+ input2);
    }else if (typeof input1 === "number" && input1.toString().length > 9){
        alert("Missatge enviat al telèfon "+ "contingut: "+ input2 );
    }
}


//Funció per provar les funcions realitzades, comenteu i descomenteu una linea per separat per provar les diferents opcions
function execucions(){
    // Exercici 1: Classificar Paraules
    //const paraules:string[] = ["cotxe", "avió", "ferrocarril", "vaixell", "motocicleta", "tractor"]; //Resultat: 4 elements: ferrocarril, vaixell, motocicleta, tractor
    const paraules:string[] = ["blau", "vermell", "taronja", "gris", "platejat"]; //Resultat: 3 elements: vermell, taronja, platejat
    //const paraules:string[] = ["gos", "gat", "elefant", "caball"]; //Resultat: 2 elements: elefant, caball
    console.log(classificarParaules(paraules));

    // Exercici 2: Analitzar Temperatures
    //analitzarTemperatures(12,4,30,2,11,26); //Resultat: Mitjana 14.17, Màxima 30, Mínima 2 
    //analitzarTemperatures(9,15,7,5,8); //Resultat: Mitjana 8.80, Màxima 15, Mínima 5 
    analitzarTemperatures(19,20,21); //Resultat: Mitjana 20.00, Màxima 21, Mínima 19 

    // Exercici 3: Enviar Missatges
    //enviarMissatges("test@mail.com", "Demano informació sobre aquest curs"); //Resultat: Missatge enviat a l'email, contingut: Demano informació sobre aquest curs
    //enviarMissatges("test@mail.com", "Demano informació sobre aquest curs", "Salutacions"); //Resultat: Missatge enviat a l'email, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges(985421122, "Demano informació sobre aquest curs"); //Resultat (alert): Missatge enviat al telèfon, contingut: Demano informació sobre aquest curs
    //enviarMissatges(985421122, "Demano informació sobre aquest curs", "Salutacions"); //Resultat (alert): Missatge enviat al telèfon, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges("error", "error"); //Resultat: L'email no té un format vàlid.
}






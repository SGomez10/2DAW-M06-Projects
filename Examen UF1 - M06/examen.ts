function exercici1() {

    /*
    Funcion que recoge los inputs, los pasa a numero y dependiendo de cual de los dos sea mayor,
    suma o divide los números entre ellos. 
    */
    let input1:number = Number((<HTMLInputElement>document.getElementById("camp1")).value);
    let input2:number = Number((<HTMLInputElement>document.getElementById("camp2")).value);
    
    if(input1<input2){
        let sol:number = input1 + input2;
        alert(sol);
    }else if(input1>input2){
        let sol2:number = input1/input2;
        console.log(sol2);
    }else{
        alert("Los numeros son iguales.")  //En caso de ser los dos numeros iguales, lo notifica por pantalla.
    }
    
}

function exercici2() {

     /*
    Funcion que recoge los inputs, los pasa a numero y selecciona la primera entrada como veces que se va a hacer un bucle,
    la segunda entrada la usamos para ver si es divisible entre el numero generado aleatoriamente y ella misma.
    */
    let quantitatIntents:number = Number((<HTMLInputElement>document.getElementById("camp1")).value);
    let segonNum:number = Number((<HTMLInputElement>document.getElementById("camp2")).value);
    var notDiv:number=0;

    for(let i:number=0; i<quantitatIntents; i++){
        let random:number = Math.floor(Math.random() * (75-1) + 1);
        
        if(random%segonNum==0){
            console.log(notDiv);    //Da error porque no le doy un valor inicial, pero al ser var la variable, deberia funcionar.
            break;
        }else{
            notDiv=random;  //Guardamos el último número no divisible para poder mostrar el último y no tener que mostrar todos
        }
    }

}

function exercici3() {

    /*
    Funcion que recoge los inputs, los pasa a numero y selecciona la primera entrada como color hexadecimal,
    la segunda entrada la usamos para el tamaño a usar en las ventanas que se crean. Dependiendo de si es divisible entre 2 o no el hexadecimal,
    el código genera una ventana con un texto u otro.
    */
    let codiColor:number = Number((<HTMLInputElement>document.getElementById("camp1")).value);
    let mesuraPixels:number = Number((<HTMLInputElement>document.getElementById("camp2")).value);

    if(codiColor%2==0){
        const nuevaPest = window.open('', '', "width="+mesuraPixels.toString()+"," + "height="+mesuraPixels.toString()); //Creacion de la pestaña usando window y dandole el tamaño con la variable
        if(nuevaPest){
        nuevaPest.document.write("<h1>Sergio Gomez</h1>"); //Añadir texto dentro de la pestaña
        nuevaPest.document.body.style.backgroundColor ="#"+codiColor.toString(); //Uso del color hexadecimal con la variable
        }
           
    }else{
        const nuevaPest = window.open('', '', "width="+mesuraPixels.toString()+","+"height="+mesuraPixels.toString());
        if(nuevaPest){
        nuevaPest.document.write("<h1>Puig Castellar</h1>");
        nuevaPest.document.body.style.backgroundColor ="#"+codiColor.toString();
        }
        
    }
    
}
"use strict";
/*
function diaDeLaSetmana() {
    const input = document.getElementById('data') as HTMLInputElement;   //Recogemos el valor del formulario mediante el id. Es const porque porque una vez recogido no va a cambiar
    const regexp = /^\d{2}\/\d{2}\/\d{4}$/; //Creamos el patrón de carácteres que va tener nuestra fecha.

    if (input) { //Comprueba si ha recogido el valor del form html.
        const fechaFinal = input.value; //Guarda el valor del form dentro de la variable

        if (regexp.test(fechaFinal)) {  //Condicional que comprueba si el valor es correcto o no (true or false).
            const [dia, mes, year] = fechaFinal.split('/').map(Number); //En caso de true, dividimos el valor de dateFinal en tres partes, donde encuentre el símbolo "/" y creamos un array con los tres números con .map
            const date = new Date(year, mes - 1, dia); //Creamos el objeto date, usando los valores divididos anteriormente y le restamos 1 al mes porque es indexado en cero, es decir, enero es 0 y diciembre 11.
            const diaSemana = date.getDay(); //Cogemos el dia en una variable para poder calcular el número mediante el método getDay
            
            alert(diaSemana); //Mostramos el dia de la semana
            console.log(Math.sqrt(diaSemana).toFixed(2)); //Hacemos la raíz cuadrada del número equivalente del día y lo redondeamos a 2 decimales.
        } else {  //En caso de false, muestra una alerta en pantalla explicando el error.
            alert('El format de data és incorrecte, Utilitza dd/mm/yyyy.');
        }
    }
    
}
*/
function modificarBom() {
    const input = document.getElementById('data');
    if (input) {
        const numPest = parseInt(input.value, 10);
        for (let i = 1; i <= numPest; i++) {
            const nuevaPest = window.open('', '', 'width=300,height=300');
            if (nuevaPest) {
                nuevaPest.document.write(`<h1>Window ${i}</h1>`);
                nuevaPest.document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            }
        }
    }
}

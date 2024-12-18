let clientesMap:Map <string, string> = new Map([
    ["Marc", "marc@elpuig.xeill.net"],
    ["Alvaro", "alvaro@elpuig.xeill.net"],
    ["Cristian", "ctapasco@elpuig.xeill.net"],
    ["Lucas", "mellamolucas33"],
    ["Irene", "irene@elpuig.xeill.net"]
]);

let listPeliculas:Set<string> = new Set<string>();
let listaJuegos:Map<string,string> = new Map();

/*
Función que recibe el email del usuario y comprueba que tiene el formato
correcto mediante el uso del RegExp, dando true si lo cumple.
*/
const isValidEmail = (email: string): boolean => {
    const emailPattern:RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
/*
Función que recibe el contenido de la lista de clientes, y comprueba si 
el mail es válido para poder mostrarse como cliente en el front, en caso negativo,
no se muestra.
*/
function loadClientes(clientesMap: Map<string, string>) {
    let listaClientes:HTMLElement = document.getElementById('ListaClientes')!;
    listaClientes.innerHTML = '';
    clientesMap.forEach((email, name) => {
        if (isValidEmail(email)) {
            const li:HTMLLIElement = document.createElement('li');
                li.textContent = `${name}: ${email}`;
                listaClientes.appendChild(li);
        }
    });
}
/*
Función que va a ser llamada al iniciar la aplicación web que carga los clientes y
añade contenido a listPeliculas y listaJuegos
*/
function init(){
    loadClientes(clientesMap);
    listPeliculas.add('La matanza de texas');
    listPeliculas.add('UP');
    listPeliculas.add('Cars 2');
    listaJuegos.set("Portal","PC");
    listaJuegos.set("Bloordborne","PS4");
    listaJuegos.set("Halo Reach","XBOX");
}
/*
Función que recibe el contenido del input del html y dependiendo de si tiene una coma o no,
divie el contenido en dos Strings con la coma como punto de división o no y llama a la función
addProduct()
*/
function procesarInput(){

    let productoInput:HTMLInputElement = document.getElementById("producto")! as HTMLInputElement;
    let valorInput:string = productoInput.value;

    if(productoInput){

        if(valorInput.includes(',')){
            let valorNombre:string[] = valorInput.split(',');
            let producto:string= valorNombre[0];
            let plataforma:string= valorNombre[1];
            addProduct(producto,plataforma)
        }
        else{
            let producto:string=valorInput.trim();
            addProduct(producto);
        }   
    }
    productoInput.value="";
}
/*
Función que recibe como mínimo un producto y dependiendo de si es un producto o un producto
y una plataforma, almacena el contenido en el map listaJuegos o en el set listPeliculas
*/
function addProduct(producto:string): void;
function addProduct(producto:string, plataforma:string): void;
function addProduct(producto:string, plataforma?:string){

   if(plataforma!=null){
    listaJuegos.set(producto,plataforma);
   }else{
    listPeliculas.add(producto);
   }
}
/*
Función que dependiendo del botón pulsado en el html, se recibe un string como input
para crear la tabla que toque y mostrar la lista que se deba.
*/
function showProduct(type:string):void{

    let divShow:HTMLElement = document.getElementById("contenidoListas") as HTMLElement;

    if(!divShow) return;
    divShow.innerHTML = '';

    if (type === 'juegos') {
        // Crear la tabla
        let tabla: HTMLTableElement = document.createElement('table');
        // Crear encabezado con el texto "Juegos"
        let encabezado: HTMLTableRowElement = tabla.insertRow();
        encabezado.insertCell(0).innerText = "Juegos y plataforma";
    
        // Recorrer listaJuegos y agregar las filas con key y value en la misma columna
        listaJuegos.forEach((value, key) => {
            let row: HTMLTableRowElement = tabla.insertRow();
            row.insertCell(0).innerText = `${key} - ${value}`; // Combina key y value en una sola celda
        });
        // Agregar la tabla al div
        divShow.appendChild(tabla);

    }else if (type === 'peliculas') {

        let tabla:HTMLTableElement = document.createElement('table');
        let encabezado: HTMLTableRowElement = tabla.insertRow();
        encabezado.insertCell(0).innerText = "Películas";

        listPeliculas.forEach((value) => {
            let row: HTMLTableRowElement = tabla.insertRow();
            row.insertCell(0).innerText = value;
        });
        
        divShow.appendChild(tabla);

    } else if (type === 'ambos') {
        // Creo una tabla 
        let tabla: HTMLTableElement = document.createElement('table');
        
        // Crear una fila para los encabezados de las columnas
        let encabezado: HTMLTableRowElement = tabla.insertRow();
        encabezado.insertCell(0).innerText = "Películas";
        encabezado.insertCell(1).innerText = "Juegos y Plataforma";
    
        // Obtener la longitud máxima entre juegos y películas para recorrer ambos
        let maxLength:number = Math.max(listPeliculas.size, listaJuegos.size);
        
        // Recorrer ambos arrays y agregar filas a la tabla
        for (let i:number = 0; i < maxLength; i++) {
            let row: HTMLTableRowElement = tabla.insertRow();
    
            // Agregar película a la columna de películas
            let pelicula:string = Array.from(listPeliculas)[i];
            if (pelicula) {
                row.insertCell(0).innerText = pelicula;  // Nombre de la película
            } else {
                row.insertCell(0).innerText = "";  // Si no hay más películas, dejar vacío
            }
    
            // Agregar juego y plataforma a la columna de juegos
            let juego:[string,string] = Array.from(listaJuegos.entries())[i];
            if (juego) {
                row.insertCell(1).innerText = `${juego[0]} - ${juego[1]}`;  // Nombre del juego y plataforma
            } else {
                row.insertCell(1).innerText = "";  // Si no hay más juegos, dejar vacío
            }
        }
        // Agregar la tabla al div
        divShow.appendChild(tabla);
    }
}    

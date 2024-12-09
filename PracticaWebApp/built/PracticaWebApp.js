"use strict";
let clientesMap = new Map([
    ["Marc", "marc@elpuig.xeill.net"],
    ["Alvaro", "alvaro@elpuig.xeill.net"],
    ["Cristian", "ctapasco@elpuig.xeill.net"],
    ["Lucas", "mellamolucas33"],
    ["Irene", "irene@elpuig.xeill.net"]
]);
let listPeliculas = new Set();
let listaJuegos = new Map();
const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};
function loadClientes(clientesMap) {
    let listaClientes = document.getElementById('ListaClientes');
    listaClientes.innerHTML = '';
    clientesMap.forEach((email, name) => {
        if (isValidEmail(email)) {
            const li = document.createElement('li');
            li.textContent = `${name}: ${email}`;
            listaClientes.appendChild(li);
        }
    });
}
function init() {
    loadClientes(clientesMap);
    listPeliculas.add('La matanza de texas');
    listPeliculas.add('UP');
    listPeliculas.add('Cars 2');
    listaJuegos.set("Portal", "PC");
    listaJuegos.set("Bloordborne", "PS4");
    listaJuegos.set("Halo Reach", "XBOX");
}
function procesarInput() {
    let productoInput = document.getElementById("producto");
    let valorInput = productoInput.value;
    if (productoInput) {
        if (valorInput.includes(',')) {
            let valorNombre = valorInput.split(',');
            let producto = valorNombre[0];
            let plataforma = valorNombre[1];
            addProduct(producto, plataforma);
        }
        else {
            let producto = valorInput.trim();
            addProduct(producto);
        }
    }
    productoInput.value = "";
}
function addProduct(producto, plataforma) {
    if (plataforma != null) {
        listaJuegos.set(producto, plataforma);
    }
    else {
        listPeliculas.add(producto);
    }
}
function showProduct(type) {
    let divShow = document.getElementById("contenidoListas");
    if (!divShow)
        return;
    divShow.innerHTML = '';
    if (type === 'juegos') {
        // Crear la tabla
        let tabla = document.createElement('table');
        // Crear encabezado con el texto "Juegos"
        let encabezado = tabla.insertRow();
        encabezado.insertCell(0).innerText = "Juegos y plataforma";
        // Recorrer listaJuegos y agregar las filas con key y value en la misma columna
        for (let [key, value] of listaJuegos) {
            let row = tabla.insertRow();
            row.insertCell(0).innerText = `${key} - ${value}`; // Combina key y value en una sola celda
        }
        // Agregar la tabla al div
        divShow.appendChild(tabla);
    }
    else if (type === 'peliculas') {
        let tabla = document.createElement('table');
        let encabezado = tabla.insertRow();
        encabezado.insertCell(0).innerText = "Películas";
        for (let value of listPeliculas) {
            let row = tabla.insertRow();
            row.insertCell(0).innerText = value;
        }
        divShow.appendChild(tabla);
    }
    else if (type === 'ambos') {
        // Crear una tabla única
        let tabla = document.createElement('table');
        // Crear una fila para los encabezados de las columnas
        let encabezado = tabla.insertRow();
        encabezado.insertCell(0).innerText = "Películas";
        encabezado.insertCell(1).innerText = "Juegos y Plataforma";
        // Obtener la longitud máxima entre juegos y películas para recorrer ambos
        let maxLength = Math.max(listPeliculas.size, listaJuegos.size);
        // Recorrer ambos arrays y agregar filas a la tabla
        for (let i = 0; i < maxLength; i++) {
            let row = tabla.insertRow();
            // Agregar película a la columna de películas
            let pelicula = Array.from(listPeliculas)[i];
            if (pelicula) {
                row.insertCell(0).innerText = pelicula; // Nombre de la película
            }
            else {
                row.insertCell(0).innerText = ""; // Si no hay más películas, dejar vacío
            }
            // Agregar juego y plataforma a la columna de juegos
            let juego = Array.from(listaJuegos.entries())[i];
            if (juego) {
                row.insertCell(1).innerText = `${juego[0]} - ${juego[1]}`; // Nombre del juego y plataforma
            }
            else {
                row.insertCell(1).innerText = ""; // Si no hay más juegos, dejar vacío
            }
        }
        // Agregar la tabla al div
        divShow.appendChild(tabla);
    }
}

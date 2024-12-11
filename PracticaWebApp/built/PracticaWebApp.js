var clientesMap = new Map([
    ["Marc", "marc@elpuig.xeill.net"],
    ["Alvaro", "alvaro@elpuig.xeill.net"],
    ["Cristian", "ctapasco@elpuig.xeill.net"],
    ["Lucas", "mellamolucas33"],
    ["Irene", "irene@elpuig.xeill.net"]
]);
var listPeliculas = new Set();
var listaJuegos = new Map();
var isValidEmail = function (email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};
function loadClientes(clientesMap) {
    var listaClientes = document.getElementById('ListaClientes');
    listaClientes.innerHTML = '';
    clientesMap.forEach(function (email, name) {
        if (isValidEmail(email)) {
            var li = document.createElement('li');
            li.textContent = name + ": " + email;
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
    var productoInput = document.getElementById("producto");
    var valorInput = productoInput.value;
    if (productoInput) {
        if (valorInput.includes(',')) {
            var valorNombre = valorInput.split(',');
            var producto = valorNombre[0];
            var plataforma = valorNombre[1];
            addProduct(producto, plataforma);
        }
        else {
            var producto = valorInput.trim();
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
    var divShow = document.getElementById("contenidoListas");
    if (!divShow)
        return;
    divShow.innerHTML = '';
    if (type === 'juegos') {
        // Crear la tabla
        var tabla_1 = document.createElement('table');
        // Crear encabezado con el texto "Juegos"
        var encabezado = tabla_1.insertRow();
        encabezado.insertCell(0).innerText = "Juegos y plataforma";
        // Recorrer listaJuegos y agregar las filas con key y value en la misma columna
        listaJuegos.forEach(function (value, key) {
            var row = tabla_1.insertRow();
            row.insertCell(0).innerText = key + " - " + value; // Combina key y value en una sola celda
        });
        // Agregar la tabla al div
        divShow.appendChild(tabla_1);
    }
    else if (type === 'peliculas') {
        var tabla_2 = document.createElement('table');
        var encabezado = tabla_2.insertRow();
        encabezado.insertCell(0).innerText = "Películas";
        listPeliculas.forEach(function (value) {
            var row = tabla_2.insertRow();
            row.insertCell(0).innerText = value;
        });
        divShow.appendChild(tabla_2);
    }
    else if (type === 'ambos') {
        // Creo una tabla 
        var tabla = document.createElement('table');
        // Crear una fila para los encabezados de las columnas
        var encabezado = tabla.insertRow();
        encabezado.insertCell(0).innerText = "Películas";
        encabezado.insertCell(1).innerText = "Juegos y Plataforma";
        // Obtener la longitud máxima entre juegos y películas para recorrer ambos
        var maxLength = Math.max(listPeliculas.size, listaJuegos.size);
        // Recorrer ambos arrays y agregar filas a la tabla
        for (var i = 0; i < maxLength; i++) {
            var row = tabla.insertRow();
            // Agregar película a la columna de películas
            var pelicula = Array.from(listPeliculas)[i];
            if (pelicula) {
                row.insertCell(0).innerText = pelicula; // Nombre de la película
            }
            else {
                row.insertCell(0).innerText = ""; // Si no hay más películas, dejar vacío
            }
            // Agregar juego y plataforma a la columna de juegos
            var juego = Array.from(listaJuegos.entries())[i];
            if (juego) {
                row.insertCell(1).innerText = juego[0] + " - " + juego[1]; // Nombre del juego y plataforma
            }
            else {
                row.insertCell(1).innerText = ""; // Si no hay más juegos, dejar vacío
            }
        }
        // Agregar la tabla al div
        divShow.appendChild(tabla);
    }
}

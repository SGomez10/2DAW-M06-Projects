var clientesMap = new Map([
    ["Marc", "marc@elpuig.xeill.net"],
    ["Alvaro", "alvaro@elpuig.xeill.net"],
    ["Cristian", "ctapasco@elpuig.xeill.net"],
    ["Irene", "irene@elpuig.xeill.net"]
]);
var listPeliculas = new Set();
var listaJuegos = new Map();
var isValidEmail = function (email) { return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email); };
function loadCustomers(customersData) {
    clientesMap.forEach(function (email, name) {
        if (isValidEmail(email)) {
        }
    });
}
function introducirProducto(producto, plataforma) {
    if (producto != null && typeof producto == "string") {
        listPeliculas.add(producto);
    }
    else if (producto != null && (plataforma != null && typeof plataforma == "string")) {
        listaJuegos.set(producto, plataforma);
    }
    else {
        alert("Error a la hora de introducir los datos");
    }
}

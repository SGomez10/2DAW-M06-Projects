"use strict";
let categoriesSet = new Set();
let productesSet = new Set();
function afegirCategoria() {
    const categoria = document.getElementById("categoria");
    let catVal = categoria.value;
    if (catVal) {
        categoriesSet.add(catVal);
    }
}
function mostrarCategories() {
    document.getElementById("cat").innerHTML = "";
    for (const value of categoriesSet) {
        document.getElementById("cat").innerText += "\n" + value;
    }
}
function afegirProducte() {
    const producte = document.getElementById("producte");
    let prodVal = producte.value;
    if (prodVal) {
        productesSet.add(prodVal);
    }
}
function mostrarProductes() {
    document.getElementById("prod").innerHTML = "";
    for (const value of productesSet) {
        document.getElementById("prod").innerText += "\n" + value;
    }
}
function eliminarProducte() {
    const producte = document.getElementById("producte");
    let prodVal = producte.value;
    if (prodVal) {
        productesSet.delete(prodVal);
    }
}

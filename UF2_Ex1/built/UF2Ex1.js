"use strict";
let categoriesSet = new Set();
let productesMap = new Map();
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
    const stock = document.getElementById("stock");
    let prodVal = producte.value;
    let stockProd = Number(stock.value);
    if (prodVal) {
        productesMap.set(prodVal, stockProd);
    }
}
function mostrarProductes() {
    document.getElementById("prod").innerHTML = "";
    for (const [key, value] of productesMap) {
        document.getElementById("prod").innerText += "\nCantidad de " + key + " = " + value.toString();
    }
}
function eliminarProducte() {
    const producte = document.getElementById("producte");
    const stock = document.getElementById("stock");
    let prodVal = producte.value;
    let stockProd = Number(stock.value);
    if (prodVal) {
        productesMap.delete(prodVal);
    }
}
function ventaProd() {
    const producte = document.getElementById("producteVenta");
    const precio = document.getElementById("precio");
    let prodVal = producte.value;
    let precioProd = Number(precio.value);
    if (productesMap.has(prodVal) == false || isNaN(precioProd)) {
        alert("Has introducido campos erroneos");
        return;
    }
    else {
        productesMap.set(prodVal, productesMap.get(prodVal) - 1);
        if (productesMap.get(prodVal) <= 0) {
            productesMap.delete(prodVal);
        }
    }
}

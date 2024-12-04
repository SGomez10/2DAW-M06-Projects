let categoriesSet:Set<string> = new Set<string>();
let productesMap:Map<string,number> = new Map<string,number>();

function afegirCategoria(){

    const categoria: HTMLInputElement | null = document.getElementById("categoria") as HTMLInputElement;  
    let catVal:string = categoria.value;
    
    if(catVal){
        categoriesSet.add(catVal);
         
    }
} 

function mostrarCategories(){
    document.getElementById("cat")!.innerHTML = "";
    for (const value of categoriesSet) {
        document.getElementById("cat")!.innerText +="\n" + value;
    }

}

function afegirProducte(){
    const producte: HTMLInputElement | null = document.getElementById("producte") as HTMLInputElement;
    const stock: HTMLInputElement | null = document.getElementById("stock") as HTMLInputElement;
    let prodVal:string = producte.value;
    let stockProd: number = Number(stock.value);
    
    if(prodVal){
        productesMap.set(prodVal,stockProd)
    }

}

function mostrarProductes(){

    document.getElementById("prod")!.innerHTML="";
    for (const [key,value] of productesMap){
        document.getElementById("prod")!.innerText +="\nCantidad de "+ key + " = " + value.toString();
    }
}

function eliminarProducte(){
    const producte: HTMLInputElement | null = document.getElementById("producte") as HTMLInputElement;
    const stock: HTMLInputElement | null = document.getElementById("stock") as HTMLInputElement;

    let prodVal:string = producte.value;
    let stockProd: number = Number(stock.value);

    if(prodVal){
        productesMap.delete(prodVal);
    }

}

function ventaProd(){

    const producte: HTMLInputElement | null = document.getElementById("producteVenta") as HTMLInputElement;
    const precio: HTMLInputElement | null = document.getElementById("precio") as HTMLInputElement;

    let prodVal:string = producte.value;
    let precioProd: number = Number(precio.value);

    if(productesMap.has(prodVal) == false || isNaN(precioProd)){
        alert("Has introducido campos erroneos")
        return;
    }else{
        productesMap.set(prodVal, productesMap.get(prodVal)! -1)
        if(productesMap.get(prodVal)!<=0){
            productesMap.delete(prodVal)
        }
    }


}
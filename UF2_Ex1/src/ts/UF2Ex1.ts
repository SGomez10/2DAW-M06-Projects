let categoriesSet:Set<string> = new Set<string>();
let productesSet:Set<string> = new Set<string>();

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
    let prodVal:string = producte.value;
    if(prodVal){
        productesSet.add(prodVal);
    }
}

function mostrarProductes(){

    document.getElementById("prod")!.innerHTML="";
    for (const value of productesSet){
        document.getElementById("prod")!.innerText += "\n" + value;
    }
}

function eliminarProducte(){
    const producte: HTMLInputElement | null = document.getElementById("producte") as HTMLInputElement;  
    let prodVal:string = producte.value;
    if(prodVal){
        productesSet.delete(prodVal);
    }

}
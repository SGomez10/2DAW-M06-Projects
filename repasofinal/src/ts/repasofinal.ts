function operacionRepaso(){

    let valorIn1: number = Number((<HTMLInputElement>document.getElementById("input1")).value);

    if(isNaN(valorIn1)){
        alert("Has de introducir un número");
    }else if (valorIn1%4 == 0){
        alert(valorIn1.toString() + " Es divisible entre 4");
    }else{
        alert(valorIn1.toString() + " No es divisible entre 4");
    }

}
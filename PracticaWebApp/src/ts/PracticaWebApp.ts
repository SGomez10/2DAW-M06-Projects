let clientesMap:Map <string, string> = new Map([
    ["Marc", "marc@elpuig.xeill.net"],
    ["Alvaro", "alvaro@elpuig.xeill.net"],
    ["Cristian", "ctapasco@elpuig.xeill.net"],
    ["Irene", "irene@elpuig.xeill.net"]
]);

let listPeliculas:Set<string> = new Set<string>();
let listaJuegos:Map<string,string> = new Map();


const isValidEmail = (email: string) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);

function loadCustomers(customersData: Map<string, string>) {
  clientesMap.forEach((email, name) => {
    if (isValidEmail(email)) {
      
    }
  });
}


function introducirProducto(producto?:string) :void;
function introducirProducto(producto?:string, plataforma?:string): void;

function introducirProducto(producto?:string, plataforma?:string): void{

    if(producto != null && typeof producto=="string"){
        listPeliculas.add(producto);
    }
    else if (producto != null && (plataforma !=null && typeof plataforma=="string")){
        listaJuegos.set(producto,plataforma);
    }
    else{
        alert("Error a la hora de introducir los datos")
    }


}


let buttons :HTMLCollection = document.getElementsByTagName("button");
let arrayButtons = Array.from(buttons);
let cuadrado: HTMLElement = document.getElementById("square")!;


function changeBGColor(Buttonid: string){
    document.body.style.background = Buttonid;
    cuadrado.style.backgroundColor = Buttonid;

}

arrayButtons.forEach((button) => {
    button.addEventListener('click',() => {
        changeBGColor(button.id);
    });
});

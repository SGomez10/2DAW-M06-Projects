"use strict";
let buttons = document.getElementsByTagName("button");
let arrayButtons = Array.from(buttons);
let cuadrado = document.getElementById("square");
function changeBGColor(Buttonid) {
    document.body.style.background = Buttonid;
    cuadrado.style.backgroundColor = Buttonid;
}
arrayButtons.forEach((button) => {
    button.addEventListener('click', () => {
        changeBGColor(button.id);
    });
});

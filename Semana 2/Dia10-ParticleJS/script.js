const body = document.body;
const box = document.querySelector(".box");
const tela = document.getElementById("particles-js");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function updateDisplay(event) {
    
    var altura = window.screen.height;
    var largura = window.screen.width;
    x = event.pageX;
    y = event.pageY;

   
        // box.style.top = 0.8*y + 'px'
    // box.style.left = 0.8*x + 'px'

    // Direita em baixo
    if(x > largura/2 && y > altura/2){
        box.style.rotate = "135deg"
        box.style.backgroundColor = "yellow"
    }
    // Esquerda em baixo
    else if(x < largura/2 && y > altura/2){ // baixo
        box.style.rotate = "-135deg"
        box.style.backgroundColor = "blue"
    }
    // Esquerda em cima
    else if(x < largura/2 && y < altura/2){
        box.style.rotate = "-45deg"
        box.style.backgroundColor = "green"

    }
    // Direita em cima
    else if(x > largura/2 && y < altura/2){
        box.style.rotate = "45deg"
        box.style.backgroundColor = "red"
    }

    pageX.innerText = x;
    pageY.innerText = y;

}

body.addEventListener("mousemove", updateDisplay, false);
// body.addEventListener("mouseenter", updateDisplay, false);
// body.addEventListener("mouseleave", updateDisplay, false);



const body = document.body;
const box = document.querySelector(".box");
const tela = document.getElementById("particles-js");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

const altura = window.innerHeight/2;    
const largura = window.innerWidth/2;

function rotate_player(event) {
    var y = event.clientY - window.innerHeight/2;
    var x = event.clientX - window.innerWidth/2;

    var hip = Math.hypot(x, y)
    var seno = Math.sin(y, hip)

    // if(seno < 0) seno *= -1

    var quadrant = getQuadrant(x, y)
    angulo = quadrant - (seno * (180 / Math.PI))

    // if (quadrant == 90 || quadrant == 270) angulo -= 90

    box.style.transform = `rotate(${angulo}deg)`
}

function getQuadrant(x, y) {
    let quadrant = 0
    if(x < largura && y < altura) quadrant = 270
    else if(x > largura && y > altura) quadrant = 90

    return quadrant
}



body.addEventListener("mousemove", rotate_player, false);
// body.addEventListener("mouseenter", updateDisplay, false);
// body.addEventListener("mouseleave", updateDisplay, false);



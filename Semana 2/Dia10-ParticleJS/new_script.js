particlesJS.load('particles-js', 'assets/particles.json')
var mouseAxis = new Map();

var playerCenterPoint = document.querySelector("#point");
var player = document.querySelector("#player");

const altura = window.innerHeight/2;    
const largura = window.innerWidth/2;
const body = document.body;

function movePlayer(mouse) {
    setCoordinates(mouse);
    let angulo = calcAngleToMouse(mouseAxis);

    player.style.transform = `rotate(${angulo}deg)`
}

function setCoordinates(mouse){
    let playerAxis = new Map();

    playerAxis.set("x", playerCenterPoint.getBoundingClientRect()['x'].toFixed(0)) ;
    playerAxis.set("y", playerCenterPoint.getBoundingClientRect()['y'].toFixed(0)) ;

    mouseAxis.set("x", mouse.clientX - +playerAxis.get("x") );
    mouseAxis.set("y", ( mouse.clientY - +playerAxis.get("y") ) * -1);
}
  

function calcAngleToMouse(mouseAxis){
    let x = mouseAxis.get("x");
    let y = mouseAxis.get("y");

    let hipotenusa = Math.sqrt((x ** 2) + (y **2)).toFixed(1);

    let sin = (y / hipotenusa).toFixed(3) ;
    let cos = (x / hipotenusa).toFixed(3) ;
    let tan = Math.atan(cos/sin)
    
    let angle = (tan * 180 / Math.PI)

    return (sin < 0) ? angle + 180: angle;
}


body.addEventListener("mousemove", movePlayer, false);
// body.addEventListener("mouseenter", updateDisplay, false);
// body.addEventListener("mouseleave", updateDisplay, false);



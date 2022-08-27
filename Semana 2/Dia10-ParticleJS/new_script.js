particlesJS.load('particles-js', 'assets/particles.json')

var mouseAxis = new Map();

var playerCenterPoint = document.querySelector("#point");
var particlesjs = document.querySelector("#particles-js");
var player = document.querySelector("#player");

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

function atirar(mouse){
    
    let x = mouse.clientX
    let y = mouse.clientY
    
    let altura = window.innerHeight
    let largura = window.innerWidth

    let tiro = document.createElement("img")
    tiro.className = "tiro"
    tiro.id = "tiro" + x + "-" + y
    tiro.src = "Jader-Contrib/game/game/images/bom.png"
    tiro.style.transition = "all 1s"

    tiro.style.width = "50px"
    tiro.style.height = "auto"

    tiro.style.position = 'fixed'
    var top = altura/2
    var left = largura/2

    tiro.style.top = top + 'px';
    tiro.style.left = left  + 'px';

    
    tiro.style.display = 'flex'
 
    particlesjs.appendChild(tiro)

    return moveTiro(x, y)
    
    
    // muve = setInterval(moveTiro, 100)

   
    console.table("altura", "largura", "top", "left", [altura, largura, top, left])

function moveTiro(x, y){
    tiro_move = document.getElementById("tiro" + x + "-" + y)

    tiro_move.style.top = y + 'px';
    tiro_move.style.left = x  + 'px';

    // if(top == y && left == x){
    //     clearInterval(muve)}
    // else{
    //     if (top > tiro.style.left){ top-- } else{top++}
    //     if (left > tiro.style.left) {left--} else{left++}
    //     tiro.style.top = top + 'px';
    //     tiro.style.left = left  + 'px';
    // }
}
}

body.addEventListener("mousemove", movePlayer, false);
body.addEventListener("click", atirar, false);

// body.addEventListener("mouseenter", updateDisplay, false);
// body.addEventListener("mouseleave", updateDisplay, false);



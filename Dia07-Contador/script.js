var contagemSegundos = 1
var contagemMinutos = 1
var contagemHoras = 1

var pausa = true

const BTN_STOP = document.getElementById("botao_stop")
const BTN_INICIAR = document.getElementById("botao_inicio")
const BTN_REINICIAR = document.getElementById("botao_reinicia")
const ICON_PLAY = document.getElementById('icon_play')

const SEGUNDOS = document.getElementById("segundos")
const MINUTOS = document.getElementById("minutos")
const HORAS = document.getElementById("horas")

function contagem(){
    if(SEGUNDOS.innerText == 59){
        contagemSegundos = 0
        MINUTOS.innerText = contagemMinutos < 10 ? '0' + contagemMinutos++ : contagemMinutos++
        if (MINUTOS.innerText == 59){
            contagemMinutos = 0
            HORAS.innerText = contagemHoras < 10 ? '0' + contagemHoras++ : contagemHoras++
        }
    }
    SEGUNDOS.innerText = contagemSegundos < 10 ? '0' + contagemSegundos++ : contagemSegundos++
}

function Iniciar(){
    pausa = pausa == true ? false : true

    BTN_STOP.disabled = false
    BTN_REINICIAR.disabled = false

    let class_pausa = ICON_PLAY.className
    ICON_PLAY.className = class_pausa == "icofont-ui-pause" ? "icofont-ui-play" : "icofont-ui-pause"

    if(pausa == true){
        clearInterval(tempo);
    }else{
        tempo = setInterval(contagem, 1000)
    }
    
  
}

function Stop(){ 
    Reiniciar()
    clearInterval(tempo);

    pausa = true

    BTN_STOP.disabled = true
    BTN_REINICIAR.disabled = true

    ICON_PLAY.className = "icofont-ui-play"
           
}

function Reiniciar(){
    contagemSegundos = '0' + 0
    contagemMinutos = '0' + 0
    contagemHoras = '0' + 0
    
    SEGUNDOS.innerText = contagemSegundos
    MINUTOS.innerText = contagemMinutos
    HORAS.innerText = contagemHoras  
}
function test(){
    document.getElementById("segundos").innerText = contagemSegundos
    document.getElementById("minutos").innerText = contagemMinutos
    document.getElementById("horas").innerText = contagemHoras
}
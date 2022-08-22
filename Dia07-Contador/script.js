var contagemSegundos = 1
var contagemMinutos = 1
var contagemHoras = 1

var pausa = false

const BTN_PAUSA = document.getElementById("botao_pausa")
const BTN_INICIAR = document.getElementById("botao_inicio")
const BTN_REINICIAR = document.getElementById("botao_reinicia")

const SEGUNDOS = document.getElementById("segundos")
const MINUTOS = document.getElementById("minutos")
const HORAS = document.getElementById("horas")

function contagem(){
    if(SEGUNDOS.innerHTML == 59){
        contagemSegundos = 0
        MINUTOS.innerHTML = contagemMinutos++

        if (MINUTOS.innerHTML == 59){
            contagemMinutos = 0
            HORAS.innerHTML = contagemHoras++
    }
}
    SEGUNDOS.innerHTML = contagemSegundos++


}

function Iniciar(){
    tempo = setInterval(contagem, 1000)
    BTN_PAUSA.disabled = false
    BTN_REINICIAR.disabled = false
  
}

function Pausar(){ 
    BTN_PAUSA.innerHTML = BTN_PAUSA.innerHTML == "Pausar" ? "Retomar" : "Pausar";
    
    pausa = pausa == false ? true : false

    if(pausa == true){
        clearInterval(tempo);

    }else{
        tempo = setInterval(contagem, 1000)

    }
           
}

function Reiniciar(){
    contagemSegundos = 0
    contagemMinutos = 0
    contagemHoras = 0
    
    SEGUNDOS.innerHTML = contagemSegundos
    MINUTOS.innerHTML = contagemMinutos
    HORAS.innerHTML = contagemHoras  
}
function test(){
    document.getElementById("segundos").innerHTML = contagemSegundos
    document.getElementById("minutos").innerHTML = contagemMinutos
    document.getElementById("horas").innerHTML = contagemHoras
}
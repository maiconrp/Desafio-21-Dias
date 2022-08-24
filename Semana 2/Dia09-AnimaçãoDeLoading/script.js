var j = 1
var interval = 100

function init(){
    const LABEL = document.getElementById("Label")
    const BARRA = document.getElementById("Barra_loading");
    const CONT_BARRA = document.getElementById("Container_loading");
    
    document.getElementById("Carregamento").style.display = "flex"
    document.getElementById("Iniciar").style.display = "none"

    LABEL.innerHTML = FRASES[random(0, 17)]

    bar = setInterval(carregamento, interval);  

    function carregamento(){
        if(j<75){
            interval = random(1, 100)
            let porcCarregamento = Math.floor((j*100)/75) + '%'
            let label = FRASES[random(0, 17)]

            BARRA.innerHTML = j / 10 < 10? porcCarregamento : BARRA.innerHTML 
            LABEL.innerHTML = j % 25 == 0? label : LABEL.innerHTML

            BARRA.style.width = j++ + "em" 

        }
        else{
            clearInterval(bar)
            LABEL.innerHTML = "Concluído"
            CONT_BARRA.style.display = "none"
            LABEL.style.scale = "1.5"
            LABEL.style.backgroundColor = "green"
            LABEL.style.color = "white"
            
          }
        
    }
}
function random(min, max){return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + min);}

function move() {
    const element = document.getElementById("Barra_loading");
    let width = 0;
    let id = setInterval(frame, 15);
    function frame() {
      if (width == 75) {
        clearInterval(id);
      } else {
        element.style.width = width++ + 'vw';
      }
    }
  }

const FRASES = [
    "O importante não é saber, mas sim ter o telefone de quem sabe", 
    "As últimas palavras de um peixe: Estou frito!",
    "De ladrão já basta o governo, trabalhe!",
    "O limão é uma laranja de mau humor.",
    "Quando o relógio foi inventado, como sabiam que horas eram?",
    "Em Portugal os restaurantes fecham para almoço.",
    "A vida é curta demais para tomar cafés frios",
    "Eu achava que pneumonia fosse uma doença de algum vírus que tinha no pneu.",
    "Eu não daria nada para a pá, mas a padaria.",
    "São os idiotas que fazem a vida valer a pena.",
    "Eu tenho olho, já o utensílio.",
    "Era uma vez um pintinho com um olho só. Um dia ele foi piscar e dormiu.",
    "Se você não estiver muito bem, faça um download e continue.",
    "Um bom músico é o que toca fundo no seu coração.",
    "Nunca brinque com fogo ... ele é chato e não sabe brincar!",
    "Se tempo fosse dinheiro, meu relógio seria milionário.",
    "Se o videogame atrapalha os estudos, pare de estudar"
]

LABEL.setProperty('color', 'red')
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
    "O único exercício físico que eu faço é correr atrás de dinheiro. 💸💰",
    "Tem gente que se acha tanto que tá merecendo virar localização no Google Maps. 🤣",
    "Lamento, só estou aceitando pedidos de desculpa em dinheiro. 🤑",
    "O tempo muda tudo, menos a minha capacidade de ser trouxa. 🙄🙄🙄",
    "Os seus segredos estão seguros comigo. Eu não estava nem escutando…",
    "Tudo que vai, volta. Menos as canetas que eu emprestei na sala de aula…",
    "Eu sou uma pessoa extremamente tolerante, desde que tudo saia exatamente como eu quero. 😅",
    "Falaram para eu devia seguir os meus sonhos, então eu virei pro lado e continuei dormindo. 😴",
    "Ser adulto é como estar constantemente tentando dobrar um lençol de elásticos.",
    "Três palavras que me resumem: tô com fome! 🤤🤤",
    "Juro que não te deixei no vácuo… É que eu respondi por telepatia. 🤔🤗",
    "Quem curte balada é adolescente, adulto gosta é de dormir com os boletos pagos.",
    "Nasci para ser selvagem… Mas só até 10 horas da noite.",
    "Se eu concordasse com você, os dois estaríamos errados.",
    "Será que dá para eu te ignorar outra hora? Tô ocupada! 💆‍♀️",
    "Não siga as minhas pegadas, eu também estou perdido.",
    "Um sonho: ganhar dinheiro dormindo.",
    "A insônia te torna bom de matemática porque você passa a noite inteira tentando calcular quando tempo vai poder dormir. 😣",
    "Eu ando por aí como se estivesse tudo bem, mas no fundo, a minha meia está escorregando dentro do sapato. 😥",
    "O dinheiro não é tudo. Não se esqueça também do ouro, dos diamantes, da platina e das propriedades. -Tom Jobim",
    "Se eu fico com preguiça até de andar, imagina de correr atrás de alguém. 😁",
    "Se o cérebro fosse uma rede social, será que as pessoas iam começar a usar? 😋",
    "- Dói, né? - O quê? - Deitar no sofá e lembrar que esqueceu o controle.",
    "Se você não consegue rir de si mesmo, eu posso fazer isso por você. 😂",
    "Tem coisas nessa vida que eu apenas visualizo e não respondo.",
    "Eu fui procurar o que era melhor pra mim e acabei abrindo a geladeira. 🍕🍔🥪",
    "O bom senso é como desodorante. As pessoas que mais precisam nunca usam.",
    "Eu achava que era uma pessoa indecisa, mas agora não tenho a certeza. 🤨😮",
    "Podemos começar o final de semana de novo? É que eu estava distraído… 😏",
    "Os trabalhos em grupo me ajudaram a entender por quê o Batman trabalha sozinho.",
    "O mal da galinha é achar que todo galo canta pra ela. 😉",
    "Se eu ganhasse o prêmio de pessoa mais preguiçosa, tinha que pedir pra alguém ir pegar.",
    "Eu sou um exemplo para os outros… Um mau exemplo, é claro.",
    "O problema é que todo mundo quer um relacionamento sério e eu sou uma pessoa muito engraçada. 😎",
    "Você não vale o tempo que eu passei perto da tomada carregando a bateria do celular.",
    "Peguei no gelo que você me deu e fiz uma caipirinha! 🍸",
    "O segredo é amar o próximo, porque o anterior não merecia! 🤣",
    "Não é que eu seja teimoso, eu só estou sempre certo.",
    "Uma vez eu tentei ser normal… Foram os piores 2 minutos da minha vida!",
    "Na vida, assim como na geladeira: o que está no interior é que importa. 💕",
    "Fofoqueira? Eu sou historiadora da vida alheia! 🤓📚",
    "Se você é uma dessas pessoas que não tem sorte, quando vir a luz no fim do túnel… Corra, pois é um trem. -Maurício Motta",
    "Inveja de você? Inveja eu sinto do meu cachorro, que come, passeia e dorme o dia inteiro.",
    "Uma história de terror em três palavras: hoje é segunda. 😱😱😱",
    "Fácil é fazer miojo... Viver é complicado!",
    "Você passa o dia com sono, aí quando deita na cama fica com vontade de fazer um bolo, escrever um livro e aprender cinco idiomas novos.",
    "Precisamos inventar um dia novo entre sábado e domingo.",
    "Na minha situação atual, se eu for cortar uma cebola, é ela que chora. 😆😅🤣",
    "Quem inventou o trabalho não tinha o que fazer.-Barão de Itararé",
    "Aqui o rosto é de gatinha, mas a fúria é de leão! 🦁",
    "Tudo passa… Nem que seja por cima de você... 😜",
    "Muita interessante a sua opinião, só tem uma coisa: eu não pedi.",
    "Os primeiros cinco dias da semana são sempre os mais complicados.",
    "Metade de mim é preguiça… E a outra metade também. 💤💤💤",
    "Você fala que é “procrastinação”, mas eu prefiro chamar de “motivação seletiva”.",
    "Estado civil: num relacionamento à distância com a minha cama. 💕",
    "Namore alguém que espere por você como eu espero pela sexta-feira. 😍🥰",
    "O rostinho pode ser de moça, mas a dor nas costas é de idosa.",
    "Saudade de ir no barzinho com os amigos e passar várias vergonhas, né, minha filha? 🤩",
    "Batatinha quando nasce, se esparrama pelo chão… Eu quando me apaixono, quebro a cara e o coração.",
    "Algumas pessoas são como nuvens: é só irem embora e o dia fica lindo.",
    "Descobri um lugar ótimo para você ficar: na sua. 😒",
    "Se quer falar de mim, fala na cara. Nas costas pode fazer uma massagem.",
    "Meu cupido anda mais preguiçoso que eu! 🥱😥",
    "Ex bom é strogonoff.-Gustavo Diniz",
    "Uma série que eu estou assistindo? A série de erros que cometi na minha vida. 🙃",
    "Hoje estou muito ocupada... Fazendo vários nadas.",
    "As pessoas esquecem mais de mim que da letra do hino nacional.",
    "Quem ri por último, não entendeu a piada.",
    "Só tem uma coisa pior que acordar cedo: feriado no domingo!",
    "Será que Deus me desenhou no Paint? 😛",
    "Meu cupido deve ser gari porque ele só me traz lixo.",
    "Antes eu era arrogante, mas hoje em dia sou perfeito.",
    "A preguiça é a mãe de todos os vícios e, como mãe, ela merece ser respeitada!",
    "Lembre-se sempre de que você é único. Assim como todo mundo.",
    "Tem gente que gosta tanto de Carnaval, que vive o ano inteiro de máscara. 🤡",
    "Eu estou precisando de umas férias de 6 meses… Duas vezes por ano!",
    "Sabe aqueles dias em que você acorda cheio de energia para arrumar a casa? Nunca aconteceu comigo, mas deve ser ótimo. 😌",
    "Quem é casado há quarenta anos com dona Maria não entende de casamento, entende de dona Maria. De casamento entendo eu, que tive seis. -Chico Anysio",
    "Aí você vai na cozinha de madrugada cantando música de Deus... Pra disfarçar o medo do capeta! -Mônica Araújo",
    "Hoje está um dia maravilhoso para você me deixar em paz. 😄",
    "Você se chama Google? Porque você é tudo que eu procuro.",
    "Livrai-me do todo mal: amado, olhado e humorado, amém. -Lidiane Vieira",
    "Chato - Indivíduo que tem mais interesse em nós do que nós temos nele. -Millôr Fernandes",
    "Estou começando a achar que a minha metade da laranja já virou suco. 🍊🧡",
    "O problema das mentes fechadas é que elas geralmente vêm acompanhadas de uma boca aberta.",
    "Se ferradura desse sorte, burro não puxava carroça!",
    "Era um menino tão mau que só se tornou radiologista para ver a caveira dos outros.- Jô Soares",
    "Desculpa o meu atraso, é que eu não queria vir.",
    "Na frase “ele acordou cedo”, o sujeito se encontra… Com sono.",
    "Tá feliz? Sobe na balança que isso passa! 😚",
    "Não mando indiretas. Apenas falo algumas realidades discretamente na cara da pessoa sem a mínima intenção de que ela perceba. -Mallu Moraes",
    "Infelizmente, eu não vou poder ir... Porque não quero!",
    "No dia em que a sua opinião for um bolo de chocolate, eu vou querer.",
    "Ironia é igual blush: não sabe, não usa. -Bic Muller",
    "Voltar para você? Desculpa, mas eu não achei o meu coração no lixo. 😷",
    "No teatro da vida, o papel de trouxa é meu. 🤡🤡🤡",
    "Eu posso ser 100% saudade, mas sou 200% orgulho.",
    "Só existem dois tipos de pessoas: as que concordam comigo e as que estão erradas.",
    "Querida matemática: por favor, seja adulta e resolva os seus problemas sozinha.",
      
  ]

LABEL.setProperty('color', 'red')
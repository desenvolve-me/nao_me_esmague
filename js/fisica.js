let personagem = document.getElementById("personagem");
let chao = document.getElementById("chao");

var aceleracao = 1

function desenha_chao() {
    tamanho_chao = 0;
    contador = 0;
    while(tamanho_chao < (document.documentElement.clientWidth * 2)){
        chao.innerHTML += "<div><img class='bloco' id='bloco_"+contador+"' src='./imagens/block.png'></div>"
        bloco = document.getElementById("bloco_"+contador)
        tamanho_chao += bloco.offsetWidth
        contador++;
    }

    blocos = document.getElementsByClassName("bloco");
    for (let bloco of blocos) {
        id_number = Number(bloco.id.replace("bloco_", ""));   
        bloco.style.right += bloco.offsetWidth * id_number;
    }
}

function loop(){ 
    window.requestAnimationFrame(loop);
}

desenha_chao();
loop();

//file:///Users/macbook/dev/nao_me_esmague/jogo.html
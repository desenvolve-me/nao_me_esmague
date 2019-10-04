let personagem = document.getElementById("personagem");
let chao = document.getElementById("chao");
var aceleracao = 1
var correr_com_personagem = correr_para_direita;

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

function loop() {
    correr_com_personagem(8)
    window.requestAnimationFrame(loop);
}

function correr_para_direita (velocidade) {
    posicao_do_personagem = Number(personagem.style.left.replace("px", "")) + 1            
    fim_da_tela = (document.documentElement.clientWidth - personagem.offsetWidth)

    personagem.style.transform = "scaleX(1)"

    if(posicao_do_personagem < fim_da_tela) {
        personagem.style.left = (posicao_do_personagem + velocidade);  
    }
}

function correr_para_esquerda (velocidade) {
    posicao_do_personagem = Number(personagem.style.left.replace("px", "")) + 1            
    fim_da_tela = 0

    personagem.style.transform = "scaleX(-1)"

    if(posicao_do_personagem > fim_da_tela) {
        personagem.style.left = (posicao_do_personagem - velocidade);  
    }
}

document.addEventListener("keydown", function(e){
    switch(e.keyCode){
        //press left key
        case 37:
            correr_com_personagem = correr_para_esquerda;
            break;

        //press right key
        case 39:
            correr_com_personagem = correr_para_direita;
            break;
    }
    
});


desenha_chao();
loop();
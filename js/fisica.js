let canvas_principal = document.getElementById("canvas_principal");
let personagem = document.getElementById("personagem");
let chao = document.getElementById("chao");
var aceleracao = 1
var correr_com_personagem = correr_para_direita;
var posicoes = {};

function cria_canvas(){
    canvas_principal.style.left = '0px';
    canvas_principal.style.top = '0px';
    canvas_principal.style.right = '0px';
    canvas_principal.style.bottom = '0px';
    canvas_principal.width = chao.offsetWidth;
    canvas_principal.height = document.body.clientHeight; 
}

function configura_personagem(){
    personagem.style.bottom = '10%';
}

function personagem_pode_mover(){
    colisoes = identifica_colisoes();

    for(contador = 0 ; contador < colisoes.length; contador ++){
        
        colisor = document.getElementById(colisoes[contador])
        
        direita_colisor = Number(colisor.style.left.replace("px", ""))
        direita_personagem = Number(personagem.style.left.replace("px", ""))
        if(direita_colisor >= direita_personagem && correr_com_personagem === correr_para_direita){
            return false;
        }

        if(direita_colisor <= direita_personagem && correr_com_personagem === correr_para_esquerda){
            return false;
        }
    }
    return true;
}

function correr_para_direita (velocidade) {
    posicao_do_personagem = Number(personagem.style.left.replace("px", "")) + 1            
    fim_da_tela = (document.documentElement.clientWidth - personagem.offsetWidth)

    personagem.style.transform = "scaleX(1)"

    if(posicao_do_personagem <= fim_da_tela && personagem_pode_mover()) {
        personagem.style.left = (posicao_do_personagem + velocidade);
        atualiza_posicoes(personagem);
    }
}

function correr_para_esquerda (velocidade) {
    posicao_do_personagem = Number(personagem.style.left.replace("px", "")) + 1            
    fim_da_tela = 0

    personagem.style.transform = "scaleX(-1)"

    if(posicao_do_personagem >= fim_da_tela && personagem_pode_mover()) {
        personagem.style.left = (posicao_do_personagem - velocidade);  
        atualiza_posicoes(personagem);
    }
}

function atualiza_posicoes(elemento){    
    x = extract_style_left_as_number(elemento)
    y = extract_style_bottom_as_number(elemento)
    altura = elemento.offsetHeight;
    comprimento = elemento.offsetWidth;
    posicoes[elemento.id] = {x, y, altura, comprimento}
}

function extract_style_left_as_number(element) {
    return Number(element.style.left.replace("px", ""))
}

function extract_style_bottom_as_number(elemento) {
    altura_do_documento = document.documentElement.offsetHeight;
    altura_equivalente_ao_percentual = altura_do_documento * Number(elemento.style.bottom.replace("%", "")) / 100;
    return altura_do_documento - altura_equivalente_ao_percentual - elemento.offsetHeight;
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

function cria_esmagadores(){
    for(indice = 0 ; indice < 2 ; indice++){
        innerHTML = '<div><img class="esmagador" id="esmagador_'+indice+'" style="bottom: 100%" src="./imagens/perna.png" height="700px"><div ></div><div>'
        document.getElementById("esmagadores").innerHTML += innerHTML;
    }

    esmagadores = document.getElementsByClassName("esmagador");
    for (let esmagador of esmagadores) {
        reinicia_esmagador(esmagador)
    }
}

function movimenta_esmagadores (velocidade) {
    esmagadores = document.getElementsByClassName("esmagador");

    altura_bloco = document.getElementById("chao").style.height;

    for (let esmagador of esmagadores) {
        passou_o_atraso = (Date.now() - esmagador.momento_da_criacao) > esmagador.atraso

        if(passou_o_atraso){
            if(esmagador.ja_chegou_ao_solo && esmagador.style.bottom === "100%"){
                reinicia_esmagador(esmagador);
            }

            altura_esmagador = Number(esmagador.style.bottom.replace("%", ""))

            altura_esmagador_em_px = document.documentElement.clientHeight * altura_esmagador / 100;
            
            if(!esmagador.ja_chegou_ao_solo && altura_esmagador_em_px >= altura_bloco){
                nova_altura = (altura_esmagador - velocidade)
                esmagador.style.bottom = nova_altura+"%";
            }else{
                esmagador.ja_chegou_ao_solo = true;
                nova_altura = (altura_esmagador + velocidade)
                esmagador.style.bottom = nova_altura+"%";
            }            
        }

        atualiza_posicoes(esmagador)
    }
}

function reinicia_esmagador(esmagador){
    percentual_aleatorio = Math.random() * 85;
    posicao_aleatoria = document.documentElement.offsetWidth * percentual_aleatorio / 100;
    esmagador.style.left = posicao_aleatoria + "px";
    esmagador.ja_chegou_ao_solo = false;  
    esmagador.momento_da_criacao = Date.now();
    esmagador.atraso = Math.random() * 1000; 
    esmagador.tipo = 'esmagador'; 
}

function identifica_colisoes(){   
    colisoes = []; 
    coordenadas_personagem = posicoes[personagem.id]

    for(chave in posicoes){
        if(chave !== personagem.id){

            coordenadas_colisor = posicoes[chave]
        
            if(colide(coordenadas_personagem, coordenadas_colisor)) {
                colisoes.push(chave);
            }
        }
    }
    return colisoes;
}

function colide(rectA, rectB) {
    return !(rectB.x > (rectA.x + rectA.comprimento) || 
             (rectB.x + rectB.comprimento) < rectA.x || 
             rectB.y > (rectA.x + rectA.altura) ||
             (rectB.y + rectB.altura) < rectA.y);
}

function trata_colisoes(){
    colisoes = identifica_colisoes();

    for(contador = 0 ; contador < colisoes.length; contador ++){
        elemento = document.getElementById(colisoes[contador])
        
        if(elemento.tipo === 'esmagador'){
            esmagador = elemento
            coordenadas_esmagador = posicoes[esmagador.id]
            coordenadas_personagem = posicoes[personagem.id]
            
            altura_esmagador = (coordenadas_esmagador.altura + coordenadas_esmagador.y)
            altura_personagem = (coordenadas_personagem.y)
            esmagador_esta_acima_do_personagem = altura_esmagador <= altura_personagem + 15
    
            esmagou = !esmagador.ja_chegou_ao_solo && esmagador_esta_acima_do_personagem
        
            if(esmagou){            
                window.location.reload();
                alert('perdeu!');
                break;
            }
        }
    }
}

function loop() {    
    correr_com_personagem(15)
    movimenta_esmagadores(1)
    trata_colisoes();
    window.requestAnimationFrame(loop);
}

cria_canvas();
configura_personagem();
cria_esmagadores();
loop();
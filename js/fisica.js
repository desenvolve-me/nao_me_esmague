var nome_usuario;
//usuario responde o nome
nome_usuario = window.prompt("qual o seu nome?")
var velocidade = 15;
var pontos_usuario = 0;
var contagem_doces = 0;
atualiza_pontuacao("batata")

var idade;
idade = window.prompt("qual a sua idade?")
    // if (isNaN(idade)) {
    //     window.location.reload();
    //     alert(nome_usuario + "Idade inadequada!");
    // }

// 20                   false       false           false
var idadeInvalida = (isNaN(idade) || idade < 7 || idade > 120)

if (idadeInvalida) {
    window.location.reload();
    alert(nome_usuario + "Idade inadequada 1!");
}

if (!Number.isInteger(Number(idade))) {
    window.location.reload();
    alert(nome_usuario + "Idade inadequada 2! idade: "+idade);
}

//Configurações do Cenário
const canvas_principal = document.getElementById("canvas_principal");
const chao = document.getElementById("chao");

//Configurações Personagem
const personagem = document.getElementById("personagem");
let correr_com_personagem = correr_para_direita;
const posicoes = {};

//Geração de Doces
let quantidade_de_doces = 0;
let momento_ultimo_doce_gerado = Date.now();
let atraso_geracao_doces = 1500;



const tipos_de_doce = [
    "bala",
    "pirulito",
    "sorvete"
]


function cria_canvas() {
    canvas_principal.style.left = '0px';
    canvas_principal.style.top = '0px';
    canvas_principal.style.right = '0px';
    canvas_principal.style.bottom = '0px';
    canvas_principal.width = chao.offsetWidth;
    canvas_principal.height = document.body.clientHeight;
}

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function configura_personagem() {
    personagem.style.bottom = '10%';
}

function personagem_pode_mover() {
    colisoes = identifica_colisoes();

    for (contador = 0; contador < colisoes.length; contador++) {
        colisor = document.getElementById(colisoes[contador])
        if (colidiu_com_barreira(colisor)) {
            direita_colisor = Number(colisor.style.left.replace("px", ""))
            direita_personagem = Number(personagem.style.left.replace("px", ""))
            if (direita_colisor >= direita_personagem && correr_com_personagem === correr_para_direita) {
                return false;
            }

            if (direita_colisor <= direita_personagem && correr_com_personagem === correr_para_esquerda) {
                return false;
            }
        }
    }
    return true;
}

function colidiu_com_barreira(colisor) {
    if (colisor === null) {
        return false;
    }
    for (c of colisor.classList) {
        if (c === 'esmagador') {
            return true
        }
    }

    return false;
}

function correr_para_direita(velocidade) {
    posicao_do_personagem = Number(personagem.style.left.replace("px", "")) + 1
    fim_da_tela = (document.documentElement.clientWidth - personagem.offsetWidth) - 20

    personagem.style.transform = "scaleX(1)"

    if (posicao_do_personagem < fim_da_tela && personagem_pode_mover()) {
        personagem.style.left = (posicao_do_personagem + velocidade);
        atualiza_posicoes(personagem);
    }
}

function correr_para_esquerda(velocidade) {
    posicao_do_personagem = Number(personagem.style.left.replace("px", "")) + 1
    fim_da_tela = 5

    personagem.style.transform = "scaleX(-1)"

    if (posicao_do_personagem > fim_da_tela && personagem_pode_mover()) {
        personagem.style.left = (posicao_do_personagem - velocidade);
        atualiza_posicoes(personagem);
    }
}

function atualiza_posicoes(elemento) {
    x = extract_style_left_as_number(elemento)
    y = extract_style_bottom_as_number(elemento)
    altura = elemento.offsetHeight;
    comprimento = elemento.offsetWidth;
    posicoes[elemento.id] = { x, y, altura, comprimento }
}

function extract_style_left_as_number(element) {
    return Number(element.style.left.replace("px", ""))
}

function extract_style_bottom_as_number(elemento) {
    altura_do_documento = document.documentElement.offsetHeight;
    altura_equivalente_ao_percentual = altura_do_documento * Number(elemento.style.bottom.replace("%", "")) / 100;
    return altura_do_documento - altura_equivalente_ao_percentual - elemento.offsetHeight;
}

document.addEventListener("keydown", function(e) {
    switch (e.keyCode) {
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

function cria_esmagadores() {
    for (indice = 0; indice < 4; indice++) {
        innerHTML = '<div><img class="esmagador" id="esmagador_' + indice + '" style="bottom: 100%" src="./imagens/perna.png" height="700px"><div ></div><div>'
        document.getElementById("esmagadores").innerHTML += innerHTML;
    }

    esmagadores = document.getElementsByClassName("esmagador");
    for (let esmagador of esmagadores) {
        reinicia_esmagador(esmagador)
    }
}

function movimenta_esmagadores(velocidade) {
    esmagadores = document.getElementsByClassName("esmagador");

    altura_bloco = document.getElementById("chao").style.height;

    for (let esmagador of esmagadores) {
        passou_o_atraso = (Date.now() - esmagador.momento_da_criacao) > esmagador.atraso

        if (passou_o_atraso) {
            if (esmagador.ja_chegou_ao_solo && esmagador.style.bottom === "100%") {
                reinicia_esmagador(esmagador);
            }

            altura_esmagador = Number(esmagador.style.bottom.replace("%", ""))

            altura_esmagador_em_px = document.documentElement.clientHeight * altura_esmagador / 100;

            if (!esmagador.ja_chegou_ao_solo && altura_esmagador_em_px >= altura_bloco) {
                nova_altura = (altura_esmagador - velocidade)
                esmagador.style.bottom = nova_altura + "%";
            } else {
                esmagador.ja_chegou_ao_solo = true;
                nova_altura = (altura_esmagador + velocidade)
                esmagador.style.bottom = nova_altura + "%";
            }
        }

        atualiza_posicoes(esmagador)
    }
}

function reinicia_esmagador(esmagador) {
    percentual_aleatorio = Math.random() * 85;
    posicao_aleatoria = document.documentElement.offsetWidth * percentual_aleatorio / 100;
    esmagador.style.left = posicao_aleatoria + "px";
    esmagador.ja_chegou_ao_solo = false;
    esmagador.momento_da_criacao = Date.now();
    esmagador.atraso = Math.random() * 1000;
    esmagador.tipo = 'esmagador';
}

function identifica_colisoes() {
    colisoes = [];
    coordenadas_personagem = posicoes[personagem.id]

    for (chave in posicoes) {
        if (chave !== personagem.id) {

            coordenadas_colisor = posicoes[chave]

            if (colide(coordenadas_personagem, coordenadas_colisor)) {
                colisoes.push(chave);
            }
        }
    }
    return colisoes;
}

function colide(rectPersonagem, rectColisor) {

    personagemX1 = rectPersonagem.x;
    personagemX2 = rectPersonagem.x + rectPersonagem.comprimento;
    personagemY1 = rectPersonagem.y;
    personagemY2 = rectPersonagem.y + rectPersonagem.altura;

    colisorX1 = rectColisor.x;
    colisorX2 = rectColisor.x + rectColisor.comprimento;
    colisorY1 = rectColisor.y;
    colisorY2 = rectColisor.y + rectColisor.altura;

    let colide_em_x = (personagemX1 >= colisorX1 && personagemX1 <= colisorX2) || (personagemX2 >= colisorX1 && personagemX2 <= colisorX2)
    let colide_em_y = (personagemY1 <= colisorY2)
    let colide = colide_em_x && colide_em_y
    return colide
}

function trata_colisoes() {
    colisoes = identifica_colisoes();

    for (contador = 0; contador < colisoes.length; contador++) {
        elemento = document.getElementById(colisoes[contador])
        if (elemento !== null) {
            elemento.classList.forEach(function(classe) {
                if (classe === 'esmagador') {
                    trata_colisao_esmagador(elemento)
                }

                if (classe === 'doce') {
                    trata_colisao_doce(elemento)
                }
            })
        }

    }
}

function trata_colisao_esmagador(esmagador) {
    console.log("colisao com esmagador")
    coordenadas_esmagador = posicoes[esmagador.id]
    coordenadas_personagem = posicoes[personagem.id]

    altura_esmagador = (coordenadas_esmagador.altura + coordenadas_esmagador.y)
    altura_personagem = (coordenadas_personagem.y)
    esmagador_esta_acima_do_personagem = altura_esmagador <= altura_personagem + 15

    esmagou = !esmagador.ja_chegou_ao_solo && esmagador_esta_acima_do_personagem

    if (esmagou) {
        window.location.reload();
        alert(nome_usuario + " você perdeu!");
    }
}

function trata_colisao_doce(doce) {
    alert("diminuiu velocidade. a velocidade e: " + velocidade + " a contagem_doce e: " + contagem_doces)
    left = Math.random() * 95;
    doce.parentNode.removeChild(doce);

    quantidade_de_doces--;

    contagem_doces = contagem_doces + 1;
    //contagem_doces += 1;



    pontos_usuario = pontos_usuario + 1;
    atualiza_pontuacao(pontos_usuario);
    if (contagem_doces == 2) {
        velocidade = velocidade - 1
        contagem_doces = 0;
    }
}

function gera_doces() {

    let passou_o_tempo = Date.now() - momento_ultimo_doce_gerado >= atraso_geracao_doces
    if (quantidade_de_doces < 3 && passou_o_tempo) {
        let tipo_de_doce_aleatorio = tipos_de_doce[(Math.floor((Math.random() * 3) + 1) - 1)];
        let left_porcentagem = Math.random() * 95;
        let left = document.documentElement.offsetWidth * left_porcentagem / 100;
        let id = tipo_de_doce_aleatorio + "_" + uuid()
        let html_novo_doce = innerHTML = '<div><img class="doce ' + tipo_de_doce_aleatorio + '" style= "left:' + left + 'px" id="' + id + '" src="./imagens/' + tipo_de_doce_aleatorio + '.png" height="10%" width="5%"></div>';
        document.getElementById("doces").innerHTML += html_novo_doce;
        doce = document.getElementById(id);
        atualiza_posicoes(doce);
        quantidade_de_doces++;
        momento_ultimo_doce_gerado = Date.now();
    }
}

function atualiza_pontuacao(conteudo) {
    document.getElementById("pontos").innerHTML = conteudo
    console.log("pegou um doce")
}

function loop() {

    if (nome_usuario.trim() == "") {
        nome_usuario = window.prompt("qual o seu nome?")
    } else {

        correr_com_personagem(velocidade)
        movimenta_esmagadores(1.5)
        trata_colisoes();
        gera_doces();
    }

    window.requestAnimationFrame(loop);
}

cria_canvas();
configura_personagem();
cria_esmagadores();
loop();
// var nomes = ["Luiz", "Adriana", "Yago", "Marcos", "Jean", "Kassia"]
// var idades = [18, 35, 27, 18, 28, 25]

// for (var indice = 0; nomes.length > indice; indice++) {
//     nomes[indice] = nomes[indice].toUpperCase()
//     nomes[indice] = nomes[indice] + " " + idades[indice]
// }

// alert(nomes)

//alert(nomes)
//LUIZ 15,ADRIANA 15 ,YAGO 60 , MARCOS 8 , JEAN 22,KASSIA 15


// for (var calculadora = 0; 5*calculadora; calculadora++){

//10

// var numero = window.prompt("digite o numero")

// for (var calculadora = 0, indice = 0; calculadora <= 10; calculadora++, indice = indice + 2) {
//     alert(numero + "x" + calculadora + " = " + numero * calculadora)
// }


// Criar um laço de repetição que: 
// Se a pessoa for maior de idade exibir um alert com o nome dela
//Nomes a serem exibidos no alert: Maria, Roberto, Ana

// var nomes = ["Ana", "Flavio", "Julia", "Roberto", "Maria", "Carmen"]
// var idades = [18, 15, 12, 28, 76, 17]
// var msg = ""
//     //indice 0            <= 6 
// for (var indice = nomes.length; indice >= 0; indice--) {
//     if (idades[indice] >= 18)
//         msg = msg + " " + nomes[indice]

// }
// alert(msg)



// var lojas = ["extra", "big", "carrefuor", "Vencedor", "Açai"]
// var precos = [100, 95, 120, 91, 118]
// var menorPreco = precos[0]; //100

// for (var indice = 0; indice < precos.length; indice++) {

//     if (precos[indice] < menorPreco) {
//         menorPreco = precos[indice]
//     }
// }
// alert("menor preco: " + menorPreco)


// for (var indice = 0; indice < precos.length; indice++) {
//     //comandos da repeticao
// }



//arrays lenght = tamanho          
// var nomes = ["Ana", "Flavio", "Julia", "Roberto", "Maria", "Carmen"]
// var idades = [18, 15, 12, 28, 76, 17]
// var indice = nomes.length - 1 //6 - 1 => 5

// while ( /* nao tem inicializacao ;*/ indice >= 0 /* ; nao tem incremento*/ ) {
//     if (idades[indice] >= 18) {
//         alert(nomes[indice])
//     }

//     // indice = indice - 1
//     // indice -= 1
//     indice--
// }

//stilo 5

// var nomes = ["Luiz", "Adriana", "Yago", "Marcos", "Jean", "Kassia"]
// var textoSaida = "";
// var stilo = nomes.length - 1

// while ( /*condicao*/ stilo >= 0) {
//     //codigo que 


//     textoSaida = textoSaida + nomes[stilo].toUpperCase() + " "

//     stilo--
// }

// alert(textoSaida)

//nome[batata].toUpperCase()
//"LUIZ", "ADRIANA", "YAGO", "MARCOS", "JEAN", "KASSIA"





// var nomes = ["Ana", "Flavio", "Julia", "Roberto", "Maria", "Carmen"]
// var idades = [15, 18, 12, 28, 76, 17]
// var indice = 0
//     // Sair do laço: quando encontrar um usuario maior de idade
//     // Continuar: enquanto for menor de idade

// while ( /* idade <= 18 */ idades[indice] < 18) {
//     //nada
//     indice++
// }
// alert(nomes[indice] + " " + idades[indice])


// var nomes = ["Ana", "Flavio", "Julia", "Roberto", "Maria", "Carmen"]
// var idades = [15, 18, 12, 28, 76, 17]

// for (var indice = 0; idades[indice] < 18; indice++) {

// }
// alert(nomes[indice] + " " + idades[indice])



// while(usuarios.temMaisUsuarios() ){
//     // exibe na tela
// }

// for(;usuarios.temMaisUsuarios();){
// //exibr
// }



//Calculadora com while


// /*inicializacao*/
// var fixo = window.prompt("digite o numero") //retorna o valor que o usuario digitou
// var fator = 0

// //var operacao = fixo * ()
// //QUando quer para o laço: Quando chegar no 10
// //Continua: menor que 10

// while (fator <=10){
//     alert (fixo + "*" + fator + "=" + fixo * fator)

//     /*incremento*/
//     fator++
// }
// alert ("fim")



// while
// do/while


// while(false){
//     alert("batata")
// }


// var nomes = ["Ana", "Flavio", "Julia", "Roberto", "Maria", "Carmen"]
// var idades = [15, 11, 12, 28, 76, 17]



// alert(nomes[indice] + " " + idades[indice])


// var nomes = ["Ana", "Flavio", "Julia", "Roberto", "Maria", "Carmen"]

//             //0   1   2   3   4   5
// var idades = [20, 11, 12, 28, 76, 17]
// var indice= 0 

//swtich

//indice 1
// do {
//     if (idades[indice]>18){
//         break
//     }
//     indice++  
// } while(idades[indice]< 18)


// while (idades[indice] < 18) {
//     //nada
//     break
//     indice++
// }

// alert(nomes[indice] + " " + idades[indice])

//0      //1       //2      //3       //4     //5     => tamanho é 6
// var nomes = ["Luiz", "Adriana", "Yago", "Marcos", "Jean", "Kassia"]
// var indice = 0

// do {
//     nomes[indice] = nomes[indice].toUpperCase()
//     alert(nomes[indice])
//     indice++
// } while (indice < nomes.length)

//enquanto não chegar na ultima posicão
//.toUpperCase()

// var nomes = ['yago', 'kassia', 'jean', 'outro nome']
// var idade = [12, 14, 13, 15]
// for (var indice = 0; indice < nomes.length; indice++) {
//     alert(nomes[indice])
// }

// for (var nome of nomes) {
//     alert(nome)
// }

// // Array -> Estrutura para armazenar dados
// var cpfs = new Array(41365822244, 41365822245, 41365822244, 41365822245, 41365822246)


// // Set -> não pode ter elementos duplicados

// var clientesComDesconto = []
//     // var clientesComDesconto = [41365822244, 41365822245, 41365822246]

// for (var indice = 0; indice < cpfs.length; indice++) {
//     //clientesComDesconto[indice] = cpfs[indice]

//     // cliente com desconto ainda não tem esse CPF
//     if (!clientesComDesconto.includes(cpfs[indice])) {
//         clientesComDesconto.push(cpfs[indice])
//     }
// }

// console.log("cpfs com desconto")
// console.log(clientesComDesconto)

// clientesComDesconto.push("batata")
// clientesComDesconto.includes(41365822244) //true



//concole.log (nenhum cpf duplicado)








// Array -> Estrutura para armazenar dados
// var cpfs = new Array(41365822244, 41365822245, 41365822244, 41365822245, 41365822246)

// // Set -> não pode ter elementos duplicados

// var clientesComDesconto = new Set()


// for (var indice = 0; indice < cpfs.length; indice++) {
//     clientesComDesconto.add(cpfs[indice])
// }
// console.log("cpfs com desconto")
// console.log(clientesComDesconto)




// var nomes = ['yago', 'kassia', 'jean', 'luiz'] //Array
// var idades = [39, 18, 24, 22] // Array

var pessoas = [{ 'nome': 'yago', 'idade': 39 }, { 'nome': 'kassia', 'idade': 18 }] // array

// var pessoa = {

//         //chave:valor
//         'nome': 'yago',        
//         'idade': 39
//     } //dicionário ou Objeto


// pessoa['nome'] 

// var carro = {
//     'marca': 'GM',
//     'modelo': 'corsa'
// }




// estruta de dados
// lista|array, sets e dicionários 
// pilhas, filas,   


//Array | lista
var nomes = ["Adriana", "Kassia", "Jean"]
var idades = new Array(); //[18,18,19,19,20]
idades[0] = 18
idades[1] = 18
idades.push(19)
idades.push(19)
idades.push(20)



// Set não aceita valores duplicados
//["02345678909", "022397409045", "022397409045"]
var cpf = new Set() // []
cpf.add("02345678909")
cpf.add("02345678908")
cpf.add("02345678907")
    //console.log(cpf);


//Dicionários
var pessoa = {
    //Chave:Valor
    "nome": "Luiz",
    "idade": 25
}

// var Adriana = {
//     //Chave:Valor
//     "nome": "Adriana",
//     "idade": 35
// }   
// var Jean = {
//         //Chave:Valor
//         "nome": "Jean",
//         "idade": 28
// }
// var Kassia = {
//             //Chave:Valor
//             "nome": "Kassia",
//             "idade": 28
// }
// var Luiz = {
//     //Chave:Valor
//     "nome": "Luiz",
//     "idade": 36
// }

//alert(pessoa["nome"])
//alert(pessoa.idade)

// chave E colchetes
// var pessoas = [ 
//     {"nome": "Adriana", "idade": 15, "grupo": "teste"}, //indice 0
//     {"nome": "Jean", "idade": 28} , //indice 1
//     {"nome": "Kassia", "idade": 17}, // indice 2
//     {"nome": "Luiz", "idade": 18} // indice 3
// ]

// // pessoas[0].genero = "...";

// //if (condicao) {...} else {...}
// for (var indice = pessoas.length - 1 ; indice >=0 ;indice--){
//     if (pessoas[indice].idade >= 18)
//         pessoas[indice].grupo = "maior"
//     else 
//         pessoas[indice].grupo = "menor"

//     // alert (pessoas[indice].nome)
//     // alert (pessoas[indice]["nome"])
//     console.log(pessoas[indice])
// }


// {"nome": "Adriana", "idade": 15, "grupo": "menor"}
// {"nome": "Jean", "idade": 28, "grupo": "maior"}

//pessoas[0]  ----> {"nome": "Adriana", "idade": 15}


// for(var indice = 0 ; indice < idades.lenght ; indice ++){idades[2]}

// Exercícios:

// 1 - Exibir um alert com o nome do usuário caso ele seja maior de idade

// 2 - Separar os usuários em dois grupos: Maiores e Menores de idade




// var pessoas = [
//     //Dicionário SEMPRE chave:valor
//     { "nome": "Adriana", "idade": 15 }, //indice 0
//     { "nome": "Jean", "idade": 28 }, //indice 1
//     { "nome": "Kassia", "idade": 17 }, // indice 2
//     { "nome": "Luiz", "idade": 18 } // indice 3
// ]

//Passar por todos os elementos da lista de pessoas - OK
//Verificar a idade - 
//Se for maior de idade vai para lista/grupo de maiores
//Se for menor de idade vai para lista/grupo de menores

// Agrupar
//Dicionários Chave:valor => SEMPRE
// var grupos = {
//     "maiores": [], //Lista vazia
//     "menores": []
// }

// for (var indice = 0, contador = 0; indice < pessoas.length; indice++) {
//     //Muito importante:
//     // - Array pegamos os elementos usando a posição. exemplo: pessoas[0]
//     // - Dicionário pegamos os elementos através da chave. exmplo: grupos.maiores

//     var pessoa = pessoas[indice]; //{ "nome": "Adriana", "idade": 15 }

//     if (pessoa.idade >= 18) {
//         grupos.maiores.push(pessoa)
//             // grupos.maiores[index] = pessoa   
//         console.log(pessoa.nome)
//     } else {
//         grupos.menores.push(pessoa)
//         console.log(pessoa.nome)
//     }
// }
// console.log(grupos)


// Agrupamentos => Tipos de carros
// Sedans
// SUV's
// Hatch


// Arrays usamos [] , pegamos os elementos pela posição
// Dicionários usamos {}
// var carros = [
//     { "modelo": "Corsa", "ano": "2012", "categoria": "Sedan", "cor": "rosa" }, // =>carro
//     { "modelo": "Uno", "ano": "2008", "categoria": "Hatch", "cor": "amarelo" },
//     { "modelo": "Fusca", "ano": "1987", "categoria": "Hatch", "cor": "azul" },
//     { "modelo": "DelRey", "ano": "1984", "categoria": "Sedan", "cor": "vermelho" },
//     { "modelo": "Evoque", "ano": "2020", "categoria": "SUV", "cor": "branco" },
//     { "modelo": "Troller", "ano": "1990", "categoria": "SUV", "cor": "bege" }
// ]

// var Tipos = {
//     "Sedan": [],
//     "SUV": [],
//     "Hatch": [],
// } 

// // for (var carro of carros) {
// //     console.log("Modelo: " + carro.modelo)
// //     if (carro.modelo == "Uno") {
// //         console.log(carro.ano + " " + carro.categoria + " " + carro.cor)
// //         break
// //     }
// // }

// for(carro of carros){
//     if(carro.categoria=="Sedan"){
//        Tipos.Sedan.push(carro)
//     } else if (carro.categoria=="SUV"){
//         Tipos.SUV.push(carro)
//     }else{
//         Tipos.Hatch.push(carro)
//     }
// }
// console.log(Tipos)

//Cada pessoa deve 3 propriedades: nomeCompleto, primeiroNome e ultimoNome

// var pessoas = [
//     { "nomeCompleto": "Yago Jesus da Silva" },
//     { "nomeCompleto": "Adriana Pommot" },
//     { "nomeCompleto": "Kassia Silva" },
//     { "nomeCompleto": "Jean Assis" },
//     { "nomeCompleto": "Luiz Fagner" }
// ]
// for (pessoa of pessoas) {
//     var listaNomesDaPessoa = pessoa.nomeCompleto.split(" "); //Array com o nome e sobrenome separados
//     // ["Yago", "Jesus", "da", "Silva"] -> tamanho 4 - 1
//     //chave do dicionário que ainda não existe
//     pessoa.primeiroNome = listaNomesDaPessoa[0]
//         //pessoa.ultimoNome = listaNomesDaPessoa[1]
//     var ultimaPosicaoDoArray = listaNomesDaPessoa.length - 1
//     pessoa.ultimoNome = listaNomesDaPessoa[ultimaPosicaoDoArray]
// }

// console.log(pessoas)


// var pessoas = [
//     { "nomeCompleto": "      Yago Silva" },
//     { "nomeCompleto": " Adriana Pommot      " },
//     { "nomeCompleto": "    Kassia Silva    " },
//     { "nomeCompleto": "    Jean Assis    " },
//     { "nomeCompleto": "    Luiz Fagner    " }
// ]
// for (pessoa of pessoas) {
//     pessoa.nomeCompleto = pessoa.nomeCompleto.trim()
// }
// console.log(pessoas)


// var carros = [
//         { "modelo": "Corsa", "ano": "2012" },
//         { "modelo": "Uno" },
//         { "modelo": "Fusca" },
//         { "modelo": "DelRey" },
//         { "modelo": "Evoque" },
//         { "modelo": "Troller" }
//     ] //array


// for (carro of carros) {
//     carro.modelo = carro.modelo.toUpperCase()
//         //carro.modelo = carro.modelo.pop()
//         //carro.pop('ano')
//     delete carro.ano
//         //console.log(carro.modelo.toUpperCase())
// }
// console.log(carros)


// // Saida esperad
// // { "modelo": "CORSA"},
// // { "modelo": "UNO"},
// // { "modelo": "FUSCA"},
// // { "modelo": "DELREY"},
// // { "modelo": "EVOQUE"},
// // { "modelo": "TROLLER" }

//Exibir em um alert  o nome e a idade dos filhos de joão maiores de idade

// var pessoa = {
//     "nome": "João",
//     "filhos": [
//         { "nome": "Caio", "idade": 19 },
//         { "nome": "Amanda", "idade": 18 },
//         { "nome": "Sara", "idade": 15 },
//     ]
// }

// for (filho of pessoa.filhos) {
//     if (filho.idade >= 18) {
//         alert(filho.nome + " " + filho.idade + " anos") //Caio 19 anos
//     }
// }
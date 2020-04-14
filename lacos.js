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

var pessoas = [{ 'nome': 'yago', 'idade': '39' }, { 'nome': 'kassia', 'idade': '18' }] // array

var pessoa = {

        //chave:valor
        'nome': 'yago',        
        'idade': 39
    } //dicionário ou Objeto


    pessoa['nome'] 

var carro = {
    'marca': 'GM',
    'modelo': 'corsa'
}
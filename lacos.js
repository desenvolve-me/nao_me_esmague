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

var numero = window.prompt("digite o numero")

for (var calculadora = 0, indice = 0; calculadora <= 10; calculadora++, indice = indice + 2) {
    alert(numero + "x" + calculadora + " = " + numero * calculadora)
}
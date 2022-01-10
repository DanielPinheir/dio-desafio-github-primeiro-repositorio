//Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

//criando função
function trocaPares(lista) {
    if (!lista) return -1;  //tratando lista vazia, falsa, indefinida
    if (!lista.length) return -1;   
    let listaFinal = [];  //criando uma nova lista
    for (let i = 0; i < lista.length; i++) {
        (lista[i] % 2 === 0) ? listaFinal.push(0) : listaFinal.push(lista[i]);      //jogando valores tratados na nova lista  
    }
    console.log(listaFinal);
}

let lista = [0, 1, 3, 4, 6, 80, 33, 23, 90]

console.log(trocaPares(lista))
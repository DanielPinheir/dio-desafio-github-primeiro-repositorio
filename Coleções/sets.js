//atividade 2
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

//criando uma função que retorne valores unicos
function valoresUnicos(array) {
  let unico = new Set(array);
  //usando spread para transformar o set em um array
  return [...unico];
}

//chamando a função
console.log(valoresUnicos(meuArray));

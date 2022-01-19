//função palindromo

function palindromo(nome) {
  //transformando str em um array, invertendo e juntando transformando numa str novamente
  let nomeInvertido = nome.split("").reverse().join("");
  //usando if ternário
  return nome === nomeInvertido
    ? console.log(`A palavra ${nome} é um palíndromo.`)
    : console.log(`A palavra ${nome} não é um palíndromo.`);
}

palindromo("arara");
palindromo("aba");
palindromo("radar");
palindromo("xyzzyx");
palindromo("bola");
palindromo("abcddcb");
palindromo("");
palindromo("x");

//criando uma função palindromo
//Meu código
//Solução1
function verificaPalindromo (string) {
    if (!string) return "String inexixtente!!"; // verificando se o parametro é verdadeiro
    
    //verificando se a string é igual a inversão dela usando condicional ternário
    //split: separa todas as letras transformando num array
    //reverse: coloca o array em ordem decrescente
    //join: junta novamente as letras retornando a string
    (string === string.split("").reverse().join("")) ? console.log(`A string ${string} é um palíndromo.`) : console.log(`A string ${string} não é um palíndromo.`);       
} 

console.log(verificaPalindromo('arara')) 

//Solução2
function verificaPalindromo2 (string) {
    if (!string) return "String inexixtente!!";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length -1 -i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2('arara'))
//meu código da função
function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return "Defina dois números.";
    const iguais = num1 === num2;  //vefificando se os números recebidos são iguais
    const soma = num1 + num2;  //somando os números
    const maiorQue10 = soma > 10; //verificando se soma maior que 10
    const menorQue20 = soma < 20; // e menor que 20

    let cond1 = "não são iguais"; //declarando condição1
    if (iguais) {                  //criando a condição1
        cond1 = "são iguais"
    }

    let cond2 = "menor ou igual a";  //declarando e criando segunda condição
    if (maiorQue10) {
        cond2 = "maior";
    }

    let cond3 = "maior ou igual a"  //declarando e criando terceira condição
    if (menorQue20) {
        cond3 = "menor que";
    }
    
    //Imprimindo uma frase, onde chama o resultado das variáveis após as condições estabelecidas
    console.log(`Os números ${num1} e ${num2} ${cond1}. Sua soma é ${soma}, que é ${cond2} que 10 e ${cond3} 20.`);
}

//chamando a função
comparaNumeros(9,5)
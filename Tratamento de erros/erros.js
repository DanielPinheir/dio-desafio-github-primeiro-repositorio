//0.Criando uma função que recebe um array e um número
function validaArray(arr, num) {
  //5.construindo um try caso dê algum erro no desenvolvimento tratar no catch
  try {
    //1.validando os parametros
    if (!arr && !num) throw new ReferenceError("Envie os parametros");
    //2. validação dos tipos
    if (typeof arr !== "object")
      throw new TypeError("Array precisa ser do tipo object.");
    if (typeof num !== "number")
      throw new TypeError("Número precisa ser do tipo number.");
    //3. validação da estrutura
    if (arr.length !== num) throw new RangeError("Tamanho inválido!");

    //4.caso passe pelas validações retornar o próprio array
    return arr;
  } catch (e) {
    //6.tratando o erro de acordo com sua instancia
    if (e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError!");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um TypeError!");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um RangeError!");
      console.log(e.message);
    } else {
      console.log("Tipo de erro não esperado:" + e);
    }
  }
}

//7.chamando a função
console.log(validaArray());

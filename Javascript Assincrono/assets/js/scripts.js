//1. Fazendo uma requisição
const BASE_URL = "https://thatcopy.pw/catapi/rest/";
//7.chamando o botão através de uma const
const catImg = document.getElementById("cat");

//8.chamando a imagem através de uma const
const catBtn = document.getElementById("change-cat");

//2. Construindo uma função assíncrona usando modelo arrow function
const getCats = async () => {
  //6.utilizando try/catch para detecção de erros
  try {
    //3.declarando e criando constante Dados
    const data = await fetch(BASE_URL);
    //4.transformando dados em json
    const json = await data.json();

    //5.retornando imagem comprimida
    return json.webpurl;
  } catch {
    //6.
    console.log(e.message);
  }
};

//9. criando nova função assíncrona que vai dar um await no getCats e colocar no campo da imagem

const loadImg = async () => {
  const catImg = document.getElementById("cat");
  catImg.src = await getCats();
};

//10. colocando listener no botão
catBtn.addEventListener("click", loadImg);
//11.chamando a imagem
loadImg();

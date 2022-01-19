//Atividade1

//criando uma função que recebe um map e joga usuários Admin para uma nova let
function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value == "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

//criando um map declarando numa constante 'usuarios'
const usuarios = new Map();

//populando o map 'usuarios'
usuarios.set("Daniel", "Admin");
usuarios.set("João", "Usuer");
usuarios.set("Maria", "Usuer");
usuarios.set("Amanda", "Admin");

//chamando a função
console.log(getAdmins(usuarios));

//Atividade1
//criando um array com alguns alunos
const alunos = [    
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	}
];


//criando uma função usando object destructuring
function alunosAprovados (arr, media) { 
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];  //object destructuring

        if( nota >= media) {
            aprovados.push(nome);   //jogando alunos aprovados em um novo array
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5))
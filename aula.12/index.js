

// function vascoVaiVencerHoje(vitoria){
//     console.log(vitoria);
// }

// vascoVaiVencerHoje(true);

// let array = [
//     {
//       id: 1,
//       name: 'John',
//       age: 23,
//     },
//     {
//       id: 2,
//       name: 'Samuel',
//       age: 21,
//     },
//     {
//       id: 3,
//       name: 'marvin',
//       age: 26,
//     },
//     {
//       id: 4,
//       name: 'james',
//       age: 28,
//     },
// ];

// function funçãoTeste(valor1){
//     console.log(valor1.name);
//     console.log(valor1.age);
//     console.log(valor1.id);
//     console.log(valor1?.sex);  //? verifica se o valor é nulo ou undefined , só irá imprimir caso tenha alguma coisa. 
// }

// funçãoTeste(array[0]);


// function funcao(){
//     console.log("ola callback function");
// }

// function callbackFuncao(funcao){
//     console.log("ola mundo");
// }

// callbackFuncao(funcao());

// EXEMPLOS DE  => 

// function somar (valor){
//     return valor + 10;
// }

// const teste = (a) => a +10;
// console.log(teste(10));


// const Idade = (anoNascimento) => {

//     const idade = 2023 - 2001;
//     return idade;
// }

// const idade = Idade(2001);

// console.log(idade);

// const idade = (ano) => 2023 - ano;

// console.log(idade(2001));


//callback functions : 


let array = [
    {
      id: 1,
      name: 'John',
      age: 23,
    },
    {
      id: 2,
      name: 'Samuel',
      age: 21,
    },
    {
      id: 3,
      name: 'marvin',
      age: 26,
    },
    {
      id: 4,
      name: 'james',
      age: 28,
    },
];

const resultado = array.map((resposta)=> {
    console.log(resposta);
    return '';
}); 
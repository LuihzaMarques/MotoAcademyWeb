// exemplo map 

let funcionario = [
    {
      nome: 'Euclides',
      idade: 21,
      cargo: 'Analista de sistemas',
      tecnologia: 'Node',
    },
    {
      nome: 'Linton',
      idade: 30,
      cargo: 'Analista de sistemas',
      tecnologia: 'Tudo',
    },
    {
        nome: 'Richard',
        idade: 27,
        cargo: 'Aluno',
        tecnologia: 'Android', 
    },
    {
        nome: 'Livia',
        idade: 30,
        cargo: 'Analista de sistemas',
        tecnologia: 'Tudo',
    }
  ];

//   //como add outra funcinario? 
//   funcionario.push({
//     nome: 'Richard',
//     idade: 27,
//     cargo: 'Aluno',
//     tecnologia: 'Android',
//   })

//console.log(funcionario[0]); //exibi o primeiro objeto completo
//console.log(funcionario[2]); //exibi o novo usuario cadastrado


//encontrar um funcionario? 

// funcionario.map((resposta)=>{
//     if(resposta.nome === 'Livia'){
//         console.log(resposta);
//     }
// })

// for(let i=0; i<funcionario.length; i++){
//     if (funcionario[i].nome == 'Richard'){
//         console.log(funcionario[i]);
//     }
// }

// const valor = funcionario.filter((resposta)=>{
//     return resposta.nome == 'Euclides'
// })


// inserir a um array , no caso funcionario, um sub-array em tecnologia

// 1 maneira: utilizando o for e if

// for(let i=0; i<funcionario.length; i++){
//     if(funcionario[i].nome === "Euclides"){
//         funcionario[i].tecnologia = []
//         funcionario[i].tecnologia.push("Android", "A", "B") 
//         console.log(funcionario[i]);
//     }
// }

// para add um array a um array já existe, devo primeiro percorrer 
//todo o primeiro array , apos isso devo procurar por aquilo que 
//quero usar como comparação (if) dentro da condicional devo aplicar 
//a logica para a manipulação sempre usando o contador pq é um array,
//e usar o .areaQueQueroAdd , primeiro pagar o array antigo [] e depois
//usar o push para colocar elementos no novo array, não esquecer do .log


//2 maneira: utilizando o map

funcionario.map((funcionario) => {
    if (funcionario.nome === "Euclides") {
      funcionario.tecnologia = ["Android", "A", "B"];
      console.log(funcionario);
    }
  });


//3 maneira: com for e if. 

// for (let i = 0; i < funcionario.length; i++) {
//     if (funcionario[i].nome === "Euclides") {
//       funcionario[i].tecnologia = ["Android", "A", "B"];
//       console.log(funcionario[i]);
//     }
//   }
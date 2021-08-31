let meuNome = 'Chris';

function logNome() {
  console.log(meuNome);
}

logNome();

meuNome = 'Bob';

logNome();


var meuNumero = '500'; // opa, isso continua sendo uma string
console.log(typeof(meuNumero));
meuNumero = 500; // bem melhor — agora isso é um número
console.log(typeof(meuNumero));
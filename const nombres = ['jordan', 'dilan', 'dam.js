const nombres = ['jordan', 'dilan', 'damian'];

for (let index = 0; index < nombres.length; index++) {
  console.log('nombre : ', nombres[index], 'index : ', index);
}

console.log(nombres[3]);

// nombres.forEach((name, index) => {
// console.log('nombre', name , index);
// })

// jordan-dilan-damian
function concatenarNombres(signo, otroparamtro) {
  console.log('param', otroparamtro);
  let concatNombres = '';
  for (let index = 0; index < nombres.length; index++) {
    if (nombres[index] !== 'damian') {
      concatNombres += nombres[index] + signo
    }
  }

  console.log(concatNombres);
}


console.log(concatenarNombres('/', 67));
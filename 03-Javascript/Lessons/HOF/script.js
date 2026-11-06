function calcular(a, b, operacao) {
  console.log("Realizando a operação: ");
  const resultado = operacao(a, b); // somar (3, 5)
  return resultado;
}

function somar(x, y) {
  console.log("Resultado da soma.");
  return x + y;
}

console.log(calcular(3, 5, somar));

console.log(
  calcular(8, 4, function (x, y) {
    console.log("Resultado da subtração.");
    return x - y;
  }),
);

function exibirElementos(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["maçã", "banana", "laranja", "limão"];

for (let i = 0; i < lista.length; i++) {
  exibirElementos(lista[i], i, lista);
}

lista.forEach(exibirElementos);

list.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});

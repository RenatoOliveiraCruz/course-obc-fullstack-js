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

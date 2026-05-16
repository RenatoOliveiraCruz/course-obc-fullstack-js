let array = [1, 4, 6, 2];
console.log(array);

let array2 = array;

array2[0] = 5;
console.log(array);
console.log(array2);
// array and array2 are referencing the same array in memory, so changes to one will affect the other.
// To create a copy of the array, we can use the spread operator or the slice method.

const arr = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Apu");
console.log(arr);
console.log(tamanho);

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Apu");
console.log(arr);
console.log(tamanho);

// pop: Remove um elemento no final do array e devolve o elemento removido
const lastElement = arr.pop();
console.log(arr);
console.log(lastElement);

// shift: Remove um elemento no começo do array e devolve o elemento removido
const firstElement = arr.shift();
console.log(arr);
console.log(firstElement);

// includes: Verifica se um certo elemento está presente no array
const hasBart = arr.includes("Bart");
console.log(hasBart);
const hasApu = arr.includes("Apu");
console.log(hasApu);

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indexOfLisa = arr.indexOf("Lisa");
console.log(indexOfLisa);
const indexOfApu = arr.indexOf("Apu");
console.log(indexOfApu);

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const slicedArray = arr.slice(0, 4);
console.log(arr);
console.log(slicedArray);

let arrs = [1, 2, 3, 6, 7, 9, 0];
let sliceElement = arrs.slice(2, 6);
let others = arrs.slice(-4);
console.log(sliceElement); // Output: [3,6,7,9]
console.log(others); // Output: [6, 7, 9, 0]

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const combinedArray = arr1.concat(arr2, arr3);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const ncf = ["Neymar", "Coutinho", "Firmino"];
const mvb = ["Mbappé", "Vini", "Bellingham"];
const combined = nc.concat(mvb);
console.log(combined); // Output: ["Neymar", "Coutinho", "Firmino", "Mbappé", "Vini", "Bellingham"]

// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const removedElements = combined.splice(1, 2, "Raphinha", "Richarlison");
console.log(combined); // Output: ["Neymar", "Raphinha", "Richarlison", "Firmino", "Mbappé", "Vini", "Bellingham"]
console.log(removedElements); // Output: ["Coutinho", "Firmino"];

​// Usando o for para percorrer cada elemento do array
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element + " SE ENCONTRA NA POSIÇÃO " + i + " DO ARRAY");
}
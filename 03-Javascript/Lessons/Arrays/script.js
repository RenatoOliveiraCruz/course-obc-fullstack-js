let array = [1, 4, 6, 2];
console.log(array);

let array2 = array;

array2[0] = 5;
console.log(array);
console.log(array2);
// array and array2 are referencing the same array in memory, so changes to one will affect the other.
// To create a copy of the array, we can use the spread operator or the slice method.

const arr = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

let tamanho = arr.push("Apu");
console.log(arr);
console.log(tamanho);

tamanho = arr.unshift("Apu");
console.log(arr);
console.log(tamanho);

const lastElement = arr.pop();
console.log(arr);
console.log(lastElement);

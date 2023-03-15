/*Crear una función join que reciba un arreglo y retorne un string con todos los
 elementos separados por espacio sin usar el método join de los arreglos*/

function join(arr) {
  let string = "";

  for (let i = 0; i < arr.length; i++) {
    string += arr[i];
    if (i !== arr.length - 1) {
      string += " ";
    }
  }
  return string;
}

console.log(join([1, 2, 3, 4])); //1  2  3  4
console.log(join(["Hola", "mundo"])); //Hola  mundo
console.log(join(["C", "a", "r", "r", "o"])); // C  a  r  r  o

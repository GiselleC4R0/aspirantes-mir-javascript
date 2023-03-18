let persona = {
  nombre: "Pepe",
  edad: 20,
  ciudad: "Cali",
  profesion: "Escritor",
};
console.log(persona);
function presentacion(persona) {
  return (
    persona.nombre +
    " " +
    persona.edad +
    " " +
    persona.ciudad +
    " " +
    persona.profesion
  );
}
let mensaje = presentacion(persona);
console.log(mensaje);
persona.hobbies = ["pintar", "caminar", "leer", "cocinar"];
console.log(persona.hobbies);
let llaves = Object.values(persona.hobbies);
for (let i = 0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llave);
}

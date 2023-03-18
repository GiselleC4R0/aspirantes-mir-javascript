let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: "true",
  hobbies: ["programar", "squash", "piano"],
};
/*2.*/ console.log(pedro.edad);
/*3.*/ pedro.estatura = 1.8;
/*4.*/ delete pedro.activo;
/*5.*/ let llaves = Object.keys(pedro);

for (let i = 0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llave + ": " + pedro[llave]);
}

/*6.*/ pedro.saluda = function () {
  console.log("Hola, me llamo " + this.nombre);
};
pedro.saluda();

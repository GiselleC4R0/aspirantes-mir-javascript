/*1.*/ const receta = {
  nombre: "Sandwich",
  ingredientes: [],
};
/*2.*/ //receta.nombre = "Sandwich"
/*4 y 5.*/ receta.ingredientes.push(
  { nombre: "Pan", cantidad: 2 },
  { nombre: "Queso", cantidad: 1 }
);
console.log(receta);
/*6.*/ console.log(receta.ingredientes[0].nombre);
let sumaingredientes = 0;
/*7.*/ for (let i = 0; i < receta.ingredientes.length; i++) {
  sumaingredientes += receta.ingredientes[i].cantidad;
}
console.log(sumaingredientes);

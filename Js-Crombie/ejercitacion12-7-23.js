const alumnos = [
    {
      nombre: "Jose",
      nota: 10,
    },
    {
      nombre: "pepe",
      nota: 5,
    },
    {
      nombre: "Carlos",
      nota: 1,
    },
    {
      nombre: "Maria",
      nota: 9,
    },
    {
        nombre: "Armando",
        nota: 10,
    },
  ];

let menor=999;
let mayor=0;
let mayor2=0;

let aux1;
let aux2;
let aux3;
for (let i = 0; i < alumnos.length; i++) {

    if(alumnos[i].nota >= mayor){
        mayor=alumnos[i].nota;
        aux1=alumnos[i].nombre;
        
    }

    if(alumnos[i].nota <= menor){
        menor=alumnos[i].nota;
        aux2=alumnos[i].nombre;
    }

}

console.log("El alumno "+aux1+" con "+mayor+" es el de mayor nota");
console.log("El segundo alumno "+aux3+" con "+mayor2+" es el segundo con mayor nota");
console.log("El menor es "+aux2+" con "+menor+" es el de menor nota");

let notaMayor = 0;
let nombreNotaMayor = "";

alumnos.forEach((alumno) => {
  if (alumno.nota > notaMayor) {
    notaMayor = alumno.nota;
    nombreNotaMayor = alumno.nombre;
  }
});

console.log(
  "La nota mayor es de ",
  nombreNotaMayor,
  " con ",
  notaMayor,
  " puntos."
);
// let contador=0;
// for (let index = 0; index <= 10; index++) {
//     console.log(index);
// }

// console.log(contador);

//Mostrar elementos del arreglo en modo js
let arreglo=[1,2,3,5];

arreglo.forEach((element)=>{
    console.log(element);
});
//Manera antigua
for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
}

//Solucion de compañero 
let string = 'LaCrOmbiNeTa'
let letrasMayusculas = []
string.split('').filter(item => {
    if (item === item.toUpperCase()) {
        letrasMayusculas.push(item)
    }
})
console.log(letrasMayusculas)
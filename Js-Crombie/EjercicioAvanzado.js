
// const productos = [
// { precio: 553, inventario: 87, marca: "walmart", nombre: "Leche" },
// { precio: 244, inventario: 59, marca: "walmart", nombre: "Queso" },
// { precio: 340, inventario: 92, marca: "walmart", nombre: "Yogur" },
// {
//   precio: 169,
//   inventario: 18,
//   marca: "walmart",
//   nombre: "Mantequilla",
// },
// { precio: 758, inventario: 25, marca: "walmart", nombre: "Crema" },
// { precio: 870, inventario: 21, marca: "walmart", nombre: "Helado" },
// { precio: 82, inventario: 54, marca: "walmart", nombre: "Natilla" },
// {
//   precio: 568,
//   inventario: 67,
//   marca: "walmart",
//   nombre: "Leche condensada",
// },
// {
//   precio: 536,
//   inventario: 31,
//   marca: "walmart",
//   nombre: "Yogur griego",
// },
// {
//   precio: 307,
//   inventario: 57,
//   marca: "walmart",
//   nombre: "Queso crema",
// },
// { precio: 976, inventario: 80, marca: "walmart", nombre: "Nata" },
// { precio: 904, inventario: 19, marca: "walmart", nombre: "Flan" },
// {
//   precio: 167,
//   inventario: 60,
//   marca: "walmart",
//   nombre: "Yogur de frutas",
// },
// {
//   precio: 525,
//   inventario: 56,
//   marca: "walmart",
//   nombre: "Leche evaporada",
// },
// {
//   precio: 246,
//   inventario: 32,
//   marca: "walmart",
//   nombre: "Helado de vainilla",
// },
// {
//   precio: 785,
//   inventario: 27,
//   marca: "walmart",
//   nombre: "Leche de almendras",
// },
// {
//   precio: 286,
//   inventario: 24,
//   marca: "walmart",
//   nombre: "Queso rallado",
// },
// {
//   precio: 585,
//   inventario: 48,
//   marca: "walmart",
//   nombre: "Yogur de fresa",
// },
// {
//   precio: 84,
//   inventario: 46,
//   marca: "walmart",
//   nombre: "Crema agria",
// },
// {
//   precio: 804,
//   inventario: 2,
//   marca: "walmart",
//   nombre: "Helado de chocolate",
// },
// ];


// //copiar y devolver arreglo de productos con la misma marca
// function recibirMarca(marca) {
//     const arrayMarca = [];

//     for(let i=0;i<productos.length;i++){
//         if(productos[i].marca == marca){
//             arrayMarca.push(productos[i]);
//         }
//     }

//     return arrayMarca;
// }
// //console.log("Devolver productos de la misma marca: ",recibirMarca("Limpialon"));

// //Copiar y devolver arreglo de productos con el mismo precio
// function preciosMayores(productos,precio){
//     const arrayMayores=[];

//      for(let i=0;i<productos.length;i++){
//          if(productos[i].precio >= precio){
//             arrayMayores.push(productos[i]);
//          }
//      }
//      return arrayMayores;
// }
// //console.log("Devuelvo los productos con el mayor precio: ",preciosMayores("1000"));

// //Echo con funcion de flecha como juani
// const cambiarMarca = (marcaInicial,marcaFinal) => {
//   productos.forEach((producto) => {
//         if(producto.marca === marcaInicial) producto.marca = marcaFinal
//   })
// }
// cambiarMarca("walmart","chango mas");

// //funcion que devuelva la suma, promedio, maximo y minimo

// function sumPromMaxMin(productos){
//     let contador=0;
//     let promedio=0;
//     let mayor=0;
//     let menor=10;


//     for(let i=0;i<productos.length;i++){
//         suma+=productos[i].precio;
//         contador++;

//         if(productos[i].precio > mayor){
//             mayor=productos[i].precio;
//         }
//         if(productos[i].precio < menor){
//             menor=prodcutos[i].precio;
//         }
//     }
//     promedio=suma/contador;
// }   

// let matrix=
// function solution(matrix) {
//     let suma=0;
    
    
//     for(let i=0;i<matrix.length;i++){
//         for(let j=0;j<matrix[0].length;j++){
//            if(matrix[i][j] == 0 && i+1<matrix.length){
//                 matrix=[i+1][j]=0;   
//            }
//            suma+=matrix[i][j]
//         }
//     }
//     return suma;  
// }

// console.log();
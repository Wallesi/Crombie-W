//Crear una función que reciba un numero entero y devuelva un error en caso de que el argumento recibido no sea del tipo solicitado.

function esEntero(x){
     if(Number.isInteger(x)){
        return true;
     }
     else{
        return false;
     }
}
//console.log(esEntero("1"));

//Crear una función que reciba un array y genere una copia del mismo pero con todos los elementos multiplicados por 5. Se debe usar la Asignación de multiplicación: x*=y (PPT Clase 3)

function multi(x){
    for(let i=0;i<x.length;i++){
        console.log(x[i]*=5);
    }
}

//Hacer opcion con map



//console.log(multi([1,2,3,5]));

//Crear una función que reciba un arreglo y devuelva el promedio de un rango especificado. Es decir, debe recibir (arreglo, inicio, fin) y deberá calcular el promedio de los valores que se encuentran en ese rango.

let contador=0;
let suma=0;
function promArray(array,inicio,fin){
    for(let i=inicio;i<fin;i++){
        suma+=array[i];
        contador++;
    }
    let promedio=suma/contador;

    return promedio;
}
//console.log(promArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],1,10));

//Definir una función que devuelva TRUE si el argumento recibido como texto un palíndromo, osea que se lee de la misma forma de izquierda y derecha. Ejemplo de palíndromo "¿Acaso hubo búhos acá?".

function palindromo(string){
    string=string.toLowerCase();
    const texto2=string.split('').reverse().join('');

    if(texto2==string){
        return true;
    }else{
        return false;
    }
}
console.log(palindromo('reconocer'));

//Crear una función para validar los datos que se ingresaron en un formulario. Recibirá como parametros email, password y description.
//Deberá comprobar que se cumplan las siguientes condiciones:
//- El email debe contener "@" y ".com".
//- La contraseña deberá tener entre 8 y 16 caracteres, y tener una mayúscula como mínimo.
//- La descripción podrá tener hasta 400 caracteres pero no puede contener guiones (-).


function validarDatos(email,password,descripcion){

    if(!email.includes("@") || !email.includes(".com")){
        return console.log("El email debe contener @ y .com");
    }

    else if((password.length<=8 || password.length>=16) || !/[A-Z]/.test(password)){
        return console.log("La contraseña debe tener entre 8 a 16 caracteres y una letra en mayus");
    }

    else if(descripcion.length > 400 || descripcion.includes("-")){
        return console.log("La descripcion no debe conetener guiones ni mas de de 400 caracteres")
    } 

    else{
        return console.log("Los datos son validos");
    }
}
console.log(validarDatos("waldemargalizzi@gmail.com","Elcafecapuccino","asdasdasdadasdasdasd"));


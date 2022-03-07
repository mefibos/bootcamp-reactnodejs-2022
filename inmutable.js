
/*
const juan = {
    nombre :"NOmbre",
    apellido: "Apellido",
    edad:30
}

const juan2 = {...juan,apellido:"Navarro",edad:34, telefono:44556677}

// const juan2 = juan;
//const juan2 =Object.assign({},juan,{apellido:"Perez"});
//juan.apellido="Otro";


console.log(juan);
console.log(juan2);
*/

/*
const juan = {
    nombre :"NOmbre",
    apellido: "Apellido",
    edad:30,
    direccion: {
        departamento: "GT",
        municipio: "GT"

    }
}

const juan2 = {
    ...juan,
    apellido:"Navarro",
    edad:34, 
    telefono:44556677,
    direccion: {
        ...juan.direccion,
         municipio: "Mixco",
         aldea: "San Cristobal"
    }

}

juan2.direccion.municipio = "MX";

console.log(juan);
console.log(juan2);
*/



// ARREGLOS INMUTABLES

const numeros = [1,2,3];

/*
const numeros2 = numeros;
*/
/*
const numeros2 = [0,...numeros,10,...numeros];
numeros2.push(4);


const numeros2 = [0,...numeros,10,...numeros];

console.log("numeros:" ,numeros);
console.log("numeros 2:",numeros2);

*/

//INTRODUCE NUMBER
const index = numeros.indexOf(10);

const numeros3 = [
    ...numeros.slice(0,index),
    777,
    ...numeros.slice(index)
];

console.log("numeros3:" ,numeros3);

// DELETE
const numeros4 = numeros.filter(x=> x!=777);

console.log("numeros4:",numeros4);

// UPDATE

const numeros5 = numeros.map(x => x==2 ? 22222:x);

console.log("numeros5:",numeros5);



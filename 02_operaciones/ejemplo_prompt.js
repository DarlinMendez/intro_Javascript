 //let nombre = prompt("Dime tu nombre");
 //let edad = prompt("Dime tu edad");
 //let EstadooCivil = prompt("Dime tu estado Civil");

 //console.log(typeof nombre);
 //console.log(typeof EstadooCivil);
 //console.log(typeof edad);


 // Estudiante
// let Estudiante = {
//     nombre: prompt("Como te llamas"),
  //   edad: prompt("Cual es tu edad"),
  //   curso: prompt("Cual es tu curso"),
// };

let estudiante = {}

estudiante.nombre = prompt("Como te llamas"),
estudiante.edad = prompt("Cual es tu edad"),
estudiante.curso = prompt("Cual es tu curso"),

console.log(estudiante);

console.log(estudiante.edad);

estudiante.edad = Number.parseInt(estudiante.edad);

console.log(estudiante.edad);
let numero1 = prompt("Dijita un numero");
let numero2 = prompt("Dijita otro numero");

console.log( numero1 + numero2);

//console.log(typeof numero1);

//numero1 = Number.parseInt(numero1);

//console.log(numero1);
//console.log( typeof numero1);


//convertir el texto a numero
numero1 = Number.parseFloat(numero1);
numero2 = Number.parseFloat(numero2);

let suma = numero1 + numero2;

// Definir la cantidad de decimales

suma = suma.toFixed(5);
console.log(suma);

//convertir el string en decimal
suma = Number.parseFloat(suma);

console.log(suma)



// integer = Enteros
10
50
1
0
1000

//float = flotante = Decimal

10.2 
90.3
0.5
3.14
9.3324



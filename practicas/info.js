

// Dias de la Semana en array 
let diasSemana = []

diasSemana.push(prompt("Introduce el 1er dia de la semana"));
diasSemana.push(prompt("Introduce el 2do dia de la semana"));
diasSemana.push(prompt("Introduce el 3er dia de la semana"));
diasSemana.push(prompt("Introduce el 4to dia de la semana"));
diasSemana.push(prompt("Introduce el 5to dia de la semana"));
diasSemana.push(prompt("Introduce el 6to dia de la semana"));
diasSemana.push(prompt("Introduce el 7timo dia de la semana"));


//agregue los miembros de la familia
let miembrosFamilia = []

miembrosFamilia.push(prompt("Digita 1er Familiar"));
miembrosFamilia.push(prompt("Digita el 2do Familiar"));
miembrosFamilia.push(prompt("Digita el 3er Familiar"));


//cree objeto Datos personales
let datosPersonales = {
    nombreCompleto: prompt("Nombre Completo"),
    fechaDeNacimiento: prompt("Cuando Naciste"),
    LugarDeNacimiento: prompt("Lugar de nacimiento"),
    Edad: Number(prompt("Cual es tu edad?")),
    ComidasFavoritas: [],
    Paises: [],
    TieneLicencia: confirm("Tienes licencia para Conducir?"),
    universidad: confirm("Estas en la universidad?"),
}
//ingreso Comidas en el array
datosPersonales.ComidasFavoritas[0] = prompt("Cual es tu primera  comida favorita"),
datosPersonales.ComidasFavoritas[1] = prompt("Cual es tu segunda comida favorita"),
datosPersonales.ComidasFavoritas[2] = prompt("Cual es tu Tercera  comida favorita"),


//Ingreso Paises en el array
datosPersonales.Paises[0] = prompt("1er paies que te gustria visitar")
datosPersonales.Paises[1] = prompt("2do paies que te gustria visitar")
datosPersonales.Paises[2] = prompt("3er paies que te gustria visitar")
datosPersonales.Paises[3] = prompt("4to paies que te gustria visitar")
datosPersonales.Paises[4] = prompt("5to paies que te gustria visitar")

//Datos personales del artista
let DatosArtista = {
    nombreArtista: prompt("Cual es tu artista Favorito"),
    nombreRealArtista:  prompt("Cual es su nombre Real"),
    fechaDeNacimientodelArtista: prompt("Cual es su fecha de nacimineto"),
    Canciones: []

}

//array de canciones del artista
DatosArtista.Canciones[0] = prompt("1ra cancion Favorita");
DatosArtista.Canciones[1] = prompt("2da cancion Favorita");
DatosArtista.Canciones[2] = prompt("3ra cancion Favorita");

//Imprimiendo informacion solicitada 
console.log(datosPersonales.nombreCompleto);
console.log(datosPersonales.fechaDeNacimiento);
console.log(datosPersonales.Paises[0]);
console.table(DatosArtista);




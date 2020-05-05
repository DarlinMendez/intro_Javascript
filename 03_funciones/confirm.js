let usuario = {}

usuario.nombre = prompt("Como te llamas?");

usuario.email = prompt("Dime tu correo");
usuario.tieneTikTok = confirm("Tienes TikTok?");

console.log(usuario);

let confirmarCerrarVentana = confirm("Desea Salir de esta pagina?");

if (confirmarCerrarVentana) {
    window.close();
}

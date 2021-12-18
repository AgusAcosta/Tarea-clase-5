//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
const $saludoUsuario = document.querySelector("#saludoUsuario");
const $primerNombre = document.querySelector("#primerNombre");

$botonEnviarFormulario.onclick = function () {
    if (!$primerNombre.value || !$edad.value) return;

    saludarUsuario($primerNombre.value.toLowerCase());

    return false;
};

function saludarUsuario(primerNombre) {
    $saludoUsuario.textContent = `Bienvenido ${primerNombre}!`;
}

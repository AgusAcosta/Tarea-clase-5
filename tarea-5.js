//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
const $saludoUsuario = document.querySelector("#saludoUsuario");
const $formulario = document.querySelector("form");
const $primerNombre = document.querySelector("#primerNombre");
const $leyendaFormulario = document.querySelector("#leyendaFormulario");
const $edad = document.querySelector("#edad");
const $botonEnviarFormulario = document.querySelector("#botonEnviarFormulario");

$botonEnviarFormulario.onclick = function () {
    if (!$primerNombre.value || !$edad.value) return;

    const nombreCompleto = unificarNombreUsuario();
    saludarUsuario($primerNombre.value.toLowerCase());
    mostrarInformacionUsuario(nombreCompleto, $edad.value);

    return false;
};

function unificarNombreUsuario() {
    let nombreCompleto = "";

    for (let i = 0; i < $formulario.childNodes.length; i++) {
        if ($formulario.childNodes[i].type === "text" && $formulario.childNodes[i].value !== ""){
            if (nombreCompleto === "") {
                nombreCompleto = $formulario.childNodes[i].value
            } else {
                nombreCompleto += ` ${$formulario.childNodes[i].value}`
            }
        }
    }

    return nombreCompleto;
}

function saludarUsuario(primerNombre) {
    $saludoUsuario.textContent = `Bienvenido ${primerNombre}!`;
}

function mostrarInformacionUsuario(nombreCompleto, edad) {
    $leyendaFormulario.textContent = `Nombre: ${nombreCompleto}, Edad: ${edad} `;
}

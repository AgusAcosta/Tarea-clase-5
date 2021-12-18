//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $salarioAnual = document.querySelector("#salarioAnual");
const $salarioMensual = document.querySelector("#salarioMensual");
const $botonCalcularSalario = document.querySelector("#botonCalcularSalario");

$botonCalcularSalario.onclick = function () {
    if (!$salarioAnual.value) return
    
    const salarioAnual = calcularSalarioMensual(Number($salarioAnual.value))
    mostrarSalarioMensual(salarioAnual);
    return false;
};

function calcularSalarioMensual(salarioAnual) {
    const MESES_POR_ANIO = 12;
    return salarioAnual / MESES_POR_ANIO;
}

function mostrarSalarioMensual(salarioMensual) {
    $salarioMensual.value = salarioMensual;
}

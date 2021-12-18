//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $tiempoTotalVideos = document.querySelector("#tiempoTotalVideos")
const $formulario = document.querySelector("form")
const $botonCalcularTiempoVideos = document.querySelector("#botonCalcularTiempoVideos")

$botonCalcularTiempoVideos.onclick = function() {
    const horasTotales = calcularHorasTotales()
    const minutosTotales = calcularMinutosTotales()
    const segundosTotales = calcularSegundosTotales()
    const tiempoTotalVideos = calcularTiempoTotalVideos(horasTotales, minutosTotales, segundosTotales)
    mostrarTiempoTotalVideos(tiempoTotalVideos)

    return false;
}

function calcularHorasTotales() {
    let horasTotales = 0

    for (const childNode of $formulario.childNodes) {
        if (childNode.className === "horas" && (Number(childNode.value) > 0)) {
            horasTotales += Number(childNode.value)
        }
    }

    return horasTotales
}

function calcularMinutosTotales() {
    let minutosTotales = 0

    for (const childNode of $formulario.childNodes) {
        if (childNode.className === "minutos" && (Number(childNode.value) > 0)) {
            minutosTotales += Number(childNode.value)
        }
    }

    return minutosTotales
}

function calcularSegundosTotales() {
    let segundosTotales = 0

    for (const childNode of $formulario.childNodes) {
        if (childNode.className === "segundos" && (Number(childNode.value) > 0)) {
            segundosTotales += Number(childNode.value)
        }
    }

    return segundosTotales
}

function calcularTiempoTotalVideos(horasTotales, minutosTotales, segundosTotales) {
    const segundosFinales = segundosTotales % 60
    const minutosFinales = minutosTotales % 60 + Math.floor(segundosTotales / 60)
    const horasFinales = horasTotales + Math.floor(minutosTotales / 60)

    return [horasFinales, minutosFinales, segundosFinales]
}

function mostrarTiempoTotalVideos(tiempoTotalVideos) {
    const horasFinales = tiempoTotalVideos[0]
    const minutosFinales = tiempoTotalVideos[1]
    const segundosFinales = tiempoTotalVideos[2]

    $tiempoTotalVideos.textContent = `Tiempo total de video: ${horasFinales} horas, ${minutosFinales} minutos y ${segundosFinales} segundos.`
}
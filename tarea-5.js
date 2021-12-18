//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $lista = document.querySelector("ul")

function darValoresRandomLI() {
    for (const childNode of $lista.childNodes) {
        if(childNode.localName === "li"){
            childNode.textContent = generarNumeroRandom(1000)
        }
    }
}

darValoresRandomLI()

function generarNumeroRandom(numeroMaximo) {
    return Math.floor(Math.random() * numeroMaximo)
}


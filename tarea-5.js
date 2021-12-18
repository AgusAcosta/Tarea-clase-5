//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $lista = document.querySelector("ul")

const arrayNumerosLI = []

function inicializar() {
    darValoresRandom("li")
    pushearValores(arrayNumerosLI, "li")
}

inicializar()

function calcularPromedio(array) {
    let resultado = 0

    for (const numero of array) {
        resultado += Number(numero)
    }

    return resultado / array.length
}

function calcularMinimo(array) {
    let numeroMinimo = array[0]

    for (const numero of array) {
        if (numeroMinimo > numero) {
            numeroMinimo = numero
        }
    }

    return numeroMinimo
}

function calcularMaximo(array) {
    let numeroMaximo = array[0]
    let masRepetido

    for (const numero of array) {
        if (numeroMaximo < numero) {
            numeroMaximo = numero
        }
    }

    return numeroMaximo
}

// Si existe mas de un repetido, con la misma cantidad de repeticiones, devuelve el ultimo en repetirse.
function calcularMasRepetido(array) {
    const recuentoRepeticiones = {}
    let existenRepetidos = false

    for (const numero of array) {
        if(Boolean(recuentoRepeticiones[numero])) {
            recuentoRepeticiones[numero] += 1
            masRepetido = numero
            existenRepetidos = true
        } else {
            recuentoRepeticiones[numero] = 1
        }
    }

    if (existenRepetidos) {
        for (const [llave, entrada] of Object.entries(recuentoRepeticiones)) {
            if (recuentoRepeticiones[masRepetido] < entrada) {
                masRepetido = llave
            }
        }

        return masRepetido
    } else {
        return "No hay repetidos."
    }
}

console.log(`El promedio es: ${calcularPromedio(arrayNumerosLI)}`)
console.log(`El número más pequeño es: ${calcularMinimo(arrayNumerosLI)}`)
console.log(`El número más grande es: ${calcularMaximo(arrayNumerosLI)}`)
console.log(`El número más frecuente es: ${calcularMasRepetido(arrayNumerosLI)}`)

function darValoresRandom(elemento) {
    for (const childNode of $lista.childNodes) {
        if(childNode.localName === elemento){
            childNode.textContent = generarNumeroRandom(10)
        }
    }
}

function generarNumeroRandom(numeroMaximo) {
    return Math.floor(Math.random() * numeroMaximo)
}

function pushearValores(array, elemento) {
    for (const childNode of $lista.childNodes) {
        if(childNode.localName === elemento){
            array.push(childNode.textContent)
        }
    }
}
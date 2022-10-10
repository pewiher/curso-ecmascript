// Declaración
function* nombre(array) {
    for (let value in array) yield (array)
}

//Crear el generador
const generador = nombre([1, 2, 3, 4, 5])

// Invocacioens
console.log(generador.next().value) //primer valor retornado
console.log(generador.next().value) //segundo valor retornado
console.log(generador.next().value) //último valor retornado
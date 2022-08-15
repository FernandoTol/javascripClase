// *crea una funcion || que reciaba un arreglo || y lo regrese en orden invertido


const invertirArray = () => {
    let array = [1, 2, 3, 4, 5]
    let largo = array.length -1
    let base
    // console.log(largo)

    for (let index = 0; index < array.length; index++) {

        const element = array[largo];
        largo--
        console.log(element)

    }

}

invertirArray()

// *Crea una funcion que recibe un array de numeros y devuelve el valor mas grande que se encuentre en el arreglo

const mayorValor = () => {
    const array = [2, 4, 5, 9, 5];
    let mayor = array[0];

    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (mayor < element) {
            mayor = element;
        }
    }
    console.log(`Este es el numero mayo ${mayor}`);
}

mayorValor()

// * Crea una funcionque pueda contar cuantos elementos de unarreglo son mayores a x valor dado en osa parametros
const mayorValorVeces = (valorX) => {
    const array = [2, 4, 5, 9, 5];
    let cont = 0

    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (valorX < element) {
            cont++
        }
    }
    console.log(`Estos son los numeros mayores ${cont} a ${valorX}`);
}

mayorValorVeces(4)

// *Crea una funcin que reciba un array de numeros y regrese la lista de numerospares que se encuentren en el array

const pares = (arrarNun) => {
    const arrayPares = []

    for (let index = 0; index < arrarNun.length; index++) {
        const element = arrarNun[index];
        if (element % 2 == 0) {
            arrayPares.push(element)
        }
    }
    return arrayPares
}

const value = [4, 5, 6, 7, 8, 9]
const nuevos = pares(value)
console.log(nuevos)

// *Cuantas veces aparece un array repetido

const repetido = (valorX, elArray) => {
    let cont = 0

    for (let index = 1; index < elArray.length; index++) {
        const element = elArray[index];
        if (valorX == element) {
            cont++
        }
    }
    console.log(`Se repite ${cont} veces el valor: ${valorX}`);
}
const array = [2, 4, 4, 9, 5];
repetido(4, array)


// *Crea una funcio que reciba un array que contenga una lista de string y que reciba un string para conparar si se tiene ese strin retorna false s true

const comparacion = (arreglo, palabra) => {
    let estar = false;
    for (let index = 0; index < arreglo.length; index++) {
        const element = arreglo[index];
        if (palabra == element) {
            estar = true
        }
    }
    return estar
}

const arr = ['hola', 'como', 'estas', 'espero']
const busqueda = 'El pepe'

let pasarLista = comparacion(arr, busqueda)
console.log(pasarLista)

// *Crear una funcion que parta un arreglo por la mitad y te regrese la segunda mitad

const regresoMitad = (array) => {
    let mitad
    let nuevoArray = []
    if (array.length % 2 == 0) {
        mitad = array.length / 2
    } else {
        mitad = (array.length + 1) / 2
    }
    for (let index = mitad; index < array.length; index++) {
        const element = array[index];
        nuevoArray.push(element)
    }
    return nuevoArray
}

const lista = [4, 5, 7, 5, 8]
const resultado = regresoMitad(lista)
console.log(resultado)

// *Crea una funcion que reciba 3 array los concatene y reciba un nuevo arreglo

const conArray = (array1, array2, array3) => {

    let array = []

    for (let index = 0; index < array1.length; index++) {
        const element = array1[index];
        array.push(element)
    }
    for (let index = 0; index < array2.length; index++) {
        const element = array2[index];
        array.push(element)
    }
    for (let index = 0; index < array3.length; index++) {
        const element = array3[index];
        array.push(element)
    }

    return array
}

const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const array3 = [11, 12, 13, 14]
const resultadoArr = conArray(array1, array2, array3)
console.log(resultadoArr)

// *Crea una funcion que pueda generar 'n' elementos de la serie de fibonacci
// *donde `n'  esta dado por el argumento de la funcion
const fibonacci = (num) => {
    let arr = []
    let serie
    for (let index = 0; index < num; index++) {
        if (index == 0 || index == 1) {
            arr.push(index)
        } else {
            serie = (arr[index - 1]) + (arr[index - 2])
            arr.push(serie)
        }
    }
    return arr
}

let numInicial = 30
let srieFibonacci = fibonacci(numInicial)
console.log(srieFibonacci)

// *Crea una funcion que reciba un strin si el string contiene una letra mayuscula retornar false

const mayus = (palabra) => {
    let arr = palabra.split('')
    let valor = true
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === element.toUpperCase()) {
            valor = false
        }
    }
    return valor
}

let palabra = 'hola'
let resultadoMayus = mayus(palabra)
console.log(resultadoMayus)

// *Crea una funcion que reciba un string y retorne true si es un palindromo

const palindromo = (palabra) => {
    let txt = palabra.toLowerCase()
    txt.split('')

    let txtrever = txt.length - 1
    let arreglo = []
    let validacion = false

    for (let index = txtrever; index >= 0; index--) {
        const element = txt[index];
        arreglo.push(element)
    }
    if (txt == arreglo.join('')) {
        validacion = true
    }

    return validacion
}

const palabra2 = 'Eve'
console.log(palindromo(palabra2))

// *Crea una funcion donde se introdusca un string y se coloquen al inicio de cada palabra mayus

const capitalizarPalabras = (val) => {

    return val.toLowerCase()
        .trim()
        .split(' ')
        .map(v => v[0].toUpperCase() + v.substr(1))
        .join(' ');
}

console.log(capitalizarPalabras('hola como estas'))

// *modo dificil

const capLetter = ( palabra ) => {

    let oracion
    let oracionMod = palabra.split('')
    for (let index = 0; index < oracionMod.length-1; index++) {
        if( index == 0 ){
            oracionMod[ index ] = oracionMod[ index ].toUpperCase()
        }
        if(oracionMod[ index ] == " "){
            oracionMod[ index + 1 ] = oracionMod[ index + 1 ].toUpperCase()
        }
    }
    oracion = oracionMod.join('')
    return oracion
}

const frase = "hola como estas"
console.log( capLetter( frase ) )

// *Crea una funcion que acepte multples palabras y nos regrese la palabra mas larga
const separar = (frase) => {
    let frasearr = frase.split(' ')
    let arr = []
    let retorno
    for (let index = 0; index < frasearr.length; index++) {
        arr.push (frasearr[index].split(''));
    }

    let fraseMayor = 0
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if( fraseMayor < element.length){
            retorno = element.join('')
            fraseMayor = element.length
        }
    }
    return retorno
}

let frase1 = 'hola comoooooooooooo asderty estas anticonstitucionalmente';
console.log(separar(frase1));

// *Crear una fun

const charRepetido = (valorX, oracion) => {
    let cont = 0
    elArray=oracion.split('')
    for (let index = 0; index < elArray.length; index++) {
        const element = elArray[index];
        if (valorX == element) {
            cont++
        }
    }
    console.log(`Se repite ${cont} veces el valor: ${valorX}`);
}
const discurso = "En este die estaremos mejor que never";
charRepetido("e", discurso)


// const multiplicar = (numUno, numDos) => numUno * numDos

// let multiplicacion = multiplicar(1, 3)

// console.log(multiplicar(1, 3))

// if (multiplicar(1, 3) == 3) {
//     console.log('hola mundo')
// }

// let objeto = {
//     saludar: function() {
//         console.log('hola')
//     }
// }

// console.log(objeto.saludar())


// =======================================================================


//1
let suma = function ( numUno,numDos ) {
    let resultado = numUno + numDos;
    return resultado;
}

console.log( suma( 5,5 ) );
console.log( `El resultado de la suma es: ${suma( 5,5 )}` );

//2

let saludo = function( saludar = "amigo" ){
    return `Hola ${saludar}`;
}

console.log( saludo('Fanny') );
console.log( saludo() );

let saludo2 = ( saludar = "amigo" ) => {
    return `Hola ${saludar}`;
};

console.log( saludo2('Fanny') );
console.log( saludo2() );

//3

let num = 1;

const sumatoria = () => {
    num = ++num;
    console.log(num);
}

sumatoria();

//4

const numeros = (num) => {

    let resultado;

    if ( (num % 2) == 0  ){
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

console.log(numeros(41));




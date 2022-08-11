//generar un programa que te diga si un numero es mayor que otro

let numUno      = 1;
let numDos      = 2;
let comparacion = false;

if ( numUno > numDos ){

    comparacion = true
    console.log(`El numero uno es mayor que numero dos: ${ comparacion }`)

}else if( numUno < numDos ){

    comparacion = true
    console.log(`El numero dos es mayor que numero uno: ${ comparacion }`)

}else{
    console.log(`El numero dos es igual que numero uno: ${ comparacion }`)
}
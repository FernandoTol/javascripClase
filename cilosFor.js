// *split()
    let str = 'Leon,Caballo,Iguana,Lobo';
    let arr = str.split(',');
    //dividir la cadena de texto por una coma
    console.log(arr);
    //["Leon", "Caballo", "Iguana", "Lobo"]


    let str1 = 'soylenin';
    let arr1 = str1.split('');
    console.log(arr1);
    // ["s", "o", "y", "l", "e", "n", "i", "n"]


    let str2 = 'Golf | Hockey | Football | Tennis';
    let arr2 = str2.split(' | ', 2);
    console.log(arr1);
    // ['Golf', 'Hock



// * Array.from()
    let str = 'soylenin';
    let arr = Array.from(str);
    console.log(arr);
// ["s", "o", "y", "l", "e", "n", "i", "n"]


    let str = 'soylenin';
    let arr = Array.from(str, (val, index) => val + index);
    // adding index value to each element of array
    console.log(arr);
    // ["s0", "o1", "y2", "l3", "e4", "n5", "i6", "n7"]



let str = 'soylenin';
let arr = [...str];
console.log(arr);
// ["s", "o", "y", "l", "e", "n", "i", "n"]



let str = 'soylenin';
let arr = Object.assign([], str);
console.log(arr);
// ["s", "o", "y", "l", "e", "n", "i", "n"]
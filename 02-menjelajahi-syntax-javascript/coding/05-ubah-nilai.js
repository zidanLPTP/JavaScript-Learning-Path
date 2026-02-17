// Konversi Eksplisit
// TIPE DATA KE STRING

const number = 123;
const boolean = true;

// keduanya sama-sama mengembalikan string
const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strBoolean);
console.log(typeof strBoolean);

console.log(strNumber);
console.log(typeof strNumber);

// TIPE DATA KE NUMBER
const strNumber1 = '12345';
const strFloat1 = '3.14';
const boolean1 = true;

const numFromString = Number(strNumber1);
const floatFromString = Number(strFloat1);
const numFromBoolean = Number(boolean1);

console.log(numFromString); 
console.log(floatFromString); 
console.log(numFromBoolean);

// parseInt
let cm = '69cm';
let intDariCm = parseInt(cm);
console.log(intDariCm);

// parseFloat
let px = `64.23px`;
let floatDariPx = parseFloat(px);
console.log(floatDariPx);

// TIPE DATA KE BOOLEAN
const number1 = 123;
const string1 = 'Dicoding';
const empty1 = null;

const boolDariNumber = Boolean(number1);
const boolDariString = Boolean(string1);
const boolDariNull = Boolean(empty1);

console.log(boolDariNumber); 
console.log(boolDariString); 
console.log(boolDariNull); 

// Konversi Implisit

let umur = 10;
let pesan = `Umur saya ` + umur;
console.log(pesan);

let nomor = '25';
let hasil = nomor * 25;
console.log(hasil);

let bool = false;
let hasil2 = 1 + bool;
console.log(hasil2);

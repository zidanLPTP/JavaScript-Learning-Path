// STRING
let string1 = "Ini string.\n";
let string2 = 'ini juga \nstring.\n';
let string3 = `ini juga.
string lhoo`;

console.log(string1);
console.log(string2);
console.log(string3);

// terlihatlah perbedaan '' , "" dan ``

const tahunIni = new Date().getFullYear();
console.log(`sekarang adalah tahun ${tahunIni}.`);

// NUMBER
let number1 = 123;
let number2 = 123.123;
let number3 = NaN; // Not a Number
let number4 = Infinity;

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);

// BOOLEAN
let selesai = true;
let tidakSelesai = false;
let lebihBesar = 10 > 5;

console.log(selesai, tidakSelesai);
console.log(`apakah 10 > 5 ${lebihBesar}`);

// NULL
let variabelNull = null;
let variabelUndefined; // undefined

console.log(variabelNull);
console.log(variabelUndefined);

const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

// ini perbedaan null dan undefined
console.log(JSON.stringify(name1));
console.log(JSON.stringify(name2));

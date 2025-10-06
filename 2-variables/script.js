//  /$$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$$         /$$
// | $$__  $$ /$$__  $$| $$__  $$|__  $$__/       /$$$$
// | $$  \ $$| $$  \ $$| $$  \ $$   | $$         |_  $$
// | $$$$$$$/| $$$$$$$$| $$$$$$$/   | $$           | $$
// | $$____/ | $$__  $$| $$__  $$   | $$           | $$
// | $$      | $$  | $$| $$  \ $$   | $$           | $$
// | $$      | $$  | $$| $$  | $$   | $$          /$$$$$$
// |__/      |__/  |__/|__/  |__/   |__/         |______/

// Hello World! should appear in the console
console.log('Hello World!');

// We will reassign the value of a, so we use let
let numA = 1;
// We will never reassign the value of b, so we use const
const numB = numA + 3;

console.log('value of numB:', numB);
// Alternative with concatenation
// console.log('value of b: ' + b);

numA = 3;
// We assume that numB value is now 6
console.log('new value of numB:', numB);
// In reality, numB is still 4, because the value of numB was set when it was declared
// BONUS TIP: to have numB updated, we can reassign it

//  /$$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$$        /$$$$$$
// | $$__  $$ /$$__  $$| $$__  $$|__  $$__/       /$$__  $$
// | $$  \ $$| $$  \ $$| $$  \ $$   | $$         |__/  \ $$
// | $$$$$$$/| $$$$$$$$| $$$$$$$/   | $$           /$$$$$$/
// | $$____/ | $$__  $$| $$__  $$   | $$          /$$____/
// | $$      | $$  | $$| $$  \ $$   | $$         | $$
// | $$      | $$  | $$| $$  | $$   | $$         | $$$$$$$$
// |__/      |__/  |__/|__/  |__/   |__/         |________/

// je déclare deux variables nbA et nbB et j’initialise nbA à 8 ;
let nbA = 8;
let nbB;
// je stocke nbA + 1 dans nbB ;
nbB = nbA + 1;
// j’ajoute 1 à nbA ;
nbA = nbA + 1;
// j’effectue l’opération 3+2 ;
3 + 2;
// je multiplie nbA par 2 ;
nbA = nbA * 2;
// je retranche 5 à nbB ;
nbB = nbB - 5;
// je multiplie nbB par lui-même.
nbB = nbB * nbB;

console.log('nbA:', nbA);
console.log('nbB:', nbB);

// je mets les chaînes de caractères "i", "an", "g", "ory", "the" dans les variables respectives a, b, c, d, e, en faisant les déclarations de variables nécessaires ;
let a = 'i';
let b = 'an';
let c = 'g';
let d = 'ory';
let e = 'the';
// je mets la variable e suivie de la variable d dans la variable d ;
d = e + d;
// j’insère la chaîne de caractères "b" au début de chacune des deux variables a et b ;
a = 'b' + a;
b = 'b' + b;
// j’ajoute la variable c à la fin de chacune des deux variables a et b ;
a = a + c;
b = b + c;
// je mets dans la variable a la variable e suivie de a suivie de b suivie de d.
a = e + a + b + d;
// BONUS: Using template literals
// a = `${e}${a}${b}${d}`;

console.log('a:', a);

//  /$$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$$        /$$$$$$
// | $$__  $$ /$$__  $$| $$__  $$|__  $$__/       /$$__  $$
// | $$  \ $$| $$  \ $$| $$  \ $$   | $$         |__/  \ $$
// | $$$$$$$/| $$$$$$$$| $$$$$$$/   | $$            /$$$$$/
// | $$____/ | $$__  $$| $$__  $$   | $$           |___  $$
// | $$      | $$  | $$| $$  \ $$   | $$          /$$  \ $$
// | $$      | $$  | $$| $$  | $$   | $$         |  $$$$$$/
// |__/      |__/  |__/|__/  |__/   |__/          \______/

let var1 = 42;
let var2 = 51;

console.log('var1:', var1);
console.log('var2:', var2);

// In order to swap the values of var1 and var2, we need a temporary variable
let temp = var1;
var1 = var2;
var2 = temp;

console.log('var1:', var1);
console.log('var2:', var2);

// BONUS: For numbers, we can also use arithmetic operations
// var1 = var1 + var2; // var1 now holds the sum of both numbers
// var2 = var1 - var2; // var2 is now the original value of var1
// var1 = var1 - var2; // var1 is now the original value of var2

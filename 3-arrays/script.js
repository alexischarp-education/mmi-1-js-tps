console.log('Hello World!');
// déclarer trois variables arr, a et b;
// initialiser arr avec un tableau de 6 cases contenant, dans l’ordre, les lettres a, c, k, m, o et r ;
let arr = ['a', 'c', 'k', 'm', 'o', 'r'];
// initialiser la variable a avec le contenu de la première case de arr suivi du contenu de sa deuxième case ;
let a = arr[0] + arr[1];
// initialiser la variable b avec le contenu de la quatrième case de arr suivi du contenu de sa première case ;
let b = arr[3] + arr[0];
// insérer la lettre “b” au début de la première case de arr;
arr[0] = 'b' + arr[0];
// insérer le contenu de la sixième case de arr au début de a  ;
a = arr[5] + a;
// insérer le contenu de la première case de arr au début de a ;
a = arr[0] + a;
// insérer le contenu de la première case de arr au début de b ;
b = arr[0] + b;
// insérer le contenu de la troisième case de arr à la fin de a ;
a = a + arr[2];
// insérer le contenu de la cinquième case de arr au début de b ;
b = arr[4] + b;
// insérer le contenu de la variable a au début de b.
b = a + b;

console.log(b);

function find(data, content) {}

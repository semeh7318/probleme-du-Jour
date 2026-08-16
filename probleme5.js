 // 1 - Écris une fonction nommée removeElement qui prend un tableau et une valeur
 // en paramètres et retourne un nouveau tableau avec la première occurrence
 // de cette valeur supprimée. Si la valeur n’est pas trouvée, retourne le tableau original.
function removeElement(tableau, valeur) {
  let nouveauTableau = [...tableau];
  let index = nouveauTableau.indexOf(valeur);

  if (index !== -1) {
    nouveauTableau.splice(index, 1);
    return nouveauTableau;
  }

  return tableau;
}
console.log(removeElement([1, 2, 3, 2, 4], 2));
console.log(removeElement([1, 2, 3], 5));




 // 2 - Écris une fonction appelée reverseStr qui prend une chaîne de caractères
 // en entrée et retourne l’inverse de chaque lettre suivie d’un nombre
 // en commençant par zéro (à résoudre avec une boucle while).
 // exemple : reverseStr('hello'); ==> "o0l1l2e3h4"
function reverseStr(chaine) {
  let resultat = "";
  let i = chaine.length - 1;
  let nombre = 0;

  while (i >= 0) {
    resultat = resultat + chaine[i] + nombre;
    i--;
    nombre++;
  }

  return resultat;
}
console.log(reverseStr("hello"));




 // 3- Écris une fonction nommée objKey qui prend un objet en paramètre
 //  et retourne un tableau contenant les clés de l’objet.
 // objKey({name:'ahmed', age:20}) ==> ['name','age']
function objKey(objet) {
  return Object.keys(objet);
}

console.log(objKey({
  name: "ahmed",
  age: 20
}));


// 4- Prends un tableau et supprime chaque deuxième élément de ce tableau.
// Garde toujours le premier élément et commence à supprimer à partir de l’élément suivant.
// Exemple :
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther(myArr) ==> ['Keep', 'Keep', 'Keep']
function removeEveryOther(tableau) {
  let resultat = [];

  for (let i = 0; i < tableau.length; i += 2) {
    resultat.push(tableau[i]);
  }

  return resultat;
}

let myArr = ["Keep", "Remove", "Keep", "Remove", "Keep"];
console.log(removeEveryOther(myArr));
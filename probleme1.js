// 1-Créer une fonction qui combine ton prénom et ton nom et retourne le résultat avec un espace entre les deux.
function fullName(prenom, nom) {
  return `${prenom} ${nom}`;
}

console.log(fullName("Semeh", "Missaoui"));








// 2-Écris une fonction qui prend deux nombres et retourne la moyenne.
function moyenne(nombre1, nombre2) {
  return (nombre1 + nombre2) / 2;
}
 
console.log(moyenne(10, 20));








// 3-Crée une fonction qui prend une chaîne de caractères et retourne le nombre de caractères qu'elle contient.
function nombreCaracteres(chaine) {
  return chaine.length;
}

console.log(nombreCaracteres("missaoui semeh"));








// 4-Crée une fonction qui retourne la sous-chaîne à partir d'une position donnée jusqu'à la fin.
function sousChaine(chaine, position) {
  return chaine.substring(position);
}


console.log(sousChaine("semeh", 2));








/**
 * Trouve le premier élément qui apparaît un nombre pair de fois dans un tableau.
 * N'oublie pas de gérer les éléments avec plusieurs occurrences paires et retourne le premier.
 * Retourne null s'il n'y a aucun élément avec un nombre pair d'occurrences.
 * Exemple d'utilisation :
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); // 4
 */
var evenOccurrence = function(arr) {

  const compteur = {};

  for (const element of arr) {
    if (compteur[element] === undefined) {
      compteur[element] = 1;
    } else {
      compteur[element]++;
    }
  }

  for (const element of arr) {
    if (compteur[element] % 2 === 0) {
      return element;
    }
  }

  return null;
};


var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); 
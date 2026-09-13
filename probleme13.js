/**
 * Déplace tous les zéros à la fin du tableau.
 * L'ordre des autres éléments doit rester inchangé.
 * Ne crée pas de zéros supplémentaires.
 * Exemple d'utilisation :
 * moveZeros([0, 4, 0, 7, 2, 0, 5])  // [4, 7, 2, 5, 0, 0, 0]
 */
var moveZeros = function(arr) {
  var resultat = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      resultat.push(arr[i]);
    }
  }

  var nombreDeZeros = arr.length - resultat.length;

  for (var j = 0; j < nombreDeZeros; j++) {
    resultat.push(0);
  }

  return resultat;
};


/**
 * Un tableau contient les nombres de 1 à n avec un seul nombre manquant.
 * Trouve et retourne le nombre manquant.
 * Exemple d'utilisation :
 * missingNumber([1, 2, 4, 5, 6])  // 3
 */
var missingNumber = function(arr) {

  var n = arr.length + 1;
  var sommeAttendue = (n * (n + 1)) / 2;

  var sommeReelle = 0;
  for (var i = 0; i < arr.length; i++) {
    sommeReelle += arr[i];
  }

  return sommeAttendue - sommeReelle;
};
//try
console.log(moveZeros([0, 4, 0, 7, 2, 0, 5])); 
console.log(moveZeros([1, 0, 0, 3, 0, 5]));    
console.log(moveZeros([0, 0, 0]));             

console.log(missingNumber([1, 2, 4, 5, 6])); 
console.log(missingNumber([2, 3, 4, 5]));    
console.log(missingNumber([1, 2, 3, 5]));    
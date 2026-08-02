// 1- Crée une fonction qui prend deux nombres et retourne :
// "égaux" s’ils sont identiques
// "différents" sinon
function comparerNombres(nombre1, nombre2) {
  if (nombre1 === nombre2) {
    return "égaux";
  } else {
    return "différents";
  }
}
console.log(comparerNombres(14, 14));
console.log(comparerNombres(10, 5));  



// 2- Crée une fonction qui prend une chaîne et retourne true
// si elle est vide, sinon false
function estVide(chaine) {
  return chaine === "";
}

console.log(estVide(""));        
console.log(estVide("semeh")); 



// 3- Crée une fonction qui prend une vitesse et retourne :
// "lent" si inférieure à 30
// "normal" si entre 30 et 90
// "rapide" si supérieure à 90
function vitesse(vitesse) {
  if (vitesse < 30) {
    return "lent";
  } else if (vitesse <= 90) {
    return "normal";
  } else {
    return "rapide";
  }
}

console.log(vitesse(20));   
console.log(vitesse(50));   
console.log(vitesse(120));  




// 4- Crée une fonction qui prend un nombre et retourne true
// s’il est divisible par 2 OU par 3
// MAIS PAS par les deux en même temps
function estDivisible(nombre) {
  const divisiblePar2 = nombre % 2 === 0;
  const divisiblePar3 = nombre % 3 === 0;

  return divisiblePar2 !== divisiblePar3;
}
 
console.log(estDivisible(4)); 
console.log(estDivisible(6));  
console.log(estDivisible(9));      
console.log(estDivisible(5));   

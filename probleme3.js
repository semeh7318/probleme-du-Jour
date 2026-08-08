

// 1- Écris une fonction factorielleN qui calcule la factorielle de n avec une boucle while.
function factorielleN(n) {
  let resultat = 1;
  let i = 1;

  while (i <= n) {
    resultat = resultat * i;
    i++;
  }

  return resultat;
}

console.log(factorielleN(5)); 
console.log(factorielleN(4)); 
console.log(factorielleN(3));

// 2- Écris une fonction afficheMultiplesDe3 qui prend un nombre n et affiche tous les multiples de 3 de 0 jusqu’à n.
function afficheMultiplesDe3(n) {
  let i = 0;

  while (i <= n) {
    console.log(i);
    i = i + 3;
  }
}

console.log(afficheMultiplesDe3(15));

// 3- Crée une fonction qui prend un nombre et affiche "Bonjour" ce nombre de fois avec while.
function afficherBonjour(n) {
  let i = 0;

  while (i < n) {
    console.log("Bonjour");
    i++;
  }
}

console.log(afficherBonjour(5));

// 4- Écris une fonction compteVoyelles qui prend une chaîne de caractères et compte le nombre de voyelles avec une boucle while.
function compteVoyelles(chaine) {
  let i = 0;
  let compteur = 0;

  while (i < chaine.length) {
    if (
      chaine[i] === "a" ||
      chaine[i] === "e" ||
      chaine[i] === "i" ||
      chaine[i] === "o" ||
      chaine[i] === "u"
    ) {
      compteur++;
    }

    i++;
  }

  return compteur;
}

console.log(compteVoyelles("bonjour"));
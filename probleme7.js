// 1 - Écrire une fonction qui prend un tableau de chaînes et retourne un tableau contenant la longueur de chaque chaîne.
function longueursChaines(tableau) {
  return tableau.map(chaine => chaine.length);
}

console.log(longueursChaines(["chat", "bonjour", "JavaScript", "JS"]));

// 2 - Écrire une fonction qui prend un tableau de chaînes et une lettre, et retourne un tableau contenant uniquement les chaînes qui contiennent cette lettre.
function filtrerChaines(tableau, lettre) {
  return tableau.filter(chaine => chaine.includes(lettre));
}

console.log(
  filtrerChaines(["chat", "chien", "lion", "lapin"], "a")
);

// 3 -Écrire une fonction qui prend un tableau d’objets représentant des étudiants et retourne un tableau ne contenant que les noms.
function obtenirNoms(etudiants) {
  return etudiants.map(etudiant => etudiant.nom);
}

const etudiants = [
  { nom: "Ali", age: 20 },
  { nom: "Ahmed", age: 22 },
  { nom: "Sami", age: 21 }
];

console.log(obtenirNoms(etudiants));

//4-Écrire une fonction qui prend un tableau de tableaux de nombres et retourne la somme de tous les nombres.
function sommeTousLesNombres(tableau) {
  let somme = 0;

  for (const sousTableau of tableau) {
    for (const nombre of sousTableau) {
      somme += nombre;
    }
  }

  return somme;
}

const tableau = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8]
];

console.log(sommeTousLesNombres(tableau));

  


//=======================================================================
//                                  Q1
//=======================================================================

// Écrire une fonction qui prend un tableau de chaînes en entrée
// et retourne un tableau contenant toutes ces chaînes,
// mais converties en majuscules.
// Résolvez cela en utilisant l'une des fonctions utilitaires
// les plus appropriées  (map, filter, reduce).

// var tableauChaines = ['bonjour', 'monde', 'tourne', 'pois'];
// mettreEnMajuscules(tableauChaines); 
// ==> [ 'BONJOUR', 'MONDE', 'TOURNE', 'POIS' ]

function mettreEnMajuscules(tableauChaines) {
    return tableauChaines.map(function (chaine) {
        return chaine.toUpperCase();
    });
}
var tableauChaines = ['bonjour', 'monde', 'tourne', 'pois'];
console.log("Q1 :", mettreEnMajuscules(tableauChaines));

//=============================================================================
//                                  Q2
//=============================================================================

// Écrire une fonction qui prend un tableau d'objets en entrée
// et retourne un tableau contenant uniquement les pays
// dont la population est supérieure à 500 millions.
// Résolvez cela en utilisant l'une des fonctions utilitaires
// les plus appropriées   (map, filter, reduce).

// Voici les données avec lesquelles vous allez travailler :

var donnees = [
    {
      pays: "Chine",
      population: 1409517397
    },
    {
      pays: "Inde",
      population: 1339180127
    },
    {
      pays: "États-Unis",
      population: 324459463
    },
    {
      pays: "Indonésie",
      population: 263991379
    }
];

// paysLesPlusPeuples(donnees);
// ==> [
//   {pays: "Chine", population: 1409517397},
//   {pays: "Inde", population: 1339180127}
// ]

function paysLesPlusPeuples(tableauPays) {
    return tableauPays.filter(function (element) {
        return element.population > 500000000;
    });
}
console.log("Q2 :", paysLesPlusPeuples(donnees));


//=============================================================================
//                                  Q3
//=============================================================================

// Écrire une fonction appelée diviserParDeux qui prend un tableau
// de nombres en entrée et retourne un tableau
// avec tous ces nombres divisés par deux.
// Résolvez cela en utilisant l'une des fonctions utilitaires
// les plus appropriées   (map, filter, reduce).

// var tableauNombres = [2, 6, 20, 8, 14];
// diviserParDeux(tableauNombres); ==> [1, 3, 10, 4, 7]

function diviserParDeux(tableauNombres) {
    return tableauNombres.map(function (nombre) {
        return nombre / 2;
    });
}
var tableauNombres = [2, 6, 20, 8, 14];
console.log("Q3 :", diviserParDeux(tableauNombres));

//=============================================================================
//                                  Q4
//=============================================================================

// Écrire une fonction appelée valeurs qui accepte un objet en paramètre
// et retourne un tableau contenant les valeurs de cet objet.
// Résolvez cela en utilisant l'une des fonctions utilitaires
// les plus appropriées   (map, filter, reduce).
// valeurs({
//     premier: 5,
//     deuxieme: 'quelque chose',
//     troisieme: 129
// });
// ==> [5, 'quelque chose', 129]

function valeurs(objet) {
    return Object.keys(objet).map(function (cle) {
        return objet[cle];
    });
}
console.log(valeurs({
    premier: 5,
    deuxieme: 'quelque chose',
    troisieme: 129
}));


//=============================================================================
//                                  Q5
//=============================================================================

// Écrire une fonction appelée chaineLaPlusCourte qui accepte
// un tableau de chaînes et retourne la chaîne la plus courte.
// Résolvez cela en utilisant l'une des fonctions utilitaires
// les plus appropriées   (map, filter, reduce).
// chaineLaPlusCourte(["salut", "a", "longue", "oui"]);
// ==> "a"

function chaineLaPlusCourte(tableauChaines) {
    return tableauChaines.reduce(function (plusCourte, courante) {
        return courante.length < plusCourte.length ? courante : plusCourte;
    });
}

console.log("Q5 (reduce) :", chaineLaPlusCourte(["salut", "a", "longue", "oui"]));


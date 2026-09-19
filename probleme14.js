
// 1 - Écrire une fonction qui prend un tableau de nombres et retourne un tableau où chaque nombre est augmenté de 10 % en utilisant map.
 function augmenterDe10Pourcent(nombres) {
  const resultat = nombres.map(function (nombre) {
    return nombre + nombre * 0.1;
  });
  return resultat;
}
console.log(augmenterDe10Pourcent([100, 200, 50]));

// 2 - Écrire une fonction qui prend un tableau de phrases et retourne un tableau contenant le nombre de lettres de chaque phrase (sans compter les espaces) en utilisant foreach .


function compterLettres(phrases) {
  const resultat = [];
  phrases.forEach(function (phrase) {
    const sansEspaces = phrase.split(" ").join("");
    resultat.push(sansEspaces.length);
  });
 
  return resultat;
}
console.log(compterLettres(["Bonjour tout le monde", "Salut", "J'aime JavaScript"]));

// 3 - Écrire une fonction qui prend un tableau de nombres et affiche la moyenne de tous les nombres en utilisant foreach .

function afficherMoyenne(nombres) {
  let somme = 0;
 
  nombres.forEach(function (nombre) {
    somme = somme + nombre;
  });
  const moyenne = somme / nombres.length;
  console.log("La moyenne est : " + moyenne);
}
console.log(afficherMoyenne([10, 20, 30, 40]));

// 4 - Écrire une fonction appelée agesEnMinutes qui
//  prend en paramètre un tableau d’objets et
//  retourne un nouveau tableau d’objets après avoir converti les âges de années en minutes
//  en utilisant map.
// 
//  var personnes = [{
//        nom: {
//              prenom: 'Majd',
//            secondPrenom: 'Eddin',
//      },
//       age: 30
//       }, {
//       nom: {
//             prenom: 'Fatima',
//             nomFamille: 'Himmamy'
//        },
//        age: 26
//        }, {
//        nom: {
//              prenom: 'Sahar',
//              secondPrenom: 'MHD'
//        },
//        age: 27
//        }, {
//        nom: {
//              prenom: 'Nour',
//              secondPrenom: 'Eddin',
//        },
//        age: 15
//        }, {
//        nom: {
//              prenom: 'Ahmad',
//              nomFamille: 'Awad'
//        },
//        age: 33
//  }];
// 

var personnes = [
  {
    nom: { prenom: "Majd", secondPrenom: "Eddin" },
    age: 30,
  },
  {
    nom: { prenom: "Fatima", nomFamille: "Himmamy" },
    age: 26,
  },
  {
    nom: { prenom: "Sahar", secondPrenom: "MHD" },
    age: 27,
  },
  {
    nom: { prenom: "Nour", secondPrenom: "Eddin" },
    age: 15,
  },
  {
    nom: { prenom: "Ahmad", nomFamille: "Awad" },
    age: 33,
  },
];
 
function agesEnMinutes(tableauPersonnes) {
  const minutesParAn = 365 * 24 * 60;
 
  const nouveauTableau = tableauPersonnes.map(function (personne) {
    return {
      ...personne,
      age: personne.age * minutesParAn,
    };
  });
 
  return nouveauTableau;
}
var resultat = agesEnMinutes(personnes);
console.log(resultat);
console.log("Âge original de Majd :", personnes[0].age); 
console.log("Âge de Majd en minutes :", resultat[0].age); 
 
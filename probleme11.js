// A

// Créez une classe appelée Minuteur avec un constructeur
// qui reçoit un paramètre : secondes.
//
// La classe doit avoir les propriétés suivantes :
// secondes, valeurInitiale, estEnCours, interval
//
// secondes : le nombre de secondes restantes.
// valeurInitiale : la durée initiale du minuteur.
// estEnCours : indique si le minuteur est en cours.
// interval : permet de stocker l'intervalle du minuteur.
//
// estEnCours doit être initialisé par défaut à false.
// interval doit être initialisé par défaut à null.


// B

// Implémentez les méthodes suivantes:
//
// 1) demarrer : si le minuteur est déjà en cours,
// retournez "Le minuteur est déjà en cours".
//
// Si le minuteur n'est pas en cours :
// - changez estEnCours à true.
// - affichez "Le minuteur démarre !"


// 2) arreter : si le minuteur n'est pas en cours,
// retournez "Le minuteur est déjà arrêté".
//
// Si le minuteur est en cours :
// - arrêtez l'intervalle.
// - changez estEnCours à false.
// - affichez "Le minuteur est arrêté".


// 3) afficherTemps :
//
// Affichez :
// "Temps restant : [NOMBRE] secondes"


// 4) diminuerTemps :
//
// Cette méthode diminue secondes de 1.
//
// Si secondes atteint 0 :
// - affichez "Temps restant : 0 secondes"
// - affichez "Terminé !"
// - arrêtez l'intervalle.
// - changez estEnCours à false.
//
// Sinon, affichez le temps restant.
//
//
// Exemple :
// secondes = 3
//
// diminuerTemps() => "Temps restant : 2 secondes"
// diminuerTemps() => "Temps restant : 1 seconde"
// diminuerTemps() => "Temps restant : 0 secondes"
// => "Terminé !"



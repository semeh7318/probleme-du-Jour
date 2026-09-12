
// Créer une classe Commande

// Les commandes doivent avoir les propriétés suivantes :
// - Un numéro de commande
// - Un tableau contenant tous les plats
// - Nombre de plats prêts
// - Nombre de plats en attente
// - Le prix total de la commande
// - Un état indiquant si la commande est payée (true ou false)

// Créer une autre classe appelée Plat

// Chaque Plat doit avoir plusieurs propriétés :
// - Nom
// - Prix
// - Quantité
// - Prêt (true ou false)

// Chaque Commande doit avoir quelques méthodes :

// .ajouter(plat)
// → doit ajouter un plat à la commande.
// → augmenter le nombre de plats en attente.

// .preparerPlat(nom)
// → doit rechercher le plat grâce à son nom.
// → s'il existe et qu'il n'est pas encore prêt,
//    le marquer comme prêt.
// → augmenter le nombre de plats prêts.
// → diminuer le nombre de plats en attente.

// .calculerTotal()
// → doit calculer le prix total de la commande.
// → le total d'un plat est : prix × quantité.
// → enregistrer le résultat dans la propriété "total".

// .payer()
// → doit vérifier que tous les plats sont prêts.
// → si ce n'est pas le cas, retourner
//    "Impossible de payer : tous les plats ne sont pas prêts."
// → sinon,
//    calculer le total,
//    marquer la commande comme payée,
//    retourner "Paiement effectué."

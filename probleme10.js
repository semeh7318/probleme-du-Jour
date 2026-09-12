
// Créer une classe Commande

// Les commandes doivent avoir les propriétés suivantes :
// - Un numéro de commande
// - Un tableau contenant tous les plats
// - Nombre de plats prêts
// - Nombre de plats en attente
// - Le prix total de la commande
// - Un état indiquant si la commande est payée (true ou false)
class Commande {
  constructor(numero) {
    this.numero = numero;
    this.plats = [];          
    this.platsPrets = 0;      
    this.platsEnAttente = 0;  
    this.total = 0;           
    this.payee = false;       
  }

  ajouter(plat) {
    this.plats.push(plat);
    this.platsEnAttente++;
  }

// .preparerPlat(nom)
// → doit rechercher le plat grâce à son nom.
// → s'il existe et qu'il n'est pas encore prêt,
//    le marquer comme prêt.
// → augmenter le nombre de plats prêts.
// → diminuer le nombre de plats en attente.
preparerPlat(nom) {
    const plat = this.plats.find(p => p.nom === nom);

    if (plat && !plat.pret) {
      plat.pret = true;
      this.platsPrets++;
      this.platsEnAttente--;
    }
  }
// .calculerTotal()
// → doit calculer le prix total de la commande.
// → le total d'un plat est : prix × quantité.
// → enregistrer le résultat dans la propriété "total".
calculerTotal() {
    let total = 0;
    for (const plat of this.plats) {
      total += plat.prix * plat.quantite;
    }
    this.total = total;
    return this.total;
  }
// .payer()
// → doit vérifier que tous les plats sont prêts.
// → si ce n'est pas le cas, retourner
//    "Impossible de payer : tous les plats ne sont pas prêts."
// → sinon,
//    calculer le total,
//    marquer la commande comme payée,
//    retourner "Paiement effectué."
 payer() {
    const tousPrets = this.plats.every(plat => plat.pret);

    if (!tousPrets) {
      return "Impossible de payer : tous les plats ne sont pas prêts.";
    }

    this.calculerTotal();
    this.payee = true;
    return "Paiement effectué.";
  }

}

// Créer une autre classe appelée Plat

// Chaque Plat doit avoir plusieurs propriétés :
// - Nom
// - Prix
// - Quantité
// - Prêt (true ou false)
class Plat {
  constructor(nom, prix, quantite) {
    this.nom = nom;
    this.prix = prix;
    this.quantite = quantite;
    this.pret = false; 
  }
}

 const commande1 = new Commande(1);

commande1.ajouter(new Plat("Pizza", 10, 2));
commande1.ajouter(new Plat("Salade", 5, 1));

console.log(commande1.payer()); 

commande1.preparerPlat("Pizza");
commande1.preparerPlat("Salade");

console.log(commande1.payer()); 
console.log(commande1.total);  
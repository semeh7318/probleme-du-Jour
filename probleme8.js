var seauDeParesseux = [
  { nom: { prenom: "Poilu", deuxiemePrenom: "Dangereux", nomDeFamille: "Assassin" }, age: 2 },
  { nom: { prenom: "Lent", nomDeFamille: "Citrouille" }, age: 3 },
  { nom: { prenom: "Balle", deuxiemePrenom: "Blindé", nomDeFamille: "Paresseux" }, age: 4 },
  { nom: { prenom: "Bisou", deuxiemePrenom: "Bisou", nomDeFamille: "Chignon" }, age: 5 },
  { nom: { prenom: "Jungle", nomDeFamille: "Duveteux" }, age: 2 },
];

function nomComplet(tableau, position) {
  const { prenom, deuxiemePrenom, nomDeFamille } = tableau[position].nom;
  return [prenom, deuxiemePrenom, nomDeFamille].filter(Boolean).join(" ");
}

function plusLongNom(tableau) {
  let indexPlusLong = 0;
  let longueurMax = nomComplet(tableau, 0).length;
  for (let i = 1; i < tableau.length; i++) {
    const longueurActuelle = nomComplet(tableau, i).length;
    if (longueurActuelle > longueurMax) {
      longueurMax = longueurActuelle;
      indexPlusLong = i;
    }
  }
  return tableau[indexPlusLong];
}

function creerCamarade(prenom, nom, age, genre, ville, passeTemps) {
  return { prenom, nom, age, genre, ville, passeTemps };
}

var camarades = [];

camarades.push(creerCamarade("Amine", "Ben Salah", 21, "M", "Tunis", "football"));
camarades.push(creerCamarade("Sarra", "Trabelsi", 22, "F", "Sfax", "lecture"));
camarades.push(creerCamarade("Youssef", "Gharbi", 20, "M", "Sousse", "jeux vidéo"));
camarades.push(creerCamarade("Lina", "Kefi", 23, "F", "Tunis", "peinture"));

function afficherAmi(camarade) {
  return `${camarade.prenom} ${camarade.nom}, ${camarade.age} ans, originaire de ${camarade.ville}, aime ${camarade.passeTemps}.`;
}

function ajouterAmi(camarade) {
  camarades.push(camarade);
  return camarades;
}

function nombredeMale(tableauCamarades) {
  return tableauCamarades.filter((camarade) => camarade.genre === "M").length;
}

function recherche(query, tableauCamarades) {
  const q = query.toLowerCase();
  return tableauCamarades.filter((camarade) => {
    return (
      camarade.prenom.toLowerCase().includes(q) ||
      camarade.nom.toLowerCase().includes(q) ||
      camarade.ville.toLowerCase().includes(q)
    );
  });
}

console.log(nomComplet(seauDeParesseux, 0));
console.log(plusLongNom(seauDeParesseux));
console.log(afficherAmi(camarades[0]));
ajouterAmi(creerCamarade("Karim", "Jlassi", 24, "M", "Bizerte", "natation"));
console.log(nombredeMale(camarades));
console.log(recherche("tunis", camarades));
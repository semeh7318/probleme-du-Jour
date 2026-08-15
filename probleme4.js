
// 1- Écris une fonction puissanceQuiAffiche qui prend deux nombres base et puissance et affiche toutes les puissances de base de 1 à puissance.
function puissanceQuiAffiche(base, puissance) {
    for (let i = 1; i <= puissance; i++) {
        console.log(base ** i);
    }
    return base ** puissance;
}

console.log(puissanceQuiAffiche(2, 4));


// 2- Écris une fonction afficheDiviseurs qui prend un nombre n et affiche tous ses diviseurs.

function afficheDiviseurs(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
    return n;
}

console.log(afficheDiviseurs(12));

// 3- Écris une fonction afficheNombresImpaire qui prend un nombre n et affiche tous les nombres impairs de 1 à n.

function afficheNombresImpaire(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
    return n;
}

console.log(afficheNombresImpaire(10));

// 4- Écris une fonction afficheMotInverse qui prend une chaîne de caractères et affiche les lettres dans l’ordre inverse.

function afficheMotInverse(chaine) {
    let resultat = "";

    for (let i = chaine.length - 1; i >= 0; i--) {
        resultat = resultat + chaine[i];
    }

    return resultat;
}

console.log(afficheMotInverse("hello"));
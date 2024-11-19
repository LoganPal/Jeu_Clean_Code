const JeuDeDevinette = require("./RandomNumber");
const JeuDeDevinetteVersionBig = require("./RandomNumberBig");
const JeuDeDevinetteVersionMoreBig = require("./RandomNumberMoreBig");
const readline = require("readline");

const jeu = new JeuDeDevinette();
const jeuBig = new JeuDeDevinetteVersionBig();
const jeuMoreBig = new JeuDeDevinetteVersionMoreBig();
var niveau = 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function afficherNiveau() {
    if (niveau === 1) 
        console.log("Niveau 1 :");
    if (niveau === 2) 
        console.log("Niveau 2 :");
    if (niveau === 3) 
        console.log("Niveau 3 :");
}

// Jeu standard (1-100)
function jouerJeuStandard() { 

    afficherNiveau();

    rl.question("Devinez un nombre entre 1 et 100 : ", (input) => {
        const proposition = parseInt(input, 10);

        if (isNaN(proposition)) {
            console.log("Veuillez entrer un nombre valide.");
            return jouerJeuStandard();
        }

        const resultat = jeu.devinerNombre(proposition);
        console.log(resultat);

        if (resultat === "Bravo ! Vous avez trouvé le nombre.") {
            return jouerJeuBig(); 
        }

        jouerJeuStandard(); 
    });
}

// Jeu Big (1-1000)
function jouerJeuBig() {

    niveau++;
    afficherNiveau();

    rl.question("Maintenant, devinez un nombre entre 1 et 1000 : ", (input) => {
        const proposition = parseInt(input, 10);

        if (isNaN(proposition)) {
            console.log("Veuillez entrer un nombre valide.");
            return jouerJeuBig();
        }

        const resultat = jeuBig.devinerNombre(proposition);
        console.log(resultat);

        if (resultat === "Bravo ! Vous avez trouvé le GROS nombre.") {
            jouerJeuMoreBig();
        } else {
            jouerJeuBig(); 
        }
    });
}

// Jeu Version encore plus grande (1-10000)
function jouerJeuMoreBig() {

    niveau++;
    afficherNiveau();
    
    rl.question(" Ensuite, devinez un nombre entre 1 et 10000 : ", (input) => {
        const proposition = parseInt(input, 10);

        if (isNaN(proposition)) {
            console.log("Veuillez entrer un nombre valide.");
            return jouerJeuMoreBig();
        }

        const resultat = jeuMoreBig.devinerNombre(proposition);
        console.log(resultat);

        if (resultat === "Bravo ! Vous avez trouvé l'ultra GROS nombre.") {
            rl.close(); 
        } else {
            jouerJeuMoreBig(); 
        }
    });
}

console.log("Bienvenue au jeu de devinette !");
jouerJeuStandard();

module.exports = { jouerJeuStandard, jouerJeuBig, jouerJeuMoreBig };

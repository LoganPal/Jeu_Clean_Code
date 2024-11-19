class JeuDeDevinetteVersionBig {
    constructor() {
        this.randomNumber = this.generateRandomNumber();
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 10000) + 1;
    }

    devinerNombre(proposition) {
        if (proposition < this.randomNumber) 
            return "C'est plus grand.";
        
        if (proposition > this.randomNumber) 
            return "C'est plus petit.";

        if (proposition === this.randomNumber)
            return "Bravo ! Vous avez trouvé l'ultra GROS nombre.";
        
    }
}

module.exports = JeuDeDevinetteVersionBig;

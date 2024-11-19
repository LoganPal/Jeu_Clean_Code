class JeuDeDevinetteVersionBig {
    constructor() {
        this.randomNumber = this.generateRandomNumber();
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 1000) + 1;
    }

    devinerNombre(proposition) {
        if (proposition < this.randomNumber) 
            return "C'est plus grand.";

        if (proposition > this.randomNumber) 
            return "C'est plus petit.";

        if (proposition === this.randomNumber)
            return "Bravo ! Vous avez trouvé le GROS nombre.";
        
    }
}

module.exports = JeuDeDevinetteVersionBig;

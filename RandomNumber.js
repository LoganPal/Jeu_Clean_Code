class JeuDeDevinette {
    constructor() {
        this.randomNumber = this.generateRandomNumber();
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    devinerNombre(proposition) {
        if (proposition < this.randomNumber) 
            return "C'est plus grand.";

        if (proposition > this.randomNumber) 
            return "C'est plus petit.";
        
        if (proposition === this.randomNumber)
            return "Bravo ! Vous avez trouvé le nombre.";
        
    }
}

module.exports = JeuDeDevinette;

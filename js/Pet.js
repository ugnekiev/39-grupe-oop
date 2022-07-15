class Pet {
    constructor (name){
        this.vardas = name;
        this.sound = 'au miau!'
    }

    intro () {
        return `Hi, may name ${this.vardas} and I say ${this.sound}`
    }
    triukas () {
        return `${this.vardas} moka triuka: [triuko pavadinimas]`
    }
    
}

export {Pet};
import { Pet } from "./Pet.js";

class Dog extends Pet {
    constructor (name) {
        super (name);
        this.sound = 'au au!';
    }

}

export {Dog};
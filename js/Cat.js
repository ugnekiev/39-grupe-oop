import { Pet } from "./Pet.js";

class Cat extends Pet {
    constructor (name) {
        super (name);
        this.sound = 'miau miau!';
    }
}

export {Cat};
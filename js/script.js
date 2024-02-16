const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

// factory function to create new objects
const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep: function () {
            console.log (`${this.name} needs a nap. Zzz...`);
            this.isTired = 1;
        },
        play: function (){
            if (this.isTired === 10) {
                console.log("Too tired to play.");
                this.sleep();
            } else {
                console.log (`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            }
        },
    }
    return pet;
};

// Objects to feed to the factory function
const sora = createPet ("sora", "ferret");
const clover = createPet ("clover", "rabbit");
const baxter = createPet ("baxter", "hamster");
const cleo = createPet ("cleo", "rat");
const francine = createPet ("francine", "turtle");

// clover.sleep();
// baxter.play();

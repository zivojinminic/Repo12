// Only change code below this line
var myPetsArray = [{
    animalType: "Dog",
    name: "Pujdo",
},
{
    animalType: "Cat",
    name: "Maca",
},
{
    animalType: "Bird",
    name: "Tweety",
}
]
function myPetsFunction(pets) {
    var pet =myPetsArray[pets].name;
    return pet;
}
// Only change code above this line

console.log(myPetsFunction(1)); // Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
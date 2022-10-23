
function loadData(){
    console.log("loading data");
}


function myName(){
    console.log("Letherius Miller");
}

function sayHello(first, last){
    console.log("Hello " + first + " " + last);
}

function taxReport(month, year){

    let result = month + year;
    return result;
}

function testArray1() {
    for(let i=1; i< 21; i++) {
        if (i != 13 && i != 17) {
        console.log(i);
        }
    }
}

function testArray2() {
    let pets = ["Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod"];

    //add new elements
    pets.push("Django");

    //count
    console.log("There are: " + pets.length);

    //read
    console.log(pets[0]); //read first element

    //for loop to travel/iterate the array
    for(let i=0; i< pets.length; i++){
        console.log(pets[i]);
    }

    //delete
    let index = 0;
    pets = pets.slice(index,1);
}

function init() {
console.log("Intro page");

loadData();
myName();

let lastName = "Miller";
sayHello("Letherius", lastName);

let total = taxReport(2,2022);
console.log(total);

let another = taxReport(0, 10);

testArray1();

testArray2();
}


window.onload = init;
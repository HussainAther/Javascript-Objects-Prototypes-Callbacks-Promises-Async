//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoodDishes(person) {
  for (let key in person) {
    if (Array.isArray(person[key])) {
      console.log(`${key}: ${person[key].join(", ")}`);
    } else if (typeof person[key] === "object") {
      console.log(`${key}:`);
      for (let subKey in person[key][0]) {
        console.log(`  - ${subKey}: ${person[key][0][subKey]}`);
      }
    } else {
      console.log(`${key}: ${person[key]}`);
    }
  }
}

displayFavoriteFoodDishes(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Use an arrow function to create the printInfo method
Person.prototype.printInfo = () => {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Create another arrow function for the addAge method that takes a single parameter
Person.prototype.addAge = (years) => {
  this.age += years;
};

// Create two Person objects using the 'new' keyword
let person1 = new Person("John", 25);
let person2 = new Person("Alice", 30);

// Print both persons' info
person1.printInfo();
person2.printInfo();

// Increment person1's age by 3 years
person1.addAge(3);

// Print person1's updated info
person1.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

async function checkStringLength(string) {
  if (string.length > 10) {
    console.log("Big word");
  } else {
    console.log("Small number");
  }
}

// Example usage:
checkStringLength("Hello World"); // Output: Big word
checkStringLength("Hello"); // Output: Small number


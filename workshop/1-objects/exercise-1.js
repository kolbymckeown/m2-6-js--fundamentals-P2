// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// let myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }

const myObj = {
  name: {
    first: 'Kolby',
    last: 'McKeown',
  },
  age: '24',
  city: 'Montreal',
  siblings: 2,
  sport: 'rugby',
  birthDate: {
    month: 'July',
    day: '31',
    year: '1995',
},
};

// A) console.log() your object.

console.log(myObj);

// B) console.log() a few of the values in the object.
console.log(`${myObj.name.last}, ${myObj.name.first} is ${myObj.age} years old.`);
//-------------------------------------------------

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.

//-------------------------------------------------

// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  Title: 'Saving Private Ryan',
  Director: 'Steven Spielberg',
  YearReleased: 1998,
  Rating: '8.6/10',
  Actors: [
    'Tom Hanks', 'Tom Sizemore', 'Edward Burns', 'Matt Damon', 'Vin Diesel', 'Barry Pepper', 'Adam Goldberg'
  ]
};

//-------------------------------------------------

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = 'name';
const person = {
  name: 'Alyssa P. Hacker',
  age: 26,
  hometown: 'somewhere',
};

person.age; // => 26
person.key; // => "Alyssa P. Hacker"

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
  name: {
    first: 'Alyssa',
    middle: 'P.',
    last: 'Hacker',
  },
  age: 26,
};

function fullName(person) {
  return `${person.name.first} ${person.name.middle} ${person.name.last}`
}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"
// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
  name: {
    first: 'Rick',
    last: 'Sanchez',
  },
  age: 66,
};

function betterFullName(person) {
  // Your code here
  if (rick.name > 2) {
  return `${person.name.first} ${person.name.middle} ${person.name.last}`
  } else {
  return `${person.name.first} ${person.name.last}`  
  }
}
// this code is assuming the user has a choice to simply enter a middle name or not

console.log(betterFullName(rick)); // => "Rick Sanchez"
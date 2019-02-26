// Template Strings
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Arrow functions
const double = number => number * 2;
// you can omit the use of parans if you only have one argument

const numbers = [1, 2, 3];
numbers.map(number => 2 * number);
/* 
const team = {
  members: ['jane', 'bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(function(member){
      return `${member} is on team ${this.teamName}` // this is lost 
    }.bind(this)) // you can use bind(this) to keep the context 
  }
}
 */

const team = {
  members: ["jane", "bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`; // Arrow functions pass the 'this' context
    }); // it is called 'lexical this'
  }
};

// console.log(team.teamSummary());
/* 
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
 */

//  reduce example + find example + arrow function example +
// enhanced object literals in es6_general.js
function createBookShop(inventory) {
  return {
    inventory, // refactored from inventory: inventory,
    inventoryValue() { // removed function keyword
      return this.inventory.reduce((total, book) => {
        return total + book.price
      }, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  {title: 'Harry Potter',  price: 10},
  {title: 'Eloquent JavaScript', price: 15}
];

const bookShop = createBookShop(inventory);

// Default function arguments Example

function User(id){
  this.id = id;
}

function generateId(){
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;

}

// the rest oporator (...) empties arguments into an array
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
addNumbers(1,2,3,4,5);

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

defaultColors.concat(userFavoriteColors);
// spread oporator example
[ ...defaultColors, ...userFavoriteColors];


function validateShoppingList(...items){
  if(items.indexOf('milk') < 0){
    return ['milk', ...items];
  }
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs')

const MathLibrary = {
  calculateProduct(...rest){
    console.log
    return this.multiply(...rest);
  },
  multiply(a, b){
    return a * b;
  }
};

// spread and rest examples
function unshift(array, ...a) { // ...a indicates that any other arguments should be placed in an array
  return [...a, ...array]; // this spreads the values into a single array
}
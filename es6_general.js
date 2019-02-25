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
// enhanced object literals 
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

function saveFile(){
  
}
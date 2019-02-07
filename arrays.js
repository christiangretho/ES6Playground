//forEach example:

var colors = ['red', 'blue', 'green'];

// console.log('classic for loop:')
for (var i = 0; i < colors.length; i++){
	// console.log(colors[i]);
}

// console.log('\nforEach:')
colors.forEach(function(color) {
  // console.log(color);
})

// console.log('\nforEach num:');
var numbers = [1, 2 ,3, 4, 5];
var sum = 0;
numbers.forEach(function(number){
  sum += number;
});
// console.log(sum);


var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
   areas.push(image.height * image.width)
})

var numbers = [1, 2, 3]
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++){
  doubledNumbers.push(numbers[i] * 2);
}
 
//map functions 
var doubled = numbers.map(function(number) {
  return number * 2
});

// console.log(doubled);

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
  return image.height;
});

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
  return trip.distance / trip.time;
});

function pluck(array, property) {
  var newArray = array.map(function(object){
      return object[property];
  })
  return newArray;
}

// filter helpers

var products = [
  {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
  {name: 'banana', type: 'fruit', quantity: 10, price: 15},
  {name: 'celery', type: 'vegetable', quantity: 30, price: 13},
  {name: 'orange', type: 'fruit', quantity: 3, price: 5}
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++){
  if (products[i].type === 'fruit'){
    filteredProducts.push(products[i]);
  }
}

// console.log(filteredProducts);

products.filter(function(product){
  return product.type === 'fruit';
});

// type is 'vegetible', quantity is greater than 0, privae is less than 10

products.filter(function(product){
  return product.type === 'vegetable' 
    && product.quantity > 0
    && product.price < 10;
});

// Filter challenge
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
  return number > 50;
});
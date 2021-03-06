//map helper method examples

var numbers = [1, 2, 3]
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++){
  doubledNumbers.push(numbers[i] * 2);
}
 
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
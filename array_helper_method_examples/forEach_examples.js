//forEach helper method example

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
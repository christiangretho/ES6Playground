// reduce array helper method examples

var numbers = [10, 20, 30];

var sum = 0;
// basic for loop example
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// EAMPLE 1
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

// EXAMPLE 2
var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

primaryColors.reduce(function(previous, primaryColors) {
  previous.push(primaryColors.color);
  return previous;
}, []);

// EXAMPLE 3
// match paranths interview question "()()()()"
function balancedParens(string) {
    return !string.split("").reduce(function(previous, char){
      if (previous < 0) {return previous;}
      if (char === "(") {return ++previous;}
      if (char === ")") {return --previous;}
      return previous;
    }, 0);

}

// console.log(balancedParens("()"));

// EXAMPLE 5
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip){
  return sum + trip.distance;
}, 0);

// EXAMPLE 6
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(sum, desk) {
  if (desk.type === 'sitting'){
    ++sum.sitting;
    } else {
    ++sum.standing;
    }
    return sum;
}, { sitting: 0, standing: 0 });

// console.log(deskTypes);

// EXAMPLE 7 CHALLENGE find and reduce

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
"()()()()"

function balancedParens(string) {
    
}

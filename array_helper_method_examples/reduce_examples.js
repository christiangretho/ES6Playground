// reduce array helper method examples

const numbers = [10, 20, 30];

let sum = 0;
// basic for loop example
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// EAMPLE 1
numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

// EXAMPLE 2
const primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

primaryColors.reduce(function(previous, primaryColors) {
  previous.push(primaryColors.color);
  return previous;
}, []);

// EXAMPLE 3
// match paranths interview question "()()()()"
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}

// console.log(balancedParens("()"));

// EXAMPLE 5
const trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

let totalDistance = trips.reduce(function(sum, trip) {
  return sum + trip.distance;
}, 0);

// EXAMPLE 6
const desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

let deskTypes = desks.reduce(
  function(sum, desk) {
    if (desk.type === "sitting") {
      ++sum.sitting;
    } else {
      ++sum.standing;
    }
    return sum;
  },
  { sitting: 0, standing: 0 }
);

// console.log(deskTypes);

// EXAMPLE 7 CHALLENGE find and reduce
// return an array without duplicates

const numbers = [1, 1, 2, 2, 3, 4, 4];
function unique(array) {
  return array.reduce(function(previous, num) {
    if (!previous.find(function(pre){
      return pre === num;
    })){ previous.push(num); } 
    return previous;
  }, []);
}

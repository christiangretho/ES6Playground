// find helper method example

var users = [
  { name: "jill" },
  { name: "bill" },
  { name: "alex" },
  { name: "Mike" }
];

var user;

for (var i = 0; i < users.length; i++) {
  if (useres[i].name === "alex") {
    user = users[i];
    break;
  }
}

user;

users.find(function(user) {
  return user.name === "Alex";
});

// -------------------------------------------

function Car(model) {
  this.model = model;
}

var cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

cars.find(function(car) {
  return car.model === "Focus";
});

// -------------------------------------------
var posts = [{ id: 1, title: "new post" }, { id: 2, title: "old post" }];

var comment = { postId: 1, content: "Great post" };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);

// -------------------------------------------

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
  return user.admin;
});

// -------------------------------------------

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function(account) {
  return account.balance === 12;
});

// -------------------------------------------

/**
 *
 * @param {*} array
 * @param {*} criteria
 * 
 * https://www.udemy.com/javascript-es6-tutorial/learn/v4/t/quiz/263774
 * 
 */

 var ladders = [
   {id: 1, height: 20},
   {id: 3, height: 25}
 ];

 findWhere(ladders, {height:25});

function findWhere(array, criteria) {
  var object = array.find(function(value) {
    return value.height === criteria.height;
  });
  return object;
}

// find helper method example

var users = [
  {name: 'jill'},
  {name: 'bill'},
  {name: 'alex'},
  {name: 'Mike'},
];

var user;

for (var i = 0; i < users.length; i++){
  if (useres[i].name === 'alex'){
    user = users[i];
    break;
  }
}

user;

users.find(function(user){
  return user.name === 'Alex';
});
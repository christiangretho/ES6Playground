// Every array helper methods

// EXAMPLE 1!
const computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];

let allComputersCanRunProgram = true;

let onlySomeComputersCanRunProgram = false;

/* 
for loop every helper example

for (var i = 0; i < computers.length; i++){
    var computer = computers[i]

    if (computer.ram < 16){
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);
 */

allComputersCanRunProgram = computers.every(function(computer){
    return computer.ram > 16;
 });

 
 onlySomeComputersCanRunProgram = computers.some(function(computer){
    return computer.ram > 16;
});

// console.log(allComputersCanRunProgram);
// console.log(onlySomeComputersCanRunProgram);

// EXAMPLE 2!
const names = [
    'Alexandria',
    'Matthew',
    'Joe'
];

names.every(function(name){
    return name.length > 4;
});

names.some(function(name){
    return name.length > 4;
});

// EXAMPLE 3!
function Field(value){
    this.value = value;
}

Field.prototype.validate = function(){
    return this.value.length > 0;
}

const username = new Field("username");
const password = new Field("password");
const birthdate = new Field("birthdate");

const fields = [username, password, birthdate];

fields.every(function(field){
    return field.validate();
});


// EXAMPLE 4

const users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  let hasSubmitted = users.every(function(user){
    return user.hasSubmitted;
  });

//   EXAMPLE 5

const requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  let inProgress = requests.some(function(request){
      return request.status === 'pending';
  });
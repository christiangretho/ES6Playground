// Every array helper methods

// EXAMPLE 1!
var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];

var allComputersCanRunProgram = true;

var onlySomeComputersCanRunProgram = false;

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
var names = [
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

var username = new Field("username");
var password = new Field("password");
var birthdate = new Field("birthdate");

var fields = [username, password, birthdate];

fields.every(function(field){
    return field.validate();
});
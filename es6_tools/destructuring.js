// to destructure a property we use {} to destructure an element we use []


var expense = {
    type: 'business',
    amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount;

// ES6

const { type, amount } = expense;
// console.log(type);
// console.log(amount);

var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({ extension, name, size}){
    return `the file ${name}.${extension} is of the size ${size}`;
}

fileSummary(savedFile);

/* const companies = [
    'Google',
    'FaceBook',
    'Uber'
]; */
// destructuring from an array
// const [name, name2, name3] = companies;

// this will add google to name and put the rest of the other elements into the rest array
// const [name, ...rest] = companies;

// deconstructurion objects and arrays at the same time!

const companies = [
    { name : 'Google', location: 'Mountain View'},
    { name: 'Facebook', location: 'Menlo Park'},
    { name: 'Uber', location: 'San Francisco'}
];

/* 
the order goes outside in, so in this case the pattern is 
elemnent in the array and then the property of that element 
that is location. this should return 'Mountain View' 

[pulls the first element out of the array]
{pulls the location property out of that object}
*/ 

const [ { location } ] = companies;


// this is reverses of the above example
const Google = {
    locations: ['Mountain View', 'New York', 'London']
};

const { locations : [ location ]} = Google;

function signup( {email, password, dateOfBirth, city, userName} ){
    // doStuff
}

const user = {
    email: 'junkEmail@whatevs.com', 
    password: 'myPassword', 
    dateOfBirth: '1/19/1999', 
    city: 'Columbus', 
    userName: 'userName'
};

signup(user);


// this converts an array of arrays into an array of objects
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

points.map(([x, y]) => {
    return { x, y };
});


// destructuring code excercise
const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };
  
  function isEngineer( {title, department} ) {
    return title === 'Engineer' && department === 'Engineering';
  }

  
//  destructuring code exercise
const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];
//   returns an array of objects
  const classesAsObject = classes.map(( [subject, time, teacher] ) => {
    return {subject, time, teacher};
  });



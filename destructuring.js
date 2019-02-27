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

const companies = [
    'Google',
    'FaceBook',
    'Uber'
];
// destructuring from an array
// to destructure a property we use {} to destructure an element we use []
// const [name, name2, name3] = companies;
// this will add google to name and put the rest of the other elements into the rest array
const [name, ...rest] = companies;

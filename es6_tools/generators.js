// Generators!!!!
// the * makes it a generator function

function* shopping(){
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash'; 

    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // leaving our house

// walked into the store 
// walking up and down the aisles

// console.log(gen.next('groceries')); // leaving the store with groceries
// console.log(gen.next('clean clothes'));


function* colors(){
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();

const mycolors = [];
for (let color of colors()) {
    myColors.push(color);
}
myColors;

// Example
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Christian',
    manager: 'Aaron',
    engineer: 'Dave'
};



function* TeamIterator(team){
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

function* TestingTeamIterator(team){
    yield team.lead;
    yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
names;
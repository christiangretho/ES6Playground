
/*
The ugly and horrible way Javascript used to handle 
inheritance before es6 fixed it
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return 'vroom'
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

const car = new car ({title: 'Focus'});

const toyota = new Toyota ({color: 'red', title: 'Daily Driver'})
  */


// ES6 solution to protoyple inheritance
 class Car {
    constructor({title}) {
        this.title = title;
    }

    drive(){
        return 'vroom';
    }
}

class Toyota extends Car {
    constructor(options){
        super(options); //Car.constructor
        this.color = options.color;
    }

    honk(){
        return 'beep'
    }
}

const car = new Car({title: 'Daily Driver'});

const toyota = new Toyota ({color: 'red', title: 'Race Car'})

// coding exercise

class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
  }
  
  class Snake extends Monster{
      constructor(options){
          super(options);
      }
      bite(snake){
          return snake.health -= 10;
      }
  }
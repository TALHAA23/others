const john = {
  sayHello: function () {
    console.log("John said hello");
  },
};
const alica = {
  sayHello: function () {
    console.log("alica said hello");
  },
};
function greet() {
  this.sayHello();
}
// bind change this
const johnSaidHello = greet.bind(john);
const alicaSaidHello = greet.bind(alica);
johnSaidHello();

alicaSaidHello();

// OOP
// this refer to the created obj
function Greet(greeter) {
  this.name = greeter;

  this.sayHello = () => {
    console.log(`Using OOP ${this.name} said Hello`);
  };
}

const johnSaidHelloOOP = new Greet("JohnOOP");
johnSaidHelloOOP.sayHello();

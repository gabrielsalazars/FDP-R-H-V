let person = {
  name: "Jose",
  last: "Gabriel",
  age: 34,
  nick: "Gab",
  sayName: function () {
    console.log(this.name + " " + this.last);
  },
  showBody: function () {
    fill(255,0,125);
    ellipse(200, 200, 30, 30);
  }
}


function Animal(x, y, name, last) {
  this.x = x;
  this.y = y;
  this.name = name;
  this.last = last;

  this.showName = function () {
    console.log(this.name + " " + this.last);
  }
  this.showBody = function () {
    fill(255,0, 0);
    ellipse(this.x, this.y, 40, 40)

  }

}

let joe;
let tiger;


function setup() {
  createCanvas(400, 400);
  person.sayName();
  joe = new Human(100, 100, "Michael", "Jackson");
  joe.sayHi();
  tiger = new Animal(200, 300, "Juanchaco", "buenaventura");
  tiger.showName();
  console.log(person);
  console.log(joe);
  console.log(tiger);

}

function draw() {
  background(220);
  joe.show();
  tiger.showBody();
  person.showBody();

}
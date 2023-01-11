class Quadrilateral {
  constructor(side1, side2, side3, side4){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4; 
  }
  getPerimeter(){
    return this.side1 + this.side2 + this.side3 + this.side4
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2){
    super(side1, side2,)
    this.side3 = side1
    this.side4 = side2
 
}
getArea(){
  return this.side1 * this.side2
}
}

class Square extends Rectangle {
  constructor(side3) {
    super(side3)
    this.side1 = side3
    this.side2 = side3
    this.side3 = side3
    this.side4 = side3
  }
  getDiagonal(){
    return Math.sqrt(2) * this.side3
  }
}

class Person {
  constructor(name, age, isAlive){
    this.name;
    this.age;
    this.isAlive;
    this.hasFriends = [];
  }
  greeting(){
    return `Hello my name is ${this.name}, I am ${this.age} year old`
  }
  
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person
};

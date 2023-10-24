function Calculator(x, y) {
  this.x = x;
  this.y = y;

  this.sum = () => {
    return this.x + this.y;
  };

  this.mul = () => {
    return this.x * this.y;
  };
}

let calc = new Calculator(20, 10);
console.log(`sum = ${calc.sum()}`);
console.log(`mul = ${calc.mul()}`);

// sum = 30
// mul = 200

//const EXPRESSION = "x ^ 3 - 100x + 1000"
const EXPRESSION1 = "sin(x / 5)"
const EXPRESSION2 = "cos(x / 5)"

function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(220)
  
  // Axes!
  noFill()
  stroke(0, 50)
  strokeWeight(3)
  line(0, height / 2, width, height / 2)
  line(width / 2, 0, width / 2, height)
  
  // Dots!
  noStroke()
  fill(0)
  
  for (let x of math.range(-50, 50).toArray()) {
    let y = math.evaluate(EXPRESSION1, {x: x})
    let xpixel = map(x, -50, 50, 0, width)
    let ypixel = map(y, -2, 2, height, 0)
    circle(xpixel, ypixel, 10)  
  }

  fill(255, 0, 0)
  for (let x of math.range(-50, 50).toArray()) {
    let y = math.evaluate(EXPRESSION2, {x: x})
    let xpixel = map(x, -50, 50, 0, width)
    let ypixel = map(y, -2, 2, height, 0)
    circle(xpixel, ypixel, 10)  
  }
}

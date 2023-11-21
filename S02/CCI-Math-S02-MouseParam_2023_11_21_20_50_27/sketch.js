const EXPRESSION_X = "sin(((t + mx) * 2) / 50)"
const EXPRESSION_Y = "cos(((t) * my / 100) / 50)"

function setup() {
  createCanvas(800, 800)
}

function draw() {
  background(220, 5)
  
  // Axes!
  noStroke()
  stroke(0, 50)
  strokeWeight(3)
  line(0, height / 2, width, height / 2)
  line(width / 2, 0, width / 2, height)
  
  // Dots!
  noFill()
  
  for (let t of math.range(0, PI * 2 * 50).toArray()) {
    let x = math.evaluate(EXPRESSION_X, {t: t, mx: mouseX, my: mouseY})
    let y = math.evaluate(EXPRESSION_Y, {t: t, mx: mouseX, my: mouseY})
    let xpixel = map(x, -1.2, 1.2, 0, width)
    let ypixel = map(y, -1.2, 1.2, height, 0)
    
    if (t == 30) {
      fill(255, 0, 0)
    } else {
      fill(0)
    }
    
    circle(xpixel, ypixel, 5)  
  }
}

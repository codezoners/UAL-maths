// Needs maths.js in index.html

const EXPR_X = "sin(t * 2)"
const EXPR_Y = "cos(t * 3 + f)"
//  Rate: t * n
//  Phase: (t + n)

function setup() {
  createCanvas(600, 600)
  textAlign(CENTER, CENTER)
  textSize(24)
}

function draw() {
  background(220)
  
  fill(0)
  text("X = " + EXPR_X, width / 2, 50)
  text("Y = " + EXPR_Y, width / 2, 100)
  
  noFill()
  stroke(0, 50)
  
  translate(0, height / 2)

  // Axes (unlabelled!):
  line(0, 0, width, 0)
  line(width / 2, -height / 2, width / 2, height / 2)

  noStroke()
  
  // Plot t from 0 to 50 * (some radians calculation):
  for (let i of math.range(0, 50 * PI * 2).toArray()) {
    let x = math.evaluate(EXPR_X, {t: i / 50, f: frameCount / 50})
    let y = math.evaluate(EXPR_Y, {t: i / 50, f: frameCount / 50})
    
    // Map to pixel coordinates (arbitrarily, to fit on screen):
    let x_pixel = map(x, -2, 2, 0, width)
    //  Y pixels increase downwards - graphs increase upwards:
    let y_pixel = map(y, -2, 2, -height / 2, height / 2)

    if (i == 300) { fill(255, 0, 0) } else { fill(0) }
    circle(x_pixel, y_pixel, 5)
  }
}

// Needs maths.js in index.html

const EXPRESSION = "exp(x)"

function setup() {
  createCanvas(600, 600)
  textAlign(CENTER, CENTER)
  textSize(24)
}

function draw() {
  background(220)
  
  fill(0)
  text("y = " + EXPRESSION, width / 2, 50)
  
  noFill()
  stroke(0, 50)
  
  translate(0, height / 2)

  // Axes (unlabelled!):
  line(0, 0, width, 0)
  line(width / 2, -height / 2, width / 2, height / 2)

  noStroke()
  
  let previous_y = null
 
  // Plot y for x from -100 incl to 100 excl:
  for (let x of math.range(-100, 100).toArray()) {
    let y = math.evaluate(EXPRESSION, {x: x})
    
    // Map to pixel coordinates (arbitrarily, to fit on screen):
    let x_pixel = map(x, -100, 99, 0, width)
    //  Y pixels increase downwards - graphs increase upwards:
    let y_pixel = map(y, 0, 1000, 0, -0.001)

    fill(0)
    circle(x_pixel, y_pixel, 5)
    
    // Map a rough differential: change in y for a single step in x:
    if (previous_y != null) {
      y_pixel = map(y - previous_y, 0, 1000, 0, -0.001)
      fill(255, 0, 0)
      circle(x_pixel, y_pixel, 5)
    }
    
    previous_y = y
  }
}

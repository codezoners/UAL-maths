// Needs maths.js in index.html

const SIZE = 50

function setup() {
  createCanvas(600, 600)
}

// Colour functions:
function sweep(x, y, x_pos, y_pos) {
  return (math.evaluate("x + y == f mod 60", {x : x, y: y, f: frameCount}) ? color(255, 0, 0) : color(0))
  //return (x + y == (frameCount % 60) ? color(255, 0, 0) : color(0))
  // Quiz: how to get fully across the diagonal?
}

function distance(x, y, x_pos, y_pos) {
  let d = dist(x_pos, y_pos, mouseX, mouseY)
  let d2 = dist(x_pos, y_pos, width - mouseX, height - mouseY)
  return color(map(d, 0, 400, 255, 0),
               map(d, 0, 250, 255, 0),
               map(d2, 0, 200, 255, 0))
}

function draw() {
  background(0)
  
  noStroke()
  
  for (let y of math.range(0, SIZE).toArray()) {
    let y_pos = map(y, 0, SIZE - 1, 0, height)
    
    for (let x of math.range(0, SIZE).toArray()) {
      let x_pos = map(x, 0, SIZE - 1, 0, width)

      let v = math.evaluate("x > y or not(x == 3)", {x: x, y: y})
      if (v) {
        fill(255)
      } else {
        fill(0)
      }

      fill(distance(x, y, x_pos, y_pos))
      //fill(sweep(x, y, x_pos,y_pos))
      circle(x_pos, y_pos, 10)      
    }
  }
}

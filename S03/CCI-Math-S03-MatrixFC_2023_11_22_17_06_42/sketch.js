function setup() {
  createCanvas(700, 700)
}

function draw() {
  //console.log(frameCount)
  background(0)
  
  noStroke()
  
  for (let y of math.range(0, 50).toArray()) {
    let y_pos = map(y, 0, 49, 0, height)
    
    for (let x of math.range(0, 50).toArray()) {
      let x_pos = map(x, 0, 49, 0, width)
      
      let v1 = math.evaluate("x == f mod 50",
                             {x : x, y : y, f: frameCount})
      let v2 = math.evaluate("(49 - x) == f mod 50",
                             {x : x, y : y, f: frameCount})
      
      if (v2) {
        fill(100, 100, 255)
      } else if (v1) {
        fill(255, 0, 0)
      } else {
        fill(255)
      }
      
      circle(x_pos, y_pos, 10)
    }
  }
}

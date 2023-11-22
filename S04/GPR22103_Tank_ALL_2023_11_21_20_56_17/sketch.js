const IDENT = [ [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1] ]

let slider

const SLIDER_STEPS = 20    //  Values 0 to SLIDER_STEPS inclusive
const SLIDER_LIMIT = 200

function setup() {
  createCanvas(800, 800)
  rectMode(CENTER)
  textAlign(CENTER, CENTER)
  angleMode(DEGREES)
  textSize(20)
  
  slider = createSlider(0, SLIDER_LIMIT, 0, SLIDER_LIMIT / SLIDER_STEPS)
  slider.position(10, 10)
  slider.style('width', (width - 20) + 'px')
}

function iterationLimit(sequence) {
  return Math.min(sequence.length, slider.value() * SLIDER_STEPS / SLIDER_LIMIT)
}

function tank(i) {
  fill(255, 100)
  stroke(0)
  strokeWeight(1)
  rect(0, 0, 40, 50)
  rect(0, 40, 5, 60)
  rect(-25, 0, 10, 60)
  rect(25, 0, 10, 60)
  fill(0)
  text(i, -10, -10)
}

function drawObstacles() {
  let target = false
  stroke(0, 50)
  strokeWeight(10)
  //console.log(noise(frameCount))
  
  for (let i of _.range(10)) {
    for (let j of _.range(10)) {
      if (random(100) < 80) {
        let x = map(i, 0, 9, -width / 2, width / 2)
        let y = map(j, 0, 9, -height / 2, height / 2)
        
        if (random(100) < 5 && !target) {
          fill(255, 150, 0)     
          target = true
        } else {
          fill(0, 50)
        }

        ellipse(x, y, 20 + random(10))
        
        if (random(100) < 30) {
          line(x, y, x + 90, y + 90)
        }
        if (random(100) < 30) {
          line(x, y, x + 90, y - 90)
        }
        if (random(100) < 30) {
          line(x, y, x + 90, y)
        }
        if (random(100) < 30) {
          line(x, y, x, y - 90)
        }      }
    }
  }
}

function drawTanks(sequence) {
  tank(0)
  
  let acc = IDENT
  console.log(0, acc)
 
  for (let i = 0; i < iterationLimit(sequence); i++) {
    M = sequence[i]
    acc = matrixMult(acc, M)
    console.log(i + 1, acc)
    push()
    // [a c e]
    // [b d f]
    // [0 0 1] -- (implied)
    applyMatrix(acc[0][0], acc[1][0], acc[0][1], acc[1][1], acc[0][2], acc[1][2])
    tank(i + 1)
    pop()
  }
}

function drawShot(sequence) {
  let acc = IDENT
  for (let i = 0; i < iterationLimit(sequence); i++) {
    acc = matrixMult(acc, sequence[i])
  }

  push()
  applyMatrix(acc[0][0], acc[1][0], acc[0][1], acc[1][1], acc[0][2], acc[1][2])
  noFill()
  strokeWeight(3)
  stroke(255, 50, 50)
  line(0, 0, 0, width * 2)
  pop()
  
}

function drawPath(sequence) {
  let currentX = 0
  let currentY = 0
  
  stroke(100, 200, 255, 200)
  strokeWeight(1)

  acc = IDENT
  for (let i = 0; i < iterationLimit(sequence); i++) {
    acc = matrixMult(acc, sequence[i])
    let latestPos = matrixTimesVector(acc, [0, 0, 1])
    //console.log(latestPos)
    
    line(currentX, currentY, latestPos[0], latestPos[1])
    currentX = latestPos[0]
    currentY = latestPos[1]
  }
}

function ROTATE(angle) {
  let cos_a = cos(angle)
  let sin_a = sin(angle)
  
  return [ [cos_a, -sin_a, 0],
           [sin_a,  cos_a, 0],
           [    0,      0, 1] ]
}

function FORWARD(dist) {
  return [ [1, 0,    0],
           [0, 1, dist],
           [0, 0,    1] ]  
}

function SKID(dist) {
  return [ [1, 0, dist],
           [0, 1,    0],
           [0, 0,    1] ]  
}

let limit = -1

function draw() {
  randomSeed(7)
  let angle = PI / 4
  let cos_a = cos(angle)
  let sin_a = sin(angle)
  
  let step = 0
  let shear_factor = 0
  
  let sequence = [FORWARD(100), ROTATE(45), SKID(30), FORWARD(200), ROTATE(90)]
  let lim = iterationLimit(sequence)
  
  //console.log(slider.value() * SLIDER_STEPS / SLIDER_LIMIT)
  if (lim != limit) {    //  Change in number of steps to display
    background(100)
    fill(0)
    noStroke()
    text(lim, 50, 50)
    translate(width / 2, height / 2)
    //randomSeed(0)
    drawObstacles()
    drawTanks(sequence)
    drawPath(sequence)
    drawShot(sequence)
    limit = lim
  }
}

const IDENT = [ [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1] ]

function setup() {
  createCanvas(800, 800)
  rectMode(CENTER)
  textAlign(CENTER, CENTER)
  angleMode(DEGREES)
  textSize(20)
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
  noStroke()
  
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

        ellipse(x, y, 50)
      }
    }
  }
}

function drawTanks(sequence) {
  tank(0)
  
  let acc = IDENT
  console.log(0, acc)
 
  for (let i = 0; i < sequence.length; i++) {
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
  for (let i = 0; i < sequence.length; i++) {
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
  for (let i = 0; i < sequence.length; i++) {
    acc = matrixMult(acc, sequence[i])
    let latestPos = matrixTimesVector(acc, [0, 0, 1])    //  Start at origin (0, 0)
    
    line(currentX, currentY, latestPos[0], latestPos[1])
    currentX = latestPos[0]
    currentY = latestPos[1]
  }
}

function draw() {
  noLoop()
  
  let M = [ [1, 0, 50],
            [0, 1, 100],
            [0, 0, 1]]
  
  let sequence = [M, M]
  
  background(100)
  translate(width / 2, height / 2)
  //randomSeed(0)
  drawObstacles()
  drawTanks(sequence)
  drawPath(sequence)
  drawShot(sequence)
}

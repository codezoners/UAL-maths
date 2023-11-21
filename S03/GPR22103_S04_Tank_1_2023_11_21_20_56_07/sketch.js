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

function draw() {
  noLoop()
  
  let M = [ [1, 0, 50],
            [0, 1, 100],
            [0, 0, 1] ]
  
  background(100)
  translate(width / 2, height / 2)
  randomSeed(0)
  tank(0)
  applyMatrix(M[0][0], M[1][0], M[0][1], M[1][1], M[0][2], M[1][2])
  tank(1)
}

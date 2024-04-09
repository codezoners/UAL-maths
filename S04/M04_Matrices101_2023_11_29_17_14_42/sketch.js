const IDENT = [ [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1] ]

let M1, M2, M
function setup() {
  createCanvas(600, 600)
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
  textSize(50)
  angleMode(DEGREES)

}

function draw() {
  M1 = [ [1, tan(75), 0],
         [0, 1, 0],
         [0, 0, 1] ]
  M2 = [ [cos(frameCount), -sin(frameCount), 0],
         [sin(frameCount), cos(frameCount), 0],
         [0, 0, 1] ]
  M = matrixMult(M2, M1)
  
  background(220)
  
  stroke(0, 50)

  line(0, 0, width, height)
  line(0, height, width, 0)
  
  translate(width / 2, height / 2)
  
  push()
  applyMatrix(M[0][0], M[1][0], M[0][1], M[1][1], M[0][2], M[1][2])

  fill(255)
  rect(0, 0, 300, 80)
  fill(0)
  text("Hello World", 0, 0)
  
  fill(255, 0, 0)
  circle(200, 0, 10)
  pop()

  stroke(0)
  fill(255, 200, 0)
  
  rect(0, 0, 10, 300)
}

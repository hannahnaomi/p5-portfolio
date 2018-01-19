let xPos, yPos

function setup() {

  createCanvas (500, 500)
  xPos = 0
  noStroke()
  background(0)


}

function draw() {
  background(0, 10)

  for(let i = 0; i < 500; i += 1) {
    xPos = sin(i * 5 + frameCount * 0.001) * 1000
    yPos = cos(i * .25 + frameCount * 0.001) * 100

    fill(255)
    ellipse(500 + xPos, yPos, 5, 5)
    fill(255,120,0)
    ellipse(250 + xPos, 250 + yPos, 5, 5)
    fill(0,120,255)
    ellipse(xPos, 250 + yPos, 5, 5)
    fill(120,255,0)
    ellipse(500 + xPos, 250 + yPos, 5, 5)
    fill(255)
    ellipse(500 + xPos, 500 + yPos, 5, 5)

  }

  //console.log(position)
}

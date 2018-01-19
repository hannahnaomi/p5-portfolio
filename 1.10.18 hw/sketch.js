let agents, numAgents, stepSize, agentSize, noiseScale

function setup() {
    createCanvas(windowWidth, windowHeight)

    numAgents = 100
    agents = []

    for(let i = 0; i < numAgents; i +=1) {
    agents[i] = {
      x1: 100,
      y1: 100,
      x2: 120,
      y2: 120,
      x3: 130,
      y3: 100,
      colorR: random(255),
      colorG: random(255),
      colorB: random(255)
    }
}

    stepSize = 4
    noiseScale = random(0.03)
    background(50,100,50)
    noStroke()
}

function draw() {

  background(255, 50)

  update()

  beginShape()
    for(let i = 0; i < numAgents; i +=1) {

    triangle(agents[i].x, agents[i].y, agents[i].x2, agents[i].y2, agents[i].x3, agents[i].y3)
    fill(agents[i].colorR, agents[i].colorG, agents[i].colorB)
  }
  endShape()


}


function update() {
  for(let i = 0; i < numAgents; i +=1)  {
      let angle = noise(agents[i].x * noiseScale, agents[i].y * noiseScale) * TWO_PI

  agents[i].x += sin(angle) * stepSize
  agents[i].y += cos(angle) * stepSize

  if((agents[i].x > width) || (agents[i].x < 0) || (agents[i].y > height) || (agents[i].y < 0)) {
    agents[i].x = random(width)
    agents[i].y = random(height)

    }
  }
}

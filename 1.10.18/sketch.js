let agents, numAgents, stepSize, agentSize, noiseScale

function setup() {
    createCanvas(windowWidth, windowHeight)

    numAgents = 1000
    agents = []
    agentSize = 3

    for(let i = 0; i < numAgents; i +=1) {
    agents[i] = {
      x: random(width),
      y: random(height),
      colorR: random(255),
      colorG: random(255),
      colorB: random(255)
    }
}

    stepSize = 4
    noiseScale = random(0.003)
    background(50,100,50)
    noStroke()
}

function draw() {

  background(255, 50)

  update()

  beginShape()
    for(let i = 0; i < numAgents; i +=1) {

    rect(agents[i].x, agents[i].y, agentSize, agentSize)
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

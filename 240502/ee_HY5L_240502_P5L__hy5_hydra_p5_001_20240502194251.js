// p5 » hydra
// pass p5 into hydra
// cc teddavis.org 2024

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

H.pixelDensity(2) // 2x retina

solid()
.add(src(s0))
// .blend(osc(4,0.03,0.2).rotate(1.57))
// .mult(src(o1.scale(1.002).mult(noise(4)),0.4)
// .blend(src(s0).scale(1.03))
	.out()

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	circle(mouseX, mouseY, 10)
	ellipse(mouseX, mouseY, random(2,15))
}
// hydra » p5 » hydra
// pass hydra into p5 and post-process with 2nd hydra!
// cc teddavis.org 2024

H.hide() // hide hydra
noize().out()

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	angleMode(DEGREES)
}

function draw() {
	clear()
	orbitControl(3)
	rotateY(frameCount/3)
	rotateX(frameCount/4)
	
	noStroke()
	texture(H.get())
	sphere(height/3)
}

function keyPressed(){
	if(key == 'S'){
		H2.save() // save 2nd hydra
	}
}

// 2nd instance of hydra
var H2 = HY5.hydra('h2', 'synth')

H2.pixelDensity(1)
H2.zIndex(2)

synth.s0.initP5()

synth.src(synth.s0)
	.modulateScale(synth.src(synth.o0).scale(1.002), .6)
	.modulateScale(synth.src(synth.o0).scale(1.003), .41)
	.modulateScale(synth.src(synth.o0).scale(1.005), .35)
	.layer(synth.src(synth.o0).scale(1).thresh(0.5,0.4).luma(0.5))
	.mult(solid(),0.2)
		.out()
	
	
	
	
	
	
	
	
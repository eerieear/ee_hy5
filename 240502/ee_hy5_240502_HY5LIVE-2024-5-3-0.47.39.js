// hydra » p5 » hydra
// pass hydra into p5 and post-process with 2nd hydra!
// cc teddavis.org 2024

H.hide() // hide hydra
solid()
.add(noize(4,0.4,1))
.add(noize(4,0.5,1).rotate(1.57))
.mult(solid(),0.3)
.out()
//
speed=0.2

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	angleMode(DEGREES)
}

function draw() {
	frameRate(random(4,128))
	// clear()
	orbitControl(3)
	rotateY(frameCount*1.3)
	rotateX(frameCount*1.1)
	
	noStroke()
	texture(H.get())
	sphere(height/3*random(0.8,0.87))
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
	.blend(synth.src(synth.o0).scale(1.005), .75)
	.layer(synth.src(synth.o0).scale(1).thresh(0.5,0.4).luma(0.5).mult(solid(),0.8))
	.mult(gradient(4).color(1,0.5,0).rotate(0.5,0.6).saturate(2.5))
	.add(shape(4,0.1,0.7),0.03)
	// .mult(solid(),0.2)
	.add(shape(4,0.1,0.7),0.03)
	.mult(shape(4,0.1,0.8),0.4)
	.out()
	
	
	
	
	
	
	
	
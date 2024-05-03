// hydra » p5 » hydra
// pass hydra into p5 and post-process with 2nd hydra!
// cc teddavis.org 2024

H.hide() // hide hydra
solid()
.add(noize(4,0.4,1))
.add(noize(3,0.5,1).rotate(1.57))
.mult(solid(),0.3)
.scale(()=>a.fft[0]*7)
.contrast(()=>a.fft[2]*3)
// .modulatePixelate(src(o0),()=>a.fft[1]*180) //ESCAPE PIXELATE HERE
.saturate(1.2)
.mult(osc(1,2,8).rotate(-0.1,-0.03),0.5)
.kaleid(2)
.out()
//
// speed=0.2

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	angleMode(DEGREES)
}

function draw() {
	// frameRate(random(1,2008))
	frameRate(random(8,60))
	// clear()
	orbitControl(3)
	rotateY(frameCount*1.3)
	rotateX(frameCount*1.1)
	stroke(random(100,255),50,random(10,100),30)
	strokeWeight(random(.1,8))
	noStroke()
	texture(H.get())
	sphere(height/3*random(0.8,0.87))
	// sphere(height/3*random(0.7,1.9))
	box(mouseX,mouseY,random(1,30),20)
	box(mouseX+30,mouseY+20,random(1,30),20)
	box(mouseX-180,mouseY-160,random(1,3))
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
// synth.s1.initScreen(0)

synth.src(synth.s0)
	.modulateScale(synth.src(synth.o0).scale(1.002), .6)
	.modulateScale(synth.src(synth.o0).scale(1.003), .41)
	.modulateScale(synth.src(synth.o0).scale(1.005), .35)
	.blend(synth.src(synth.o0).scale(1.005), .75)
	.layer(synth.src(synth.o0).scale(1).thresh(0.5,0.4).luma(0.5).mult(solid(),0.8))
	.mult(gradient(4).color(1,0.5,0).rotate(0.5,0.6).saturate(2.5))
	.blend(osc(4,0.32,4),0.1)
	.add(shape(4,0.1,0.7),0.03)
	.mult(solid(),0.1)
	.add(shape(4,0.1,0.7),0.03)
	.mult(shape(4,0.1,0.9),0.42)
	// .blend(src(s1),0.1)
	.out()
	
	
	
	
	
	
	
	

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,left,right,bottom,dustbin;
function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground  = new Ground(600,650,1200,20)
paper = new Paper(300,200,50);
left = new Dustbin2(840,540,20,200)
right = new Dustbin2(1010,540,20,200)
bottom = new Bottom(925,630,150,20)
dustbin = new Dustbin(845,440,150,200)

	Engine.run(engine);
  keyPressed();
}


function draw() {
 
  background(220);
  Engine.update(engine);
 
 paper.display();
 ground.display();
 left.display();
 right.display();
 bottom.display();
 dustbin.display();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:375,y:-375});
	}
}


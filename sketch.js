
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
    rectMode(CENTER);
	
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(20,580,20)
	ground = new Ground(width/2,590)
	
	box1 = new Bucket(650,580,200,10)
	box2 = new Bucket(550,535,10,100)
	box3 = new Bucket(750,535,10,100)
 	World.add(world, ball);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  
  console.log(ball.body.position.x);
  console.log(ball.body.position.y);
  console.log(ball.body.angle);
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
}

function keyPressed()
{
	
		if (keyCode === UP_ARROW) {
		   // Look at the hints in the document and understand how to make the package body fall only on
		  Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:-5})
		 }
	   	
}


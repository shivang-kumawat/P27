
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,chain1,bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	Engine.run(engine);
	roof = new Roof(400,100,700,50);
	chain1 = new Chain(120,250,1,300);
	chain2 = new Chain(250,250,1,300);
	chain3 = new Chain(380,250,1,300);
	chain4 = new Chain(520,250,1,300);
	chain5 = new Chain(660,250,1,300);

	bobObject1 = new Bob(120,250,5,5);

}
	


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bobObject1.display();
  
  

 
}




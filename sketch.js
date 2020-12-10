
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	paperObject=new Paper(200,450,70)
	Dustbin1=new Dustbin(1200,650)
	Ground1=new Ground(width/2,670,width,20)  
	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});
	Engine.run(engine);
	Render.run(render)
	
      

	}



function draw() {
  rectMode(CENTER);
  background(255);
  
  paperObject.display();
  Dustbin1.display();
  Ground1.display();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW)
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-155})

}




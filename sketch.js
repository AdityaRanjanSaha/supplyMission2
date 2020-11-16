var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1,side2 ,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(350, 80, 10,10);
	packageSprite.addImage(packageIMG)
 	packageSprite.scale=0.2
	
	side1=createSprite(width/2,575,10,80); 
	side1.shapeColor=color("red");
	
    side2=createSprite(width/2-100,575,10,80); 
	side2.shapeColor=color("red");
	
	side3=createSprite(width/2-50,610,90,10); 
	side3.shapeColor=color("red");

	helicopterSprite=createSprite(350, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	

	groundSprite=createSprite(width/2,height-80, width,10);
	groundSprite.shapeColor=color("white");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2-50 , 80 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	side1Body =  Bodies.rectangle(width/2,575,10,50);
	side2Body =  Bodies.rectangle(width/2-100,575,10,50);
	side3Body =  Bodies.rectangle(width/2-50,610,90,10);
	//Create a Ground
	groundBody = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
 	World.add(world, groundBody);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  groundSprite.x= groundSprite.position.x 
  groundSprite.y= groundSprite.position.y 

  side1.x= side1.position.x 
  side1.y= side1.position.y 
  side2.x= side2.position.x 
  side2.y= side2.position.y 
  side3.x= side3.position.x 
  side3.y= side3.position.y 
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageBody.restitution=0.5;
    
  }
 /* if (keyCode === RIGHT_ARROW) {
   helicopterSprite.x=helicopterIMG.x+5;
  }*/

}




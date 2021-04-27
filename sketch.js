
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var engine,world;
var paper,Ground

var binImg,bin

function preload() {
  binImg = loadImage("dustbingreen.png")
  
}
 
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  Sky = new sky(600,400,40,40)
 Crow = new crow(400,200,20,20)
	peaper = new Paper(100,560,10)
  peaper.shapeColor = "white"
  
  sun = new Sun(70,150,30)

  bin = createSprite(610,610,20,20)
  bin.addImage(binImg)
  bin.scale = 0.30


    Ground = new ground(600,670,1200,25)
	leftside = new Dustbin(580,610,5,98);
	bottom = new Dustbin(610,650,70,10)
	rightSide = new Dustbin(640,610,10,98),
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine)



  peaper.display()
  Sky.display()
  Crow.display()
  sun.display()
  Ground.display()
  leftside.display()
  bottom.display()
  rightSide.display()




  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(peaper.body,peaper.body.position,{x : 15, y:-15})
Matter.Body.applyForce(Sky.body,Sky.body.position,{x : 15, y:-15})


}
if(keyCode === RIGHT_ARROW){

Matter.Body.applyForce(peaper.body,peaper.body.position,{x:15,y:15})

}
}




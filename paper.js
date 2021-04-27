class Paper {
constructor(x,y,radius){
    var options = {
isStatic : false,
'restitution' : 0.3,
'friction': 0.001,
'density': 1.28

    }
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius
this.image = loadImage("paper.png")

World.add(world,this.body)
}
display(){
    var pos = this.body.position
    var angle = this.image.angle
  
   // ellipseMode(RADIUS)
  
    fill("black")
   rotate(angle)
   imageMode(CENTER)
    //console.log(this.body.x)
    image(this.image,pos.x,pos.y,33,33)
    
}
}
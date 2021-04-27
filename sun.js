class Sun {

constructor(x,y,radius){

var options = {

isStatic : true



}

this.body = Bodies.circle(x,y,radius,options)
this.radius = radius
//this.image = loadImage("sprites/dustbingreen.png")
World.add(world,this.body)





}
display(){

ellipseMode(RADIUS)
fill ("orange")
circle(this.body.position.x,this.body.position.y,this.radius)

}



}
class crow {
constructor(x,y,width,height){

var options = {

isStatic : true






}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
this.image = loadImage("Crow.png")


World.add(world,this.body)

}


display(){
var pos = this.body.position
push()
fill("green")
imageMode(CENTER)
    //rect(this.body.position.x,this.body.position.y,this.width,this.height)

image(this.image,pos.x,pos.y,300,200)
pop()




}










}
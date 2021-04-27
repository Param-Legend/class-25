class sky {
constructor(x,y,width,height){
var options = {
 isStatic:true,
 





}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height
this.image = loadImage("Sky.png")




}
display(){

    var pos = this.body.position





    fill("white")
    image(this.image,pos.x,pos.y,1200,1200)

//rect(this.body.position.x,this.body.position.y,this.width,this.height)
    
}







}
class Dustbin
{
    constructor(x,y){
        this.x=x
        this.y=y
        this.width=200
        this.height=213
        this.thickness=20
        this.image=loadImage("dustbingreen.png")
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
        this.leftWallBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
        this.rightWallBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
        World.add(world,this.bottomBody)
        World.add(world,this.leftWallBody)
        World.add(world,this.rightWallBody)
    }

display(){
    var posBottom=this.bottomBody.position
    var posLeft=this.leftWallBody.position
    var posRight=this.rightWallBody.position
    push();
    translate(posLeft.x,posLeft.y)
    angleMode(RADIANS)
    rectMode(CENTER)
    rotate(this.angle)
    pop();


    push();
    translate(posRight.x,posRight.y)
    angleMode(RADIANS)
    rectMode(CENTER)
    rotate(this.angle*-1)
    stroke("green") 
    fill(255)
    pop();


    push();
    translate(posBottom.x,posBottom.y)
    angleMode(RADIANS)
    rectMode(CENTER)
    
    
    fill(255)
    imageMode(CENTER)
    image(this.image,0,-this.height/2,this.width,this.height)
    pop();
}
};
class Paper
{
    constructor(x,y,r){
        var options={
            isStatic:false,
            'restitution':0.3,
            'density':1.2,
            'friction':0.5
          }
          this.x=x
          this.y=y
          this.r=r
          this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,[options]);
        World.add(world,this.body)

       
    }

display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    fill(255,0,255)
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop();
}
};
class Hero{
    constructor(x,y,r){
        var options ={
            density:1,
            frictionAir:1
        }
        this.image=Bodies.circle(x,y,r/2,options);
        World.add(world,this.image);
    }
    display(){
        imageMode(CENTER);
        image(img1,this.image.position.x,this.image.position.y,200,100);
    }
}
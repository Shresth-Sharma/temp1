const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var img1;
var h1,g2,s1;
function preload() {
//preload the images here
    img1=loadImage("Superhero-01.png");
}

function setup() {
  createCanvas(1350,600);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  h1 = new Hero(200,200,200,100);
  g1 = new Ground(675,560,1350,20);
  //s1 = new Ground(200,200,200,200);
  s1 = new Fly(h1.body,{x : 200 , y : 200});
}

function draw() {
  background(0);
  g1.display();
  s1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(h1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  s1.fly();
}


const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var target1,target2,target3;

var tree1,tree2,tree3;

var fire,shoot;
var Gun,gun;
var edges;

function preload(){
targetimg=loadImage("target.png");
fire=loadImage("Fire.png");
Gun=loadImage("download.png");
}


function setup() {
  createCanvas(1350,650);
  engine=Engine.create();
  world=engine.world;

  tree1=new tree(150,200,10,10); 
  target1=new target(160,270,20,20)
  
  tree2=new tree(350,210,10,10); 
  target2=new target(360,270,20,20)

  tree3=new tree(550,190,10,10); 
  target3=new target(560,270,20,20)

  shoot=createSprite(1275,600,20,10);
  shoot.addImage(fire);
  shoot.scale=0.15;
  
  gun=createSprite(725,535,40,40);
  gun.addImage(Gun);
}

function draw() {
Engine.update(engine);
gun.velocityY=0;
gun.velocityX=0;

background(0);
tree1.display();
tree2.display();
tree3.display();

target1.display();
target2.display();
target3.display();

if(keyDown("DOWN_ARROW")){
  gun.velocityY=5;
  gun.velocityX=0;  
  } 
  if(keyDown("UP_ARROW")){
    gun.velocityY=-5;
    gun.velocityX=0;  
    }
    if(keyDown("LEFT_ARROW")){
      gun.velocityX=-5;
      gun.velocityY=0;  
      } 
      if(keyDown("RIGHT_ARROW")){
        gun.velocityX=5;
        gun.velocityY=0;  
        }
        edges=createEdgeSprites();
        gun.bounceOff(edges);



drawSprites();
}
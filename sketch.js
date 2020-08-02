const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block18,block19,block20,block21;
var stand;
var launcher;
var backgroundImg;
var bg = "scene/day.png";
var score=0;
function preload(){
getBackgroundImg();

}
function setup() {
  createCanvas(1600,700);
  engine=Engine.create();
  world=engine.world;
  stand=new Ground (1000,600,800,20);
 ball=new Polygon(200,50,100);
 block1=new Blocks(650,540,100,100);
 block2=new Blocks(750,540,100,100);
 block3=new Blocks(850,540,100,100);
 block4=new Blocks(950,540,100,100);
 block5=new Blocks(1050,540,100,100);
 block6=new Blocks(1150,540,100,100);
 block7=new Blocks(1250,540,100,100);
 block8=new Blocks(1350,540,100,100);
 block9=new Blocks(750,440,100,100);
 block10=new Blocks(850,440,100,100);
 block11=new Blocks(950,440,100,100);
 block12=new Blocks(1050,440,100,100);
 block13=new Blocks(1150,440,100,100);
 block14=new Blocks(1250,440,100,100);
 block15=new Blocks(850,340,100,100);
 block16=new Blocks(950,340,100,100);
 block17=new Blocks(1050,340,100,100);
 block18=new Blocks(1150,340,100,100);
 block19=new Blocks(950,240,100,100);
 block20=new Blocks(1050,240,100,100);
 block21=new Blocks(1000,140,100,100);
 launcher=new Launcher(ball.body,{x:200,y:50});
 
}
function draw() {
  if(backgroundImg)
  background(backgroundImg);


  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-500, 50)
        
  Engine.update(engine);
  
    drawSprites();
  ball.display();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  stand.display();
  launcher.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}
function keyPressed(){

  if(keyCode === 32){
      launcher.attach(ball.body);
  }
  
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "scenes/day.png";

  }
  else{
      bg = "scenes/night.png";
  }

  backgroundImg = loadImage(bg);
 
}
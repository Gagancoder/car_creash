var fixedRect, movingRect;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  fixedRect = createSprite(1300, 200, 60, height/2);
  fixedRect.shapeColor = "grey";
  fixedRect.debug = false;


  movingRect = createSprite(50,200,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
 
  speed=random(25,50);
  width=random(400,1500);
}

function draw() {
  background(232,250,190);  
  movingRect.velocityX = speed;
  
if(isTouching(movingRect,fixedRect)){
  movingRect.velocityX=0;
  movingRect.velocityY=0;
}
  
if(fixedRect.x - movingRect.x < (movingRect.width+fixedRect.width)/2){
  movingRect.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>70)
  {
    movingRect.shapeColor="red";
  }
  if(deformation<70 && deformation>55)
{
  movingRect.shapeColor="yellow";
}
if(deformation<55)
{
  movingRect.shapeColor= "green";
}
}
  drawSprites();
}

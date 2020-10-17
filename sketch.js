var o1 ;
var o2 ;

function setup() {
  createCanvas(800,400);
  o1=createSprite(400, 200, 40, 80);
  o1.shapeColor="red";

  o2=createSprite(300, 200, 80, 40);
  o2.shapeColor="red";
}

function draw() {
  o1.x=World.mouseX;
  o1.y=World.mouseY;

  


  
if(isTouching(o1,o2)){
  o1.shapeColor="white";
  o2.shapeColor="white";
}
else{
  o1.shapeColor="red";
  o2.shapeColor="red";
}
  background(0);  
  drawSprites();
}
function isTouching(r1,r2){
  if(r1.x-r2.x<r1.width/2+r2.width/2&&
    r2.x-r1.x<r1.width/2+r2.width/2&&
    r1.y-r2.y<r1.height/2+r2.height/2&&
    r2.y-r1.y<r1.height/2+r2.height/2){
   return true;
  }
  else{
   return false;
  }


}
var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(10, 10, 30, 40);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(fixedRect.x - movingRect.x);
  if(movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width)/2
    && fixedRect.x - movingRect.x <= (movingRect.width + fixedRect.width)/2
    && movingRect.y - fixedRect.y <= (movingRect.height + fixedRect.height)/2
    && fixedRect.y - movingRect.y <= (movingRect.height + fixedRect.height)/2
     ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  
  
  
  
  drawSprites();
}
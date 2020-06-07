var fixedRect,movingRect;

function setup() {

  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 50);
fixedRect.shapeColor = "green"
movingRect = createSprite(100, 200, 50, 50);
movingRect.shapeColor = "green"
movingRect.velocityX = 2;
  movingRect.velocityY = 0;
  fixedRect.velocityX   = -2;
}

function draw() {
  background(0);  
 
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      
movingRect.shapeColor = "red"
fixedRect.shapeColor = "red"
bounceOff(fixedRect,movingRect);
  }else{
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }
  drawSprites();
}


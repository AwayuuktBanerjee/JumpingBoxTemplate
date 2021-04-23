var fixedRect, movingRect;

function preload(){

}


function setup(){
    canvas = createCanvas(1200,800);
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColour = "green";
    
    movingRect = createSprite(800, 400,80,30);
    movingRect.shapeColour = "green";
    
    gameObject1 = createSprite(100, 100, 50, 50);
    gameObject1.shapeColour = "green";
    gameObject2 = createSprite(200, 100, 50, 50);
    gameObject2.shapeColour = "green";
    gameObject3 = createSprite(300, 100, 50, 50);
    gameObject3.shapeColour = "green";
    gameObject4 = createSprite(400, 100, 50, 50);
    gameObject4.shapeColour = "green";
}

function draw() {
    background(0,0,0);
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;
      
    if(isTouching(movingRect, gameObject1)){
        movingRect.shapeColour = "blue";
        gameObject1.shapeColour = "blue";
    }
    else{
        movingRect.shapeColour = "green";
        gameObject1.shapeColour = "green";
    }
    drawSprites();
  }

  function isTouching(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x -object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.width/2 + object1.width/2
        && object2.y -object2.y < object2.width/2 + object1.width/2){

      return true;
    }
    else{
      return false;
    }
    
}

    
    

    


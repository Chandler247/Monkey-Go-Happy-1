
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,520,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,550,900,10);
  ground.velocityX=-4;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();

  
}


function draw() {
  background("white");

  if(ground.x<0){
    
    ground.x=ground.width/2;
    
  }
  
  if(keyDown("space")){
    
    monkey.velocityY=-12;
    
  }
  
  monkey.velocityY=monkey.velocityY=0.8;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  
  if(obstacleGroup.isTouching(monkey)){
    
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1);
    
  }
  
  fill("black");
  textSize(20);
  score=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+score,100,50);
  
  drawSprites();
  
}

function spawnFood(){
  if(frameCount%80 === 0){
    
    banana = createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.velocityX=-6;
    banana.scale=0.15;
    banana.lifetime=300;
    banana.y=Math.round(random(200,300));
    monkey.depth=banana.depth+1;
    FoodGroup.add(banana);
    
  }
  
}

function spawnObstacles(){
  if(frameCount%300 === 0){
    
    obstacle = createSprite(800,520,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.scale=0.15;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
    
  }
  
}

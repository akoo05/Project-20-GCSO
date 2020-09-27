var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(45,90)
  weight=random(400,1520);

  car = createSprite(50,200,50,50);

  wall = createSprite(1500,200,90,400/2);
  wall.shapeColor=color(80,80,80);

  car.velocityX = speed;
}

function draw() {

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation<100){
      //green
      car.shapeColor=color(0,255,0);
    }
    if(deformation <= 180 && deformation >= 100){
      //yellow
      car.shapeColor=color(230,230,0);
    }
    if(deformation > 180){
      //red
      car.shapeColor=color(255,0,0);
    }
  }
  background(250,250,255);  
  drawSprites();
}
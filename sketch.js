var bullet,wall,wall2;
var speed,weight;
var wall,thickness;

function setup() {

  createCanvas(1600,400);
  bullet=createSprite(500, 200, 50, 50);
  
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)

  wall2=createSprite(1000,300,60,height/2);
  wall2.shapeColor="orange";

}

function draw() {
  background(0);
  bullet.velocityX=3;
  if(wall2.x-bullet.x < (bullet.width+wall2.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		bullet.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		bullet.shapeColor=color(230,230,0);
	}


	if(deformation<100)
	{
		bullet.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}

 function hascollided(bullet,wall) {
	 bulletRightEdge+ bullet.x + bullet.width;
	 wallLeftEdge + wall.x;
	 if(bulletRightEdge>=wallLeftEdge)
	 {
		 return true;
	 }
	 return false;

	 if (hascollided(bullet,wall)) {
		 bullet.velocityX=0;
		 var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
	 
     if(damage>10)
      {
         wall.shapeColor(255,0,0);
      }
     
     
       if(damage<10)
       {
        wall.shapeColor(255,0,0);
       }
     }
 }  
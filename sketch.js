const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var score=0;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);

 // sling= new Sling(breaker.body,{x:200,y:500})
  ground= new Ground(800,500,500,20);
  ground1=new Ground(200,500,500,20),
  division1 =new division(10,360,10,250);
  division2 =new division(70,360,10,250);
  division3 =new division(130,360,10,250);
  division4 =new division(190,360,10,250);
  division5 =new division(250,360,10,250);
  division6 =new division(310,360,10,250);
  division7 =new division(370,360,10,250);
  division8 =new division(430,360,10,250);
 for (var j = 10; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,60));
    }

    for (var j = 10; j <=width-10; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,110));
    }

     for (var j = 10; j <=width; j=j+60) 
    {
    
       plinkos.push(new Plinko(j,160));
    }

     for (var j = 10; j <=width-10; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,210));
    }

    


  
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  
  //sling.display();
  ground.display();
  ground1.display();
  division1.display();
  division2 .display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/5-30, width/5+30), 10,10));
    score++;
    
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  

  





  
  drawSprites();
}


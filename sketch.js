const WORLD = Matter.World;
 const BODIES = Matter.Bodies; 
 const ENGINE = Matter.Engine;
  var MyWorld,MyEngine,ground;
  var ball ;
  
  
  function setup() { createCanvas(800,400);
     MyEngine = ENGINE.create(); 
     MyWorld = MyEngine.world;
      var ground_options={ isStatic:true 
      }

      ground=BODIES.rectangle(400,390,800,20,ground_options); 
      WORLD.add(MyWorld,ground); console.log(ground);
      
      var balloptions={
        restitution : 1
      } 

      
      ball=BODIES.circle(400,200,20,balloptions); 
      WORLD.add(MyWorld,ball); console.log(ball);
  
    } 
     
     function draw() { background("pink");
      ENGINE.update(MyEngine);
       rectMode(CENTER);
        rect(ground.position.x,ground.position.y,800,20); 
     
     
        ellipseMode(RADIUS);
      ellipse(ball.position.x,ball.position.y,20);
     
    
    
    
    }


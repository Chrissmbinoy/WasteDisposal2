class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':3.0
         
      }
      this.image = loadImage("sprites/paper.png")
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width  = 80;
      this.height =80;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width,this.height);
      pop();
    }
  };
  
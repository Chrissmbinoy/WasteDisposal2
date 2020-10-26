
class Dustbin{
  constructor(x, y, width, height) {
     var options ={
isStatic:true

     }
      this.body = Bodies.rectangle(x, y,100,100,options);
      this.width = 162;
      this.height = 200;
     this.image = loadImage("sprites/dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}

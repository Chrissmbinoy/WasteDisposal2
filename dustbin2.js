
  class Dustbin2{
    constructor(x,y,width,height){
      var options = {

        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 10,100,options);
      this.width = 20;
      this.height = 200;
    
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      stroke(220)
    fill(220)
     rect(0, 0, this.width, this.height);
      pop();
    }
  }
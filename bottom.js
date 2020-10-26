
  class Bottom{
    constructor(x,y,width,height){
      var options = {

        isStatic:true
      }
      this.body = Bodies.rectangle(x, y,100,10,options);
      this.width = 190;
      this.height = 20;
    
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
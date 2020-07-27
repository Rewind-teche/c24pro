class Ground 
{
    constructor(x,y)
    {
        var options =
        {
           isStatic:true,
           density : 1.3,
           friction : 1.0
        }

        this.body = Bodies.rectangle(x,y,800,10,options);
        this.width =1600;
        this.height = 10;

        World.add(world,this.body);
    }

    display()
    {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();

    }
}
class Polygon{

    constructor(x,y,height){
    var options=
    {
       
       restitution:1,
			friction:0,
			density:0.8



    }
     this.x=x;
		this.y=y;
        this.height=height; 

       
    this.body=Bodies.circle(x,y,height,options);
    World.add(world,this.body);

  

    }
    display() {
    var  pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill("yellow");
    ellipse(0,0,this.height,this.height);
    pop();

    }
}
    
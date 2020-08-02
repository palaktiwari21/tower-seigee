class Blocks extends BaseClass {
constructor (x,y,height,width){
   super(x,y,width,height);
       
    this.Visibility=255;
    
    }
  
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity -2;
        tint(255,this.Visiblity);
       pop();
      }
    
    }
     score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
   
      }
    }
class Mango {
    
    constructor(){
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1
            
        }
        this.mango1=Bodies.rectangle(800,300,18,90,options)
        this.image = loadImage("mango.png");
        this.mango2=Bodies.rectangle(800,380,18,70,options)
        this.image = loadImage("mango.png");
        this.mango3=Bodies.rectangle(730,390,18,70,options)
        this.image = loadImage("mango.png");
      
        this.image = loadImage("mango.png");
        World.add(world,this.mango1)
        World.add(world,this.mango2)
        World.add(world,this.mango3)
        }
        
    display(){
        imageMode(CENTER);
       
        
        image(this.image,this.mango1.position.x,this.mango1.position.y,20,50)
        image(this.image,this.mango2.position.x,this.mango2.position.y,20,50)
        image(this.image,this.mango3.position.x,this.mango3.position.y,20,50)
       

        }
}
class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.04
        }
        
        this.body = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            //var pointB = this.body.bodyB.position;
            line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
        }
    }
}


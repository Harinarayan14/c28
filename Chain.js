class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
        pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
    if(this.chain.bodyA!=null){
        var pointA = this.chain.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
    }
    }
    
}

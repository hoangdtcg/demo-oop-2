class Circle {
    constructor(x,y,radius,color="red") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX  = 10;
        this.speedY  = 5;
    }

    render(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
        pen.fillStyle = this.color;
        pen.stroke();
        pen.fill();
        pen.closePath();
    }

    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

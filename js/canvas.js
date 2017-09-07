(function(){
  // This is all you need for a given canvas element
  var canvas = document.getElementById('canvas');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  var c = canvas.getContext('2d');
  
  function Circle(x,y,dx,dy,radius,color){//The uppercase C makes this a method
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color=color;
    this.draw=function(){
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
      c.fillStyle=this.color;
      c.stroke();
      c.fill();
    }
    this.update=function(){
      if(this.x+this.radius>innerWidth){this.dx=-this.dx}
      if(this.y+this.radius>innerHeight){this.dy=-this.dy}
      if(this.x-this.radius<0){this.dx=-this.dx}
      if(this.y-this.radius<0){this.dy=-this.dy}
      this.x+=this.dx;
      this.y+=this.dy;
      this.draw();//Draws the updated circle
    }
  }
  
  var circleArray=[];//declares all cirlces
    var n=0;
  for (var i=0;i<200;i++){
    var colorArray=["rgba(40,56,69,.5)","rgba(242,212,146,.5)","rgba(166,58,80,.5)"];
    var radius = Math.random()*30+15;
    var x = Math.random()*(innerWidth-radius*2)+radius;
    var y = Math.random()*(innerHeight-radius*2)+radius;
    var dx = Math.random()*4-2;
    var dy = Math.random()*4-2;
    var color = colorArray[n];
    n++;
    if (n>2){n=0};
    circleArray.push(new Circle(x,y,dx,dy,radius,color));// new {C}ircle makes the method above give us an object
  }
  function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<circleArray.length;i++){
      circleArray[i].update();//Force Updates all pieces of the circleArray
    }
  }
  animate();
  })();
(function(){
  canvas=document.getElementById('canvas');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight*.9;
  canWidth=window.innerwidth;
  canHeight=window.innerHeight;
  var c = canvas.getContext('2d');

  var drops=[];
  var gravity=.1;
  //new code for droplet amount
  var dropletAmount=window.innerWidth;
  console.log(dropletAmount);
  var dropWidth=1;
  var dropHeight=20;

  function Droplet(x,y,speed,initialSpeed){
      this.x=x;
      this.y=y;
      this.speed=initialSpeed;
      this.initialSpeed=initialSpeed;
      this.draw=function(){
          c.fillStyle="rgba(255,255,255,.3)";
          c.fillRect(this.x,this.y,dropWidth,dropHeight);
      }
      this.update=function(){
          this.y=this.y+this.speed;
          this.speed=this.speed+gravity;
          if(this.y>canvas.height){
              this.y=-20
              this.speed=this.initialSpeed;
              this.x=Math.random()*canvas.width;
          }
          this.draw();
      }
  }

  for(var i=0; i<dropletAmount; i++){
      drops.push(new Droplet(Math.random()*canvas.width,Math.random()*canvas.height,10,Math.random()*10));
  }

  function animate(){
      requestAnimationFrame(animate);
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight*.9;
      canWidth=window.innerwidth;
      canHeight=window.innerHeight;
      for(var i=0;i<drops.length;i++){
          drops[i].update();
      }
  }

  animate();

})();
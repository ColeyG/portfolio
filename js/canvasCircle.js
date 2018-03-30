(function(){
  canvas=document.getElementById('canvas');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight*.9;
  canWidth=window.innerwidth;
  canHeight=window.innerHeight;
  var c = canvas.getContext('2d');

  var drops=[];
  var gravity=.1;
  var dropletAmount=1000;
  var gravDir=90;
  var dropWidth=1;
  var dropHeight=20;

  function dropletRotation(x,y,height,width,deg){
      var rad = deg * Math.PI / 180;
      c.translate(x + width / 2, y + height / 2);
      c.rotate(rad);   
      c.fillStyle="rgba(255,255,255,.3)";
      c.fillRect(width / 2 * (-1),height / 2 * (-1),width,height);
      c.rotate(rad * ( -1 ) );
      c.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
  }

  function Droplet(x,y,speed,initialSpeed){
      this.x=x;
      this.y=y;
      this.speed=initialSpeed;
      this.initialSpeed=initialSpeed;
      this.draw=function(){
          dropletRotation(this.x,this.y,dropWidth,dropHeight,gravDir);
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
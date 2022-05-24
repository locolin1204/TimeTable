// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const para = document.querySelector('p');
let ballCount = 0;
const totalBall = 25;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape{
    constructor(x, y, velX, velY){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    }
}

class Ball extends Shape{
  constructor(x, y, velX, velY, color, size){
    super(x,y,velX,velY);
    this.color = color;
    this.size = size;
    this.exist = true;
  }
  draw(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update(){
    if((this.x + this.size >= width)){
      this.velX = -this.velX;
    }
    if((this.x - this.size <= 0)){
      this.velX = -this.velX;
    }
    if((this.y + this.size >= height)){
      this.velY = -this.velY;
    }
    if((this.y - this.size <= 0)){
      this.velY = -this.velY;
    }
    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect(){
    for(const ball of balls){
      if(!(this === ball) && ball.exist){
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if(distance < this.size + ball.size){
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

class EvilCircle extends Shape{
    constructor(x,y){
        super(x,y,20,20);
        this.color = "red";
        this.size = 15;
        window.addEventListener('keydown', e=>{
            if (e.key === "a" || e.key === "ArrowLeft"){
                this.x -= this.velX;
            } else if (e.key === "d" || e.key === "ArrowRight"){
                this.x += this.velX;
            } else if (e.key === "w" || e.key === "ArrowUp"){
                this.y -= this.velY;
            } else if (e.key === "s" || e.key === "ArrowDown"){
                this.y += this.velY;
            }
        });
    }

    draw(){
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    checkBounds(){
        if((this.x + this.size >= width)){
            this.x = this.x + this.size - 3;
          }
          if((this.x - this.size <= 0)){
            this.x = this.x + this.size + 3;
          }
          if((this.y + this.size >= height)){
            this.y = this.y + this.size - 3;
          }
          if((this.y - this.size <= 0)){
            this.y = this.y + this.size + 3;
          }
    }

    collisionDetect(){
        for(const ball of balls){
            if(ball.exist){
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
        
                if(distance < this.size + ball.size){
                ball.exist = false;
                }
            }
        }
    }
}

const balls = [];

while(balls.length < totalBall){
  const size = random(10,20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7,7),
    random(-7,7),
    randomRGB(),
    size
  );
  balls.push(ball);
}

const evil = new EvilCircle(width/2, height/2);

function loop(){
    ballCount = 0;
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, width, height);
    for(const ball of balls){
    if(ball.exist){
        ball.draw();
        ball.update();
        ball.collisionDetect();
        ballCount++;
    }
    evil.draw();
    evil.checkBounds();
    evil.collisionDetect();
    para.textContent = `${ballCount} balls`;
  }
  requestAnimationFrame(loop);
}

loop();

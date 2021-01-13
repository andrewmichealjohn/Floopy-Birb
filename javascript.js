var c = document.getElementById("myCanvas");//this is our anchor to the html file giving us the ability to mess around in the javascript
var ctx = c.getContext("2d");//this is the dimensions

var x = myCanvas.width / 20; //Here is where the ball will start
var y = myCanvas.height / 20;//again this is the second cordinate

var dx = 10; //We will be using this to be changing where the circle will be
var dy = 10; //The idea of this is that the frames per second will be changed. Or the speed is changed


var gravity = 0.2; //where the gravity will be. and how the gravity will work
var damping = 0.75;//where the ball will slow down or how long it takes for the ball to slow down
var ballSize = 5; //How wide the radius is

function drawCircle() {
  ctx.beginPath();
  ctx.arc(x, y, ballSize, 0, Math.PI*2); //The circle will appear in the top left and will be the size we already set it to
  ctx.fillStyle = "#FF00FF"; //The color is pink and it will show up as pink
  ctx.fill(); //this is what will make the ball come up as pink and have it be pink
  ctx.stroke();
}
function rect(){//this is the function that creates our rectangles that will act as pipes

  ctx.beginPath();//this is the start of our top rectangles
ctx.fillRect(0, 2, 100, 150);//this gives us size the top rectangle
ctx.stroke();//this creates it
ctx.beginPath();//this starts our bottom rectangles
ctx.fillRect(100, 150, 100, 150); //this gives us the size of the bottom rectangle
ctx.stroke();//this creates it
}

function draw() {//tis will create a canvas for us to draw on
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //This is  going to let us create more new frames of the cnavas so we can keep drawing new balls
  drawCircle();
rect();
  if (x + dx > c.width - ballSize || x + dx < ballSize) { // when our ball tries to hit the x edge of the canvas...
    dx = -dx; //the direction will end up being turned and then bounce a certian amount of times
  }

  if(y + dy > c.height - ballSize || y + dy < ballSize) { //when our ball tries to hit the y edge of our y edge of the canvas...
    dy = -dy * damping; //the direction will be turned and it will start slowing down
  }

  dy += gravity; // this will give the y part of our ball a force much like gravity givig it the feeling of weight
  x += dx;

  if (((y + dy) + ballSize) <= c.height) {//the act of using gravity
    y += dy;
  }
}

setInterval(draw, 15);

document.addEventListener("keydown", makeBounce);//this is to give us a down key button
 function makeBounce(e) {//this starts the funtion
   if (e.key == " ") {//this is giving us an if statement
     dy -= 10;//so if the space button is pressed then the ball jumps by ten
   }
   if (e.key == "r") {//this gives us another if statement
     dx = -dx;//so if we press the r button it switches the direction of the ball
   }
 }


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillRect(20, 20, 150, 100);//this gives us the space that the canvas takes up and the space we have to work with

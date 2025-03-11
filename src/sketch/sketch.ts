
function setup() {  
    createCanvas(400, 400);
    console.log("hello");
    
    stroke(0);
    noFill();
    colorMode(HSB);
  }
  
function draw() {
    background(0, 0, 80);
    ellipse(50, 50, 50, 50);
    noLoop();
}
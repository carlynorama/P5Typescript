
let diameter:number;
let growFactor:number = 1;
let minDiameter: number = 5;
let maxDiameter:number;


function setup() {  
    createCanvas(400, 400);
    
    console.log("hello");
    
    diameter = 50;
    maxDiameter = 400;

    stroke(0);
    noFill();
    colorMode(HSB);
  }
  
function draw() {
    background(0, 0, 80);
    console.log(diameter);
    
    if (diameter > maxDiameter || diameter < minDiameter ) {
        growFactor *= -1;
    }
    diameter += growFactor;
    console.log(growFactor);

    ellipse(width/2, height/2, diameter, diameter);
}
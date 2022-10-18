const colorList = ['maroon','brown','olive','teal','navy','black','red','orange','yellow','lime','green','cyan','blue','purple','magenta','grey','pink','apricot','beige','mint','lavender','white'];

let moversX = [];
let moversT = [];
let moversC = [];
const R = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  for( let i = 0; i < 10; i++ ) {
    moversX.push( random(R,width-R) );
    moversT.push( random(10000) );
    moversC.push( color(random(colorList)) );
  }
}

function draw() {
  background(255);
  for( let i = 0; i < moversX.length; i++ ) {
    const y = map(noise(moversT[i]),0,1,R,height-R);
    moversT[i] += 0.001
    fill(moversC[i]);
    circle(moversX[i],y,R);
  }
}
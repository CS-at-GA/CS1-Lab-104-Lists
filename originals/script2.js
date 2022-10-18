const colorList = ['maroon','brown','olive','teal','navy','black','red','orange','yellow','lime','green','cyan','blue','purple','magenta','grey','pink','apricot','beige','mint','lavender','white'];

let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  for( let i = 0; i < 10; i++ ) {
    movers.push( {
      tx:random(10000),
      ty:random(10000),
      c: color(random(colorList)),
      r: random(4,25)
    });
  }
}

function draw() {
  background(255);
  for( let mover of movers ) {
    const x = map(noise(mover.tx),0,1,mover.r,width-mover.r);
    const y = map(noise(mover.ty),0,1,mover.r,height-mover.r);    
    mover.tx += 0.001;
    mover.ty += 0.001
    fill(mover.c);
    circle(x,y,mover.r);
  }
}
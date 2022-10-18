const colorList = ['maroon','brown','olive','teal','navy','black','red','orange','yellow','lime','green','cyan','blue','purple','magenta','grey','pink','apricot','beige','mint','lavender','white'];

let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  colorMode(HSB);
  for( let i = 0; i < 20; i++ ) {
    movers.push({
      tx:random(10000),
      ty:random(10000),
      c: color(random(colorList)),
      r: random(4,25)
    });
  }
}

function draw() {
  background(255);
  
  for( let i = 0; i < movers.length-1; i++ ) {
    for( let j = i; j < movers.length; j++ ) {
      if( touching(movers[i],movers[j]) ) {
        const ratio = (movers[i].r > movers[j].r ? movers[i].r : movers[j].r) / (movers[i].r + movers[j].r) ;
        const newColor = lerpColor( movers[i].c, movers[j].c, ratio);
        movers[i].c = newColor;
        movers[j].c = newColor;
      }
    }
  }
  
  for( let mover of movers ) {
    const x = map(noise(mover.tx),0,1,mover.r,width-mover.r);
    const y = map(noise(mover.ty),0,1,mover.r,height-mover.r);    
    mover.tx += 0.001;
    mover.ty += 0.001
    fill(mover.c);
    circle(x,y,mover.r);
  }


}

function distanceBetweenCircles( a, b ) {
  const x1 = map(noise(a.tx),0,1,a.r,width-a.r);
  const y1 = map(noise(a.ty),0,1,a.r,height-a.r);
  const x2 = map(noise(b.tx),0,1,b.r,width-b.r);
  const y2 = map(noise(b.ty),0,1,b.r,height-b.r);
  return dist(x1,y1,x2,y2);
}

function touching( a, b ) {
  const R = a.r + b.r
  return distanceBetweenCircles(a,b) < R;
}
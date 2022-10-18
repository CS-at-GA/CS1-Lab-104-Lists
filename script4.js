const colorList = ['maroon','brown','olive','teal','navy','black','red','orange','yellow','lime','green','cyan','blue','purple','magenta','grey','pink','apricot','beige','mint','lavender','white'];

let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  colorMode(HSB);
  for( let i = 0; i < 10; i++ ) {
    movers.push({
      tx:random(10000),
      ty:random(10000),
      c: color(random(colorList)),
      r: random(4,25)
    });
    updateMoverPosition(movers[i])
  }
}

function updateMoverPosition(mover) {
  mover.x = map(noise(mover.tx),0,1,mover.r,width-mover.r);
  mover.y = map(noise(mover.ty),0,1,mover.r,height-mover.r);
  mover.tx += 0.001;
  mover.ty += 0.001;  
}

function draw() {
  background(255);

  let newMovers = [];
  let eaten = [];
  for( let i = 0; i < movers.length-1; i++ ) {
    for( let j = i; j < movers.length; j++ ) {
      if( !eaten.includes(i) 
         && !eaten.includes(j) 
         && touching(movers[i],movers[j]) ) {
        const [bigger,smaller] = movers[i].r > movers[j].r ? [i,j] : [j,i];       
        newMovers.push( {
          mover:movers[bigger],
          newR:movers[bigger].r+movers[smaller].r
        });
        eaten.push(smaller)
        eaten.push(bigger)
        i++;
        j++;
      }
    }
  }
  movers = newMovers.map( survivor => {
    survivor.mover.r = survivor.newR
    return survivor.mover
  });
  
  for( let mover of movers ) {
    updateMoverPosition(mover);
    fill(mover.c);
    circle(mover.x,mover.y,mover.r);
  }
}

function distanceBetweenCircles( a, b ) {
  return dist(a.x,a.y,b.x,b.y);
}

function touching( a, b ) {
  const R = a.r + b.r
  return distanceBetweenCircles(a,b) < R;
}
// https://sashamaps.net/docs/resources/20-colors/
const colorList = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];

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
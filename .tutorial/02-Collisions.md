# Collisions

The circles are moving, which is great, but let's take it one step further... can we determine when two circles are overlapping (colliding)? 

## First, math...

In the cartesean plane, this is pretty straight forward. First, calculate the distance between the two centers of the circles. Second, compare that distance to the sum of the radii. If the distance is greater than sum of the radii, the circles aren't touching. If the distance is less, the circles are overlapping. If the distance is the same, the circles are touching.

## And now, code

The above serves as pseudocode. 

```javascript
function distanceBetweenCircles( a, b ) {
  const x1 = map(noise(a.tx),0,1,a.r,width-a.r);
  const y1 = map(noise(a.ty),0,1,a.r,height-a.r);
  const x2 = map(noise(b.tx),0,1,b.r,width-b.r);
  const y2 = map(noise(b.ty),0,1,b.r,height-b.r);
  return dist(x1,y1,x2,y2);
}
```

`dist` is a p5 function. 

```javascript
function touching( a, b ) {
  const R = a.r + b.r
  return distanceBetweenCircles(a,b) < R;
}
```

## And then, what...?

Well, we can do whatever we want after determining the circles are overlapping. I have chosen to alter the colors of the colliding circles. Before we get to that, I wanted to highlight a small change in `setup`: `colorMode(HSB)`. Switching the color mode from RGB to HSB means that we can deal with color in a more natural way to us. Hue, the "name" of the color, if you will; Saturation, the intensity of the color; Brightness. The net effect here is that the color changes will end up being less muddy and grey. 

```javascript
if( touching(movers[i],movers[j]) ) {
  const ratio = (movers[i].r > movers[j].r ? movers[i].r : movers[j].r) / (movers[i].r + movers[j].r) ;
  const newColor = lerpColor( movers[i].c, movers[j].c, ratio);
  movers[i].c = newColor;
  movers[j].c = newColor;
}
```

After we determine two circles have collided, we do a couple things. First, we determine the ratio of the larger of the two circles to the whole. Then we use a new function [`lerpColor`](https://p5js.org/reference/#/p5/lerpColor) which calculates a color between to color at a certain ratio. Finally, we set the color of both circles to that color. 

# Goal

Do something different upon collision. 
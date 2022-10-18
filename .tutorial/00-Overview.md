# Example Code Overview

In this lab, you'll learn about: a few cool p5 functions, POJOs, and, most importantly, arrays (lists). 

## Summary of Previous Lab

In the last lab, you learned about loops, as well as some javscript trickery. It is crucial that you understand loops before starting this lab, so make sure you review and/or ask questions as needed. 

## Overview of Current Lab

In this sketch, you'll be asked to add code to the exisiting code as part of the lab.[^1]

This is a pretty straight-forward sketch, but what is novel about it is that we are now _keeping track of multiple things_. Not only that, but we are keeping track of _multiple things about those multiple things_. We do this using arrays. Let's look at how it works. 

### Declaration

We've previously been using an array to store color names, but now we declare _empty_ arrays. 

```javascript
let moversX = [];
let moversT = [];
let moversC = [];
```

As we will see, `moversX` will store the x position of the circles, `moversC` will store the color values for those circles, and `moversT` will store a number that will be responsble for the y position of the circles. 

### Loops and Arrays :: Peas and Carrots

Because we typically use arrays to store _lots_ of things[^2], we often use loops to do things with those arrays. We see that here as we use a loop to add things to each of the arrays. 

```javascript
for( let i = 0; i < 10; i++ ) {
  moversX.push( random(R,width-R) );
  moversT.push( random(10000) );
  moversC.push( color(random(colorList)) );
}
```

`push` is an array function that adds something to the array on the end. Nothing suprising really here, but it is worth noting that the number 10 in the `for` loop declaration controls how many circles there will be. 

```javascript
for( let i = 0; i < moversX.length; i++ ) {
  const y = map(noise(moversT[i]),0,1,R,height-R);
  moversT[i] += 0.001
  fill(moversC[i]);
  circle(moversX[i],y,R);
}
```
#### `.length`

Here we now use the values we stored in the arrays. Again, we are using a `for` loop, but instead of using the number 10, I use a _property_ of the array called `length` to determine how many times the loop should run. I could have used 10, certainly[^3], but you need to know about `length`. 

>**Note** to get the length of an array use `.length`, making sure to use the dot.

#### `[i]`

Finally, we get to see how we manipulate the values in the array. We do this using an item's _index_ along with the square bracket syntax (e.g. `moversX[i]`). In the case of this particular array, the indices are 0-9.[^4]. 

In all ways, an indexed item in an array is a variable, meaning we get a value from it (`fill(moversC[i])`) or assign a value to it (`moversT[i] += 0.001`).

### `map` and `noise`

To achieve the fluid moviement here, we use a technique called Perlin Noise. There are two parts to this: 

1. using the p5 [`noise`](https://p5js.org/reference/#/p5/noise) function, with a number (`moversT[i]`, in our example) to generate a number between 0 and 1. This number is random-ish. The key here is _the closer together the values that are passed into noise on subsequent calls, the closer the output values_. If we passed in 7 and then 8 the values would _probably_ be further apart than if we passed 7 and then 7.1.
2. we then take the output of the `noise` function and use it with the p5 [`map`](https://p5js.org/reference/#/p5/map) function. This function takes a value that lives in one range (between 0 and 1, in this case) and maps it into another value (0 to height).

In this way, we achieve the fluid vertical movement of the circles. 

## Goal

Add a new array representing a new property. 

[^1]: Certainly, you could copy and paste, but you'll _remember_ it better if you type it. 
[^2]: And lots of similar things that we want to do similar things to. 
[^3]: And, really, if I am not going to change the number of circles, I probably should use a variable in both places. 
[^4]:  Remember that arrays in JavaScript and many other languages start at 0. 
# Simplifying a Bit

**Copy the contents of `script2.js` into `script.js`.**

It is a little weird that we are using three different arrays to store information about a single conceptual thing. It would be much easier to to store all of the information about a thing in _the same place_. This coincides with several good coding practices, and it just makes sense. 

## Skipping to the Good Bits

A lot of "learning to code" trajectories would lead you next to storing all of the properties of a thing in an array itself, then putting those things into an array. Something like: 

```javascript
let circles = [];
// in a loop
const propertiesOfCircle = [random(0,width),random(0,height),color(random(colorList))]
circles.push(propertiesOfCircle) // an array in an array... a 2D array
// drawing
fill(circles[i][2]);
circle(circles[i][0], circles[i][1], R);
```

Lame.[^1]

2D arrays have their place, and we will get to them, but in JavaScript, we have the capacity to do better for this sort of thing. Enter the **POJO**, or the Plain (Old) JavaScript Object. 

A POJO is a simple bundling of key:value parings. 

```javascript
let circles = [];
// ...
// here is the object creation
let newCircle = {
  x:random(0,width),
  y:random(0,height),
  c:color(random(colorList))
};
circles.push( newCircle );
// ...
fill(circles[i].c);
circle(circles[i].x, circles[i].y, R);
```

That is more clear, I think.[^2]

I've updated the code to use noise for movement for both x and y. 

## A New Loop! 

Finally, we see a new version of the for loop. 

```javascript
for( let mover of movers ) {
  // do circle stuff using mover.
}
```

The difference here is that we are looping _over every item in a collection_ and we are doing so _without caring what index those items are in_. If your need for a loop matches these qualifications, a _for-each_ loop, as this style of loop is called, is perfect. If you want to go through only _some of the items_ or if you _need the index_ for whatever reason (often for positioning purposes), then you should use the traditional for loop. 

## Goals

1. Add a random stroke color property to the objects when they are created and use it when drawing the circles.
2. Have the circle be randomly sized.

### Additional Goals (Required for Honors)

3. Have the circles change size using `noise`.
4. Remove the noise (`t`) variables and replace them with x,y variables, as well as dx and dy variables to represent the _change_ of each of those variables (velocity). Then remove the `map...noise` pattern that updates the position and replace it with updating the position via the velocity.
5. Once you do step 3, you'll find that now the movers will be able to move off the screen. Fix that in any way you think appropriate. 

<!-- Footnotes -->
[^1]: Actually, it isn't lame but it is hard to perceive the _meaning_ of the code from what's written. We could do a little better with desctructuring at the point of access: `const [x,y,c] = circles[i]`, and I suppose there is a cleanliness to it, but it doesn't really fix the problem at the time we create the values. Objects are cleaner. 
[^2]: Ughhh. I acknowledge that if we broke the properties array onto new lines and commented them, we could address the intent issue in footnote 1, and coupled with destructuring, we are just as clean. [Here...](https://gist.github.com/gajoswald/0973b86c212d1b0c44a6b15c03d878b4)

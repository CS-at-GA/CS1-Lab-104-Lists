# A Minor, But Important Change

**Copy the contents of `script1.js` into `script.js`.**

There is now a `keyPressed()` function with the code to create a new mover. 

```javascript
function keyPressed() {
  moversX.push( random(R,width-R) );
  moversT.push( random(10000) );
  moversC.push( color(random(colorList)) );  
}
```

This will add a new mover to the array, as we did in `setup`, and **no other changes are needed** because we used `movers.length` in `draw`, so the loop automatically accomodates changes in size to `movers`. Glorious. 

## Goal

Create an `addMover` function and use it appropriately in your code.
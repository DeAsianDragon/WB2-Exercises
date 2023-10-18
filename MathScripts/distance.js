//input
var x1 = 3; 
var y1 = 5;
var x2 = 8;
var y2 = 9;

//equation
var xFinal = Math.pow(x2-x1, 2)
var yFinal = Math.pow(y2-y1, 2)
var xAddY = xFinal + yFinal
var totalDistance = Math.sqrt(xAddY);

console.log("Distance is between ("
+ x1 + ", " + y1 
+ ") and (" 
+ x2 + ", " + y2 
+ ") is " + totalDistance.toFixed(2))
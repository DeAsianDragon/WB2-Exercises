var roomLength = 20
var roomWidth = 15
var tilesPerBox = 12

//equation
var roomArea = roomLength * roomWidth
var boxesNeeded = (roomArea / tilesPerBox)
var boxesToBuy = boxesNeeded + (boxesNeeded * .1 )

console.log ("Buy " + Math.ceil(boxesToBuy) + " boxes")



//input
var paycheck = 950
var tax = .23


//equation
var displayTax = tax * 100
var totalTaken = paycheck * tax
var totalLeft = paycheck - totalTaken

//output

console.log("You made $" + paycheck 
+ ", taxes are %" 
+ displayTax 
+ ", total withheld is $" 
+ totalTaken.toFixed(2)
+ ", leaving $"
+ totalLeft.toFixed(2))

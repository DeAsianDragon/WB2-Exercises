peopleOnTour = 57
vanSeats = 15
vanPrice =  250

vansNeeded = Math.ceil(peopleOnTour / vanSeats)
vansTotalCost = vanPrice * vansNeeded

console.log ("There are " + peopleOnTour 
+ " people, so the vans needed are "+ vansNeeded 
+ " and total cost of that is $" + vansTotalCost)
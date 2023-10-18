payRate = 17.30 ;
hoursWorked = 45 ;

if (hoursWorked <= 40) {
paycheck = payRate * hoursWorked
}
else {
    overtimeTime = hoursWorked - 40
    overtimePay = payRate * 1.5 * overtimeTime
    paycheck = payRate * 40 + overtimePay
}

console.log(paycheck);
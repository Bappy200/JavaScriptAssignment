
// kilometer to meter converter
function kilometerToMeter(kilometre){
    if(typeof kilometre == 'string' || kilometre < 0){
        return 'Please input a positive number';
    }
    else{
        var meter = kilometre * 1000;
        return meter;
    }
}


//Calculate the total budget
function budgetCalculator(watch, phone, laptop){
    if(watch < 1 || phone < 1 || laptop < 1){
        return 'Please input positive numbers';
    }
    else{
        var totalPrice = watch*50 + phone*100 + laptop*500;
        return totalPrice;
    }
}


//
var budget = budgetCalculator(1,2,-2);
console.log(budget);


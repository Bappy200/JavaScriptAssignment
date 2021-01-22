
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


//Calculate the total hotel cost
function hotelCost(day){
    if(day>0 && typeof day == 'number'){
        var totalCost = 0;
        if(day <=10){
            totalCost = day * 100;
        }
        else if(day<=20){
            var firstPart = 10 * 100;
            var remaining = day - 10;
            var secondPart = remaining * 80;
            totalCost = firstPart + secondPart; 
        }
        else{
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = day - 20;
            var lastPart = remaining * 50;
            totalCost = firstPart + secondPart + lastPart;
        }
        return totalCost;
    }
    else{
        return 'Please input a positive number'; 
    }   
}


//Get the large length name
function megaFriend(names){
    if(names.length > 0 && Array.isArray(names)){
        var largeName = names[0];
        var largeLength = largeName.length;
        for(var i = 1; i < names.length; i++){
            var currentLength = names[i].length;
            if(currentLength > largeLength){
                largeName = names[i];
                largeLength = currentLength;
            }
        }
        return largeName;
    }
    else{
        return 'Please input right name.'
    }
}


// call function
var meter = kilometerToMeter(4.4);
console.log(meter);

var budget = budgetCalculator(2,3,4);
console.log(budget);

var totalHotelCost = hotelCost(22);
console.log(totalHotelCost);

var largeName = megaFriend(['sajjaudl','rabby','shaharin islam','jewel islam']);
console.log(largeName);


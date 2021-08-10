function inchesFeet(inches){
    var feet = inches/12;
    return feet;
}

var myInches = 132;
var feet = inchesFeet(myInches);
console.log('myInches in feet', feet);

var dadiInches = 144;
var feet = inchesFeet(dadiInches);
console.log(feet);

var naniInches = 156;
var feet = inchesFeet(dadiInches);
console.log(feet);

var nanaInches = 168;
var feet = nanaInches / 12;
console.log(feet);


// mile to km 

function mileTokilometer(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileTokilometer(26.2);
console.log('marathon in km: ', marathon);
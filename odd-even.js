// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0)


// const number = 145;
function isEven(number){
    if(number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);

const herNumber = 1892;
const isHerNumberEvent = isEven(herNumber);
console.log('is her number even', isHerNumberEvent);


// is odd function
function isOdd(number) {
    if(number % 2 != 0){
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('is my number odd', isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log('is her number odd', isHerNumberOdd);
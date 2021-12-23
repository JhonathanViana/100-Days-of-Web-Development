let age = 32;
let userName = 'Max';
let hobbies = ['Sports', 'Cooking', 'Reading'];
// index number beginning to 0, 1, 2...
let job = { 
    title: 'Developer', 
    place: 'Brazil', 
    salary: 50000
};

let adultYears;

function calculateAdultYears(userAge) {
    return userAge - 18;
    // in function we never use variable like let
    // The return is used whenever the called function must return some value. If the function calculates a value and you need to use that value after the call, that value comes on return.
    // using , to separate functions parameter
}

adultYears = calculateAdultYears(age);
alert(adultYears);

age = 45;
adultYears = calculateAdultYears(age);

alert(adultYears);
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
function calculateAdultYears() {
    adultYears = age - 18;
    // in function we never use variable like let
}

calculateAdultYears();
alert(adultYears);

age = 45;
calculateAdultYears();
alert(adultYears);
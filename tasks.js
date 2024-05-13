// Task 1
function checkVotingEligibility() {

    const age = 20;
    if (age >= 18) {
        console.log("You are eligible for voting");
    } else {
        console.log("You are not eligible for voting");
    }

}

// Task 2
function printNumbersWithWhile() {
 let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

// Task 3
function printEvenNumbersWithFor() {
 for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
}

// Task 4
function getDayOfWeek(day ) {
 switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day");
    }
}

// Task 5
function sum(num1, num2) {
    return num1 + num2;
}

// Task 6
//Uncomment and solve
// const fruits = ;
function fruits() {
    const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
    fruits.forEach(fruit => console.log(fruit));
}
module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};


// Task 1
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible for voting." );
  } 
  else {
    console.log("You are not eligible for voting." );
  }

}

// Task 2
function printNumbersWithWhile() {
  var i=1;
  while (i<5) {
    console.log(i);
    i++;
  }

}

// Task 3
function printEvenNumbersWithFor() {
  for (var i = 2; i < 10; i+2) {
    console.log(i);
  }

}

// Task 4
function getDayOfWeek() {
  var a;
  switch (a) {
    case 1:
      console.log('sunday');
      break;
  case 2:
    console.log('monday');
    break;
    case 3: 
    console.log('tuesday');
    break;
    case 4:
      console.log('wednesday');
      break;
    case 5:
      console.log('thursday');
      break;
    case 6:
      console.log('friday');
      break;
    case 7:
      console.log('saturday');
      break;
    default:
      console.log('new week');
      break;
  }

}

// Task 5
function sum() {

}

// Task 6
//Uncomment and solve
// const fruits = ;

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};

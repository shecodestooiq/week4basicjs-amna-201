// Task 1
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible for voting." );
  } 
  else {
    console.log("You are not eligible for voting." );
  }

}
checkVotingEligibility(18);
// Task 2
function printNumbersWithWhile() {
  var i=1;
  while (i<6) {
    console.log(i);
    i++;
  }

}
printNumbersWithWhile();

// Task 3
function printEvenNumbersWithFor(i) {
  for (var i = 2; i < 11; i+=2) {
    console.log(i);
  }

}
printNumbersWithWhile();

// Task 4
function getDayOfWeek(a) {
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
getDayOfWeek(2);

// Task 5
function sum(num1,num2) {
  var num1;
  var num2;
  var sum=num1+num2;
  console.log(sum);

}
sum('amna','mohamed');

// Task 6
//Uncomment and solve
// const fruits = ;
function fruits(){
  var array=['apple','banana','cherry','orange','kiwi','melon','mango','pineapple','grape','watermelon', ]
  console.log(array);
}
fruits();

export default {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};


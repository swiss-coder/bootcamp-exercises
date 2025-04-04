let input = prompt("Please enter a number: ");

let number = Number(input);

if (isNaN(number)) {
  console.log("This is not a number.");
} else if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
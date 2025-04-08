// Ask for the user's age
let age = prompt("What is your age?");

// Convert the input to a number
age = Number(age);

// Check the age and give appropriate response
if (isNaN(age)) {
    alert("Please enter a valid number.");
} else if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
    alert("Powering On. Enjoy the ride!");
}
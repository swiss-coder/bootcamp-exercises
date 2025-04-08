let birthYear = prompt("What year were you born?");
let birthMonth = prompt("Which month were you born? (1–12)");

let futureYear = prompt("Enter a future year:");
let futureMonth = prompt("Which month in that year? (1–12)");

// Convert string inputs to numbers
birthYear = Number(birthYear);
birthMonth = Number(birthMonth);
futureYear = Number(futureYear);
futureMonth = Number(futureMonth);

let yearDifference = futureYear - birthYear;
let monthDifference = futureMonth - birthMonth;

    if (monthDifference < 0) {
        yearDifference--;
        monthDifference += 12;
    }


console.log(yearDifference + " years, " + monthDifference + " months");
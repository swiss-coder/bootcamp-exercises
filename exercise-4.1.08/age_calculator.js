let birthYear = prompt("What year were you born?");
let futureYear = prompt("Enter a future year:");

// Convert string inputs to numbers
birthYear = Number(birthYear);
futureYear = Number(futureYear);

let age1 = futureYear - birthYear;     // Age
let age2 = age1 - 1;                   // Age before the exact month

alert(`I will be either ${age2} or ${age1} in ${futureYear}.`);
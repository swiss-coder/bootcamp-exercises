// FizzBuzz from 1 to 100

for (let i = 1; i <= 100; i++) {
    // Multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Multiple of only 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Multiple of only 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // All other numbers
    else {
      console.log(i);
    }
  }
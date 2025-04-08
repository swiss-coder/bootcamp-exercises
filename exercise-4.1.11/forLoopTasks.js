// 1. Print numbers from 0 to 20
console.log("Numbers from 0 to 20:");
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// 2. Print odd numbers from 3 to 29
console.log("\nOdd numbers from 3 to 29:");
for (let i = 3; i <= 29; i += 2) {
  console.log(i);
}

// 3. Print even numbers from 12 to -14 (descending)
console.log("\nEven numbers from 12 to -14:");
for (let i = 12; i >= -14; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Print numbers from 50 to 20, only if multiple of 3
console.log("\nMultiples of 3 from 50 to 20:");
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
for (let i = 1; i <= 10; i++) {
    let row = ""; // Start with an empty string for each row
    for (let j = 1; j <= 10; j++) {
      row += (i * j).toString().padStart(4, " "); // Add the product with spacing
    }
    console.log(row); // Print the completed row
  }
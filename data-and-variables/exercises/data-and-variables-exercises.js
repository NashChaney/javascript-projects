// Declare and assign the variables below
let shuttleName = "Determination";
let speed = 17500;
let kmToMars = 225000000;
let kmToMoon = 384400;
let milesPerKm = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "Determination");
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof 0.621);
// Calculate a space mission below
let milesToMars = kmToMars * milesPerKm;
let hoursToMars = milesToMars / speed;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = kmToMoon * milesPerKm;
let hoursToMoon = milesToMoon / speed;
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");
// Print the results of the trip to the moon below
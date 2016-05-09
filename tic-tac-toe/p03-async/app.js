"use strict"

// Read line is a javascript object to accomplish:
const readline = require('readline');

// Readline can read from various inputs and outputs
// The following creates an instance of the interface using:
// keyboard input: stdin
// text output: stdout 
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Let write to the screen
// the "\n" is a carriage return 
// which ends the line and move to the next line
process.stdout.write("One\n");

// Notice we need to wait to close the input
// until we are done using it
input.question("Hit Enter\n", (line)=>{
    process.stdout.write("Three\n")
    // This tells the system we are done using input and output
    input.close(); 
})

process.stdout.write("Two\n");



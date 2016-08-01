// Read line is a javascript object to accomplish user input
const readline = require('readline');

// Readline can read from various inputs and outputs
// The following creates an instance of the interface using:
// keyboard input: stdin
// text output: stdout 
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Notice we need to wait to close the input
// until we are done using it
input.question("Would you like to play a game?",  (line) => {
   // Print the line sent to to the event handler functions
    process.stdout.write(line+'\n');
     // This tells the system we are done using input and output
    input.close(); 
})


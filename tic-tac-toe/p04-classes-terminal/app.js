"use strict"

const Terminal = require('./terminal')
let terminal = new Terminal();

// We can clear the screen
terminal.clearScreen();

// Notice we need to wait to close the input
// until we are done using it
terminal.question("Enter some text and Hit Enter\n", (line)=>{
    terminal.writeLine(line)
    // This tells the system we are done using input and output
    terminal.close(); 
})


"use strict"
const readline = require('readline')
module.exports = class Terminal {
    constructor() {
      this.output = process.stdout;
      this.input = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });
    }
    
    write(s) {
      this.output.write(s);
    }
    writeLine(s) {
      if (!s) s="";
      this.output.write(s+'\n');
    }
    clearScreen() {
        process.stdout.write('\x1Bc')
    }
    
    question(prompt, callback) {
      this.input.question(prompt, callback);
    }
    
    close() {
      this.input.close();
    }
}


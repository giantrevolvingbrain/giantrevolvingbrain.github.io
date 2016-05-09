"use strict"

const Terminal = require('./terminal')

class Game {
  constructor() {
    this.terminal = new Terminal();
  }
  start() {
    this.terminal.clearScreen();
    this.playTurn();
  }
  end() {
    // This tells the system we are done using input and output
    this.terminal.close();
  }
  askToPlayAgain() {
    this.terminal.question("Type 'quit' then enter to end. Or hit Enter to play again.", (line) => {
        if (line==='quit') {
          this.end();
        } else {
          this.playTurn();
        }
    })
  }
  playTurn() {
    // Notice we need to wait to close the terminal
    // until we are done using it
    this.terminal.question("Pick a number between 1 and 10?", (line) => {
      let pick = parseInt(line);
      let secret = Math.floor((Math.random() * 10) + 1);

      if (pick < 1) {
        this.terminal.writeLine("Too low")
      } else if (pick > 10) {
        this.terminal.writeLine("Too high")
      } else if (pick === secret) {
        this.terminal.writeLine("How did you know? That's right!")
      } else {
        this.terminal.writeLine("Sorry, I was thinking " + secret)
      }
      this.askToPlayAgain();
    })

  }
}

let game = new Game();
game.start();

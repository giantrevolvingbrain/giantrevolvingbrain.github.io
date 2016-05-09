"use strict"

const Terminal = require('./terminal')

class Board {
    constructor() {
        this.slots = []
        this.clearBoard();
    }
    clearBoard() {
        for(let i=0;i<9;i++) {
            this.slots[i] = 0;
        }
    }
    printBoard(terminal) {
        for (let i=0;i<9;i++) {
            if (this.slots[i]==0) {
                terminal.write((i+1).toString());
            } else if (this.slots[i]==1) {
                terminal.write("X");
            } else if (this.slots[i]==-1) {
                terminal.write("O");
            }
            if ((i+1)%3==0) terminal.writeLine();
        }
        
    }
    hasPiece(place) {
        if(place<0 || place>=9) return true;
        return !this.slots[place] == 0;
    }
    setPiece(place, value) {
        if(place<0 || place>=9) return true;
        return this.slots[place] = value;
    }
    checkForCat() {
       // Check for a cats game return true if it is false if it isn't 
       //return false;
       //return true;
    }
    checkForWin() {
        // return 1 if X wins
        // return -1 if O wins
        // return 99 if cats game
        // return 0 if no winner
        return 0;
    }
}


class Game {
    constructor() {
        this.board = new Board();
        this.terminal = new Terminal();
    }

    start() {
        this.winner = 0;
        this.player = 1;
        this.board.clearBoard();
        this.playTurn();
    }
    
    end() {
        this.terminal.close();
    }
    
    askToPlayAgain() {
        this.terminal.question("Type 'quit' to end or anything else to play again then hit enter: ", (line)=>{
            if (line!=='quit') {
                setImmediate(()=>{this.start();});
            } else {
                this.end();
            }
        }) 
    }
    
    playTurn () {
        this.terminal.clearScreen();
        this.board.printBoard(this.terminal);
        if (this.winner != 0) {
            if (this.winner === 1) {
                this.terminal.writeLine("X wins");
            } else if (this.winner === -1) {
                this.terminal.writeLine("O wins");
            } else if (this.winner === 99) {
                this.terminal.writeLine("cats game no one wins\n");
            }
            return setImmediate(()=>{this.askToPlayAgain();})
        }
        
        let choice = this.terminal.question("Pick a slot (1-9): ", (choice)=>{
            let slot = parseInt(choice)-1;
            if (slot >=0 && slot <9) {
                if (this.board.hasPiece(slot)) {
                    this.terminal.writeLine("Sorry, slot taken");
                } else {
                    this.board.setPiece(slot, this.player);
                    this.player = -this.player;
                    this.winner = this.board.checkForWin(); 
                    
                }
            }
            setImmediate(()=>{
                this.playTurn();
            })   
        })
    }
    
}

let g = new Game()
g.start()


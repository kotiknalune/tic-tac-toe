class TicTacToe {
    constructor() {
        this.player1='x';
        this.field=[
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]
        this.winner=null;
        this.gotcha=false;
    }
    getCurrentPlayerSymbol() {
        return this.player1;
    }
    nextTurn(rowIndex, columnIndex) {
        if(!this.field[rowIndex][columnIndex]){
            this.field[rowIndex][columnIndex]=this.player1;
            (this.player1==='x')?this.player1='o':this.player1='x';
        }
    }
    isFinished() {
        this.gotcha=((this.field[0][0]==this.field[0][1])&&(this.field[0][1]==this.field[0][2])&&this.field[0][2]!=null)||
                    ((this.field[1][0]==this.field[1][1])&&(this.field[1][1]==this.field[1][2])&&this.field[1][2]!=null)||
                    ((this.field[2][0]==this.field[2][1])&&(this.field[2][1]==this.field[2][2])&&this.field[2][2]!=null)||
                    ((this.field[0][0]==this.field[1][0])&&(this.field[1][0]==this.field[2][0])&&this.field[2][0]!=null)||
                    ((this.field[0][1]==this.field[1][1])&&(this.field[1][1]==this.field[2][1])&&this.field[2][1]!=null)||
                    ((this.field[0][2]==this.field[1][2])&&(this.field[1][2]==this.field[2][2])&&this.field[2][2]!=null)||
                    ((this.field[0][0]==this.field[1][1])&&(this.field[1][1]==this.field[2][2])&&this.field[2][2]!=null)||
                    ((this.field[0][2]==this.field[1][1])&&(this.field[1][1]==this.field[2][0])&&this.field[2][0]!=null);
        return this.gotcha||this.noMoreTurns();

    }
    getWinner() {
        if(this.isFinished()&&this.gotcha)
            return this.player1==='x'?'o':'x';
        return null;
    }
    noMoreTurns() {
        for(let el of this.field){
            if(el.includes(null)) return false; 
        }
        return true;
    }
    isDraw() {
        return this.noMoreTurns()&&!this.getWinner();
    }
    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;

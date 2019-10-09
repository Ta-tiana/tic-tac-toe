class TicTacToe {
    constructor() {
        this.player = "x";
        this.finished = false;
        this.draw = false;
        this.noTurns = false;
        this.winner = null;
        this.matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        let temp = this.matrix[rowIndex][columnIndex];

        if (temp !== "x" && temp !== "o") {
            for (let i = 0; i < this.matrix.length; i++) {
                for (let j = 0; j < this.matrix[i].length; j++) {
                    if (this.matrix[i][j] === temp) {
                        this.matrix[i][j] = this.player;
                    }
                }
            }
            if (this.player === "x") {
                this.player = "o"
            } else {
                this.player = "x";
            }
        }
    }

    isFinished() {
        this.noMoreTurns();
        for (let i = 0; i < this.matrix.length; i++) {
            const temp = this.matrix[i];
            if (temp[0] === temp[1] && temp[1] === temp[2] || this.noTurns) {
                this.finished = true;
                return this.finished;
            }
        }
        return this.finished;
    }

    getWinner() {
        for (let i = 0; i < this.matrix.length; i++) {
            const temp = this.matrix[i];
            if (temp[0] === temp[1] && temp[1] === temp[2]) {
                this.winner = temp[0];
                return this.winner;
            }
        }
        return this.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            let temp = this.matrix[i];
            for (let j = 0; j < 3; j++) {
                if (temp[j] !== "x" && temp[j] !== "o") {
                    this.noTurns = false;
                    return this.noTurns;
                }
            }
        }
        this.noTurns = true;
        return this.noTurns;
    }

    isDraw() {

        this.noMoreTurns(); this.getWinner();
        if (this.noTurns && this.winner === null) {
            this.draw = true;
        }
        return this.draw;
    }

    getFieldValue(rowIndex, colIndex) {
        let temp = this.matrix[rowIndex][colIndex];

        if (temp !== "x" && temp !== "o") {
            return null;
        } else return temp;
    }
}

module.exports = TicTacToe;
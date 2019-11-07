const Directions = {
    UP: 8,
    DOWN: 2,
    RIGHT: 6,
    LEFT: 4,
};

class PuzzleBoard {
    constructor(length, width, shuffler = new ReverseShuffler()) {
        this.board = new Board(length, width);
        this.shuffler = shuffler;

        // the empty cell is the last one
        this.emptyCell = [this.board.length - 1, this.board.width - 1]
    }

    shuffle(nMoves) {
        return this.shuffler.shuffle(this, nMoves);
    }

    isWin() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.width; j++) {
                if (this.board.cells[i][j] !== this.board.getCellIdentifier(i, j)) {
                    return false;
                }
            }
        }
        return true;
    }

    makeTurn(direction) {
        const row = this.emptyCell[0];
        const col = this.emptyCell[1];

        let switchWith = [row, col];

        switch (direction) {
            case Directions.UP:
                if (row >= this.board.length - 1) {
                    return this;
                }
                switchWith = [row + 1, col];
                break;

            case Directions.DOWN:
                if (row <= 0) {
                    return this;
                }
                switchWith = [row - 1, col];
                break;

            case Directions.RIGHT:
                if (col <= 0) {
                    return this;
                }
                switchWith = [row, col - 1];
                break;

            case Directions.LEFT:
                if (col >= this.board.width - 1) {
                    return this;
                }
                switchWith = [row, col + 1];
                break;

            default:
                // should not happen
                return this;
        }

        this.board.switchCells([row, col], switchWith);
        this.emptyCell = switchWith;
        return this;
    }

    getPossibleDirections(board, cellRow, cellCol) {
        let directions = [];
        if (cellRow < board.length - 1) {
            directions.push(Directions.UP)
        }

        if (cellRow > 0) {
            directions.push(Directions.DOWN)
        }

        if (cellCol < board.width - 1) {
            directions.push(Directions.LEFT)
        }

        if (cellRow > 0) {
            directions.push(Directions.RIGHT)
        }
        return directions;
    }
}
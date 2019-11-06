
const Directions = {
    UP: 8,
    DOWN: 2,
    RIGHT: 6,
    LEFT: 4,
};

class PuzzleBoard {
    constructor(length, width, shuffler = new ReverseShuffler(), winChecker = new WinChecker()) {
        this.board = new Board(length, width);
        this.shuffler = shuffler;
        this.winChecker = winChecker;

        // the empty cell is the last one
        this.emptyCell = [this.board.length - 1, this.board.width - 1]
    }

    shuffle(nMoves) {
        this.shuffler.shuffle(this, nMoves);
    }

    isWin() {
        return this.winChecker.isWin(this.board);
    }

    makeTurn(direction) {
        const row = this.emptyCell[0];
        const col = this.emptyCell[1];

        let switchWith = [row, col];

        switch (direction) {
            case Directions.UP:
                if (row >= this.board.length - 1) {
                    return false;
                }
                switchWith = [row + 1, col];
                break;

            case Directions.DOWN:
                if (row <= 0) {
                    return false;
                }
                switchWith = [row - 1, col];
                break;

            case Directions.RIGHT:
                if (col <= 0) {
                    return false;
                }
                switchWith = [row, col - 1];
                break;

            case Directions.LEFT:
                if (col >= this.board.width - 1) {
                    return false;
                }
                switchWith = [row, col + 1];
                break;

            default:
                // should not happen
                return false;
        }

        this.board.switchCells([row, col], switchWith);
        this.emptyCell = switchWith;
        return true;
    }
}
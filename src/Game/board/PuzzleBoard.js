
const Directions = {
    UP: 8,
    DOWN: 2,
    RIGHT: 6,
    LEFT: 4,
};

class PuzzleBoard extends Board {
    constructor(length, width, shuffler = new ReverseShuffler(), winChecker = new WinChecker()) {
        super(length, width);
        this.shuffler = shuffler;
        this.winChecker = winChecker;

        // the empty cell is the last one
        this.emptyCell = [this.length - 1, this.width - 1]
    }

    shuffle(nMoves) {
        this.shuffler.shuffle(this, nMoves);
    }

    isWin() {
        return this.winChecker.isWin(this);
    }

    makeTurn(direction) {
        const row = this.emptyCell[0];
        const col = this.emptyCell[1];

        let switchWith = [row, col];

        switch (direction) {
            case Directions.UP:
                if (row >= this.length - 1) {
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
                if (col >= this.width - 1) {
                    return false;
                }
                switchWith = [row, col + 1];
                break;

            default:
                // should not happen
                return false;
        }

        this._switchCells([row, col], switchWith);
        this.emptyCell = switchWith;
        return true;
    }
}

class Game {
    constructor(length = 4, width = 4) {
        this.puzzleBoard = new PuzzleBoard(length, width);
        this.hasWon = false;
    }

    init() {
        this.puzzleBoard.shuffle();
        return this;
    }

    goUp() {
        return this._makeTurn(Directions.UP);
    }

    goDown() {
        return this._makeTurn(Directions.DOWN);
    }

    goRight() {
        return this._makeTurn(Directions.RIGHT);
    }

    goLeft() {
        return this._makeTurn(Directions.LEFT);
    }

    _makeTurn(direction) {
        this.puzzleBoard.makeTurn(direction);
        this.hasWon = this.hasWon || this.puzzleBoard.isWin();
        return this;
    }
}
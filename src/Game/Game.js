
class Game {
    constructor(length = 4, width = 4) {
        this.board = new PuzzleBoard(length, width);
    }

    init() {
        this.board.shuffle();
    }

    makeTurn(direction) {
        this.board.makeTurn(direction);
        return this.board.isWin();
    }
}
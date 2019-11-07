
class HtmlUi {
    constructor(inputHandler = new ArrowsInputHandler(), boardDisplayer = new BoardDisplayer()) {
        this.inputHandler = inputHandler.handleKey;
        this.displayBoard = boardDisplayer.displayBoard;

        this._game = new Game();
        this.displayBoard(this._game.init().puzzleBoard.board);
        this.setInputListeners();
    }

    setInputListeners() {
        document.addEventListener('keydown', e => {
            let game = this.inputHandler(this._game, e);

            this.displayBoard(game.puzzleBoard.board);
            if (this._game.hasWon) {
                this.handleWin();
            }
        });
    }

    handleWin() {
        document.getElementById("win-title").className = "visible";
    }
}


class HTMLDisplayer {
    constructor(inputHandler = new ArrowsInputHandler(), boardDisplayer = new BoardDisplayer()) {
        this.inputHandler = inputHandler.handleKey;
        this.displayBoard = () => boardDisplayer.displayBoard(this._game.puzzleBoard.board);

        this._game = new Game();
        this._game.init();

        this.setInputListeners();
        this.displayBoard();
    }

    setInputListeners() {
        document.addEventListener('keydown', e => {
            let isWin = this.inputHandler(this._game, e);

            this.displayBoard(this._game.puzzleBoard.board);
            if (isWin) {
                this.handleWin();
            }
        });
    }

    handleWin() {
        document.getElementById("win-title").className = "visible";
    }
}

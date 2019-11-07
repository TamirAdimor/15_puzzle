
describe('PuzzleBoard', function() {
    describe('should perform down move on new board', function() {
        let puzzleBoard = new PuzzleBoard(4, 4);
        let cornerCellRow = puzzleBoard.board.length - 1;
        let cornerCellCol = puzzleBoard.board.width - 1;

        it('before move corner should have the biggest value', function() {
            chai.assert.equal(puzzleBoard.board.cells[cornerCellRow][cornerCellCol],
                puzzleBoard.board.getCellIdentifier(cornerCellRow, cornerCellCol));
        });

        it('should be able to perform DOWN move', function() {
            chai.assert.equal(puzzleBoard.makeTurn(Directions.DOWN).board.cells[cornerCellRow - 1][cornerCellCol],
                puzzleBoard.board.getCellIdentifier(cornerCellRow, cornerCellCol));
        });

        it('after move corner should differ from the biggest value', function() {
            chai.assert.notEqual(puzzleBoard.board.cells[cornerCellRow][cornerCellCol],
                puzzleBoard.board.getCellIdentifier(cornerCellRow, cornerCellCol));
        });
    });
});

describe('WinChecker', function() {
    describe('new Board should be in win state', function () {
        let puzzleBoard = new PuzzleBoard(4, 4);

        it('should be true', function () {
            chai.assert.equal(puzzleBoard.isWin(), true);
        });
    });

    describe("Board after move shouldn't be in win state", function () {
        let puzzleBoard = new PuzzleBoard(4, 4);
        puzzleBoard.makeTurn(Directions.DOWN);

        it('should be false', function () {
            chai.assert.equal(puzzleBoard.isWin(), false);
        });
    });

    describe("Falsy board should be in win state after winning move", function () {
        let puzzleBoard = new PuzzleBoard(4, 4);
        puzzleBoard.makeTurn(Directions.UP);

        it('should be true', function () {
            chai.assert.equal(puzzleBoard.isWin(), true);
        });
    });
});


describe('Shuffler', function() {
    let puzzleBoard = new PuzzleBoard(4, 4);
    puzzleBoard.shuffle();

    it("Board after shuffle shouldn't be in win state", function () {
        chai.assert.equal(puzzleBoard.isWin(), false);
    });
});

describe('Game', function() {
    let game = new Game();
    game.init();

    it("initialized game shoudn't be in win state", function () {
        chai.assert.equal(game.hasWon, false);
    });
});
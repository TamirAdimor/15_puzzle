
class ReverseShuffler {
    shuffle(puzzleBoard, nMoves = 4) {
        for (let i = 0; i < nMoves; i++) {
            let directions = puzzleBoard.getPossibleDirections(puzzleBoard.board, ...puzzleBoard.emptyCell);
            let randomDirection;
            randomDirection = directions[Math.floor(Math.random() * directions.length)];
            puzzleBoard.makeTurn(randomDirection);
        }
        return puzzleBoard;
    }
}
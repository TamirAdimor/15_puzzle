
class ReverseShuffler {
    shuffle(puzzleBoard, nMoves = 1000) {
        for (let i = 0; i < nMoves; i++) {
            let directions = Object.values(Directions);
            let randomDirectionIndex, randomDirection;
            do {
                randomDirectionIndex = Math.floor(Math.random() * directions.length);
                randomDirection = directions[randomDirectionIndex];
                directions.splice(randomDirectionIndex, 1);
            } while (!puzzleBoard.makeTurn(randomDirection));
        }
    }
}
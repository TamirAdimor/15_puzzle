
class ArrowsInputHandler {
    handleKey(game, e) {
        if (!game.hasWon) {
            switch (e.code) {
                case "ArrowUp":
                    return game.goUp();
                case "ArrowDown":
                    return game.goDown();
                case "ArrowRight":
                    return game.goRight();
                case "ArrowLeft":
                    return game.goLeft();
            }
        }
        return false;
    }
}
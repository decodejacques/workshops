let gameEngine = createEngine(document.getElementById("app")) // 1
let keydownHandler = event => { // 2
    if (event.code === "ArrowLeft") { // 3
        moveLeft(gameEngine.player) // 3
    } // 3
    if (event.code === "ArrowRight") { // 4
        moveRight(gameEngine.player) // 4
    } // 4
} // 2
document.addEventListener("keydown", keydownHandler) // 5
gameLoop(gameEngine) // 6

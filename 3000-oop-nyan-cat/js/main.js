let gameEngine = new Engine(document.getElementById("app")) // 1
let keydownHandler = event => { // 2
    if (event.code === "ArrowLeft") { // 3
        gameEngine.player.moveLeft() // 3
    } // 3
    if (event.code === "ArrowRight") { // 4
        gameEngine.player.moveRight() // 4
    } // 4
} // 2
document.addEventListener("keydown", keydownHandler) // 5
gameEngine.gameLoop() // 6

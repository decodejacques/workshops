let createPlayer = root => { // 1
    let x = 2 * PLAYER_WIDTH // 2
    let y = GAME_HEIGHT - PLAYER_HEIGHT - 10 // 3
    let domElement = document.createElement("img") // 4
    domElement.src = "images/player.png" // 5
    domElement.style.position = "absolute" // 5
    domElement.style.left = x + "px" // 5
    domElement.style.top = y + "px" // 5
    domElement.style.zIndex = "10" // 5
    root.appendChild(domElement) // 6
    return { // 7
        x: x, // 7
        domElement: domElement // 7
    } // 7
} // 1


let moveLeft = player => { // 8
    if (player.x > 0) { // 9
        player.x = player.x - PLAYER_WIDTH // 9
    } // 9
    player.domElement.style.left = player.x + "px" // 10
} // 8
let moveRight = player => { // 11
    if (player.x + PLAYER_WIDTH < GAME_WIDTH) { // 11
        player.x = player.x + PLAYER_WIDTH // 11
    } // 11
    player.domElement.style.left = player.x + "px" // 11
} // 11


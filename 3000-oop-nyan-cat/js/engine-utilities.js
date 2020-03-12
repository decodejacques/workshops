let nextEnemySpot = enemies => { // 1
        let enemySpots = GAME_WIDTH / ENEMY_WIDTH // 2
        let spotsTaken = [false, false, false, false, false] // 3
        enemies.forEach(enemy => { // 3
                spotsTaken[enemy.spot] = true // 3
        }) // 3
        let candidate = undefined // 4
        while (candidate === undefined || spotsTaken[candidate]) {
                /* 5 */
                candidate = Math.floor(Math.random() * enemySpots) /* 5 */
        } /* 5 */
        return candidate /* 6 */
} // 1
let addBackground = root => {
        /* 7 */
        let bg = document.createElement("img") // 8
        bg.src = "images/stars.png" // 9
        bg.style.height = GAME_HEIGHT + "px" // 9
        bg.style.width = GAME_WIDTH + "px" // 9
        root.append(bg) // 10

        let whiteBox = document.createElement("div") /* 11 */
        whiteBox.style.zIndex = 100 /* 12 */
        whiteBox.style.position = "absolute" /* 12 */
        whiteBox.style.top = GAME_HEIGHT + "px" /* 12 */
        whiteBox.style.height = ENEMY_HEIGHT + "px" /* 12 */
        whiteBox.style.width = GAME_WIDTH + "px" /* 12 */
        whiteBox.style.background = "#fff" /* 12 */
        root.append(whiteBox) /* 13 */
} // 7

let createEngine = (theRoot) => { // 1
  addBackground(theRoot) // 2
  return { // 3
    root: theRoot, // 3
    enemies: [], // 4
    player: createPlayer(theRoot) // 5
  } // 3
} // 1

let isPlayerDead = (engine) => { // 6
  return false // 6
} // 6

let gameLoop = (engine) => { // 7
  if (engine.lastFrame === undefined) engine.lastFrame = Date.now() // 8
  let timeDiff = Date.now() - engine.lastFrame // 8
  engine.lastFrame = Date.now() // 8
  engine.enemies.forEach(enemy => { // 9
    updateEnemy(enemy, timeDiff) // 9
  }) // 9
  engine.enemies = engine.enemies.filter(enemy => { // 10
    return !enemy.destroyed // 10
  }) // 10
  while (engine.enemies.length < MAX_ENEMIES) { // 11
    let spot = nextEnemySpot(engine.enemies) // 12
    engine.enemies.push(createEnemy(engine.root, spot)) // 12
  } // 11
  if (isPlayerDead(engine)) { // 13
    window.alert("Game over") // 13
    return // 13
  } // 13
  setTimeout(() => { // 14
    gameLoop(engine) // 14
  }, 20) // 14
} // 7




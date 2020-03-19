let createEnemy = (theRoot, enemySpot) => { 
        let x = enemySpot * ENEMY_WIDTH 
        let y = -ENEMY_HEIGHT 
        let domElement = document.createElement("img") 
        domElement.src = "images/enemy.png" 
        domElement.style.position = "absolute" 
        domElement.style.left = x + "px" 
        domElement.style.top = y + "px" 
        domElement.style.zIndex = 5 
        theRoot.appendChild(domElement) 
        return { 
                domElement: domElement, 
                root: theRoot, 
                spot: enemySpot,  
                x: x,  
                y: y, 
                destroyed: false, 
                speed: Math.random() / 2 + 0.25 
        } 
} 
let updateEnemy = (enemy, timeDiff) => { 
        enemy.y = enemy.y + timeDiff * enemy.speed 
        enemy.domElement.style.top = enemy.y + "px" 
        if (enemy.y > GAME_HEIGHT) { 
                enemy.root.removeChild(enemy.domElement) 
                enemy.destroyed = true 
        } 
} 
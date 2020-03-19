
let createText = (root, xPos, yPos) => { // 1
    let div = document.createElement("div") // 2
    div.style.position = "absolute" // 2
    div.style.left = xPos // 2
    div.style.top = yPos // 2
    div.style.color = "white" // 2
    div.style.font = "bold 20px Impact" // 2
    div.style.zIndex = 2000 // 2
    root.appendChild(div) // 2
    return { // 3
        domElement: div // 3
    } // 3
} // 2
let updateText = (text, contents) => { // 4
    text.innerText = contents // 4
} // 4


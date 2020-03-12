let express = require("express") // 1
let multer = require("multer") // 1
let upload = multer() // 1
let app = express() // 1
let cookieParser = require('cookie-parser') // 3
app.use(cookieParser()); // 3
let reloadMagic = require('./reload-magic.js') // 2

let passwords = {} // 5
let sessions = {} // 6
let messages = [] // 4

reloadMagic(app) // 3

app.use('/', express.static(__dirname + '/build')); // 2

app.get("/messages", function (req, res) { // 26
  res.send(JSON.stringify(messages)) // 26
}) // 26

app.post("/newmessage", upload.none(), (req, res) => { // 21
  console.log("*** inside new message") // 21 
  console.log("body", req.body) // 21
  let sessionId = req.cookies.sid // 22
  let username = sessions[sessionId] // 22
  console.log("username", username) // 22
  let msg = req.body.msg // 23
  let newMsg = { username: username, message: msg } // 24
  console.log("new message", newMsg) // 24
  messages = messages.concat(newMsg) // 24
  console.log("updated messages", messages) // 24
  res.send(JSON.stringify({ success: true })) // 25
}) // 21

app.post("/login", upload.none(), (req, res) => { // 12
  console.log("**** I'm in the login endpoint") // 12
  console.log("this is the parsed body", req.body) // 12
  let username = req.body.username // 13
  let enteredPassword = req.body.password // 13
  let expectedPassword = passwords[username] // 14
  console.log("expected password", expectedPassword) // 14
  if (enteredPassword === expectedPassword) { // 15
    console.log("password matches") // 15
    let sessionId = generateId() // 16
    console.log("generated id", sessionId) // 16
    sessions[sessionId] = username // 16
    res.cookie('sid', sessionId); // 17
    res.send(JSON.stringify({ success: true })) // 18
    return // 19
  } // 15
  res.send(JSON.stringify({ success: false })) // 20
})// 12

let generateId = () => { // 7
  return "" + Math.floor(Math.random() * 100000000) // 7
} // 7

app.post("/signup", upload.none(), (req, res) => { // 8
  console.log("**** I'm in the signup endpoint") // 8
  console.log("this is the body", req.body) // 8
  let username = req.body.username // 9
  let enteredPassword = req.body.password // 9
  passwords[username] = enteredPassword // 10
  console.log("passwords object", passwords) // 10
  res.send(JSON.stringify({ success: true })) // 11
}) // 8

app.all('/*', (req, res, next) => { // 3
  res.sendFile(__dirname + '/build/index.html'); // 3
}) // 3

app.listen(4000) // 1

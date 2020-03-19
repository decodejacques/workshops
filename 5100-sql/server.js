let express = require('express') // 1
let app = express() // 1
let reloadMagic = require('./reload-magic.js') // 1
let multer = require('multer') // 2
let upload = multer({ dest: __dirname + '/uploads/' }) // 2
let mysql = require('mysql2') // 3

reloadMagic(app) // 1

app.use('/', express.static('build')); // 1
app.use('/uploads', express.static('uploads')); // 2

let connection = mysql.createConnection({ // 4
    host: 'HOST_NAME', // 4
    database: 'post_db', // 4
    user: 'USERNAME', // 4
    password: 'PASSWORD' // 4
}); // 4


app.get("/all-posts", async (req, res) => { // 5
    console.log("request to /all-posts") // 5
    let queryResult = await connection.promise().query('SELECT * FROM post') // 5
    let resultRows = queryResult[0] // 6
    console.log("resulting rows", resultRows) // 7
    res.send(JSON.stringify(resultRows)) // 7
}) // 5

app.post('/login', upload.none(), async (req, res) => { // 8
    console.log("login", req.body) // 8
    let name = req.body.username // 8
    let passwordProvided = req.body.password // 8
    let queryResult = await connection.promise().query( // 9
        'SELECT * FROM username_pwd WHERE username = ?', // 9
        [name]) // 9
    let resultRows = queryResult[0] // 10
    if (resultRows.length === 0) { // 10
        res.send(JSON.stringify({ success: false })) // 10
        return // 10
    } // 10
    let passwordExpected = resultRows[0].pwd // 11
    if (passwordProvided !== passwordExpected) { // 11
        res.send(JSON.stringify({ success: false })) // 11
        return  // 11
    } // 11
    res.send(JSON.stringify({ success: true })) // 11
}) // 8

app.post('/new-post', upload.single("img"), async (req, res) => { // 12
    console.log("request to /new-post. body: ", req.body) // 12
    let description = req.body.description // 13
    let file = req.file // 13
    let frontendPath = '/uploads/' + file.filename // 13
    await connection.promise().query( // 14
        'INSERT INTO post(descr, frontend_path) VALUES (?,?)', // 14
        [description, frontendPath])// 14
    res.send(JSON.stringify({ success: true })) // 14
}) // 12

app.post('/update', upload.none(), async (req, res) => { // 15
    console.log("request to /update") // 15
    let id = req.body.id.toString() // 16
    let desc = req.body.description // 16
    console.log("sent from client", desc, id) // 16
    await connection.promise().query(// 17
        'UPDATE post SET descr = ? WHERE post_id = ?', // 17
        [id]) // 17

    res.send(JSON.stringify({ success: true })) // 17
}) // 15

app.all('/*', (req, res, next) => { // 1
    res.sendFile(__dirname + '/build/index.html'); // 1
}) // 1

app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") }) // 1

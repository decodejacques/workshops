let express = require('express') // 1
let app = express() // 1
let MongoClient = require('mongodb').MongoClient; // 3
let ObjectID = require('mongodb').ObjectID // 3
let reloadMagic = require('./reload-magic.js') // 1
let multer = require('multer') // 2
let upload = multer({ dest: __dirname + '/uploads/' }) // 2

reloadMagic(app) // 1

app.use('/', express.static('build')); // 1
app.use('/uploads', express.static('uploads')); // 2

let dbo = undefined // 4
let url = "YOUR_OWN_PERSONAL_URL_STRING_WILL_GO_HERE" // 4
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => { // 4
    dbo = db.db("media-board") // 4
}) // 4

app.get("/all-posts", (req, res) => { // 5
    console.log("request to /all-posts") // 5
    dbo.collection('posts').find({}).toArray((err, ps) => { // 5
        if (err) { // 6
            console.log("error", err) // 6
            res.send(JSON.stringify({ success: false })) // 6
            return // 6
        } // 6
        console.log("posts", ps) // 7
        res.send(JSON.stringify(ps)) // 7
    }) // 5
}) // 5

app.post('/login', upload.none(), (req, res) => { // 8
    console.log("login", req.body) // 8
    let name = req.body.username // 8
    let pwd = req.body.password // 8

    dbo.collection('users').findOne({ username: name }, (err, user) => { // 9
        if (err) { // 10
            console.log("/login error", err) // 10
            res.send(JSON.stringify({ success: false })) // 10   
            return // 10
        } // 10
        if (user === null) { // 11
            res.send(JSON.stringify({ success: false })) // 11    
            return // 11
        } // 11
        if (user.password === pwd) { // 11
            res.send(JSON.stringify({ success: true })) // 11
            return // 11
        } // 11
        res.send(JSON.stringify({ success: false })) // 11
    }) // 9
}) // 8

app.post('/new-post', upload.single("img"), (req, res) => { // 12
    console.log("request to /new-post. body: ", req.body) // 12
    let description = req.body.description // 13
    let file = req.file // 13
    let frontendPath = '/uploads/' + file.filename // 13
    dbo.collection('posts').insertOne({ description: description, frontendPath: frontendPath }) // 14
    res.send(JSON.stringify({ success: true })) // 14
}) // 12

app.post('/update', upload.none(), (req, res) => { // 15
    console.log("request to /update") // 15
    let id = req.body.id.toString() // 16
    let desc = req.body.description // 16
    console.log("sent from client", desc, id) // 16
    dbo.collection('posts').updateOne( // 17
        { "_id": ObjectID(id) }, // 17
        { $set: { description: desc } }) // 17
    res.send(JSON.stringify({ success: true })) // 17
}) // 15

app.all('/*', (req, res, next) => { // 1
    res.sendFile(__dirname + '/build/index.html'); // 1
}) // 1

app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") }) // 1

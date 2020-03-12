<>

{/*. id */}

workshops-express-webpage

{/*. name */}
Express webpage

{/*. runlocally */}

{/*. header */}

Before starting, make sure nodejs and npm are installed. 
            If it's not installed, visit https://nodejs.org/en/download/ to install it.
            To check if it's installed, open a terminal and type the following
<pre>{`
        node -v
        npm -v
`}</pre>

Just make sure you don't get an error message.
            

{/*. footer */}

To run this project, in the same terminal type the following command
<pre>{`
    node server.js
`}</pre>      

  








{/*. exercises */}

{/*. desc */}

Run the project and answer the following questions

{/*. q */}
Open your browser and go to <a href="http://localhost:4000/static/index.html" target="_blank">http://localhost:4000/static/index.html</a>. What do you see? Which file in the project
    contains the same information as you see on screen?

{/*. q */}
Open another terminal and try to run the program from that terminal. What error message do you see?
    What would you google to find out more about this error message?

{/*. q */}
Open your browser and go to <a href="http://localhost:4000/count" target="_blank">http://localhost:4000/static/index.html</a>. What do you see? What happens when you reload the page?

{/*. q */}
Kill your webserver (control c) then start it again. What happens when you go back to <a href="http://localhost:4000/count" target="_blank">http://localhost:4000/static/index.html</a> ? Did the count reset?










{/*. prereqs */}

{/*. desc */}

Here are some concepts that are used in the tutorial. Familiarizing yourself with them
    will make following the workshop easier.

{/*. term */}

__dirname

{/*. desc */}

This is a special variable that is created by NodeJS. 
        It is the directory of the javascript file in which it is located

{/*. example */}

let currentDirectory = __dirname

{/*. example */}

let fileInDirectory = __dirname + '/somefile.txt'

{/*. term */}

require

{/*. desc */}

Used to import external libraries. It is a function that takes a string as an argument.
            If the string starts with a ./, then it is a local file. Otherwise, nodejs will look inside your
            node_modules folder

{/*. example */}

let exp = require('express')

{/*. example */}

let mylib = require('./lib.js')

{/*. term */}

express

{/*. desc */}

A library for creating HTTP servers. It is an external library
            and and it needs to be installed. Since it is referenced in the <code>{`package.json`}</code>
            file, you can install it via <code>{`npm install`}</code>.

{/*. term */}

app.get

{/*. desc */}

Assuming app is a variable that refers to an HTTP server created
    with express, app.get is a function that takes 2 arguments: the path and a
    function. The function is called when a GET HTTP request is received at the
    specified path. The function is called with two arguments. The first argument
    contains information about the HTTP request. We won't be using
    that one for a while. The second argument contains properties
    related to sending a response back to the web browser. In the workshop
    you will learn more about app.get

{/*. example */}

app.get('/', (req, res) => {
        res.send("hello world!")
    })

{/*. example */}

app.get('/about', (req, res) => {
        res.send("this is the greatest website.")
    })

{/*. term */}

app.listen

{/*. desc */}

Assuming app is a variable that refers to an HTTP server created with express,
    app.listen is a function that takes a port number and starts the HTTP server

{/*. example */}

app.listen(4000)

{/*. example */}

app.listen(3000)










{/*. exercises */}

{/*. desc */}

Answer these questions about the previous slide

{/*. q */}
Which modules are used in this project?

{/*. q */}
How do you import a module into your project?

{/*. q */}
Is the contents of the __dirname variable different for every file?










{/*. source */}
{/*. file-path */}
server.js
{/*. 1 */}
The first thing to do is to import the express library 
    and use it to create a single http server. In general, we only create
    one http server. Our http server will listen on port 4000. The second argument passed
    to the listen function call is a function that gets called once the server has started.

{/*. 2 */}
We create a global variable to keep track of the number a user has made a request
    to the /count endpoint

{/*. 3 */}
We create the count endpoint. This endpoint waits for HTTP requests with a path of /count.
    The console.log is for debugging purposes

{/*. 4 */}
The body of the HTTP response generated by /count is an HTML formatted string
    generated by using the count variable

{/*. 5 */}
You don't need to understand the details of this line, but it's important to know what it does.
    It creates two endpoints, one for each file in /public:
    <ul>
<li> GET endpoint with path /static/index.html</li>
<li> GET endpoint with path /static/style.css</li>
    </ul>









{/*. source */}
{/*. file-path */}
public/index.html
{/*. 1 */}
This file needs to be placed in the /public directory.
        We did not create an endpoint for this file inside server.js . However,
        in our server.js file we have a line that created the endpoint for us:
        <pre>{`
        app.use('/static', express.static(__dirname + '/public'))
        `}</pre>
        
        

{/*. 2 */}
A css file is referred to. We need an endpoint for the path /static/style.css .
        This endpoint exists because we use express.static.









{/*. source */}
{/*. file-path */}
public/style.css
{/*. 1 */}

        You must place this file in the public/ folder

        This css file is referred to inside the index.html file.
        
            <pre>{`<link href="/static/style.css" rel="stylesheet">`}</pre>
        

         As soon as any browser loads the index.html file, it will make a request
        to your express server for the /static/style.css endpoint .
        
        We did not create an endpoint for this file inside server.js . However,
        in our server.js file we have a line that created the endpoint for us:
        
        app.use('/static', express.static(__dirname + '/public'))
        
        









{/*. exercises */}

{/*. desc */}

Exercises

{/*. q */}
<ul>
<li> Summarize the workshop in a document</li>
<li> Create the directories ~/decode/my-workshops and ~/decode/my-workshops/express-webpage</li>
<li> Copy the package.json in this new express-webpage directory</li>
<li> Run npm install in the new directory</li>
<li> Recreate the project from your summary. If your summary is missing information, go back to these slides to complete the missing information in your summary</li>
</ul>
{/*. q */}
Add an HTML file in the public folder and use your browser to view it. 

{/*. q */}
The first time you visit the /count endpoint, it says you visit "1 times". Fix this grammatical mistake.

{/*. q */}
Add an endpoint to reset the counter

{/*. q */}
Add an endpoint to multiply the counter by 2. The response must contain HTML to display the endpoint











</>
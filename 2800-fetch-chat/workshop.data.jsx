<>
{/*. id */}
workshops-fetch-chat
{/*. name */}
Chat (fetch requests)
{/*. runlocally */}

{/*. header */}



{/*. footer */}

To run this project, go into the appropriate directory and
       type the following command
<pre>{`
node server.js
`}</pre>            
      
More advanced users can user nodemon instead of node (You can google it)
      








{/*. exercises */}

{/*. desc */}

Run the project and answer the following questions

{/*. q */}
Load the project in your browser. Signup and login.

{/*. q */}
Write three messages as one user then three messages as another user.










{/*. prereqs */}

{/*. desc */}

You need to be familiar with the following pieces of information
    to be able to make sense of this tutorial

{/*. term */}

setInterval

{/*. desc */}

setInterval is a variable that's provided
            by javascript. It takes two arguments
            The first argument is a function that will be called at a regular interval.
            The second argument is the interval time in milliseconds
            

{/*. example */}

setInterval(() => {console.log("Hello world")}, 500)

{/*. term */}

Promise

{/*. desc */}

Promises are another way to write asynchronous code. They are very popular
    and are very, very important to master to be an effective developer. 
    Let's review asynchronous programming. In javascript, if you are going to use a function
     that performs an action in the future, you need
to provide a callback function to be called when the future event occurs. 

For example, the first argument of setTimeout is a callback function that gets called when a timer runs out
(which is sometime in the future). 

Another example is app.get in express. The second argument of app.get is a function
that gets called when an HTTP request is received (sometime in the future)

Callback functions are everywhere.

In all the code we wrote, we gave the callback directly to the function. 
A promise is an object that has a property called then.
then is a function that takes the callback function as an argument. We will use
promises in this project by calling the fetch function, which returns a promise.

    

{/*. term */}

fetch

{/*. desc */}

fetch is a variable that's provided
            by javascript. It takes one or two arguments and it returns a promise.
            The first argument is the url. The second argument is an object
            that can have properties such as
- method: The method of the HTTP request
- body: The body of the HTTP request


{/*. example */}

fetch('http://localhost:4000/messages')
   .then(response => response.text())
   .then(responseBody => {
       console.log("this is what the server responded with", responseBody)
   })

{/*. example */}

fetch('http://localhost:4000/login', {method: "POST", body: somebody})

{/*. term */}

domNode.addEventListener

{/*. desc */}

After you've selected a node using querySelector, you can
        put an event handler on that node. addEventListener takes two arguments: a string that
        represents the type of event that triggers a function call to the second argument

{/*. example */}


let node = document.getDocumentById('some-form-id')
node.addEventListener('submit', () => { console.log("form submitted")})










{/*. exercises */}

{/*. desc */}

Answer these questions about the previous slide

{/*. q */}
What is the event type string that corresponds to a form submission?

{/*. q */}
What do promises relate to? Are they an important part of JS?










{/*. source */}
{/*. file-path */}
public/index.html
{/*. 1 */}
Our end goal is to create a webpage with two forms. A basic HTML file has at least an HTML tag and a body tag.
         The body contains everything the user will see. In the end
         

{/*. 2 */}
The first form is going to be a signup form. 
        We use an h2 tag to display this information to the user

{/*. 3 */}
The form tag starts a form. The action dictates the destination endpoint of the form submission.
        A form is submitted when a submit button is clicked or when the user presses enter in a text input box. 
        The enctype attribute dictates how the data will be formatted in the HTTP request. 
        We'll always be using the same enctype. The details of enctype are beyond the
        scope of this course

{/*. 4 */}
The first text input box will contain the username. We use a div to communicate its purpose to the user. 
        It has username attribute, which is important in the backend

{/*. 5 */}
The second text input box will contain the password. The only difference with the first input box
        is the name attribute. Can you see the difference?

{/*. 6 */}
A form should always have submit button that the user can click. The value attribute is what is displayed
        on the button. The browser knows its a button because of the type attribute. Can you see how its different from the other
        input elements?

{/*. 7 */}
We start creating the login form. This line simply describes the form below it.

{/*. 8 */}
We then create a login form. Can you spot the two differences with the signup form?
        Which difference do you think is more important?









{/*. source */}
{/*. file-path */}
public/chat.html
{/*. 1 */}
This is the page that users will use to chat. It has a form to enter chat messages

{/*. 2 */}
We load our javscript (where is the app.js file located?) (where does the word static come from?)









{/*. source */}
{/*. file-path */}
server.js
{/*. 1 */}
We'll be using express to create our HTTP server. The cookie parser
library will be used to set and retrieve cookies.

{/*. 2 */}
Similar to the previous workshop, we instruct our HTTP server to respond to the / endpoint by
    sending back the index.html file in the public folder. You can refer back
    to the previous workshop to get more information about this. We'll be running our server on port 4000

{/*. 3 */}
We will be using the multer library in this project. Multer is a library that lets you
    process HTTP requests that result from a form submission. 

{/*. 4 */}
We're creating a new object and the variable passwordsAssoc will contain a reference to it.
    The properties of this object will be the usernames and the values are going to be the passwords.
    Since the properties are not known until users sign up, we will be using object bracket notation to update this object, so make sure you're familiar with
    object bracket notation before continuing.

 Furthermore, we are creating a variable called sessions that refers to an object that
 will contain information related to sessions. The property names of this object
 is going to be session ids and the value of each property is going to be a username.

{/*. 5 */}
The /signup endpoint will process the HTTP request generated by the signup form in our index.html file.

{/*. 6 */}
As a convenience, I declared two variables: username and password. This step is not necessary, but it helps to make
    the code more readable

{/*. 7 */}
passwordsAssoc refers to an object. I update the object using objet bracket notation. For example, if the
    user had supplied the username 'bob' and the password 'pwd123' then the object would be <code>{`{bob: 'pwd123'}`}</code> assuming it was
    empty before.

{/*. 8 */}
The positive response to the form submission is sent back to the user. This will be displayed
    to the user when they submit the form

{/*. 9 */}
There are two forms on the index.html file, so we need two endpoints, one for each form.

{/*. 10 */}
Again, for convenience and readibility, I define two variables

{/*. 11 */}
The /login endpoint uses the passwordsAssoc object
    differently than the /signup endpoint. Whereas the /signup endpoint
    updates our passwordsAssoc object,
    the /login endpoint retrieves information from it. Namely, the password
    associated with the username. For example, if the user had supplied
    a username of 'sue' and the passwordsAssoc object
    was <code>{`{sue: 'pass'}`}</code>, then passwordsAssoc[username] would be 'pass'

{/*. 12 */}
If the password that was given in the form does not match the password that we had stored in our passwordsAssoc
    object, then respond with a message telling the user so.

{/*. 13 */}
By this line we know that the
    user has given us a correct username and password (why?).  We randomly generate a new session id. This id will be transmitted
    by the user in the all the HTTP requests sent by the browser through the power
    of cookies. 

{/*. 14 */}
We associate the session id with a username. In the future, we'll be able
    to associate an HTTP request with a username.

{/*. 15 */}
This is where we set the cookie. This line adds a set-cookie header to the HTTP request  

{/*. 16 */}
We send back the chat.html file to the user. It contains the user interface
    to allow the user to send messages.

{/*. 17 */}
This endpoint can receive a message from the user. As we will see, it will store that message in an array referred
    to by a global variable. The console.log is for debugging purposes.

{/*. 18 */}
We create a new object that contains the message from the user. This information is located in the request
    body. This request body was generated by a form submission (which form?). We create a variable
    to refer to this new object. Finally, we add this object to the messages array.

{/*. 19 */}
We also need to keep track of who sent the message. We can get this information by looking at the
    cookie sid cookie. (which endpoint set the cookie?) 

{/*. 20 */}
This endpoint sends back all the messages that have been sent by users. The console log
    is for debugging purposes. 

{/*. 21 */}
messages is a variable that refers to an array. The elements
    of the array are all the messages that have been received from users.
     We first have to encode
    the array as a string (how do we do this?) before we send it back to the user (why do we need to do this?)   









{/*. source */}
{/*. file-path */}
public/app.js
{/*. 1 */}
We call a function every 500ms. This function will fetch data from the backend
        and update the user interface.  We also call it right away to see the messages as quickly as possible.

{/*. 2 */}
We make a GET HTTP request to /messages and we await the response object 

{/*. 3 */}
fetch will not give us the response body immediately. To get the response
        body, we need to call .text() to get a promise that resolves to the response body.
        We then use await to get the response body from the promise.  

{/*. 4 */}
Looking at the backend (server.js), we see that the GET /messages HTTP
        response is a JSON formatted string. So the first thing we do is convert
        the string to a javascript object
        

{/*. 5 */}
We will be updating the ul in our chat.html, so we need a reference to the DOM node  

{/*. 6 */}
We remove all the children from the DOM node (this is the simplest way) 

{/*. 7 */}
For each message returned for the server, we'll be adding a new li DOM node to our ul  

{/*. 8 */}
We first create a li DOM node and give it an innerText   

{/*. 9 */}
Then we make the li DOM node a child of our UL DOM node









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
Why do we absolutely need to use fetch in this project and not the
       previous ones?

{/*. q */}
How many arguments does fetch take? What are the argument types? What do they represent?

{/*. q */}
How many endpoints do we have and what does each one do?

{/*. q */}
If you had 1000 users using this web app, Approximately
        how many requests would be made
        in a second?

{/*. q */}
How do you remove all the children of a DOM node?

{/*. q */}
Why are cookies necessary for this project? Could we do the same thing without cookies?










{/*. exercises */}

{/*. desc */}

Exercises

{/*. q */}
Like the previous workshops, make a summary and then reproduce the project from the summary

{/*. q */}
Add a form to chat.html to allow the user to change their username.

{/*. q */}
If a user changes their username, make sure they're not changing it
      to a username that's already taken by someone else.

{/*. q */}
If a user changes their username, make sure they can login with the same username.

{/*. q */}
If a user changes their username, make sure the change is reflected in all the messages
    they've already sent

{/*. q */}
Let the user customize the color of their username amongst three choices: red, pink and black. (simplest way: make three forms)

{/*. q */}
Make it possible to send images instead of just text

{/*. q */}
Some people are so annoying! Add a form to ignore all the messages from a particular user.

{/*. q */}
Add a form to set the topic of the chat. The topic appears on the top of the chat room.

{/*. q */}
List all the users that are actively on the chat on the right hand
    side of the screen. A user is active if they have sent a message in the last 5 minutes.
    Hint: On the backend, create an object that associates a user with the time at which they have sent their last message.
    

{/*. q */}
Every time you send a message, the page is reloaded. Stop this from happening. 
    See [this page](/learn/static/form-data) for more information

{/*. q */}
Using the method from last exercise, change the login page so
     that it doesn't load a new page when it's submitted. Hint: you won't be using the chat.html file. 
     In fact, you can delete it if you want. Instead, you're going to have to modify the DOM using document.createElement and appendChild.

{/*. q */}
Now do it for the signup form. What would you display upon successful signup?

{/*. q */}
Now do it for all the remaining forms.

{/*. q */}
Make another form in chat.html to be able to send a direct message to someone.
      The form will have two input elements and a submit button. In one input element,
      the user will specify to whom the message is destined to. The other input element will
      contain the message. Furthmore, you will need to display all the messages received somewhere.
      

{/*. q */}
Make it pretty using CSS











</>
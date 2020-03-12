<>
{/*. id */}
workshops-express-signup-login
{/*. name */}
Express signup login

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
Open your browser and go to http://localhost:4000/index.html . What do you see? Which file in the project
    contains the same information as you see on screen?

{/*. q */}
Try to login without first signing up. What happens?

{/*. q */}
Sign up, then login. What happens?

{/*. q */}
Sign up, restart the server, then try to login.
    
    Restarting the server is a two step process.
    
    To kill the server, go into the terminal where the server is running, press the control key
    and while it's being held down, press the C key.
    
    To start the server again, run the command that started the server in the first place
    (hint: look at a previous slide)

    










{/*. prereqs */}

{/*. desc */}

Here are some concepts that are used in the tutorial. Familiarizing yourself with them
    will make following the workshop easier

{/*. term */}

multer

{/*. desc */}

An external library that handles HTTP requests generated
            from a form submission. It places data in the <code>{`body`}</code> property of the 
            request object. You will learn about it during the workshop

{/*. term */}

app.use

{/*. desc */}

A directive to tell express to do something at every request.
            You don't need to deeply understand it at this point.
            

{/*. term */}

Object bracket notation

{/*. desc */}

You can add, update and modify a property using object bracket notation instead
            of dot notation. This is very important to deeply understand before starting the workshop.

{/*. example */}

let passwords = {}
let username = "bob"
passwords[username] = "pwd123"
console.log(passwords[username] === "pwd123") // true
            










{/*. exercises */}

{/*. desc */}

Answer these questions about the previous slide

{/*. q */}
What are the two ways to add a property to an object?

{/*. q */}
In which way is one way of adding properties to an object superior to the other?

{/*. q */}
Which library are we using to handle the HTTP request generated from a form submission?










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
server.js
{/*. 1 */}
We'll be using express to create our HTTP server . The second argument passed
    to the listen function call is a function that gets called once the server has started. It's optional

{/*. 2 */}
This line creates a GET endpoint for every file in the public/ folder. Namely:
- GET endpoint at path /index.html

{/*. 3 */}
We will be using the multer library in this project. Multer is a library that lets you
    process HTTP requests that result from a form submission. We also create a variable upload that refers to an object that will give
    our endpoints the capability of receiving HTTP requests from a form submission.  

{/*. 4 */}
We're creating a new object and the variable passwordsAssoc will contain a reference to it.
    The properties of this object will be the usernames and the values are going to be the passwords.
    Since the properties are not known until users sign up, we will be using object bracket notation to update this object, so make sure you're familiar with
    object bracket notation before continuing.

{/*. 5 */}
This endpoint will process the HTTP request generated by the signup form in our index.html file.
    The path is /signup and the third argument to the function call is called the endpoint handler.
    The console.log is for debugging purposes. In the console you'll be able to get more information about the request body.
    To receive the body of the HTTP request, we use the upload variable that refers to an object
    generated from the multer library.
     Passing upload.none() as the second argument to app.post gives the endpoint handler access to the request body through
     req.body where req is the first parameter of the endpoint handler.


    

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
    To receive the body of the HTTP request, we use the upload variable that refers to an object
     from the multer library. The console.log is for debugging purposes.
    

{/*. 10 */}
Again, for convenience and readibility, I declare two variables

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
At this line, we are sure that the expectedPassword is equal to the passwordGiven. Can you explain why?









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
What do the name attributes in the index.html file represent? What do they correspond to in the server.js file?

{/*. q */}
What do the method attributes in the index.html file represent? What do they correspond to in the server.js file?

{/*. q */}
Why do we need to use multer this time but not before?

{/*. q */}
Our login endpoint has a return statement. Why is this necessary?

{/*. q */}
In our HTML file, the input elements have a type attribute. Which are the ones that are used and how are they different?

{/*. q */}
Our submit input element has a value attribute. What does it do?










{/*. exercises */}

{/*. desc */}

Extend the program you created

{/*. q */}

    - Summarize the workshop in a document
    - Create a new directory inside ~/decode/my-workshops
    - Copy the package.json in this new directory
    - Run npm install in the new directory
    - Recreate the project from your summary. If your summary is missing information, go back to these slides to complete the missing information in your summary

{/*. q */}
When a person tries to login with an invalid password, they are forced to press
    the back button on their browser to try again.
     Provide a link to go back (hint: a href)

{/*. q */}
Right now you can change a user's password by simply signing up 
  with their username. Fix this.

{/*. q */}
When a person tries to login with an invalid password, 
    they are forced to go back to the previous page to try again. Fix this by putting a login
    form directly below the message telling them that the password is invalid
    

{/*. q */}
Right now both forms are displayed on the same page. Let's change this.
When the user loads the initial page, display two links. One link
sends the user to the login form while the other link sends the user to the
signup form

{/*. q */}
If a user tries to login with the wrong password three times in a row, disable their account. Keep in mind that multiple users can be attempting to login around the same time











</>
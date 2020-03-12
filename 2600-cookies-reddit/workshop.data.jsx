<>
{/*. id */}
workshops-cookies-reddit
{/*. name */}
Reddit clone using cookies

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
Open your browser and go to http://localhost:4000/ . What do you see?

{/*. q */}
Login and then look at the cookies in your browser. You can find them in the Application tab of your browser (look for the cookie icon)

{/*. q */}
Login and post 2 threads

{/*. q */}
Close your browser. Open it again to localhost:4000 and login as another user and post 2 threads

{/*. q */}
Open two tabs in chrome. In each tab, login as someone different. Post a thread with
    one tab then post another thread in another tab. Are the threads posted under different username?










{/*. prereqs */}

{/*. desc */}

Here are some concepts that are used in the tutorial. Familiarizing yourself with them
    will make following the workshop easier

{/*. term */}

cookies

{/*. desc */}

Cookies are a method to track users. They are used in many different areas
<ul>
<li> To check if a user has logged in</li>
<li> If a user has logged in, to get their username</li>
<li> To keep track of items in a shopping cart (eg amazon.com)</li>
<li> To remember that a user has already logged in (eg gmail.com)            </li>
<li> etc...</li>
</ul>

To see how they work, let's look at a specific example
1. When a user logs in, the HTTP response from the express server contains a special header,
called <code>{`set-cookie`}</code> (it is case insensitive).
The value of this header is a string of the form key=value (For example, sid=abdeqd12 )

Henceforth, the users browser associates that key and value with the IP address (or domain) of the server.
Whenever the browser makes an HTTP request to that same IP address, it will send that key=value in the HTTP request.
This happens until the user clears the cookie (or the cookie expires after a certain amount of time).
            

{/*. term */}

cookie-parser

{/*. desc */}

This library is used to process the cookies in the HTTP request.

{/*. term */}

app.use(cookieParser())

{/*. desc */}

Assumes cookieParser refers to the loaded cookie-parser library.
            You can now use req.cookies and res.cookie in your endpoint handler.
<pre>{`
            res.cookie('sid', '12341')
`}</pre>
            Adds the Set-Cookie header the HTTP response with a value <code>{`sid=12341`}</code>
<pre>{`
            req.cookies
`}</pre>

            refers to an object that contains all the cookies. The properties of the object
            are the cookie names and the value of those properties are the cookie values.
            Here is an example:  req.cookies = {sid: '12341'}
            

{/*. term */}

Math.random

{/*. desc */}

This function returns a random number between 0 and 1 (not including 1)

{/*. term */}

Math.floor

{/*. desc */}

This function takes a number as a argument and returns a whole number

{/*. example */}

Math.floor(3.4) // 3  

{/*. example */}

Math.floor(Math.random() * 3) // a random number, either 0, 1 or 2  










{/*. exercises */}

{/*. desc */}

Answer these questions about the previous slide

{/*. q */}
Go to a random website and see which cookies are stored
        [Instructions](/learn/static/view-cookies)
        

{/*. q */}
How are cookies created, transmitted and stored? 

{/*. q */}
Some users turn off cookies. How does this impact their browsing experience? 

{/*. q */}
If you clear your cookies, you'll have to login again when you go to gmail.com. Why is this? 

{/*. q */}
Would you be concerned if your cookies were public information? 

{/*. q */}
What is the name of the HTTP header that sets the cookie in the HTTP response? 

{/*. q */}
What is the name of the HTTP header that contains the cookie in the HTTP request? 










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
Similar to the previous workshop, we import the libraries that we need and we start the server on port 4000. The second argument passed
    to the function call is a function that gets called once the server has started. It's optional.
    we use express.static to create the / endpoint that responds with the contents of /public/index.html

{/*. 2 */}
We're importing the cookie parser library, which helps us manage the cookies in the HTTP requests and responses.
    After importing it, we need to tell express to use it.

{/*. 3 */}
We create an array and we store a reference to that array inside the threads variable. Every time a user posts
    something, it will get added to this array

{/*. 4 */}
This object associate the usernames with the passwords like in a previous workshop

{/*. 5 */}
We create an object and store a reference to that oject in the passwordsAssoc variable. The properties of this object
    are the session ids and the values associated with each property are the usernames. Every time a user logs in
    a new session id will be generated and it will get added to this object.

{/*. 6 */}
The h function was covered in previous workshops

{/*. 7 */}
We have a function to make the webpage dynamically. It needs to be a function because the page
    depends on the elements of the threads array

{/*. 8 */}
Each element of thread is going to be an object with the poster's username and the text contained in the
    post. The properties that store this data are desc and user

{/*. 9 */}
We return the dynamically generated HTML formatted string

{/*. 10 */}
The / endpoint simply sends back the contents of public/index.html . res.sendFile reads a file and then sends the contents of that file as the HTTP response body.

{/*. 11 */}
This endpoint receives HTTP requests generated by one of the forms in public/index.html. We console log
     the HTTP request for debugging purposes.

{/*. 12 */}
We update the passwordsAssoc object with the values provided by the user when he filled out the form

{/*. 13 */}
Tell the user that the signup was successful

{/*. 14 */}
This endpoint receives HTTP requests generated by the other form in public/index.html.

{/*. 15 */}
We console log
     the HTTP request for debugging purposes.

{/*. 16 */}
We check the provided password with the expected password. For more a more detailed explanation, please refer to the login and signup workshop.

{/*. 17 */}
We genereate a sessionId. Henceforth, the sessionId will be sent in every HTTP request every time the user sends an
     HTTP request to the server. The server can use this sessionId to identify who sent the HTTP request.

{/*. 18 */}
Add a property to the sessions object. For example, if sessionId = '142' and req.body.username ='bob',
      then <code>{`sessions = {"142": "bob"}`}</code> assuming it was empty before.

{/*. 19 */}
This command tells express to add a Set-Cookie header in the HTTP response. When the browser
     sees this header, it stores the cookie and sends it back at every HTTP request. 

{/*. 20 */}
Finally, send back the dynamically generated page with all the threads.

{/*. 21 */}
This endpoint receives HTTP requests from the form in the dynamically generated HTML page. We log
     the form fields for debugging purposes.

{/*. 22 */}
We get the session id from the HTTP request. The name sessionId matches the name we gave the cookie when we
     called res.cookie in a previous step.

{/*. 23 */}
If we have a session id then we can get the username by using the sessions object that we populated in the
     /login endpoint

{/*. 24 */}
Now that we have the username, we can add the thread to our threads array. Can you find what description corresponds to?

{/*. 25 */}
We send back the dynamically generated page.









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
In which part of the HTTP response is the cookie set?

{/*. q */}
What are the names of the three global variables and what are each of their purposes

{/*. q */}
What happens if you restart your server after someone has logged in? Can they still post?

{/*. q */}
How do you set a cookie and how do you read a cookie?

{/*. q */}
How long does a cookie last? Does it get erased when a user refreshes the page?










{/*. exercises */}

{/*. desc */}

Extend the program you created

{/*. q */}
Display the user's username on the top left of the screen after they've logged in

{/*. q */}
Anyone can change your password by signing up with your username. Fix this .

{/*. q */}
Install postman then use postman to send a POST request to /thread with an invalid sessionid.
     Does a new post appear on the main site?

{/*. q */}
Anyone can post something on the website by using postman, even if they're not logged in.
    Fix this issue.

{/*. q */}
Right now a person has to relogin if they close the page and reopen it again.
    Change this: if they are logged in and they refresh the page, they are still logged in
    (hint: check the cookie in the '/' endpoint)

{/*. q */}
Make it so you can post not just text but also an image

{/*. q */}
For each post, put the number of threads that the poster has created in the past beside their name

{/*. q */}
Allow users to change their username. When a user changes their username, make sure the change appears in all the threads

{/*. q */}
Allow the user to customize the color of their name as it appears beside their threads

{/*. q */}
keener question: give the ability of users to directly message each other. To message someone, you would need to specify that person's username as well as the message you want to send. 

{/*. q */}
advanced keener question: When a user wants to send a direct message to someone, they currently have to retype the recipient's username every time they send a message. Fix this issue. (hint: the value attribute) 











</>
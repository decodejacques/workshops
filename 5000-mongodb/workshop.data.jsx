<>
{/*. id */}
workshops-mongodb
{/*. name */}
MongoDB
{/*. exercises */}

{/*. desc */}

Follow these instructions to get the project running

{/*. q */}
Create a new project in mongodb atlas following [this link](https://docs.google.com/document/d/1w6F9jTV0cYAmXWX9wcmGJe51Ugea8ZdFckTKGmkrDtU/edit?usp=sharing). Place the url in the approriate place in the server.js file.

{/*. q */}
Create a new document in the `users` collection with a username and password. Instructions [here](https://docs.google.com/document/d/11kL2MP8STfQK3Wd4IQb-vHWMj2a4PSdDX13oOYeWNTc/edit?usp=sharing)

{/*. q */}
Get your mongodb url and place it in your server.js file, then run your project. You can log in with the username and
    password that you added to the `users` collection

{/*. q */}
Add three posts and then modify 2 of them










{/*. source */}
{/*. file-path */}
server.js
{/*. 1 */}
This is part of the boilerplate. The reload magic is a module that reloads the frontend
      automatically whenever the server restarts or the frontend files are modified.

{/*. 2 */}
We're going to use multer because we'll be uploading images. Multer is going to place the files
      in the uploads directory. Each of those files will become endpoints because of express.static.

{/*. 3 */}
We'll be using the mongodb library to communicate with mongodb. The mongodb module is an object.
      The two interesting properties of that object are MongoClient, which is used to initiate the connection,
      and ObjectID, which is used to convert a string to a Mongo id (you will see
        it in action in later slides)

{/*. 4 */}
dbo is an object that will get populated once the connection to the
      database has been initiated. We're calling our database media-board, but you can use any
      name. If it doesn't exist, it is automatially created. There is a document
      that explains how to get the url string.

{/*. 5 */}
The all-posts endpoint returns all the posts in the posts collection. We use the find
      method. By passing the empty object to the find method, we are retrieving everything
      in that collection. We need to use the toArray method, which lets use
      manipulate the result as an array.

{/*. 6 */}
There might be an error. For example, the database connection might have
      been interrupted. In that case, console log it.

{/*. 7 */}
For debugging purposes, console log the posts and then send back the result
      to the client. Since we're sending back an array, we first have to stringify it.

{/*. 8 */}
The login endpoint sees if the username and password provided match what's in the database. As a convenience, we declare some variables.

{/*. 9 */}
We use findOne to find a single document whose username property matches the username sent by the client.
      findOne, as opposed to find, only gets a single document. 

{/*. 10 */}
An error might have occurred. If so, print it to the console.

{/*. 11 */}
If no user was found, then the user variable will refer to null. In that case, console log the error.
         Otherwise, check if the password in the database matches the password supplied by the user

{/*. 12 */}
This endpoint is used for creating new posts. The console log is for debugging purposes. Posts have files
      and you see that the "img" string is used in the corresponding fetch request (see frontend)

{/*. 13 */}
We get the description and the file. The file object has a filename property, which is the name inside the uploads directory.
      Because of the express.static located above, each file in that directory has an endpoint that starts with
      /uploads. We store that path in the database.

{/*. 14 */}
We insert the document in the posts collection in our MongoDB server using the insertOne method.
     MongoDB will automatically add a _id property
      to the object to uniquely identify it.
      We send back a response to the frontend. It doesn't really matter what
      we send back since it's not processed (see frontend) 

{/*. 15 */}
This endpoint is used to update an existing post

{/*. 16 */}
We create variables as a convenience

{/*. 17 */}
We update one document in the collection. We want to update the one with an _id that matches the
      id supplied by the frontend. The frontend sends the id as a string, so we need to convert
      it to a mongo id using the ObjectID function imported above. The second argument
      of updateOne describes how we want to modify the document. More precisely, we're telling it
      to set the description property of the document to the contents of the desc variable defined above.









{/*. source */}
{/*. file-path */}
src/App.jsx
{/*. 1 */}
The App component is the top level component of this application.
      We are importing the Content component, which will actually display the content.
      The App component is mainly concerned with login.

{/*. 2 */}
The state will store the usernameInput and passwordInput, which represent what
      the user will enter in the login form, as well as the actual username when login
      is successful

{/*. 3 */}
In the render, we check if the user has signed in. If they haven't, we present them
      with a sign in form. If they have signed in, we show them the content.

{/*. 4 */}
This is the method used to update the usernameInput property of the state.

{/*. 5 */}
This is the method used to update the passwordInput property of the state.

{/*. 6 */}
In the form submit handler, referenced in the render method, we have to prevent
      the default action so that the page doesn't reload. We create a variable to reference the username
      because it will be used in several places and because of the asynchronous nature of this method

{/*. 7 */}
We create a FormData object and attach two pieces of data, labeled <code>{`username`}</code> and <code>{`password`}</code> 

{/*. 8 */}
We make a fetch request. In the body of the fetch request is the FormData that we populated. We
      then await the response and parse it

{/*. 9 */}
If the the login is successful, we update the state with the username so that
      the Content is displayed instead of the login form in the render method.









{/*. source */}
{/*. file-path */}
src/Content.jsx
{/*. 1 */}
The content component will display the posts and also
      present a component to add a new post

{/*. 2 */}
The initial state has posts as the empty array

{/*. 3 */}
The reload method fetches all the posts from the backend and
      then sets the state with the posts. (see server.js for details).
      In other words, the user has to press the button to load all the posts.

{/*. 4 */}
The render displays a button to load all the posts. Futhermore, it also
      displays the posts and the component to create a new post. The posts
      are only displayed when the user presses the load button and the
      user has to press the button every time they want to get the
      latest post.









{/*. source */}
{/*. file-path */}
src/NewPost.jsx
{/*. 1 */}
The NewPost component will allow the user
      to create a new post.

{/*. 2 */}
Each post has a file location and a description

{/*. 3 */}
This change handler is called whenever the user changes the description

{/*. 4 */}
This file change handler is called whenever the user selects a file. The user has the
      option to select many files (using the shift key), but for simplicity we're only going to process
      the first one selected

{/*. 5 */}
The user will be presented with a form. The submission of the form
      will send an HTTP request to the new-post endpoint with the file and the description in the body.

{/*. 6 */}
To submit a post, the user has to supply a file and a description.
       When they click the submit button (labeled create new), the submitHandler is called and the information
       is sent to the backend.
      









{/*. source */}
{/*. file-path */}
src/Post.jsx
{/*. 1 */}
The Post endpoint displays a post to the user. The user has the ability to modify the post if they want.

{/*. 2 */}
We will keep track of the description. Initially, the description is passed as a prop (see the Content component). However,
      the user will have the ability to change it and submit the change to the backend.

{/*. 3 */}
This method modifies the description in the state

{/*. 4 */}
When the new description is submitted, an HTTP request is sent to the server. The response is ignored. The id of the post
      is located in the contents prop. Looking at Content.jsx, this prop corresponds to a document in our MongoDB database.
      All documents in the MongoDB database have an _id property that is set by MongoDB.

{/*. 5 */}
We display the description, an image and a button to change the description.









{/*. source */}
{/*. file-path */}
src/index.jsx
{/*. 1 */}
Boilerplate stuff. The reloadMagic is what makes the page reload when the backend changes









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
What mongodb methods did we use and what does each one do?

{/*. q */}
Which method do we use to insert a document in a collection?

{/*. q */}
If a collection or database is not created, does mongodb just create it as needed?

{/*. q */}
Does each uploaded file get its own endpoint?

{/*. q */}
What is toArray and why is it needed?

{/*. q */}
The dbo global variable is initially undefined. When does it reassigned?

{/*. q */}
What happens if you make a request to the /posts endpoint before the dbo variable is reassigned?










{/*. exercises */}

{/*. desc */}

Extend the program you created

{/*. q */}
Add the person's username beside their posts.

{/*. q */}
Right now there's no way to sign up! Add a signup form.

{/*. q */}
Add a delete button to delete all the posts. Hint: google `delete document mongodb`.

{/*. q */}
Add a way to upload audio files as well as images. Hint: google `html5 audio` 

{/*. q */}
Add a way to delete a single post. Hint: google `delete document mongodb`. 

{/*. q */}
Make it so that you can change the image of a post.

{/*. q */}
When a person signs up, their username is stored in mongodb. What if someone gets access to the database?
    This is very dangerous. Instead of storing the password, store the hash of the password.











</>
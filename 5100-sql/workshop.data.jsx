<>
{/*. id */}
workshops-sql-posts
{/*. name */}
SQL
{/*. exercises */}

{/*. desc */}

Follow these instructions to get the project running

{/*. q */}
Go to digital ocean and rent a MySQL server for a month. Create a database called post_db. Create a user. Give that user access to post_db.

      {/*. q */}
      In the server.js file, enter the IP address of the server for <code>HOST_NAME</code> and the username for <code>USERNAME</code> and the password for <code>PASSWORD</code>

      {/*. q */}
      Run your web application. Add three posts and then modify 2 of them.










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
      We'll be using the <code>mysql2</code> library to communicate with the MySQL server. It is superior to the older <code>mysql</code> library in that
      it uses promises.
      
{/*. 4 */}
The connection variable will refer to an object
with methods that will let use interact with the database.

{/*. 5 */}
      The all-posts endpoint returns all the posts in the posts collection. <code>connection.promise().query</code> refers to a function
      that returns a promise, so we can await it. The argument to that function is any SQL query. The promise resolves to an array. The first index of that array
      are the rows. By convention, SQL keywords are uppercased, but we could just as well have lowercased them.
      {/*. 6 */}
      queryResult refers to an array and the first element of that array are the rows resulting from running the query on the previous line.

{/*. 7 */}
For debugging purposes, console log the posts. We then send back the result
      to the client. Since we're sending back an array, we first have to stringify it.

{/*. 8 */}
The login endpoint sees if the username and password provided match what's in the database. As a convenience, we declare some variables.

{/*. 9 */}
We use a standard select query to find the row whose username column matches the username sent by the client.
Notice the question mark <code>{`?`}</code> in the query. That question mark will be replaced by
      the contents of the name variable.
      
      
{/*. 10 */}
We get the resulting row array and check if it is empty. If it is empty, it means
there is no matching username in our database.
      {/*. 11 */}
      Since username is a primary key, there can only be one row with a matching username.
      We extract that row and extract the value of the pwd column. We compare that value with the
      password provided with the user and respond accordingly.

{/*. 12 */}
This endpoint is used for creating new posts. The console log is for debugging purposes. The user can
upload files. You can check the corresponding frontend files for what the "img" string refers to.
      

{/*. 13 */}
We get the description and the file. The file object has a filename property, which is the name inside the uploads directory.
      Because of the express.static located above, each file in that directory has an endpoint that starts with
      /uploads. We store that path in the database.

      {/*. 14 */}
      We insert the data in the <code>post</code> table. 
      There are two pieces of data submitted by the user, so we need two question marks.
      The first question mark corresponds to the <code>descr</code> column and the second
      question mark corresponds to the <code>frontend_path</code> column because that's the order in which the columns are listed.
      The second argument to query is an array. The first element of the array corresponds to the first question mark and the second
      element of the array corresponds to the second question mark. 

{/*. 15 */}
This endpoint is used to update an existing post

{/*. 16 */}
We create variables as a convenience

{/*. 17 */}
We update one document in the collection. We want to update the one with an post_id that matches the
      id supplied by the frontend. The syntax is <code>UPDATE table_name SET column_name = value WHERE column_name = value</code>









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
We check if the user has signed in. If they haven't, we present them
      with a sign in form. If they have signed in, we show them the content.

{/*. 4 */}
This is the function used to update the usernameInput property of the state.

{/*. 5 */}
This is the function used to update the passwordInput property of the state.

{/*. 6 */}
In the form submit handler we have to prevent
      the default action so that the page doesn't reload. We create a variable to reference the username
      because it will be used in several places and because of the asynchronous nature of this function

{/*. 7 */}
We create a FormData object and attach two pieces of data, labeled <code>{`username`}</code> and <code>{`password`}</code> 

{/*. 8 */}
We make a fetch request. In the body of the fetch request is the FormData that we populated. We
      then await the response and parse it

{/*. 9 */}
If the the login is successful, we update the state with the username so that
      the Content is displayed instead of the login form.









{/*. source */}
{/*. file-path */}
src/Content.jsx
{/*. 1 */}
The content component will display the posts and also
      present a component to add a new post

{/*. 2 */}
The initial state has posts as the empty array

{/*. 3 */}
The reload function fetches all the posts from the backend and
      then sets the state with the posts. (see server.js for details).
      In other words, the user has to press the button to load all the posts.

{/*. 4 */}
We will display a button to load all the posts. Futhermore, we also
      display the posts and the component to create a new post. The posts
      are only displayed when the user presses the reload button and the
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
This function modifies the description in the state

{/*. 4 */}
When the new description is submitted, an HTTP request is sent to the server. The response is ignored. The id of the post
      is located in the contents prop. Looking at Content.jsx, this prop corresponds to a row in our MySQL database.
      

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
Add a delete button to delete all the posts. Hint: google `delete all rows mysql`.

{/*. q */}
Add a way to upload audio files as well as images. Hint: google `html5 audio` 

{/*. q */}
Add a way to delete a single post. Hint: google `delete row mysql`. 

{/*. q */}
Make it so that you can change the image of a post.

{/*. q */}
When a person signs up, their username is stored in MySQL. What if someone gets access to the database?
    This is very dangerous. Instead of storing the password, store the hash of the password. 
    Use the sha1 library to store the hash of the password instead of the actual password.











</>
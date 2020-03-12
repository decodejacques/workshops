<>
{/*. id */}
workshops-express-todo-list
{/*. name */}
Express todo list

{/*. runlocally */}

{/*. header */}

Before starting, make sure nodejs and npm are installed. 
      <div>If it's not installed, here's a link <a href="https://nodejs.org/en/download/" target="_blank">node and npm installer</a></div>
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
Open your browser and go to http://localhost:4000/ . What do you see?

{/*. q */}
Add three items

{/*. q */}
Reload the page. Are the items still there?

{/*. q */}
Restart the server then reload the page. Are the items still there?
    
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

join

{/*. desc */}

Every array has a property called join. join refers to a function.
            The function takes a string as a parameter. The function returns a string.
            The returned string is the concatenation of all the elements of the
            array separated by the argument passed to the function.
            

{/*. example */}

["foo","bar"].join(":") // "foo:bar"

{/*. term */}

push

{/*. desc */}

Every array has a property called push. push refers to a function.
            The function takes a single parameter. It modifies the array by placing the element
            at the end of the array
            
            

{/*. example */}

let x = []
x.push(3) // x is now [3]
x.push(5) // x is now [3,5]
            










{/*. exercises */}

{/*. desc */}

Answer these questions about the previous slide

{/*. q */}
What does the expression <code>{`["a","b","e"].join(",")`}</code> evaluate to?

{/*. q */}
What is the return type of push?

{/*. q */}
Does push create a new array or modify an existing array?










{/*. source */}
{/*. file-path */}
server.js
{/*. 1 */}
Similar to the previous workshop, we import the libraries that we need and we start the server on port 4000.
    We also create a variable upload that refers to an object that will give
    our endpoints the capability of receiving HTTP requests from a form submission.

{/*. 2 */}
We create an empty array and a variable called todoItems that refers to that array. 

{/*. 3 */}
The h function, which stands for html, is an easy way to generate HTML formatted strings. Examples:

<pre>{`
h('div') <div></div>
h('div', ['hello world']) // <div>hello world</div>
h('a href="http://google.com"', ['the googs']) // <a href="http://google.com">the googs</a>
h('form',[h('input',[])]) // <form><input></input></form>
`}</pre>

It takes two arguments. The first argument is what goes inside the HTML element. The second argument is an array of strings,
 each string represents a child. The h function returns a string. The <code>{`element.split(' ').shift()`}</code> part of the function is used to extract
 the tag from the body of the HTML element. For example, if element = <code>{`img src="/cat.jpg"`}</code>, then <code>{`element.split(' ').shift()`}</code> would be <code>{`"img"`}</code>


{/*. 4 */}
We declare a new function makePage that will generate an HTML formatted string.
    The purpose is to display every element of todoItems 

{/*. 5 */}
We declare a variable called lified. This variable refers to an array. Each element
    of the array is a string. The strings are all HTML formatted. They all represent li elements. The
    For example, if todoItems = <code>{`["buy milk", "jog"]`}</code>, then lified = <code>{`["<li>buy milk</li>","<li>jog</li>"]`}</code>

{/*. 6 */}
This is the part of the webpage that never changes. It contains a form that, when submitted, sends
     an HTTP POST request to the /item endpoint. The form contains one text input element and a submit input
     element. The name attribute is arbitrarily called todo

{/*. 7 */}
Each element in the <code>{`lified`}</code> array becomes a childr of the <code>{`<ul>`}</code>. Therefore, makePage returns somethign
     different depending on what is in todoItems.

{/*. 8 */}
The / endpoint sends back to the user what the makePage() function call returns

{/*. 9 */}
We have an item endpoint. This is the endpoint that receivest he HTTP requests in the form submission because
     the path of the endpoint matches the action of the form and the method of the endpoint matches the method of the form.
     To receive the body of the HTTP request, we use the upload variable that refers to an object
     from the multer library.

{/*. 10 */}
The HTTP request body is parsed into an object by multer. The object has a todo property because
     the form has an text input with a name attribute of todo. This variable declaration is for convenience
     and readibility.

{/*. 11 */}
We add the todo item to the array referred to by todoItems

{/*. 12 */}
makePage generates an HTML formatted string. Looking at the makePage function
     definition we see that it uses the todoItems array to generate this string.
      The generated string is sent back to the user using res.send. The "/item" endpoint and
     the "/" endpoint both use the makePage function to generate the HTML formatted string, so they
     send back very similar pages. The main difference is thath /item sends back an updated version of the HTML
     that contains the new item.









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
Why do we need multer?

{/*. q */}
What is the return type of makePage? (choices: string, object, function, number, boolean)

{/*. q */}
How many endpoints are in the server?

{/*. q */}
In our HTML file, is the name attribute of the text input arbitrary chosen? If we change it, do we need to make modifications anywhere else?

{/*. q */}
What are the argument types for the h function? What is the return type?

{/*. q */}
What purpose does the h function serve? Could we make do without this function?

{/*. q */}
Why do we need to split and shift in the h function?










{/*. exercises */}

{/*. desc */}

Extend the program you created

{/*. q */}
Like the previous workshops, make a summary and then reproduce the project from the summary

{/*. q */}
Add some text to the webpage with instructions on how to use it for new
    users.

{/*. q */}
Add a button to delete all the elements in the list. 
    Hint: Create a new form outside of the current form with nothing
    but a submit button. You'll also need to create a new endpoint

{/*. q */}
Remove the bullet points and replace them with squares

{/*. q */}
Let the user customize the todo list by specifying a title. The title needs to be in large text without a bullet point. (hint: you'll need a new form)

{/*. q */}
Add another todo list

{/*. q */}
Keener question: let the user create new todo lists. The user only sees one todo list at a time. The user can switch todo lists at any time.











</>
<>
{/*. id */}
workshops-dom-reflex
{/*. name */}
Reflex game (DOM manipulations)
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
Load the project in your browser. Try to win three times in a row.










{/*. prereqs */}

{/*. desc */}

You need to be familiar with the following pieces of information
    to be able to make sense of this tutorial

{/*. term */}

express.static

{/*. desc */}

This is used to serve files from the HTTP server. 
    It is taught in a previous workshop

{/*. term */}

setTimeout

{/*. desc */}

setTimeout is a global variable that refers to a function. This function
        takes two argument. The first argument is a function. The second argument
        is a number that represents the number of milliseconds until that function is called
        by the event loop.

{/*. example */}

setTimeout(() => console.log("hi"), 1000)

{/*. term */}

document.querySelector

{/*. desc */}

document is a global variable that refers to an object with a querySelector
        property. This property refers to a function. This function takes a string as an argument.
        The string represents a css selector. The function returns the first DOM node that matches
        the selection criteria determined by the string. Example: querySelector

{/*. example */}

let node = document.querySelector("#someid")

{/*. term */}

domNode.addEventListener

{/*. desc */}

After you've selected a node using querySelector, you can
        put an event handler on that node. addEventListener takes two arguments: a string that
        represents the type of event that triggers a function call to the second argument

{/*. example */}


let node = document.querySelector('#some-button-id')
node.addEventListener('click', () => { console.log('button was clicked')})

{/*. term */}

event bubbling

{/*. desc */}

when an event is triggered on a DOM node, the event
        potentially triggers an event listener and then it propagates to the parent, 
        where it might trigger another event listener and then it propagates to the
        grandparent. It keeps propagating until it propagates to the html element
        and then document element, which is the ancestor of all the elements in your DOM.

{/*. term */}

document.createElement

{/*. desc */}

It refers to a function. The function takes a string as an argument.
            The string represents a tag name (eg div, h1, button, etc...). It creats a DOM node
            with that tag. The DOM node is not yet in the DOM, you have to use appendChild for that

{/*. example */}

document.createElement("div")

{/*. term */}

appendChild

{/*. desc */}

Every DOM node has a property called appendChild. It refers to a function. The
            function takes one argument. The argument is another DOM node. The argument is added
            as a child.

{/*. example */}


            let ch = document.createElement("button")
            let body = document.querySelector("body")
            body.appendChild(ch)
            










{/*. exercises */}

{/*. desc */}

Answer these questions about the previous slide

{/*. q */}
How many arguments does setTimeout take? Describe what each argument does.  

{/*. q */}
Name three different event types (you'll have to visit a website to find out)

{/*. q */}
How do you add an event listener to a DOM node?  

{/*. q */}
Before you can add an event listener to a node, you need to get a reference
       to that node. What function(s) can you use to achieve this goal?  

{/*. q */}
Before you can add a DOM node as a child to an existing DOM node, you need to create the child.
       Which function can you use to achieve this goal?

{/*. q */}
Describe the process of adding a DOM node to the DOM from DOM node creation

{/*. q */}
Describe two ways to select a node with a particular id










{/*. source */}
{/*. file-path */}
public/index.html
{/*. 1 */}
The HTML file only has a html element and a body element with some instructions
    on what to do.

{/*. 2 */}
This div has an id because it will become the parent of some DOM nodes 

{/*. 3 */}
We import our javascript file using the script src tag









{/*. source */}
{/*. file-path */}
public/app.js
{/*. 1 */}
We select the body element of the DOM because we will be adding children
    to this element.

{/*. 2 */}
We keep track if the user has won or lost

{/*. 3 */}
There are going to be two buttons and we need to keep track of which one was clicked

{/*. 4 */}
We create the first button. It hasn't been placed in the DOM yet.

{/*. 5 */}
We set the text on the button

{/*. 6 */}
We add an event listener to the button which is triggered when the button is clicked

{/*. 7 */}
We check if the game is over

{/*. 8 */}
We update the clicked array to reflect the fact that the first button is clicked

{/*. 9 */}
We check if both buttons are clicked

{/*. 10 */}
If both buttons are clicked, we update the won variable

{/*. 11 */}
And we also modify the text in the div with the id of status

{/*. 12 */}
Finally, we add the button to the DOM so that the user can see it and click on it

{/*. 13 */}
We add another button. There is one difference between this button and the other button which we will see in the next slide

{/*. 14 */}
We update the clicked array. Do you see the difference from the previous button? Can you explain this difference?

{/*. 15 */}
A second after the webpage is loaded, an action will take place.

{/*. 16 */}
If the game is over, the action will end immediately

{/*. 17 */}
At this point we know that the user has not clicked on both buttons (why?) and that a second has elapsed (why?)
    so we update the lost variable and we inform the user that they have lost.









{/*. source */}
{/*. file-path */}
server.js
{/*. 1 */}
Our express server will be very minimal. The only purpose is to
    send back the HTML and Javascript files. To receive
    the files in /public, the requests will have to be made to
    endpoints that start with /. The index.html file will actually have
    two paths: /index.html and /









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
How many arguments does addEventListener take? What are the argument types?

{/*. q */}
Where in our code is the second argument of addEventListener called?

{/*. q */}
Why do we use document.querySelector?

{/*. q */}
Instead of document.querySelector, is there another function we could have used?

{/*. q */}
Why do we use document.getElementById? How would we have achieved the same result with document.querySelector?

{/*. q */}
What is the type of document.createElement? Include argumentTypes and returnType. For the return type, you can simply describe the value returned conceptually.

{/*. q */}
Global variables are evil. What are the global variables in this code? Do they really need to be global?

{/*. q */}
How do we add a DOM node to another DOM node? Does the new child get added to the top or the bottom?

{/*. q */}
Why is clicked an array? What does each element of that array represent from the user's perspective?










{/*. exercises */}

{/*. desc */}

Exercises

{/*. q */}
Like the previous workshops, make a summary and then reproduce the project from the summary. 

{/*. q */}
Right now the game ends in 1 second. Make this random (from 500ms to 1300ms)

{/*. q */}
Add a third button

{/*. q */}
Make the code much shorter by removing the repetition. (hint: put the repetitive code in a function)

{/*. q */}
Make a random number of buttons appear. You'll need to modify the clicked variable declaration

{/*. q */}
For this question, start from scratch *without copy pasting*. Create a game.
    In this game, there is one button. The user has to click on that button 3 times in 500ms

{/*. q */}
If the last question was very hard, start this one from scratch. Add a feature to this game: the number
    of times remaining is labeled on the button. Also, the number of clicks needed is random from 2 to 5

{/*. q */}
If the last question was very hard, start this one from scratch. Make the button appear
    after a random amount of time

{/*. q */}
If the last question was very hard, start this one from scratch. Add a restart button

{/*. q */}
Every time the button is clicked, it changes to a random position (google: css position absolute)

{/*. q */}
There are a random number of buttons and each one you have to click a random number of times

{/*. q */}
Make a two player game similar to kirby samurai (https://youtu.be/3BeYJQrtT04). This is how kirby samurai is played: two players wait for a signal to start after a random delay. Once the start signal, first person to press their key wins. If a player presses before the signal appears, they lose. Player one presses the q key and player 2 presses the p key. (hint: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)

{/*. q */}
The game's too short! Make it so that players must win 3 rounds to win the game.

{/*. q */}
    Add sounds
<h5>Example</h5>
<pre>{`let x = new Audio('/static/something.mp3');
x.play()`}</pre>

{/*. q */}
Add some cool images











</>
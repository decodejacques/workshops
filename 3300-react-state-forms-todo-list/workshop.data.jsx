<>
    {/*. id */}
    workshops-react-state-forms
{/*. name */}
    React forms (state)
    {/*. exercises */}

    {/*. desc */}

    Exercises

{/*. q */}
    Run the provided project by typing `npm start` in the instructor provided project directory. Then create a list and add 3 elements to it.

{/*. q */}
    Very important question! Install react developer tools by following this link: [instructions](/learn/static/react-dev-tools) . Then, using the react developer tools, write out the initial props and state of the App component. Write something in the text box without submitting the form. How did the state change? Now submit 3 items. What property of the state changed? How did it change?










{/*. source */}
    {/*. file-path */}
    src/App.jsx
{/*. 1 */}
    We start by importing the react libraries and by declaring our component.
    We only have one component in our whole project, so the component name isn't
    important.

    {/*. 2 */}
    We import the immer library. This library makes it easier to modify the state. produce refers to a function.
    That function lets us generate the next state when the user interacts with the page.
    By using immer, the next state will contain references that are contained in the previous state.
    Reusing references can significantly reduce the number of renders and greatly improve performance.

    {/*. 3 */}
    useState always returns an array of length 2. That is why we can deconstruct the array
on the left hand side of the equal sign. Deconstruction is a standard javascript feature
unrelated to ReactJS. The first time useState is called, the first element of the returned array will simply
be the argument passed to useState. The second element of the array is a function. Calling this function
will cause a rerender, which causes the App function to get called, which calls the useState function again.
If it is  not the first time it is called, the first element of the array returned by useState is the last argument passed to setState.

{/*. 4 */}
    Initially the state refers to an object with three properties:
    - listName: The name chosen by the user for his todo list. Initially it is undefined
    - allTodos: An array that contains all the todo items in the list.
    - userInput: The user will enter their todo item in an input box. This property keepstrack of what the user is entering


{/*. 5 */}
    We call useEffect. The first argument is a function and the second argument is an empty array.
    When the second argument is an empty array, the first argument will be called after the component has been rendered,
    which happens after the App function has first returned and the DOM has been generated. We put a console.log for debugging purposes

{/*. 6 */}
    We ask the user for the name of the list. The window.prompt function makes
    a popup appear. It returns whatever the user entered in the popup. The console.log is for debugging purposes

{/*. 7 */}
    Once we have the name of the list we can use setState to set the listName property
    of the object referred to by the state.
    We never modify the state property
    directly. Instead we use the setState function.
    The produce function will create a new object that is identical
    to the object that state refers to except for the listName property.


{/*. 8 */}
    This console.log which will help us debug the state when a problem arises

{/*. 9 */}
    Initially the listName property of the state is undefined, so we display
                a loading message until the user gives the list a name

{/*. 10 */}
    We picked onChangeHandler as the name of the variable that refers to the
    function that is called every time the user modifies the input box. We will see later
                where this function is referenced.

{/*. 11 */}
    We console.log for debugging purposes. We picked event as the name of the parameter. This function is going to be called
    with an object that contains information about the user interaction related to the modification of the input box

{/*. 12 */}
    Here we call setState again to modify the userInput property of the state. All the other properties
remain the same. The new value of this property is <code>{`event.target.value`}</code> . <code>{`onChangeHandler`}</code> was called with an object with a target value
which represents the DOM node that was modified. This DOM node has a property called <code>{`value`}</code> which contains
                                                                                            a string that represents the contents of the input box. I imagine that the object that event refers to looks something like
                                                                                            this:
<pre>{`
{..., target: {..., value: "Buy groceries"}}
`}</pre>
    You have no control
    over this object since it is constructed by the browser.

{/*. 13 */}
    We chose submitHandler as the name of the variable that refers to a function that handles form submission, which is
                when the user adds an element to the todo list. We chose event
                as the name of the parameter of the function. The console.log is for debugging purposes

{/*. 14 */}
    When the browser calls submitHandler, it passes an object with a preventDefault property.
                This property refers to a function. Calling this function stops the browser
                from reloading the page. Reloading the page would wipe the state clean, which
                is undesirable.

{/*. 15 */}
    We update two properties of the state: userInput and allTodos.
    - userInput becomes the empty string
    - allTodos will now refer to a new array which has one more element than its current value. The new element is the userInput

{/*. 16 */}
    If the listName is not undefined, we return a div that will contain
                all the elements of the user interface

{/*. 17 */}
    First we display the listName

{/*. 18 */}
    Then we display every element of the todo list, which are located in the allTodos property
            of the state. We use map to create an array of <code>{`li`}</code> elements

{/*. 19 */}
    We start defining a form that will contain an input box and a submit button. The onSubmit
                prop of the form will be called when we click on the submit input. It is a very
                common mistake to forget to give the form an onSubmit

{/*. 20 */}
    The input box has onChange prop to which we give our onChangeHandler reference. This function
                will get called every time we modify the input box. There is also a value prop. The reason we give it
                a value prop is that if ever we modify the userInput property of the state, we want this modification
            to be reflected in the input box. For example, we modify the <code>{`userInput`}</code> property of the state
            in <code>{`submitHandler`}</code> to clear the input box.



{/*. exercises */}

    {/*. desc */}

    Go over these questions to deepen your understanding

{/*. q */}
    How many components are in this project? How many times does each component appear in the virtual DOM?


{/*. q */}
    When does the onSubmit of the form get triggered? What happens when you press enter in the input box?

{/*. q */}
    What is the best way to console log the state after you call setState? Can you do it immediately after?

{/*. q */}
    The onSubmit and onChange functions take a parameter which we called event. Is the name of this parameter important?


{/*. q */}
    Do we call the onChange function ourselves? If not, where does it get called?

{/*. q */}
    Why do we store the value of the input box in the state?

{/*. q */}
    Why does the input box have a value prop? What would happen if you removed it?










{/*. exercises */}

    {/*. desc */}

    Exercises

{/*. q */}
    Like the previous workshops, make a summary and then reproduce the project from the summary. Make sure you're using the instructor provided react boilerplate to create your project.

{/*. q */}
    Add a button to delete all the elements in the todo list. (hint: place the button outside of the form) (another hint: onClick)

{/*. q */}
    Add a button that displays a popup to change the title of your todo list. (hint: place the button outside of the form) (another hint: onClick)

{/*. q */}
    Add a button to remove the first element of the todo list (hint: use slice)

{/*. q */}
    Add a button to reverse the todo list (hint: use slice and reverse)

{/*. q */}
    Add another input box that represents the time at which the task should be performed (as a string).
        The time should be displayed alongside the todo element

{/*. q */}
    Number the todo items from top to bottom. The first todo should have a one beside it, the second a two, etc...

{/*. q */}
    Add a button that, when clicked, asks the user which todo list item number they want to delete. Label the button "delete todo".

{/*. q */}
    Add a search input text box. Only the todo items that include the string in the search box should be shown to the user.

{/*. q */}
    Add a "delete search result button" that deletes all the todo items that include the string in the search box.

{/*. q */}
    Add another todo list.

{/*. q */}
    Create a "add todo list" button that lets the user create new todo lists. The user can add as many todo list as they wish.  The todo lists are displayed one on top of each other.

{/*. q */}
    Make the website responsive.

{/*. q */}
    Add some css to make it aesthetically pleasing.











</>
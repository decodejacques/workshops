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
    We defined a constructor for our class. This constructor will get called for
    every instance of the class. The class will be instantiated every time the component
    appears in the virtual DOM. We add a console.log to make debugging easier
    
{/*. 3 */}
    We add a property to the instance called state. This is a special property name
    because, as we will see later, there is a method in the Component superclass that modified this property
    
{/*. 4 */}
    Initially the state property of the instance refers to an object with three properties:
    - listName: The name chosen by the user for his todo list. Initially it is undefined
    - allTodos: An array that contains all the todo items in the list.
    - userInput: The user will enter their todo item in an input box. This property keepstrack of what the user is entering
    
{/*. 5 */}
    The component has a componentDidMount method. This method has a special name. It is called
    after the first render. We put a console.log for debugging purposes
    
{/*. 6 */}
    We ask the user for the name of the list. The window.prompt function makes
    a popup appear. It returns whatever the user entered in the popup. The console.log is for debugging purposes
    
{/*. 7 */}
    Once we have the name of the list we can use setState to set the listName property
    of the object referred to by the state property of the current instance. We never modify the state property
    directly. Instead we use the setState method that we inherited from the Component class.
    Only the listName property is modified. The other properties of state remain the same.
    setState modifies the state at some time in the future. After setState is called,
    the virtual DOM element is rerendered.
    
{/*. 8 */}
    The render method has a console.log which will help us debug
    
{/*. 9 */}
    Initially the listName property of the state is undefined, so we display
                a loading message until the user gives the list a name
    
{/*. 10 */}
    We picked onChangeHandler as the name of the method to handle every time the user modifies the input box. We will see later
                where this method is referenced.
    
{/*. 11 */}
    We console.log for debugging purposes. We picked event as the name of the parameter. This method is going to be called
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
    We chose submitHandler as the name of the method that handles form submission, which is
                when the user adds an element to the todo list. We chose event
                as the name of the parameter of the method. The console.log is for debugging purposes
    
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
    The input box has onChange prop to which we give our onChangeHandler method. This method
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
    There are several methods in the App class. Some of the method names are picked by us
            and others we had no choice. Seperate the method names into the two categories.
    
{/*. q */}
    When does the onSubmit of the form get triggered? What happens when you press enter in the input box?
    
{/*. q */}
    What is the best way to console log the state after you call setState? Can you do it immediately after?
    
{/*. q */}
    The onSubmit and onChange methods take a parameter which we called event. Is the name of this parameter important?
    
{/*. q */}
    Where is the setState method defined?
    
{/*. q */}
    Do we call the onChange method ourselves? If not, where does it get called?
    
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
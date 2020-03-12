<>

{/*. id */}

react-native-todo

{/*. name */}
React native todo

{/*. source */}
{/*. file-path */}
App.js
{/*. 1 */}
We'll need to create a react component. The component will have state.
    
{/*. 2 */}
React native components and functions are imported from the react-native package

{/*. 3 */}
    View is the equivalent of the <code>div</code> tag in HTML. 
        
{/*. 4 */}
    A component to enter text, similar to the <code>input</code> tag in HTML
    
{/*. 5 */}
A clickable component similar to the <code>button</code> tag in HTML

{/*. 6 */}
All text in react native must be wrapped in a <code>Text</code> tag
    
{/*. 7 */}
Immer is optional, but very convenient. We will be using it when we update the state.
        
    {/*. 8 */}
The name of the function is only useful for the debugging tools
    
    {/*. 9 */}
Passing an object to setState makes debugging easier and works well with immer
        
    {/*. 10 */}
Our text change event handler. This event handler will be called every time the user
    modifies the input box. 
    {/*. 11 */}

We update the state by passing a callback and calling immer's produce function. 
        Pro tip: Create a vscode snippet to make it easier to write.
        {/*. 12 */}
    We only update the <code>current</code> property. The value will be determined
    by the contents of the TextInput
    {/*. 13 */}
    React functional components must return something which is displayable. In the next slide
    you will see that it is a react element
    {/*. 14 */}
    We place a top level react element to put some padding. The most generic
    component is a View. It is equivalent to the <code>div</code> tag in HTML
    {/*. 15 */}
    We display all the todo items. Each item string must be wrapped in a 
    <code>Text</code> component
    {/*. 16 */}
    The TextInput is where the user will enter the text. It is similar to the <code>input</code> tag in HTML.
    {/*. 17 */}
    This is where we specify the handler that gets called on each keypress.
    The name of the attribute is <code>onChangeText</code> and not <code>onChange</code>
    {/*. 18 */}
    TextInputs have no default style. By putting a border, we indicate to the user
    that it's a text input box.
    {/*. 19 */}
    The value attribute
        is only useful if we want to manually modify the contents of the TextInput. For example,
        if we want to clear it.
    {/*. 20 */}
    A button, similar to the <code>button</code> tag in HTML
    {/*. 21 */}
    The text on the button. Note: in react native, buttons typically have no children.
    {/*. 22 */}
    In react native, we use onPress attribute to specify the event handler.
    The name of the attribute is not onClick like it is in HTML
    {/*. 23 */}
    We generate a new state that only differs from the old state by the items property.
    This is where an item gets added to the todo list.

    
    {/*. exercises */}

{/*. desc */}



{/*. q */}
<ul>
<li> Summarize the workshop in a document</li>
<li> Create a fresh react native expo application (see <a href="https://reactnative.dev/docs/getting-started">getting started</a>)</li>
<li> Recreate the project from your summary. If your summary is missing information, go back to these slides to complete the missing information in your summary</li>
</ul>
{/*. q */}
Clear the contents of the TextInput every time an item is submitted
    
    {/*. q */}
Add a button to clear the todo items
{/*. q */}
Add a button to reverse the order of the todo items

{/*. q */}
For performance reasons, place the todo items in a FlatList (see <a href="https://reactnative.dev/docs/flatlist.html">FlatList documentation</a>)

{/*. q */}
Put a button beside each todo item that will delete it.    
    </>

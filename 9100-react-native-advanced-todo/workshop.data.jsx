<>

{/*. id */}

react-native-advanced-todo

{/*. name */}
React native advanced todo

{/*. source */}
{/*. file-path */}
App.js
{/*. 1 */}
We'll need to create a react component. The component will have state and we will
store a ref 
    
{/*. 2 */}
React native components and functions are imported from the react-native package

{/*. 3 */}
All text needs to be wrapped in a text component
    
{/*. 4 */}
A clickable component similar to the <code>button</code> tag in HTML

{/*. 5 */}
If we have many todo items, we will want a way to scroll through them

{/*. 6 */}
A component to enter text, similar to the <code>input</code> tag in HTML
    
{/*. 7 */}
Without this component, the content can overflow at the top.

    {/*. 8 */}
This object has a function that gives us the status bar height. We will
    put some padding so our content doesn't bleed into the status bar using that information.
        
    {/*. 9 */}
This component lets us move content around when the keyboard is viewable so that
        the keyboard doesn't hide our input box.
        
    {/*. 10 */}
Immer is optional, but very convenient. We will be using it when we update the state.
        
    {/*. 11 */}
The name of the function is only useful for the debugging tools
    
    {/*. 12 */}
Passing an object to setState makes debugging easier and works well with immer.
items is the items in our todo list and current is the text in the TextInput.
        
    {/*. 13 */}
Our text change event handler for our TextInput. 
    
    {/*. 14 */}
We update the state by passing a callback and calling immer's produce function. 
Pro tip: Create a vscode snippet to make it easier to write.
    
        
    {/*. 15 */}
We only update the <code>current</code> property.
    
    {/*. 16 */}
The functional component must return something which is displayable. 
    {/*. 17 */}
The TextInput is where the user will enter the text. The value attribute
        is only useful if we want to manually modify the contents of the TextInput. For example,
        if we want to clear it.
    {/*. 18 */}
    TextInput is not styled by default, we have to style it ourselves
    {/*. 19 */}
    The handler that will update the current property every time the user enters a key
    {/*. 20 */}
    A button, similar to the <code>button</code> tag in HTML
    {/*. 21 */}
    In react native, we use onPress attribute to specify the event handler.
    Unlike HTML, the name of the attribute is not onClick.
    {/*. 22 */}
    We generate a new state that only differs from the old state by the items property.
    This is where an item gets added to the todo list.
    {/*. 23 */}
    We display the todo items. Notice how we need to use the <code>Text</code> component.
    {/*. 24 */}
    We wrap our todo items in a scrollview in case there are many of them and the
    user would like to scroll.
    {/*. 25 */}
    We wrap everything in a <code>KeyboardAvoidingView</code> so that the content
    moves when the keyboard appears. Otherwise the keyboard would hide the content.
    {/*. 26 */}
    We use the <code>SafeAreaView</code> component so that the content does not overflow at the top.
    {/*. 27 */}
    Every time the user submits a todo list, we want the scroll view to scroll
    to the bottom. We have to create a ref that will refer to the native element
    and then call <code>scrollToEnd</code> when the contents of the scrollView changes.
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
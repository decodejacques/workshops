<>
{/*. id */}
workshops-redux-search
{/*. name */}
Search (Redux)
{/*. exercises */}

{/*. desc */}

Run the project and answer the following questions

{/*. q */}
Load the project in your browser.

{/*. q */}
Search for a hat and then search for a boat and then search for gucci










{/*. source */}
{/*. file-path */}
src/data.js
{/*. 1 */}
This is the data we're going to present to the user. Each item is going to have a price, a name and a description









{/*. source */}
{/*. file-path */}
src/store.js
{/*. 1 */}
In this file we create and export the store. We need to use createStore to create the store.

{/*. 2 */}
The reducer is a function that takes a state and an action. An action is just an object with a <code>{`type`}</code> property.
            It potentially returns a new object. The state of the store will then refer to this new object.
            To activate the reducer, a component needs to call dispatch and pass the action.
            The reducer then gets called with the current state of the store and the action. The reducer
            is referenced when the store is created

            

{/*. 3 */}
If the <code>{`type`}</code> of the action is <code>{`"minimum-price"`}</code> then we create and return a new object with
            the same properties as state but with the minimum-price property set to the price property of the action.
            Looking at Search.jsx, we see that this action is created and dispatched whenever the user interacts with the minimum price
            input box.
            

{/*. 4 */}
If the <code>{`type`}</code> of the action is <code>{`"maximum-price"`}</code> then we create and return a new object with
            the same properties as state but with the minimum-price property set to the price property of the action.
            Looking at Search.jsx, we see that this action is created and dispatched whenever the user interacts with the maximum price
            input box.
            

{/*. 5 */}
If the type is unrecognized, return the state as is. This is useful since
            redux sends an action with type <code>{`"@@INIT"`}</code> when the store is created. It isn't a particularly
            useful action to treat.

            

{/*. 6 */}
We create the store. We need to provide the store as well as the initial state of the store which contains
            three properties.

{/*. 7 */}
This argument lets you use redux developer tools, which is very, very useful. You can just
            copy paste it.









{/*. source */}
{/*. file-path */}
src/index.jsx
{/*. 1 */}
We import the standard libraries

{/*. 2 */}
We're also going to import Provider from react-redux and our store from store.js

{/*. 3 */}
We place the Provider as the top level node in our
       virtual DOM so that we can use redux everywhere. The value of the store prop
       is our store. The store has two main attributes: an initial value and a reducer. See reducer.js
       for more information.









{/*. source */}
{/*. file-path */}
src/App.jsx
{/*. 1 */}
In the virtual DOM, App nodes will have two children: a Search node and a SearchResults node.









{/*. source */}
{/*. file-path */}
src/Search.jsx
{/*. 1 */}
We need to import useSelector so that we can use the data from the store in our component. The
store is imported so that we can 
            dispatch actions to the reducer so that the state of the store can get updated.
            Don't forget to install the react-redux library.

{/*. 2 */}
The Search component uses the useSelector hook to extract data from the store. Every time the store
is updated, the argument passed to useSelector is called. If that value is different from the previous time it was called,
the component is rerendered. useSelector returns the value returned by its argument.
 We create 3 variables that will store the data we extract from the store: query, minPrice and maxPrice.
        

{/*. 3 */}
We have a text input element. Everytime it is modified, the handleQuery function is called. The value
            of the text input is equal to query. The value attribute is optional at the moment, but would be
            necessary if we wanted to add a button to clear the input box. Every time the onChange handler is called,
            an action is dispatched to the reducer which will update the state of the store. The type of the action is
            <code>{`query`}</code> and, by looking at the reducer function store.js, we see that the searchQuery property of the state will get updated. 

{/*. 4 */}
Similarly, modifying the minimum price input box dispatches an action to the reducer which modifies the min property of the state of the store

{/*. 5 */}
Modifying the maximum price input box dispatches an action to the reducer which modifies the max property of the state of the store









{/*. source */}
{/*. file-path */}
src/SearchResults.jsx
{/*. 1 */}
We need to import the useSelector function so that our component can read data from the store.

{/*. 2 */}
 The SearchResults functional component calls useSelector every time it is called,
 which is every time the component is rendered. Every time it is called, the call to useSelector
 will make sure it always has the latest value of the searchQuery property of the state of the store. 
 Furthermore, every time the searchQuery property is modified, the component is rerendered.

 
 
       

{/*. 3 */}
We only want items who name matches the search query so we use
            filter to select only those items. We are currently no filtering by price. You'll need to
            do that in the exercises 

{/*. 4 */}
Finally we display the items. We use map to convert the array of items to an array
            of react elements. Each item has a name property (see data.js)









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
How does information flow from the Search component to the SearchResults component? Describe every step.

{/*. q */}
Why do we need the value attribute on the input elements of the Search component? 

{/*. q */}
We could have not used redux and instead have 1 big component that does everything. Why is this a bad idea?

{/*. q */}
True or false: the SearchResult node is rerendered every time a user changes one of the input boxes
        under the Search node 

{/*. q */}
Why is redux necessary for this project?










{/*. exercises */}

{/*. desc */}

Exercises

{/*. q */}
Like in previous workshops, summarize the project and then rebuild it from scratch using the summary when necessary

{/*. q */}
Add 2 items

{/*. q */}
Right now the minimum and maximum price input boxes don't change anything. fix this. 

{/*. q */}
Add a property called inStock that refers to a boolean to each item. Add a checkbox to the form to indicate
    whether or not the user only wants to only see items that are in stock. You'll need to find out what input type to use to
    display a checkbox. Also, you'll need to find out out more about event.target.checked by using console.log 

{/*. q */}
Add a button to clear the form

{/*. q */}
Right now the user sees all 3 text input boxes right away. Change it so that the user only sees the query text box and add
    a button that, when clicked, displays the other two boxes.











</>
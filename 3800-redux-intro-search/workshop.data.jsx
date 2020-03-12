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
            To activate the reducer, a component needs to call this.props.dispatch and pass the action.
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
We need to import connect so that we can use the data from the store in our component and also
            dispatch actions to the reducer so that the state of the store can get updated.
            We need to install the react-redux library

{/*. 2 */}
The UnconnectedSearch component will receive props from connect. The props it will receive are query, minPrice and maxPrice.
        The value of the props depends on the data in the store. Every time the store gets modified, the mapState to props function gets called
        and it returns an object. Every property of that object becomes a prop of the UnconnectedSearch node in the virtual DOM. To find out
        the value of the prop, we need at the value of that property, which depends on that state of the store. The st parameter in
        the mapStateToProps function represents the state of the store. There is a second reason we connect
        this component: connect will provide a dispatch prop to the component that can be used to dispatch actions.
        

{/*. 3 */}
We have a text input element. Everytime it is modified, the handleQuery method is called. The value
            of the text input is equal to this.props.query. The value attribute is optional at the moment, but would be
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
We need to import the connect module so that our component can read data from the store.

{/*. 2 */}
In the virtual DOM, we see that the UnconnectedSearchResults nodes will receive
        a query prop from connect by looking at the mapStateToProps function. The st parameter
         of that function represents the state of the store. The value of that prop depends on the
          the searchQuery property of the state of the store.

{/*. 3 */}
This component has no state and no other methods than render

{/*. 4 */}
We only want items who name matches the search query so we use
            filter to select only those items. The query prop is populated by
            the mapStateToProps function below and it refers to the searchQuery property of the
            state of the store. We are currently no filtering by price. You'll need to
            do that in the exercises 

{/*. 5 */}
Finally we display the items. We use map to convert the array of items to an array
            of react elements. Each item has a name property (see data.js)









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
Why do we need to use connect? Which components need to be connected and why?

{/*. q */}
mapStateToProps returns an object. What do the properties of this object represent?

{/*. q */}
How does information flow from the Search component to the SearchResults component? Describe every step.

{/*. q */}
Why do we need the value attribute on the input elements of the Search component? If we removed it, 
        would we still need mapStateToProps when connecting that component?

{/*. q */}
We could have not used redux and instead have 1 big component that does everything. Why is this a bad idea?

{/*. q */}
True or false: the SearchResult node is rerendered every time a user changes one of the input boxes
        under the Search node 

{/*. q */}
When we connect a component, do we always need to provide a mapStateToProps?

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
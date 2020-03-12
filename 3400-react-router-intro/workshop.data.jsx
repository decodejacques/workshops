<>

{/*. id */}
workshops-react-router-intro
{/*. name */}
Simple marketplace (react router)

        {/*. source */}
        {/*. file-path */}
        src/App.jsx
{/*. 1 */}
        We import the libraries we need. The react-router-dom library
                will be used to deal with links.
        
{/*. 2 */}
        If we want to se the react-router-dom library functionalities, we need
                to place  a BrowserRouter component. We will then be able to use the
                other components of the react-router-dom library if they are placed below
                the BrowserRouter component in the virtual DOM. BrowserRouter can only have one child
        
{/*. 3 */}
        This function returns a react element that welcomes the user to the website.
        
{/*. 4 */}
        It contains the Link component, which is the react equivalent to <code>{`<a href>`}</code>. By clicking
                on this link, it will send the user to the address /allItems
        
{/*. 5 */}
                This line tells react router what to do if the path is /, which is
                        the path that the user will use to get on the website. The render prop
                        tells react to call renderRoot function and  display it returns.
                        In other words, if the user goes to the / path, then he gets the welcome message.
                        The exact prop just says not to render the welcome message for subpaths of / such as /index.html
                
{/*. 6 */}
                The renderAllItems function returns a react element
                
{/*. 7 */}
                The react element contains two links, clicking on each of the
                        links sends the user to a different path.
                
{/*. 8 */}
                The /allItems path will display what the renderAllItems function returns
                
{/*. 9 */}
                This route matches any path that starts with /item, such as /item/abc and /item/def. The function
                            renderItem is then called with an argument that contains information related to the path.
                            For example, if the path is /item/abc, then the argument to renderItem will be
<pre>{`
            {match: {params: {itemId: "abc"}}}
`}</pre>
                and if
                the path is /item/def then the argument to renderItem will be
<pre>{`
           {match: {params: {itemId: "def"}}}
`}</pre>
                Notice where the itemId in /item/:itemId appears in the argument to renderItem
   
{/*. 10 */}
                renderItem is a variable that refers to a function. That function has one parameter.
                             We chose the name routerData as the name of the parameter. The parameter will refer
                             to the object described in the previous step. In other words, the object will depend
                             on the path in the address bar.
                
{/*. 11 */}
                If the url in the address bar is /item/abc, then routerData will refer to
<pre>{`
             {match: {params: {itemId: "abc"}}}
`}</pre>
                And so the expression
<pre>{`
             routerData.match.params.itemId
`}</pre>
                will refer to <code>{`abc`}</code> and so the if condition evaluates to true and a picture of a hat
                is displayed to the user.
   
{/*. 12 */}
                This if statements handles the case when the itemId is <code>{`"def"`}</code>

                {/*. 13 */}
                At this point the two if conditions failed, so we know that the path is neither /item/abc nor /item/def.
                            Therefore, the item the user wants more information on is unknown.
                
                
                
                
                
                
                
                
                
{/*. source */}
                {/*. file-path */}
                src/index.jsx
{/*. 1 */}
                Typical index.jsx that ReactDOM.renders the App component
                
                
                
                
                
                
                
                
                
{/*. exercises */}

                {/*. desc */}

                Go over these questions to deepen your understanding
                
{/*. q */}
                What is the equivalent of Link outside of React? Why can't we use it with React?
                
{/*. q */}
                How are Links and Routes related? Which prop of Link is related to which prop of Routes.
                
{/*. q */}
                Does the `to` property of every Link match exactly the path prop of some Route?
                
{/*. q */}
                What does the `:` symbol represent when used inside a Route?
                
{/*. q */}
                Is there anything special about the name itemId. If we replace it in the Route, where else do we need to replace it?
                
                
                
                
                
                
                
                
                
                
{/*. exercises */}

                {/*. desc */}

                Exercises
                
{/*. q */}
                Like the previous workshops, make a summary and then reproduce the project from the summary.
                
{/*. q */}
                Add more details for the hat and the boat
                
{/*. q */}
                Add a lawnmower for sale
                
{/*. q */}
                Add snowshoes for sale
                
{/*. q */}
                Display small images of the items beside their links in /allItems
                
{/*. q */}
                For each item in the /allItems path, add a link. Clicking on this link will present information to the user about the seller of the item. Make this data up.
                
                
                
                
                
                
                
                
                
                
                
</>
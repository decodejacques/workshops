import ReactDOM from "react-dom" // 1
import React, { // 1
  Component // 1
} from "react" // 1
class DissapearingButton extends Component { // 2
  constructor() { // 3
    super() // 3
    this.state = { // 4
      clicked: false // 4
    } // 4
  } // 3
  render() { // 5
    if (this.state.clicked) return "nothing here" // 6
    return (<button onClick={() => // 7
      this.setState({ // 7
        clicked: true // 7
      })}>click me!</button>) // 7
  }// 5
} // 2
ReactDOM.render(<DissapearingButton />, document.getElementById("root")) // 8

/* meta
{
  text: {
  1: "The first thing to do is to import the react and react-dom libraries",
  2: "Then we create a component by creating a class that extends the Component class. In this particular program, this class will be instantiated once by the React library",
  3: "We give a constructor to our class. We do this because the instances of this class will have some persistent state. All constructors must start with a call to super",
  4: "In the constructor we set the state property of the instance. Remember, the constructor is called whenever the class is instantiated with the new keyword.",
  5: "Our component has a render method. The render method determines how the tree will get populated.",
  6: "The render method checks the property `clicked` of the `state` property. Initially it evaluates to false, but we will see that the state changes over time.",
  7: "If the `clicked` property of the `state` property is false then the function returns a button. The button has an onClick prop. This prop dictates what happens when the button is clicked. In this case, it is a function that calls setState and changes the `clicked` property to true.",
  8: "Now that we have a component, we need to display it to the user. Since we have a div in our index.html file with an id of root, we can select it to get a DOM element and then user ReactDOM.render to populate the DOM element."
  }
}


*/

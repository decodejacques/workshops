<>
{/*. id */}
workshops-react-props-media
{/*. name */}
Media board (React props)
{/*. source */}
{/*. file-path */}
src/Data.jsx
{/*. 1 */}
This is where the data needed to display the videos is located.
        We declare a variable called videos that refers to an array. The array
        contains objects. Each object has a name, id and caption property. The id
        represents the id of the video on the Vimeo website. The name and the caption properties are
        text that we will display alongside the video

{/*. 2 */}
As part of your homework, you will have to display images, sounds and text on your webpage

{/*. 3 */}
The values are exported so that they can be used in App.jsx









{/*. source */}
{/*. file-path */}
src/Video.jsx
{/*. 1 */}
We will be defining a component to display a video from
        the Vimeo website, so we first import React and Component from the react library

{/*. 2 */}
To create a component, we extend the Component class

{/*. 3 */}
It is a very simple component with just a render method

{/*. 4 */}
The render method returns an iframe that contains the video. Notice that the src attribute
        of the iframe is dynamic and depends on the videoId prop. Every time you use this component,
        you will need to supply a videoId prop. If you forget to supply a videoId prop, then the value
        of <code>{`this.props.videoId`}</code> is going to be undefined and the src attribute of the iframe
        is going to be <code>{`https://player.vimeo.com/video/undefined`}</code> 

{/*. 5 */}
We export the component so that it can be used in App.jsx









{/*. source */}
{/*. file-path */}
src/SoundWidget.jsx
{/*. 1 */}
You'll be using this component to play sound. It uses the audio tag, which
            is the tag you use when you want to play sound.

{/*. 2 */}
It uses a single prop called url. Every time you use this component, you need
            to give it the prop called url. This prop determines the sound location. If you don't
            give this component a url prop when you use it in your jsx, the value of <code>{`this.props.url`}</code> is going to be
            undefined and you won't be able to play any sound.









{/*. source */}
{/*. file-path */}
src/App.jsx
{/*. 1 */}
We are going to implement a component so we import the libraries as well as
         the css for that component

{/*. 2 */}
Our component is going to display videos, so we import the data needed for the
         videos as well as the component that will display the videos

{/*. 3 */}
We define our component. It is best practice to have the component name match the filename

{/*. 4 */}
It only has a render method

{/*. 5 */}
It returns a div

{/*. 6 */}
Inside the div we have several Video virtual DOM elements, one for each array element in videos.
            The function we pass to map will get called once for each array element. Each time it is called,
            The variable vd will refer to that element. Looking at Data.jsx, we see that the videos array
            contains objects and each of these objects has three properties: name, id and caption. In this function
            we make use of these three properties. Do you see where? Each Video virtual DOM element has a prop that is passed to it.
            The name of that prop is videoId. The value of that prop is <code>{`vd.id`}</code>. If you look in the Video.jsx file, you will
            see where the videoId prop is used

{/*. 7 */}
We export the component so that we can use it in index.jsx









{/*. source */}
{/*. file-path */}
src/index.jsx
{/*. 1 */}
Standard index.jsx file that imports a component from App.jsx and renders it









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
How many components do we have in our project? How many props does each one use?

{/*. q */}
In the render method in App.jsx we use the array map method. Why do we use this method?
        Is there an alternative way of doing things and, if so, what is it?

{/*. q */}
Explain how props are similar and different to HTML attributes










{/*. exercises */}

{/*. desc */}

Extend the program you created

{/*. q */}
Like the previous workshops, make a summary and then reproduce the project from the summary. For the iframe part of the project, you can copy paste it.

{/*. q */}
The Video component is not using all the props that are being given to it. For example, it is not using the caption prop. Fix this situation.

{/*. q */}
Right now only videos are being displayed. Add sounds. 
    Use the SoundWidget.jsx component that is given to you. Use the 
    data from Data.jsx

{/*. q */}
Add images. Use the images from Data.jsx. Create your own component
    to display the image. Have this component use two props.

{/*. q */}
Display the information in familyMembers of Data.jsx. Create a component
    to display the information.











</>
<>
{/*. id */}
workshops-forms-imgur
{/*. name */}
Imgur clone with forms
{/*. runlocally */}

{/*. header */}



{/*. footer */}

To run this project, go into the appropriate directory and
       type the following command
<pre>{`
node server.js
`}</pre>            
      
      








{/*. exercises */}

{/*. desc */}

Run the project and answer the following questions

{/*. q */}
Open your browser and go to http://localhost:4000/ . What do you see?

{/*. q */}
Upload three images and then reload the page. Are the images still there?

{/*. q */}
Restart your server and then reload the page. Are the images still there?










{/*. prereqs */}

{/*. desc */}

Here are some concepts that are used in the tutorial. Familiarizing yourself with them
    will make following the workshop easier

{/*. term */}

split

{/*. desc */}

Every string has a property called split. That property refers to a 
            function. The function takes one argument. The argument is a string. It returns
            an array. It is very important to deeply understand split.
            Look at the following examples and try to see if you can figure out
            exactly what it does.
            

{/*. example */}

"a,b,c".split(",") // ["a","b","c"]

{/*. example */}

"cat.jpeg".split(".") // ["foo", "jpeg"]

{/*. example */}

"dog.png".split(".") // ["dog", "png"]

{/*. term */}

pop

{/*. desc */}

Every array has a property called pop. It refers to a function.
            The function takes no arguments. It returns the last element of the array.
            It also modifies the array by removing that last element.
            

{/*. example */}

[3,6,10].pop() // 10

{/*. example */}

["dog","jpg"].pop() // "jpg"

{/*. example */}

"cat.png".split(".").pop() // "png"

{/*. example */}

"dog.jpg".split(".").pop() // "jpg"










{/*. exercises */}

{/*. desc */}

Answer these questions about the previous slide

{/*. q */}
If pop is the opposite of push, what is the opposite of split?

{/*. q */}
What is <code>{`"dog.txt".split(".").pop()`}</code> ? 

{/*. q */}
What is <code>{`"some/path/piano.gif".split(".").pop()`}</code> ? 

{/*. q */}
Does pop modify an existing array or create a new one?










{/*. source */}
{/*. file-path */}
server.js
{/*. 1 */}
Similar to the previous workshop, we import the libraries that we need and we start the server on port 4000. The second argument passed
    to the function call is a function that gets called once the server has started. It's optional.

{/*. 2 */}
Since we're going to let the users upload files, we need to tell multer where to put those files. To do this,
    we pass an argument to multer. The argument is an object. The object has one property called dest. The value of that
    property is the location

{/*. 3 */}
In later steps will be giving the user the ability to upload images to the uploads/ subdirectory. The purpose of uploading an image
    is so that it can be retrieved at a later time. This line gives every file in the uploads/ directory its
    own GET endpoint. If a file is called uploads/thefilename.png, then the endpoint will be /images/thefilename.png

{/*. 4 */}
We create a new empty array. The variable posts refers to that array. The elements of the array will be objects.
    Each object will contain a property path. The value of this property is the path of the endpoint generated
    by an image file. For example: if there is a file called uploads/cat.png, then there is an enpoint /images/cat.png
    and so <code>{`{path: '/images/cat.png'}`}</code> will be an element of the array.

{/*. 5 */}
The h function, which stands for html, is an easy way to generate HTML formatted strings. Examples:

<pre>{`
h('div') <div></div>
h('div', ['hello world']) // <div>hello world</div>
h('a href="http://google.com"', ['the googs']) // <a href="http://google.com">the googs</a>
h('form',[h('input',[])]) // <form><input></input></form>
`}</pre>


It takes two arguments. The first argument is what goes inside the HTML element. The second argument is an array of strings,
 each string represents a child. The h function returns a string. The <code>{`element.split(' ').shift()`}</code> part of the function is used to extract
 the tag from the body of the HTML element. For example, if element = <code>{`img src="/cat.jpg"`}</code>, then <code>{`element.split(' ').shift()`}</code> would be <code>{`"img"`}</code>
    

{/*. 6 */}
The makePage function is what will generate the HTML formatted string that is sent to the browser.
    It needs to be a function because it returns a webpage that depends on the posts array. The page is dynamic. 

{/*. 7 */}
We declare a variable called postElements. This variable refers to an array. Each element
    of the array is a string. The strings are all HTML formatted. They all represent an img element inside a div element.
    For example, if todoItems = <code>{`[{path:"/images/cat.png"}, {path:"/images/dog.jpg"}]`}</code>, then
     postElements = <code>{`["<div><img src="/images/cat.png" height="100px"/></div>","<div><img src="/images/cat.png" height="100px"/></div>"]`}</code>

{/*. 8 */}
Our HTML formatted string always contains a form

{/*. 9 */}
The form contains an input element, but this is different than the ones you've seen before. It has a
     a type of file. Please remember the name "funny-image", it will be used below.

{/*. 10 */}
We add the dynamic part of the page in a div that's the first child of the body. It contains all the divs we generated with
     the img elements.

{/*. 11 */}
Our / endpoint simply sends back the generated page

{/*. 12 */}
Our /image POST endpoint receives the HTTP request from a form submission, so we have to use multer. The upload variable
     which is defined at the start of the file can be used to specify if a file is expected by the endpoint.
     upload.single expects a single argument. The argument is a string.
     It represents the name attribute of the input file element, which is "funny-image".
     The endpoint sends back the generated page
     

{/*. 13 */}
As a convenience, I create a new variable called file. It refers to req.file. This refers to an object
     that was created by multer and that contains information about the file uploaded by the user. We use
     three properties from the object:
- originalname, which contains the name of the file on the uploader's computer.
- filename, which contains the name of the file on our computer. Multer generates a new random name for every file.
- path, which is the full path (as in file location) on our computer, including the filename

{/*. 14 */}
From the perspective of the user, they will request the image by using a path that starts with /images/ (see the express.static line above).
     We store this string in a variable called frontendPath

{/*. 15 */}
We store the frontendPath and the title in an object. The title was received in the HTTP request
     generated by the form. The title in req.body.title comes from the name attribute of the text input. We don't
     use the title anywhere at the moment. You'll be using it in one of your exercises. this object is added to our posts array.









{/*. exercises */}

{/*. desc */}

Go over these questions to deepen your understanding

{/*. q */}
In this workshop, the english word path is used with two completely different meanings. What are the two meanings of path?

{/*. q */}
How many endpoints are in the server?

{/*. q */}
What is the name attribute of our file input element? Was it arbitrarily chosen? Where else do we refer to it?

{/*. q */}
How do we indicate that an endpoint will receive an HTTP request generated by a form with a file in it?

{/*. q */}
Are the filenames genereated by multer random?

{/*. q */}
How do we indicate to multer into which directory the files should be placed?










{/*. exercises */}

{/*. desc */}

Extend the program you created

{/*. q */}
Like the previous workshops, make a summary and then reproduce the project from the summary

{/*. q */}
Add a delete button to delete all the posts

{/*. q */}
We ask the user to submit a title but then we don't do anything with it.
    For every image, place the title above the image

{/*. q */}
Right now we ask the user to submit an image and a title. Add a third piece of information: a description.
    Place the description below the image

{/*. q */}
Instead of uploading an image, give the user the ability to submit a url of an image.
    (hint: add an input text element to your form. You'll need to check if req.file is undefined in your /image endpoint)

{/*. q */}
(Advanced keener question) give the user the ability to upload two files. You'll need to read and
     understand the multer npm documentation. You can google multer npm.











</>
# ToDoList

![ToDo](https://user-images.githubusercontent.com/66787550/160249041-957d487e-027d-44d2-a81b-b62d8aeeabf7.png).

-
## Instructions

1- Fork and clone [this repository](https://github.com/HsnAlwayel/ToDoTask) to your `Development` folder.

2- We have two files we're gona use in this task [App.js] and [ListItem.js].

3- in App.js, we will Declare our first State which we will use to capture the input to create a new item.
 ```
 const [taskInput, setTaskInput] = useState("");
 
 ```
 
4- to capture a new value , we will use `setTaskInput` in our Input element to capture the new value for `taskInput`. 
  #hint:onChange.
  
5- Now that we can capture new task, we have to store it in another state , lets create a new state named `toDoList` with an initial value of an empty array.
```
const [toDoList,setToDoList]=useState([]);

```

6- Next ,lets create a function named addTask, that will use `setToDoList` to add a new item to our array.

7- Use addTask with our add button to save `taskInput` to `toDoList`.

8- Try it out, and verify using [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).

9-Now that we can create a new task in our list , we should render it.
  -use a condition to check if we have items in our list, if we dont ,render 'No Items' , otherwise we will render [ListItem.js].
  #hint: toDoList.map + props.

10-in [ListItem.js], use props to display and render each task.

11-Magical tasks are showing in your website ? Bravo , you have the right to smack anyone who says you cant code #Just_Do_it!.

12-Next, lets create a fucktion named deleteTask, that will use `setToDoList` to delete a specific item from our toDoList.
  #hint: use .filter method to remove an item from our list , then use `setToDoList` to store our modified list .

13-using props ,pass deleteTask to [ListItem.js] and use the button to run it.


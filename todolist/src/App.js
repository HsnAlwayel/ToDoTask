import logo from "./logo.svg";
import "./App.css";

function App() {
  //Declare states

  //AddItem Function

  //DeleteItem Function

  return (
    <div className="app-background">
      <div className="task-container column">
        <p className="heading-text">ToDo List</p>
        <div className="task-container">
          <div className="row">
            {/* Input Item should be used to change the state */}
            <input className="text-input" />
            {/* Add Button should Add a new item to the List state */}
            <button className="add-button">Add</button>
          </div>
          {/* Render List here */}
        </div>
      </div>
    </div>
  );
}

export default App;

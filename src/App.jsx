import react, { useState } from "react";
import "./App.css";
import "./index.css";
import ToDoLists from "./TodoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1 color="black">To Do List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Task"
          value={inputList}
          onChange={itemEvent}
        />

        <button onClick={listOfItems}> + </button>
        <ol>
          <li> {inputList} </li>
          {Items.map((itemval) => {
            return <ToDoLists text={itemval} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;

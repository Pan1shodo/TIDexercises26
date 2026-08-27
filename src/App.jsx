import "./App.css";
import { useState } from "react";
import ToDoList from "./ToDoList.jsx";
import ToDoPanel from "./ToDoPanel.jsx";

function App() {
  const [list1, setList1] = useState(["Eat the lolly", "Sip the juice"]);
  const [list2, setList2] = useState(["Drink the child", "Become satan"]);

  const addTo1 = () => setList1((prev) => [...prev, `Task ${prev.length + 1}`]);
  const addTo2 = () => setList2((prev) => [...prev, `Task ${prev.length + 1}`]);

  return (
    <ToDoPanel firstName="Victor" lastName="...">
      <ToDoList
        firstName="Victor"
        lastName="..."
        todos={list1}
        onAdd={addTo1}
      />
      <ToDoList
        firstName="Victor"
        lastName="..."
        todos={list2}
        onAdd={addTo2}
      />
    </ToDoPanel>
  );
}

export default App;

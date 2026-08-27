import "./App.css";
import { useState } from "react";
import ToDoList from "./ToDoList.jsx";
import ToDoPanel from "./ToDoPanel.jsx";

function App() {
  const testList1 = ["Eat the lolli", "Sip the juice"];
  const testList2 = ["Drink the child", "Become satan"];

  return (
    <>
      <ToDoList firstName="Victor" lastName="..." todos={testList1} />
      <ToDoList firstName="Victor" lastName="..." todos={testList2} />
    </>
  );
}

export default App;

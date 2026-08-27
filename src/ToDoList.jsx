import ToDoItem from "./ToDoItem";

function ToDoList() {
  let firstName = props.firstName;
  let lastName = props.lastName;

  return (
    <ul>
      {todos.map((text, index) => (
        <ToDoItem key={index} text={text} />
      ))}
    </ul>
  );
}

export default ToDoList;

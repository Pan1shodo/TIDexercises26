import ToDoItem from "./ToDoItem";

export default function ToDoList({ firstName, lastName, todos, onAdd }) {
  return (
    <>
      <h2>
        {firstName} {lastName}'s To Do List
      </h2>
      <ul>
        {todos.map((text, index) => (
          <ToDoItem key={index} text={text} />
        ))}
      </ul>
      <button onClick={onAdd}>Create new task</button>
    </>
  );
}

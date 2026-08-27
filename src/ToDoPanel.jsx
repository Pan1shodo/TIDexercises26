export default function ToDoPanel({ firstName, lastName, children }) {
  return (
    <>
      <h1>
        To Do List for {firstName} {lastName}
      </h1>
      <div style={{ backgroundColor: "lightgrey" }}>{children}</div>
    </>
  );
}

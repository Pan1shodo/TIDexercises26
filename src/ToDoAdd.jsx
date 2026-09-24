import { useState } from "react";

function ToDoAdd({ onAdd }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
    setOpen(false);
  };

  if (!open) {
    return <button onClick={() => setOpen(true)}>Create new task</button>;
  }

  return (
    <form onSubmit={submit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What to do?"
        autoFocus
      />
      <button type="submit">Add new task</button>
      <button
        type="button"
        onClick={() => {
          setOpen(false);
          setText("");
        }}
      >
        Cancel
      </button>
    </form>
  );
}

export default ToDoAdd;

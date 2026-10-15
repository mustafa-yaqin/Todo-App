import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text.trim());
    setText("");
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
}

export default TodoInput;

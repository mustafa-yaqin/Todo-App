function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="todos-container">
      <ul id="todos-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "todo-item completed" : "todo-item"}
          >
            <label className="checkbox-container">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="checkmark"></span>
            </label>
            <span className="todo-item-text">{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              <i className="fas fa-times"></i>
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <div className="empty-state">
          <i className="fas fa-clipboard-list"></i>
          <p>No tasks here yet</p>
        </div>
      )}
    </div>
  );
}

export default TodoList;

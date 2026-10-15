import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  let visibleTodos = todos;
  if (filter === "active") {
    visibleTodos = todos.filter((todo) => !todo.completed);
  }
  if (filter === "completed") {
    visibleTodos = todos.filter((todo) => todo.completed);
  }

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <Header />
      <TodoInput addTodo={addTodo} />
      <Filters filter={filter} setFilter={setFilter} />
      <TodoList
        todos={visibleTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <Footer itemsLeft={itemsLeft} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;

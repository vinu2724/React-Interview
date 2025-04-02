import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //add the todo
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  //delete Todo

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //toggle todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter Todo"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

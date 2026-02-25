import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  const updateTodo = () => {
    if (input.trim() === "") return;

    const updatedTodos = [...todos];
    updatedTodos[editIndex] = input;

    setTodos(updatedTodos);
    setInput("");
    setEditIndex(null);
  };

  const deleteTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);

    // अगर delete करते समय edit हो रहा था तो reset कर दो
    if (editIndex === index) {
      setInput("");
      setEditIndex(null);
    }
  };

  return (
    <div className="container">
      <h1>🚀 Advanced Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {editIndex === null ? (
          <button onClick={addTodo}>Add</button>
        ) : (
          <button onClick={updateTodo}>Update</button>
        )}
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <div className="btn-group">
              <button
                className="edit-btn"
                onClick={() => editTodo(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
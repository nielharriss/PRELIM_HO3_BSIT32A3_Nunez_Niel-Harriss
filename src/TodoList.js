import React, { useState } from "react";

function TodoList() {
  // Initialize the state with some sample todo items
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a Todo List App",
    "Test Delete Functionality",
  ]);

  // Function to delete a todo item
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove the todo item by filtering out the selected item
  };

  // Function to add a new todo item
  const addTodo = () => {
    const newTodo = prompt("Enter a new todo item:");
    if (newTodo) {
      setTodos([...todos, newTodo]); // Add the new todo to the list
    }
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <button className="add-todo-button" onClick={addTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}{" "}
            <button className="delete-button" onClick={() => deleteTodo(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

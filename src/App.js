import React, { useState } from 'react';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    setTodo('');
  };

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, i) => {
        return (
          <>
            <h1 key={todo.id}>{todo.text}</h1>
            <button key={i} onClick={() => deleteTodo(todo.id)}>
              Delete Todo
            </button>
            <input
              type="checkbox"
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;

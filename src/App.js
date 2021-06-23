import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  // set to null by default because the todoEditing is going to be the id of the todo that we're editing. To start out we won't be editing anything so we set the initial value in useState to null
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');


  useEffect(() => {
    const temp = sessionStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if(loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [])

  useEffect(() => {
    const temp = JSON.stringify(todos);
    sessionStorage.setItem('todos', temp);
  }, [todos])

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

  const editTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText
      }
      // return returns every todo, but if the todo.id is equal ti the id passed into editTodo it'll have the new edited text
      return todo;
    });

    setTodos(updatedTodos);
    setTodoEditing(null); // set the id back to null for our editing logic
    setEditingText('');
  }

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
          {/* todoEditing is an id of a todo */}
          {todoEditing === todo.id ? (<input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText} />) : (<h1 key={todo.id}>{todo.text}</h1>)}


            <button key={i} onClick={() => deleteTodo(todo.id)}>
              Delete Todo
            </button>
            <input
              type="checkbox"
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
            />

            {todoEditing === todo.id ? (<button onClick={() => editTodo(todo.id)}>Submit Edit</button>) : (<button onClick={() => setTodoEditing(todo.id)}>Edit Todo</button>)}



          </>
        );
      })}
    </div>
  );
}

export default App;

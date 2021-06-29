import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    );
  }
}

export default TodosList;

import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, setValueChange, resetInput] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        resetInput();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={setValueChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;

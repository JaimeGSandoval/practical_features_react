import React, { useContext } from 'react';
import { DispatchContext } from './context/todos.context';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, setInputValue, reset] = useInputState(task);
  console.log('EDIT FORM RE-RENDER');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'EDIT', id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={setInputValue}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;

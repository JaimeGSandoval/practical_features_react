import { v4 as uuidv4 } from 'uuid';

const ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  TOGGLE: 'TOGGLE',
  EDIT: 'EDIT',
};

// state will contain an array of todo objects
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, { id: uuidv4(), task: action.task, completed: false }];

    case ACTIONS.REMOVE:
      return state.filter((todo) => todo.id !== action.id);

    case ACTIONS.TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case ACTIONS.EDIT:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );

    default:
      return state;
  }
};

export default reducer;

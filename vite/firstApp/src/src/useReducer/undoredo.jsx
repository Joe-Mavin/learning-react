import React, { useReducer } from 'react';

// Define actions
const ACTIONS = {
  ADD: 'add',
  UNDO: 'undo',
  REDO: 'redo',
};

// Reducer function to handle undo/redo functionality
const undoRedoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      const updatedHistory = [...state.history.slice(0, state.currentIndex + 1), action.payload];
      return {
        ...state,
        history: updatedHistory,
        currentIndex: state.currentIndex + 1,
      };
    case ACTIONS.UNDO:
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
      };
    case ACTIONS.REDO:
      return {
        ...state,
        currentIndex: Math.min(state.currentIndex + 1, state.history.length - 1),
      };
    default:
      return state;
  }
};

const initialState = {
  history: [],
  currentIndex: -1,
};

const UndoRedoApp = () => {
  const [state, dispatch] = useReducer(undoRedoReducer, initialState);
  const [input, setInput] = React.useState('');

  const handleAdd = () => {
    dispatch({ type: ACTIONS.ADD, payload: input });
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={() => dispatch({ type: ACTIONS.UNDO })}>Undo</button>
      <button onClick={() => dispatch({ type: ACTIONS.REDO })}>Redo</button>

      <ul>
        {state.history.slice(0, state.currentIndex + 1).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UndoRedoApp;

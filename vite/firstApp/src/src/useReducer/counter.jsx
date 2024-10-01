import React, { useReducer } from 'react';

// Action types for better readability
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

// Reducer function to handle the state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  // useReducer takes in the reducer function and initial state (0 here)
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        +
      </button>

      <span>{state}</span> {/* Displaying the current state (count) */}

      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        -
      </button>
    </div>
  );
};

export default Counter;

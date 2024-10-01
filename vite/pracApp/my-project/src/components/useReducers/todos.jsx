import React, { useReducer } from "react";

// Define actions
const ACTIONS = {
  ADD_TODO: "add_todo",
  REMOVE_TODO: "remove_todo",
  TOGGLE_TODO: "toggle_todo",
};

// Reducer function to handle to-do actions
const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];
    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    default:
      return state;
  }
};

// Helper function to create a new todo item
const newTodo = (name) => {
  return { id: Date.now(), name, complete: false };
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.complete ? "line-through" : "none",
            }}
          >
            {todo.name}
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
              Toggle Complete
            </button>
            <button onClick={() => dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

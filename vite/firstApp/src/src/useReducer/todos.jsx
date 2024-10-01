import React, { useState,useReducer } from "react";
const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  REMOVE_TODO: "remove_todo",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, addTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        todo.id === action.payload.id
        ? { ...todo, complete: !todo.complete }
        : todo
      });
    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => {
        todo.id !== action.payload.id;
      });
  }
};

//helper function
const addTodo = (name) => {
  return { id: Date.now, name, complete: false };
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">ADD TODO</button>
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
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todo.id },
                })
              }
            >
              Toggle Complete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.REMOVE_TODO,
                  payload: { id: todo.id },
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;

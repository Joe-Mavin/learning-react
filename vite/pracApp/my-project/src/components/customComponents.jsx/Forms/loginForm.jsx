import React from "react";
import useForm from "../useForm";

const LoginForm2 = () => {
  const [values, handleChange] = useForm({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", values);
  };
  return (
    <div>
        <p>My Credentials are {values.username} {values.password}</p>
      <form action="" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm2;

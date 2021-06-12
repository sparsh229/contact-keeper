import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submit");
  };
  return (
    <div
      style={{
        width: "30%",
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <form
        style={{ marginTop: "30px" }}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <h2 className="text-primary">Account Login</h2>
        <TextField
          type="email"
          margin="normal"
          required
          fullWidth
          autoFocus
          name="email"
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={onChange}
        />
        <TextField
          type="password"
          margin="normal"
          required
          fullWidth
          autoFocus
          name="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={onChange}
        />
        <Button
          style={{ top: "10px" }}
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          size="small"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

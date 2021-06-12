import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Register Submit");
  };
  return (
    <div
      style={{
        width: "30%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <form
        style={{ marginTop: "30px" }}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <h2 className="text-primary">Account Registeration</h2>
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          autoFocus
          name="name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={onChange}
        />
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
        <TextField
          type="password"
          margin="normal"
          name="password2"
          required
          fullWidth
          autoFocus
          label="Confirm Password"
          variant="outlined"
          value={password2}
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
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;

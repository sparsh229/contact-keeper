import React, { useState, useContext, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "error");
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuthenticated, props.history]);
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
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "warning");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "error");
    } else {
      register({
        name,
        email,
        password,
      });
    }
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

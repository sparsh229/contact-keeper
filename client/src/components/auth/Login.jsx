import React, { useState, useContext, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import BackImg from "../layout/BackImg";
const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "error");
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuthenticated, props.history]);
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
    if (email === "" || password === "") {
      setAlert("Please fill in all details", "warning");
    } else {
      login({
        email,
        password,
      });
    }
  };
  return (
    <div className="login">
      <BackImg />
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

import React, { Fragment, useContext } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const onLogout = () => {
    logout();
    clearContacts();
  };
  const authLinks = (
    <Fragment>
      <li style={{ paddingRight: "20px" }}>
        Hello , {user && user.name.slice(0, 6)}
      </li>
      <li>
        <a onClick={onLogout} style={{ color: "white" }} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <a style={{ color: "white" }} href="/register">
        <li style={{ marginRight: "20px" }}>Register</li>
      </a>
      <a style={{ color: "white" }} href="/login">
        <li style={{ marginRight: "20px" }}>Login</li>
      </a>
    </Fragment>
  );
  return (
    <div className="bg-primary">
      <AppBar position="static">
        <Toolbar variant="dense">
          <h2>
            <i
              style={{ paddingRight: "10px" }}
              className="fas fa-id-card-alt"
            />
            <a style={{ color: "white" }} href="/">
              {" "}
              <span className="hide-sm">Contact-Keeper</span>
            </a>
          </h2>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: "20px",
            }}
          >
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;

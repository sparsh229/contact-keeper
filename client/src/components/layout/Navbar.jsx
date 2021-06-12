import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import PropTypes from "prop-types";
const Navbar = ({ title, icon }) => {
  return (
    <div className="bg-primary">
      <AppBar position="static">
        <Toolbar variant="dense">
          <h2>
            <i style={{ paddingRight: "10px" }} className={icon} />
            {title}
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
            <li style={{ marginRight: "20px" }}>Home</li>
            <li style={{ marginRight: "20px" }}>About</li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
export default Navbar;

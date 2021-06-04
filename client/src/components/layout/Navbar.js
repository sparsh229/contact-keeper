import React from "react";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
const Navbar = ({ title, icon }) => {
  return (
    <div className="bg-primary">
      <AppBar position="static">
        <Toolbar>
          <h2>
            <i style={{ paddingRight: "10px" }} className={icon} />
            {title}
          </h2>
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

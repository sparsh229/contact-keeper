import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import { TextField } from "@material-ui/core";
import useStyles from "./ContactItemStyles";
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  let text = useRef("");
  const { filterContacts, clearFilter, filtered } = contactContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, [filtered]);
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <TextField
        inputRef={text}
        type="text"
        margin="normal"
        fullWidth
        autoFocus
        name="filter contacts"
        label="Filter Contacts"
        variant="outlined"
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;

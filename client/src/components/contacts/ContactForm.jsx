import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, current, clearCurrent } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const { name, email, phone, type } = contact;
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form style={{ marginTop: "30px" }} onSubmit={onSubmit} autoComplete="off">
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}{" "}
      </h2>
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
        label="Email"
        variant="outlined"
        value={email}
        onChange={onChange}
      />
      <TextField
        type="text"
        margin="normal"
        name="phone"
        required
        fullWidth
        autoFocus
        label="Phone No."
        variant="outlined"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <FormControlLabel
        control={
          <Checkbox
            value="personal"
            checked={type === "personal"}
            color="primary"
            name="type"
            onChange={onChange}
          />
        }
        label="Personal"
      />
      <FormControlLabel
        control={
          <Checkbox
            value="professional"
            checked={type === "professional"}
            name="type"
            color="primary"
            onChange={onChange}
          />
        }
        label="Professional"
      />
      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        size="small"
      >
        {current ? "Update" : "Submit"}
      </Button>
      {current && (
        <Button
          style={{ marginTop: "10px" }}
          fullWidth
          color="default"
          variant="contained"
          size="small"
          onClick={clearAll}
        >
          Clear
        </Button>
      )}
    </form>
  );
};

export default ContactForm;

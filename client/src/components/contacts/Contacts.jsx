import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";
import { Grid } from "@material-ui/core";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    <img src="./no-contact.svg" alt="no contact" />;
  }
  return (
    <Grid container spacing={2}>
      {filtered !== null
        ? filtered.map((contact) => (
            <Grid item xs={12} sm={6}>
              <ContactItem key={contact.id} contact={contact} />
            </Grid>
          ))
        : contacts.map((contact) => (
            <Grid item xs={12} sm={6}>
              <ContactItem key={contact.id} contact={contact} />
            </Grid>
          ))}
    </Grid>
  );
};

export default Contacts;

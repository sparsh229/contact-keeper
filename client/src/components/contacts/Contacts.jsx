import React, { useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Grid } from "@material-ui/core";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    <img src="./no-contact.svg" alt="no contact" />;
  }
  return (
    <TransitionGroup>
      <Grid container spacing={2}>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} classNames="item" timeout={500}>
                <Grid item xs={12} sm={6}>
                  <ContactItem contact={contact} />
                </Grid>
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} classNames="item" timeout={500}>
                <Grid item xs={12} sm={6}>
                  <ContactItem contact={contact} />
                </Grid>
              </CSSTransition>
            ))}
      </Grid>
    </TransitionGroup>
  );
};

export default Contacts;

import React, { Fragment, useContext, useEffect } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";
import { Grid } from "@material-ui/core";
import Spinner from "../layout/Spinner";
import NoContact from "../layout/NoContact";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (contacts !== null && contacts.length === 0 && !loading) {
    return <NoContact />;
  }
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Grid container spacing={2}>
          {filtered !== null
            ? filtered.map((contact) => (
                <Grid key={contact._id} item xs={12} sm={6}>
                  <ContactItem contact={contact} />
                </Grid>
              ))
            : contacts.map((contact) => (
                <Grid key={contact._id} item xs={12} sm={6}>
                  <ContactItem contact={contact} />
                </Grid>
              ))}
        </Grid>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;

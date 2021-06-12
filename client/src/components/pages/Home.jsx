import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import { Grid } from "@material-ui/core";
const Home = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={4}>
        <ContactForm />
      </Grid>
      <Grid item xs={12} sm={8}>
        <ContactFilter />
        <Contacts />
      </Grid>
    </Grid>
  );
};

export default Home;

import React, { Fragment } from "react";
import noContact from "./noContact.svg";
const NoContact = () => {
  return (
    <Fragment>
      <img src={noContact} alt="No contact to display." />
    </Fragment>
  );
};
export default NoContact;

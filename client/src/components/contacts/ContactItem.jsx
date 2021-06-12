import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Chip,
  Avatar,
} from "@material-ui/core";
import ContactContext from "../../context/contact/contactContext";
import PropTypes from "prop-types";
import useStyles from "./ContactItemStyles";
const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, type } = contact;
  let labelcolor = "secondary";
  if (type === "professional") {
    labelcolor = "primary";
  }
  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  const classes = useStyles();
  return (
    <Card
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/checkered-pattern.png')",
      }}
      elevation={6}
      className={classes.card}
    >
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {type === "personal" ? (
            <Avatar className={classes.avatarPink}>{name.charAt(0)}</Avatar>
          ) : (
            <Avatar className={classes.avatarBlue}>{name.charAt(0)}</Avatar>
          )}
          <div style={{ paddingTop: "5px" }}>
            <Chip
              label={type.charAt(0).toUpperCase() + type.slice(1)}
              color={labelcolor}
            />
          </div>
        </div>
        <h3 className="text-primary text-left">{name} </h3>
        <ul className="list">
          {email && (
            <li>
              <i
                style={{ marginRight: "10px" }}
                className="fas fa-envelope-open"
              ></i>
              {email}
            </li>
          )}
          {phone && (
            <li>
              <i style={{ marginRight: "10px" }} className="fas fa-phone"></i>
              {phone}
            </li>
          )}
        </ul>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              setCurrent(contact);
            }}
            size="small"
          >
            Edit
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={onDelete}
            size="small"
          >
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;

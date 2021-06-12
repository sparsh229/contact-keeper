import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  alert: {
    position: "absolute",
    top: "60px",
    right: "10px",
    width: "30%",
  },
}));
const Alerts = () => {
  const classes = useStyles();
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <Alert className={classes.alert} severity={alert.type}>
        {alert.msg}
      </Alert>
    ))
  );
};
export default Alerts;

import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ContactState from "./context/contact/ContactState";
import { Container } from "@material-ui/core";
const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;

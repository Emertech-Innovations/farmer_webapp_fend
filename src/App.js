import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./App.css";

import Register from "./components/Register";
import User from "./components/User";
import Logo from "./asset/logo.svg";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="nav_bar">
            <div className="brand">
              <NavLink exact to="/">
                <img className="logo-img" src={Logo} alt="" />
              </NavLink>

              <div>
                <h1 className="home-heading">Farmer Registration Portal</h1>
              </div>
            </div>

            <div className="links">
              <NavLink className="nav_link" to="/">
                <Button
                  className="btn_text"
                  variant="outlined"
                  size="large"
                  color="primary"
                >
                  Register
                </Button>
              </NavLink>
              <NavLink className="nav_link" to="/user">
                <Button
                  className="btn_text"
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Show Farmers
                </Button>
              </NavLink>
            </div>
          </div>

          <Switch>
            <Route path="/" exact component={Register} />
            <Route path="/register" exact component={Register} />
            <Route path="/user" exact component={User} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

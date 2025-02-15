import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import { Alert } from "react-bootstrap";

const Home = (props) => {
const Home = () => {
  if (localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
  }

  const auth = useSelector((state) => state.auth);

  return (
    <Alert style={{ backgroundColor: "#343A40", color: "#ffffff80" }}>
      Welcome {props.auth.username}
      Welcome {auth.username}
    </Alert>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Home);
export default Home;
  27  
src/main/webapp/reactjs/src/components/NavigationBar.js
@@ -1,5 +1,5 @@
import React from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
@@ -10,9 +10,12 @@ import {
} from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../services/index";

const NavigationBar = (props) => {
const NavigationBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    props.logoutUser();
    dispatch(logoutUser());
  };

    const guestLinks = (
@@ -51,7 +54,7 @@ const NavigationBar = (props) => {

  return (
    <Navbar bg="dark" variant="dark">
      <Link to={props.auth.isLoggedIn ? "home" : ""} className="navbar-brand">
      <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
          width="25"
@@ -60,21 +63,9 @@ const NavigationBar = (props) => {
        />{" "}
        Book Store
      </Link>
      {props.auth.isLoggedIn ? userLinks : guestLinks}
      {auth.isLoggedIn ? userLinks : guestLinks}
    </Navbar>
  );
};
  
  const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
export default NavigationBar;

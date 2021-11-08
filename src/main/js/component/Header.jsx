import React from "react";
import { Navbar } from "react-bootstrap";
import { APP_VERSION } from "../constant/AppConstants";

class Header extends React.Component {
  render() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
          <Navbar.Brand href="#">JOLT Transformation Tool {APP_VERSION}</Navbar.Brand>
        </Navbar>
    );
  }
}

export default Header;

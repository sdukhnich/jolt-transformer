import React from "react";
import { Navbar } from "react-bootstrap";
import Copyright from "./Copyright";

class Footer extends React.Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light" fixed="bottom" className="justify-content-md-center">
        <Copyright />
      </Navbar>
    );
  }
}

export default Footer;

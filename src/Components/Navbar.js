import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar className="nav-bar" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Trek</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Trending</Nav.Link>
                <NavDropdown title="😎" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    className="NavDropdownItem"
                    href="#action/3.1"
                  >
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="NavDropdownItem"
                    href="#action/3.2"
                  >
                    My Calendar 📅
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="NavDropdownItem"
                    href="#action/3.3"
                  >
                    My Posts 🌄
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    className="NavDropdownItem"
                    href="#action/3.4"
                  >
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

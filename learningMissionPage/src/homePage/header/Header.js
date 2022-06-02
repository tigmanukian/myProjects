import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  Offcanvas,
} from "react-bootstrap";
import "./header.scss";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Container className="header-pro  ">
        <NavBarHeader />
		<div  className="head-logo">
		<Logo />
		</div>
      </Container>
    </div>
  );
}

function Logo() {
  return <img src="./icons/logo.png" className="logo" alt="logo" />;
}

function NavBarHeader() {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 "
          //  fixed="top"
        >
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            //   style={{maxHeight: "300px"}}
          >
            <Offcanvas.Header closeButton >
             
             
            </Offcanvas.Header>
			
            <Offcanvas.Body>
              <NavbarBrand>
                <Logo  />
              </NavbarBrand>

              <Nav className="link-colors justify-content-end  align-items-center  flex-grow-1 pe-3 "
			   		
			   >
                <Nav.Link  className="link-colors nav-btn">About Us</Nav.Link>
                <Nav.Link className="link-colors nav-btn" >Courses</Nav.Link>
                <Nav.Link className="link-colors nav-btn" >Our Success</Nav.Link>
                <Nav.Link className="link-colors nav-btn" >Media</Nav.Link>
                <Nav.Link className="link-colors nav-btn" >Contact Us</Nav.Link>
                <Nav.Link className="link-colors Donate p-2" href="https://campaign.onearmenia.org/event/learning-mission-inaugural-gala/e400983" target="_blank">Donate</Nav.Link>
                <Nav.Link className="link-colors nav-btn login " href="/login" > Log in</Nav.Link>
                <Nav.Link className="link-colors   logOut p-2" href="/register" >Create Account</Nav.Link>
              </Nav>
            </Offcanvas.Body>
			
			
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  );
}

export default Header;

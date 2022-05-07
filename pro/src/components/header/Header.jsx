import React from "react";
import { Button,  Container, Nav, Navbar} from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <div className="header-pro ">
      <header className="header-box align-items-center ">
       
         <div className="logo-burger">
		 <div >
            <Logo />
          </div>
          <div className=" ">
            <NavBarHeader />
          </div>
		 </div>
          <div className=" login-regester ">
            <Button variant="outline-warning border-white  p-xl-1 login">
              Log in
            </Button>
            <Button variant="outline-warning border-white  p-xl-1 ">
              Create Account
            </Button>
          </div>
        
      </header>
    </div>
  );
}

function Logo() {
  return <img src="./icons/logo.png" className="ss-logo" alt="logo" />;
}

function NavBarHeader() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid className="p-lg-0 ">
          <Navbar.Toggle aria-controls="navbarScroll " />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-sm-0  p-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <Button variant="outline-warning border-white p-lg-1   ">
                  About Us
                </Button>{" "}
              </Nav.Link>
              <Nav.Link href="#action2">
                <Button variant="outline-warning border-white p-lg-1 ">
                  Courses
                </Button>{" "}
              </Nav.Link>
              <Nav.Link href="#action3">
                <Button variant="outline-warning border-white  p-lg-1 ">
                  Our Success
                </Button>{" "}
              </Nav.Link>
              <Nav.Link href="#action1">
                <Button variant="outline-warning border-white p-lg-1 ">
                  Media
                </Button>{" "}
              </Nav.Link>
              <Nav.Link href="#action1">
                <Button variant="outline-warning border-white p-lg-1 d-none  d-xxl-block">
                  Contact Us
                </Button>{" "}
              </Nav.Link>
              <Nav.Link href="#action1">
                <Button variant="outline-warning border-white p-lg-1 ">
                  DONATE
                </Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

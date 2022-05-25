
import { Navbar, Nav, Container } from "react-bootstrap";

function MainNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link id="nav-text" href="Home">НАШИ СЕРВИСЫ</Nav.Link>
                        <Nav.Link id="nav-text">СТРАНИЦ</Nav.Link>
                        <Nav.Link id="nav-text">ОСОБЕННОСТИ</Nav.Link>
                        <Nav.Link id="nav-text">ПРОДУКТ</Nav.Link>
                        <Nav.Link id="nav-text">ПОЧЕМУ ВЫБРАЛИ НАС</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;
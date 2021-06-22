import {Navbar, Container, Nav} from "react-bootstrap"
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <Navbar bg="success" expand="lg">
        <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="me-auto">
                <Nav.Link href="/planner">Planner</Nav.Link>
                {/* <NavLink href="#link">Shopping List</NavLink> */}
            </Nav>
            {/* </Navbar.Collapse> */}
        </Container>
        </Navbar>
    )
}

export default NavBar
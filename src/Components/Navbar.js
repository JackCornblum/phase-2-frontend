import { Navbar, Container, Nav } from "react-bootstrap"
// import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <Navbar bg="success" expand="lg" variant="dark" >
        <Container id="navbar">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/planner">Planner</Nav.Link>
                <Nav.Link href="/shoppinglist">Shopping List</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    )
}

export default NavBar
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

export default function TopBar() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://1000logos.net/wp-content/uploads/2023/04/Instacart-Logo-2017.png"
              alt="Instacart Logo"
              height="50px"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#LogIn">Log In</Nav.Link> <Button>Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

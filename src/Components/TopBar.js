import { Nav } from "react-bootstrap"
import { Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function TopBar() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand style={{ margin: "5px 0 0 20px", position: "left" }} href="#home">
          <img src="/Images/instacart-logo.png" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default TopBar

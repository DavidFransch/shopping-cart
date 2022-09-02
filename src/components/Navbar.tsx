import { Container, Nav, Button, Navbar as NavbarBootstrap } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import shoppingCart from '../assets/shopping-cart.svg'


export const Navbar = () => {
  return (
    <NavbarBootstrap sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
                <Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
                <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
            </Nav>
            <Button
            style={{ width: "3rem", height: "3rem", position: "relative"}}
            variant="outline-primary"
            className="rounded-circle">
                <img src={shoppingCart} alt=''/>
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{ color: 'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0,  transform: 'translate(50%, 0)' }} 
                     >
                    3
                </div>
            </Button>
        </Container>
    </NavbarBootstrap>
  )
}

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
        <div className="App">

            {/* Navigation */}
            <Navbar className="sticky-top mb-5" bg="danger" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">GoMyCode</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#">Accueil</Nav.Link>
                        <Nav.Link href="#">Formation</Nav.Link>
                        <Nav.Link href="#">Hackerspace</Nav.Link>
                        <Nav.Link className='text-white' href="#">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Menu;
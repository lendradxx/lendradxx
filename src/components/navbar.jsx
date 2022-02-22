import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi"

export default function headerBar() {
    return (
        <React.StrictMode>
            <Navbar variant="dark" bg="dark" expand="md">
                <Navbar.Brand className="fw-bold">Lendra</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav">
                    <GiHamburgerMenu />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarNav">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link>
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.StrictMode>
    )
}
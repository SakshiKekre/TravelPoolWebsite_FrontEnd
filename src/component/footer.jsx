import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import ProjectLogo from './projectLogo';

const Footer = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="footer">
            <Container>
                <Navbar.Brand href="#home" style={{ textAlign: 'left' }}>
                    <ProjectLogo />
                    <div style={{ textAlign: 'left' }}>
                        <h5>Developer </h5>
                        <h5><Nav.Link href="https://www.linkedin.com/in/sakshikekre/" target="_blank">Sakshi Kekre</Nav.Link></h5>
                        <h5><Nav.Link href="mailto: sakshi.kekre@gmail.com">sakshi.kekre@gmail.com</Nav.Link></h5>
                    </div>
                </Navbar.Brand>

                <Nav style={{ flexDirection: 'column', textAlign: 'left' }}>
                    <Nav.Link href="https://aws.amazon.com/" target="_blank">Developed with help of AWS</Nav.Link>
                    <h5>
                        <Nav.Link eventKey={2} href="https://aws.amazon.com/" target="_blank">
                            <Badge bg="light"> <Image src='../../aws-icon.svg' /></Badge>
                        </Nav.Link>
                    </h5>
                </Nav>
            </Container>
        </Navbar >

    );
}

export default Footer;
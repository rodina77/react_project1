
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'


function Nav_bar() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand className='navo' href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle className='navo' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='navo' id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navlink' href="/">Home</Nav.Link>
            <Nav.Link href="/css">css</Nav.Link>
            <Nav.Link href="/java">java</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_bar;
  
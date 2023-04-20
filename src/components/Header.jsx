import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "../App.css";

const Header = () => {
  return (
    <div>
       <Navbar className='navbar' bg="dark" variant="dark">      
        <Container>
          <Navbar.Brand><Link to={'/'}><img src="./img/logotype.png" className='logo'/></Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='header_link'><Link to={'/'}>Главная</Link></Nav.Link>
            <Nav.Link className='header_link'> <Link to={'/favorites'}>Избранное</Link></Nav.Link>
            <Nav.Link className='header_link'><Link to={'/cart'}>Корзина</Link></Nav.Link>
           </Nav>
          <Nav>
            <Button variant="dark">
              Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
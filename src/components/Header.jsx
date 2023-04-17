import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to={'/'}>Логотип</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'}>Главная</Link></Nav.Link>
            {/* <Nav.Link><Link to={'/catalog'}>Каталог</Link></Nav.Link> */}
            <Nav.Link><Link to={'/stocks'}>Акции</Link></Nav.Link>
            <Nav.Link><Link to={'/reviews'}>Отзывы</Link></Nav.Link>
            <Nav.Link> <Link to={'/favorites'}>Избранное</Link></Nav.Link>
            <Nav.Link><Link to={'/cart'}>Корзина</Link></Nav.Link>
            {/* <Nav.Link><Link to={'/description'}>Описание</Link></Nav.Link> */}
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
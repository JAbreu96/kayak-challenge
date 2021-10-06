import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarText,
  NavItem,
  Button,
  Col,
  Row,
  Container
} from 'reactstrap';

const Navigation = () => {
  let width = window.innerWidth;

  const [content, changeContent] = useState(<Container className="justify-content-md-between px-5" fluid>
    <Row>
      <NavbarBrand href='/' color='light'>Joelchrist Abreu</NavbarBrand>
    </Row>
    <Row xs='3' md='2' lg='3' xl='3' className='w-50'>
      <Col>
        <NavLink href='/' color='light' id='nav-items' className='px-0 mx-3'>About Me</NavLink>
      </Col>
      <Col>
        <NavLink href='/' color='light' className='px-0 mx-3'>Skills</NavLink>
      </Col>
      <Col>
        <NavLink href='/' color='light' className='px-0 mx-3'>Projects</NavLink>
      </Col>
    </Row>
    <Row className="justify-self-end">
      <Button color='success' disabled>Resume</Button>
    </Row>
  </Container>);

  if (width < 780) {
    useEffect(() => {
      changeContent(<Container className="justify-content-md-around" fluid>
        <Row>
          <NavbarBrand href='/' color='light'>Joelchrist Abreu</NavbarBrand>
        </Row>
        <Row className="justify-content-end">
          <Button color='success' disabled>Resume</Button>
        </Row>
      </Container>);
    }, [])
  }



  return (
    <>
      <Navbar color="light" light className='static-top'>
        {content}
      </Navbar>
    </>
  )
}

export default Navigation;
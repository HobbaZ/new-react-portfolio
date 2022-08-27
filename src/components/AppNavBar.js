import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

function AppNavbar () {

  return (
      <Nav className="navbar navbar-expand-lg navbar-light">
      <Container fluid>
      <Navbar.Brand><a href='#about' onClick={() => 'about'}>About</a></Navbar.Brand>

        {/*Navbar collapse and expand */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarResponsive" aria-controls="navBarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navBarResponsive">

        <Nav className="navbar-nav ml-auto mb-2 mb-lg-0">
        <a href='#about' onClick={() => 'about'} className='navLink ml-3 my-2'>About</a>

        <a href='#projects' onClick={() => 'projects'} className='navLink ml-3 my-2'>Projects</a>

        <a href='#contactMe' onClick={() => 'contactMe'} className='navLink ml-3 my-2'>Contact Me</a>

          </Nav>
          </div> 
           </Container>
      </Nav>
  );
};

export default AppNavbar;
import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

function AppNavbar () {

  return (
    <>
    <div className='navbackground'>
      <Nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar-nav">
      <Container fluid>
      <Navbar.Brand><a className='nav-link noEffect' href='#about' onClick={() => 'about'}>Zachary Hobba<br></br><div className='subtitle text-center'>Software Engineer</div></a></Navbar.Brand>

        {/*Navbar collapse and expand */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarResponsive" aria-controls="navBarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span><i className="fas fa-bars nav-link navIcon"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navBarResponsive">

        <Nav className="navbar-nav ml-auto mb-2 mb-lg-0">
        <a href='#about' onClick={() => 'about'} className='nav-link ml-3 my-2 '>About</a>

        <a href='#projects' onClick={() => 'projects'} className='nav-link ml-3 my-2'>Projects</a>

        <a href='#contactMe' onClick={() => 'contactMe'} className='nav-link ml-3 my-2'>Contact Me</a>

          </Nav>
      </div> 
      </Container>
      </Nav>
      </div>
</>
  );
};

export default AppNavbar;
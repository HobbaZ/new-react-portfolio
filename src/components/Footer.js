import React from 'react';
import Container from 'react-bootstrap/Container';

//Change year automatically and keep created date for future references
function year() {
  const createdDate = 2022

  let date = new Date();
  let currentYear = date.getFullYear()

  if (currentYear !== createdDate) {
    return `${createdDate} - ${currentYear}`
  } else {
    return `${createdDate}`
  }
}

const Footer = () => {
return (
  <>
  <Container className='text-center' fluid>
  <footer className=' fixed-bottom'>
      <p>Zachary Hobba, {year()} 

          <a href="https://www.linkedin.com/in/zachary-hobba-52aaa182/"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:zachobba@gmail.com"><i className="fas fa-envelope-square"></i></a>
          <a href="https://github.com/HobbaZ"><i className="fab fa-github"></i></a>
        </p>
  </footer>
  </Container>
  </>
);
};

export default Footer;
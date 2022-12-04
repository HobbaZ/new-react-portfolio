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
  <Container>
  <footer>
      <p className='footer'>Zachary Hobba, {year()} 

          <a className='footer' href="https://www.linkedin.com/in/zachary-hobba-52aaa182/"><i className="fab fa-linkedin footerIcon"></i></a>
          <a className='footer' href="mailto:zachobba@gmail.com"><i className="fas fa-envelope-square footerIcon"></i></a>
          <a className='footer' href="https://github.com/HobbaZ"><i className="fab fa-github footerIcon"></i></a>
        </p>
  </footer>
  </Container>
  </>
);
};

export default Footer;
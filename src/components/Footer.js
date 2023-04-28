import React from "react";
import Container from "react-bootstrap/Container";

//Change year automatically and keep created date for future references
function year() {
  const createdDate = 2022;

  let date = new Date();
  let currentYear = date.getFullYear();

  if (currentYear !== createdDate) {
    return `${createdDate} - ${currentYear}`;
  } else {
    return `${createdDate}`;
  }
}

const Footer = () => {
  return (
    <>
      <Container>
        <footer>
          <p className="footer">Zachary Hobba, {year()}</p>

          <div className="iconDiv">
            <a
              className="footer"
              href="https://www.linkedin.com/in/zachary-hobba-52aaa182/"
              title="Zac Hobba"
            >
              <i className="fab fa-linkedin footerIcon"></i>
            </a>
            <a
              className="footer"
              href="https://github.com/HobbaZ"
              title="Github icon"
            >
              <i className="fab fa-github footerIcon"></i>
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;

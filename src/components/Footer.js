import Container from "react-bootstrap/Container";
import { AppContext } from "./AppContext";
import { useContext } from "react";

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
  const { userInputs } = useContext(AppContext);
  return (
    <>
      <Container>
        <footer>
          <p style={{ color: `${userInputs.pColor}` }} className="footerText">
            Zachary Hobba, {year()}
          </p>

          <div className="iconDiv">
            <a
              style={{ color: `${userInputs.linkColor}` }}
              className="footerLink"
              href="https://www.linkedin.com/in/zachary-hobba-52aaa182/"
              title="Zac Hobba LinkedIn"
            >
              <i className="fab fa-linkedin footerIcon"></i>
            </a>
            <a
              style={{ color: `${userInputs.linkColor}` }}
              className="footerLink"
              href="https://github.com/HobbaZ"
              title="Zac Hobba Github link"
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

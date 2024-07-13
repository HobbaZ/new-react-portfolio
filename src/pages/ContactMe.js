import React, { useState, useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { FormButton } from "../components/BaseSettings";
import { Container, Form } from "react-bootstrap";
import { AppContext } from "../components/AppContext";

let emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function ContactMe() {
  const formRef = useRef();
  const { userInputs } = useContext(AppContext);

  const [subjectInput, setSubjectInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const [validated, setValidated] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  // submit form
  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setSendingEmail(true);

    //send details to email provider
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_TEMPLATEID,
        formRef.current,
        process.env.REACT_APP_USERID
      )
      .then(
        (result) => {
          console.log("Email Sent", result);
          setEmailSent(true);
          setSendingEmail(false);
          setInfoMessage("Email sent successfully!");
          setTimeout(() => {
            setEmailSent(false);
            setInfoMessage("");
          }, 3000);
        },
        (error) => {
          console.log("Email failed: ", error);
          setEmailSent(false);
          setSendingEmail(false);
          setInfoMessage("Email failed to send.");
          setTimeout(() => {
            setInfoMessage("");
          }, 3000);
        }
      );
  };

  return (
    <Container id="contactMe">
      <h1 style={{ color: `${userInputs.h1Color}` }}>Contact Me</h1>

      <Form
        noValidate
        validated={validated}
        onSubmit={submitForm}
        className="col-sm-12 col-md-6 m-auto"
        ref={formRef}
      >
        <Form.Group>
          <label style={{ color: `${userInputs.labelColor}` }}>Name</label>
          <input
            className="form-control"
            type="text"
            name="from_name"
            value={nameInput}
            placeholder="Your Name"
            onChange={(e) => setNameInput(e.target.value)}
            required
          />
          <div style={{ height: "0em" }}>
            {nameInput !== "" && nameInput.length < 2 && (
              <div
                style={{ color: `${userInputs.pColor}` }}
                className="text-center text-red"
              >
                {"Name must be at least 2 characters"}
              </div>
            )}
          </div>
        </Form.Group>
        <br />

        <Form.Group>
          <label style={{ color: `${userInputs.labelColor}` }}>
            Email address
          </label>
          <input
            className="form-control"
            type="email"
            name="user_email"
            value={emailInput}
            placeholder="Enter email"
            onChange={(e) => setEmailInput(e.target.value.trim())}
            required
          />
          <div style={{ height: "0em" }}>
            {emailInput !== "" &&
              emailInput.length > 0 &&
              !emailRegex.test(emailInput) && (
                <div
                  style={{ color: `${userInputs.pColor}` }}
                  className="text-center text-red"
                >
                  {"Invalid email address entered"}
                </div>
              )}
          </div>
        </Form.Group>
        <br />

        <Form.Group>
          <label style={{ color: `${userInputs.labelColor}` }}>Subject</label>
          <select
            className="form-control"
            value={subjectInput}
            required
            name="user_subject"
            onChange={(e) => setSubjectInput(e.target.value)}
          >
            <option value="Make a General Enquiry">
              Make a General Enquiry
            </option>
            <option value="Make a Complaint">Make a Complaint</option>
            <option value="Talk About a Project or Idea">
              Talk About a Project or Idea
            </option>
          </select>
        </Form.Group>
        <br />

        <Form.Group>
          <label style={{ color: `${userInputs.labelColor}` }}>Message</label>
          <textarea
            className="form-control"
            type="text"
            rows="7"
            name="message"
            value={messageInput}
            placeholder="Type your message (required)"
            onChange={(e) => setMessageInput(e.target.value)}
            required
          />
          <div style={{ height: "0em" }}>
            {messageInput !== "" && messageInput.length < 2 && (
              <div
                style={{ color: `${userInputs.pColor}` }}
                className="text-center text-red"
              >
                {"Message is required"}
              </div>
            )}
          </div>
        </Form.Group>
        <br />

        <div className="text-center pt-2">
          <FormButton
            type="submit"
            buttonGradientAngle={userInputs.buttonGradientAngle}
            buttonGradientColor1={userInputs.buttonGradientColor1}
            buttonGradientColor2={userInputs.buttonGradientColor2}
            buttonOutlineColor={userInputs.buttonOutlineColor}
            text={
              <div className="buttonText">
                <i className="fas fa-envelope"></i> Send Email
              </div>
            }
            colour={userInputs.buttonTextColor}
            style={{
              border: `4px solid ${userInputs.buttonGradientColor2}`,
            }}
            className="form-btn-primary"
            disabled={
              !(emailInput && nameInput && messageInput) || sendingEmail
            }
          >
            <div style={{ color: userInputs.buttonTextColor }}>
              {sendingEmail ? (
                "Sending ..."
              ) : emailSent ? (
                <>
                  Email Sent <i className="fas fa-check"></i>
                </>
              ) : (
                <>
                  Email Failed <i className="fas fa-xmark"></i>
                </>
              )}
            </div>
          </FormButton>
        </div>
      </Form>
      {infoMessage && (
        <div className="text-center pt-2" style={{ color: userInputs.pColor }}>
          {infoMessage}
        </div>
      )}
    </Container>
  );
}

export default ContactMe;

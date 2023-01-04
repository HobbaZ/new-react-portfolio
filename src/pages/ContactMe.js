import React, { useState, useRef, useEffect } from 'react';


import emailjs from '@emailjs/browser';

import { Container, Button, Form } from 'react-bootstrap';

let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function ContactMe({
  ...props
}) {

  const formRef = useRef();

  const [subjectInput, setSubjectInput] = useState();
  const [nameInput, setNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [messageInput, setMessageInput] = useState();

  const [validated] = useState(false);

  // state for messages
  const [infoMessage, setInfoMessage] = useState('');

  // submit form
  const submitForm = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

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
          console.log("Email succeeded", result);
          setInfoMessage("Email Succeeded")
          setTimeout(() => {
            setInfoMessage("");
          }, 3000);

        },
        (error) => {
          console.log("Email failed: ", error);
          setInfoMessage("Email Failed")
          setTimeout(() => {
            setInfoMessage("");
          }, 3000);
        }
      );
  };

  return (
    <Container>
      <h1 style={{ color: `${props.h1Color}` }}>Contact Me</h1>

      <Form validated={validated} onSubmit={submitForm} className='col-sm-12 col-md-6 m-auto' ref={formRef}>

        <Form.Group>
          <label style={{ color: `${props.labelColor}` }}>Name</label>
          <input className='form-control' type="text" name="from_name" value={nameInput || ''} placeholder="Your Name" onChange={(e) => setNameInput(e.target.value)} required />
        </Form.Group>

        {nameInput !== '' && nameInput?.length < 2 ?
          <div style={{ color: `${props.pColor}` }} className="text-center errMessage">{"Name must be at least 2 characters"}</div> : ''}

        <br />

        <Form.Group>
          <label style={{ color: `${props.labelColor}` }}>Email address</label>
          <input className='form-control' type="email" name="user_email" value={emailInput || ''} placeholder="Enter email" onChange={(e) => setEmailInput(e.target.value)} required />
        </Form.Group>

        {emailInput != null && !emailRegex.test(emailInput) ?
          <div style={{ color: `${props.pColor}` }} className="text-center errMessage">{"Invalid email address entered"}</div> : null}
        <br />

        <Form.Group>
          <label style={{ color: `${props.labelColor}` }}>Subject</label>
          <select className='form-control' value={subjectInput} required name="user_subject" onChange={(e) => setSubjectInput(e.target.value)}>
            <option value="Make a General Enquiry">Make a General Enquiry</option>
            <option value="Make a Complaint">Make a Complaint</option>
            <option value="Talk About a Project or Idea">Talk About a Project or Idea</option>
          </select>
        </Form.Group>

        <br />

        <Form.Group>
          <label style={{ color: `${props.labelColor}` }}>Message</label>
          <textarea className='form-control' type="text" rows="7" name="message" value={messageInput || ''} placeholder="Type your message (required)" onChange={(e) => setMessageInput(e.target.value)} required />
        </Form.Group>

        {messageInput !== '' && messageInput?.length < 2 ?
          <div style={{ color: `${props.pColor}` }} className="text-center infoMessage">{"message is required"}</div> : ''}

        <br />

        <div className='text-center'>
          <Button type="submit"
            style={{ background: `linear-gradient(${props.buttonGradientAngle}deg, ${props.buttonGradientColor1}, ${props.buttonGradientColor2}` }}
            className='form-btn-primary'
            disabled={!(emailInput && nameInput && messageInput)}>
            <div style={{ color: props.buttonTextColor }}>
              Send Email
            </div>
          </Button>
        </div>

        {infoMessage && (
          <div className='text-center infoMessage'><p style={{ color: `${props.pColor}` }}>{infoMessage}</p></div>
        )}
      </Form>
    </Container>
  );
};

export default ContactMe;

import React, {useState} from 'react';

import { Container, Form, FormGroup, Button} from 'react-bootstrap';

function validateEmail(email) {
    const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkEmail.test(String(email).toLowerCase());
  }

function ContactMe() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMsg(inputValue);
      setSubject(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email needs to be valid');
      return;
    }
    // Clear the form fields after submit
    setUserName('');
    setMsg('');
    setEmail('');
  };

  return (
    <>
    <Container id='contactMe'>
      <h1 className='text-center'>Contact Me</h1>
      <p className='text-center'>Shoot me an email at <a className='nav-link' href="mailto:zachobba@gmail.com">zachobba@gmail.com</a> or find me on <a className='nav-link' href='https://www.linkedin.com/in/zachary-hobba-52aaa182/'>LinkedIn</a></p>

      <Form className="form">
        <FormGroup>
        
        <label>Name:</label><br></br>
        <input className='form-control'
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required={true}
        />

        <label>Email:</label><br></br>
        <input className='form-control'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required={true}
        />

        <label>Subject:</label><br></br>
        <select className='form-control'
        value={subject}
        required={true}
        name="subject"
        onChange={handleInputChange}
        >
        <option value="1">Make a General Enquiry</option>
        <option value="2">Make a Complaint</option>
        <option value="3">Talk About a Project or Idea</option>
        </select>

        <label>Message:</label><br></br>
        <textarea className='form-control textArea'
          value={msg}
          name="msg"
          onChange={handleInputChange}
          placeholder="message"
          required={true}
        />

        <div className='text-center'>
        <Button type="button" className="btn btn-primary" onClick={handleFormSubmit}><div className="buttonText">Submit</div></Button>
        </div>
        </FormGroup>
      </Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </Container>
    </>
  );
}

export default ContactMe;
import React, {useState} from 'react';

import { Container, Form, FormGroup, Button} from 'react-bootstrap';

import {Heading, P, Label} from '../components/BaseSettings'

function validateEmail(email) {
    const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkEmail.test(String(email).toLowerCase());
  }

function ContactMe() {

  const [userInputs, setUserInputs] = useState({
    
    // HTML variables

    //get values from form with localstorage
    h1Color: JSON.parse(localStorage.getItem("h1Color")) || "#000000",
    pColor: JSON.parse(localStorage.getItem("pColor")) || "#000000",
    buttonGradientAngle: JSON.parse(localStorage.getItem("buttonGradientAngle")) || 0,
    buttonGradientColor1: JSON.parse(localStorage.getItem("buttonGradientColor1")) || "#000000",
    buttonGradientColor2: JSON.parse(localStorage.getItem("buttonGradientColor2")) || "#000000",
    buttonTextColor: JSON.parse(localStorage.getItem("buttonTextColor")) || "#ffffff",
    labelColor: JSON.parse(localStorage.getItem("labelColor")) || "#000000",
  })

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
    <div className="text-center">
      <Heading 
      valueToChange={userInputs.h1Color}
      text ="Contact Me"
      >
      </Heading>
    </div>

    <div className="text-center">
      <P  
      valueToChange={userInputs.pColor}
      text= "Have a question? Fill in the enquiry form below and I'll get back to you as soon as possible."
      >
      </P>
    </div>

      <Form className="form">
        <FormGroup>
        
        <Label
        valueToChange={userInputs.labelColor}
        text = "Name:"
        ></Label>
        
        <br></br>
        <input className='form-control'
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required={true}
        />

        <Label
        valueToChange={userInputs.labelColor}
        text = "Email:"
        ></Label>
        
        <br></br>
        <input className='form-control'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required={true}
        />

        <Label
        valueToChange={userInputs.labelColor}
        text = "Subject:"
        ></Label>
        
        <br></br>
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

        <Label
        valueToChange={userInputs.labelColor}
        text = "Message:"
        ></Label>
        
        <br></br>
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
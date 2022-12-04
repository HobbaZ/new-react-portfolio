import emailjs from '@emailjs/browser';

import { Container, Form, FormGroup} from 'react-bootstrap';

import {Heading, P, Label, FormButton} from '../components/BaseSettings';

import React, {useState, useRef} from 'react';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function ContactMe({
  ...props
}) {
    const formRef = useRef();

    const [formInput, setFormInput] = useState({email: '', username: '', msg: '', subject: ''});

    const [validated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

  const changeInput = (event) => {
    // Getting the value and name of the input which triggered the change
    setFormInput({...FormCheckInput,
    [event.target.name]: event.target.value})

  };

  const submitForm = async (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
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
          setErrorMessage("Email succeeded")
        },
        (error) => {
          console.log("Email failed: ", error);
          setErrorMessage("Email failed")
        }
      );
  };

  return (
    <>
    <Container id='contactMe'>
      <Heading 
      valueToChange={props.h1Color}
      text ="Contact Me"
      >
      </Heading>

      <div className='text-center'>
      <P
      valueToChange={props.pColor}
      text= "Have a question? Fill in the enquiry form below and I'll get back to you as soon as possible."
      >
      </P>
      </div>

      <Form className="col-sm-12 col-md-6 m-auto" validated={validated} ref={formRef} onSubmit={submitForm}>
        <FormGroup>
        
        <Label
        valueToChange={props.labelColor}
        text = "Name:"
        ></Label>
        
        <br></br>
        <input className='form-control col-12'
          value={formInput.username}
          name="from_name"
          onChange={changeInput}
          type="text"
          placeholder="Name"
          required={true}
        />

        {/*{formInput.username.length < 8 ? 
        <div className="text-center text-danger">{"Password must be minimum 8 characters"}</div> : ''}*/}

        <Label
        valueToChange={props.labelColor}
        text = "Email:"
        ></Label>
        
        <br></br>
        <input className='form-control'
          value={formInput.email}
          name="user_email"
          onChange={changeInput}
          type="email"
          placeholder="Email"
          required={true}
        />

        {/*{!emailRegex.test(formInput.email) ? 
        <div className="text-center text-danger">{"Invalid email entered"}</div> : ''}*/}

        <Label
        valueToChange={props.labelColor}
        text = "Subject:"
        ></Label>
        
        <br></br>
        <select className='form-control'
        value={formInput.subject}
        required={true}
        name="user_subject"
        onChange={changeInput}
        >
        <option value="Make a General Enquiry">Make a General Enquiry</option>
        <option value="Make a Complaint">Make a Complaint</option>
        <option value="Talk About a Project or Idea">Talk About a Project or Idea</option>
        </select>

        <Label
        valueToChange={props.labelColor}
        text = "Message:"
        ></Label>
        
        <br></br>
        <textarea className='form-control textArea'
          value={formInput.msg}
          name="message"
          onChange={changeInput}
          placeholder="message"
          required={true}
        />
        <br></br>

        <div className='text-center'>
        <FormButton 
        type="submit"
        className='btn btn-primary'
        buttonGradientAngle={props.buttonGradientAngle}
        buttonGradientColor1={props.buttonGradientColor1}
        buttonGradientColor2={props.buttonGradientColor2}
        text= "Send Email"
        colour={props.buttonTextColor}>
      </FormButton>

        </div>
        </FormGroup>

        {errorMessage && (
        <div className='text-center'>
          <p style={{color: `${props.pColor}`}}>{errorMessage}</p>
        </div>
      )}
      </Form>
      
      </Container>
    </>
  );
}

export default ContactMe;
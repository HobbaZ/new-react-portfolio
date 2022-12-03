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
   // const [email, setEmail] = useState('');
    //const [username, setusername] = useState('');
    //const [subject, setSubject] = useState('');
    //const [msg, setMsg] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

  const changeInput = (event) => {
    // Getting the value and name of the input which triggered the change

    //setEmail(event.target.value);
    //setusername(event.target.value);
    //setSubject(event.target.value);
    //setMsg(event.target.value);

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
        },
        (error) => {
          console.log("Email failed: ", error);
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

    <div className="text-center">
      <P  
      valueToChange={props.pColor}
      text= "Have a question? Fill in the enquiry form below and I'll get back to you as soon as possible."
      >
      </P>
    </div>

      <Form className="form" validated={validated} ref={formRef} onSubmit={submitForm}>
        <FormGroup>
        
        <Label
        valueToChange={props.labelColor}
        text = "Name:"
        ></Label>
        
        <br></br>
        <input className='form-control'
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
      </Form>
      {errorMessage && (
        <div>
          <p style={{color: `${props.pColor}`}}>{errorMessage}</p>
        </div>
      )}
      </Container>
    </>
  );
}

export default ContactMe;
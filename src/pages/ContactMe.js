import React, { useState, useRef} from 'react';

import emailjs from '@emailjs/browser';

import { Container, Button, Form} from 'react-bootstrap';

let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function ContactMe({
  ...props
}) {

  const formRef = useRef();

  const [formInput, setFormInput] = useState({ email: '', username: '', message: '', subject: '' });
  const [validated] = useState(false);

  // update state based on form input changes
  function inputChange (event) {
    const { name, value } = event.target;

    setFormInput({
      ...formInput, [name]: value,
    });
  };

  // state for messages
  const [infoMessage, setInfoMessage] = useState('');

  // submit form
  const submitForm = async (event) => {
    event.preventDefault();

    if (!formInput) {
      return false;
    }

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
          setInfoMessage("Email Succeeded");
          setTimeout(() => {
            setInfoMessage('');
          }, 2000);
          
        },
        (error) => {
          console.log("Email failed: ", error);
          setInfoMessage("Email Failed");
          setTimeout(() => {
            setInfoMessage('');
          }, 2000);
        }
      );
  };

  return (
    <Container>

      <h1 style={{color: `${props.h1Color}`}}>
            Contact Me
            </h1>

              <Form validated={validated} onSubmit={submitForm} className='col-sm-12 col-lg-8 m-auto' ref={formRef}>

              <Form.Group>
                  <label style={{color: `${props.labelColor}`}}>Name</label>
                  <Form.Control className='form-control' type="text" name="username" value={formInput.username || ''} placeholder="Your Name" onChange={inputChange} required/>
              </Form.Group>

              {formInput.username !== "" && formInput.username.length < 2 ? 
                  <div style={{color: `${props.labelColor}`}} className='text-center'>Name must be at least 2 characters</div> : ''}

              <br/>

              <Form.Group>
                  <label style={{color: `${props.labelColor}`}}>Email address</label>
                  
                  <input className='form-control' type="email" name ="email" value={formInput.email || ''} placeholder="Enter email" onChange={inputChange} required/>
              </Form.Group>

              {!emailRegex.test(formInput.email) && formInput.email !== "" ? 
                  <div style={{color: `${props.labelColor}`}} className='text-center'>Invalid email entered</div> : ''}

              <br/>

              <Form.Group>
                  <label style={{color: `${props.labelColor}`}}>Subject</label>
                  <select className='form-control' value={formInput.subject || ''} required name="user_subject" onChange={inputChange}
                  >
                  <option value="Make a General Enquiry">Make a General Enquiry</option>
                  <option value="Make a Complaint">Make a Complaint</option>
                  <option value="Talk About a Project or Idea">Talk About a Project or Idea</option>
                  </select>
              </Form.Group>

              <br/>

              <Form.Group>
                  <label style={{color: `${props.labelColor}`}}>Message</label>
                  <textarea className='form-control' type="text" rows="7" name ="message" value={formInput.message || ''} placeholder="Type your message (required)" onChange={inputChange} required/>
              </Form.Group>

              {formInput.message !== "" && formInput.message.length < 2 ? 
                  <div style={{color: `${props.labelColor}`}} className='text-center'>message must be at least 2 characters</div> : ''};
                  
              <br/>
        
              <div className='text-center'>
                  <Button type="submit" 
                  style = {{background: `linear-gradient(${props.buttonGradientAngle}deg, ${props.buttonGradientColor1}, ${props.buttonGradientColor2}`}}
                  className='form-btn-primary'
                  disabled={!(formInput.email && formInput.username && formInput.message)}>
                    <div style = {{color: `${props.buttonTextColor}`}}>Send Email</div>
                  </Button>
              </div>

              {infoMessage && (
            <div className='text-center infoMessage'><p style={{color: `${props.pColor}`}}>{infoMessage}</p></div>
          )}

              </Form>
    </Container>
  );
};

export default ContactMe;

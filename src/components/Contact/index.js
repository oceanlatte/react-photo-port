import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [errorMessage, setErrorMessge] = useState('');
  const [formState, setFormState] = useState(
    {name: '', email: '', message: ''}
    );
    
  const { name, email, message } = formState;

  const handleChange = e => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessge('Your email is invalid.');
      } else {
        setErrorMessge('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessge(`${e.target.name} is required.`);
      }
      else {
        setErrorMessge('');
      }
    }

    if(!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1 data-testid='h1tag'>Contact Me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' >Name:</label>
          <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button data-testid='button' type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
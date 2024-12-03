// src/components/FormRef.js
import React, { useRef } from 'react';
import Card from './Card';

const FormRef = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Full Name: ${fullNameRef.current.value}, Email: ${emailRef.current.value}`);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input id="full_name" type="text" ref={fullNameRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input id="password_confirmation" type="password" ref={passwordConfirmRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;

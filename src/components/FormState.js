// src/components/FormState.js
import React, { useState } from 'react';
import Card from './Card';

const FormState = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Full Name: ${formData.fullName}, Email: ${formData.email}`);
  };

  return (
    <Card>
      <form id="form-state-link" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input id="full_name" type="text" value={formData.fullName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input id="password_confirmation" type="password" value={formData.passwordConfirmation} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;

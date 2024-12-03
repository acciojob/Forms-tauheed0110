// src/components/Card.js
import React from 'react';
import '../styles/App.css'; // Add your custom CSS if necessary

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;

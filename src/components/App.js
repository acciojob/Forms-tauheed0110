import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/form-link">Form Layout</Link></li>
          <li><Link to="/form-ref">Form with useRef</Link></li>
          <li><Link to="/form-state">Form with useState</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/form-link" element={<Form/>} />
        <Route path="/form-ref" element={<FormRef/>} />
        <Route path="/form-state" element={<FormState/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

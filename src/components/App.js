import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/form">Form Layout</Link></li>
          <li><Link to="/form-ref">Form with useRef</Link></li>
          <li><Link to="/form-state">Form with useState</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/form" component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
      </Switch>
    </Router>
  );
}

export default App;

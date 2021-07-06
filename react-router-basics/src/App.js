import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { useHistory } from 'react-router-dom';

export default function App() {
  const history = useHistory();
  return (
    <div className="App">
      <button>
        <Link to="/about"> About Us </Link>
      </button>
      <button onClick={() => history.push('/contact')}> Contact Us </button>
      <button onClick={() => history.push('/')}> Home Page </button>
      <Switch>
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

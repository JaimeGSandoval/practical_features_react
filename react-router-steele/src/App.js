/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

// *** General rule to always apply always include the "exact" keyword when assigning routes

function App() {
  return (
    <>
      <nav className="app-nav">
        {/* <Link to="/" style={anchorStyles}>
          Home
        </Link>
        <Link to="/about" style={anchorStyles}>
          About
        </Link>
        <Link to="/contact" style={anchorStyles}>
          Contact
        </Link> */}

        {/* proper way to create nav links */}
        <NavLink to="/" exact activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/about" exact activeClassName="active-link">
          About
        </NavLink>
        <NavLink to="/contact" exact activeClassName="active-link">
          Contact phone
        </NavLink>
        <NavLink to="/contact/email" exact activeClassName="active-link">
          Contact email
        </NavLink>
        <NavLink to="/contact/twitter" exact activeClassName="active-link">
          Contact twitter
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/contact"
          // component={Contact}
          render={() => <Contact type="555-5555" />}
        />
        <Route
          exact
          path="/contact/email"
          // component={Contact}
          render={() => <Contact type="yomama@mail" />}
        />
        <Route
          exact
          path="/contact/twitter"
          // component={Contact}
          render={() => <Contact type="@bankaiYielder" />}
        />
      </Switch>
    </>
  );
}

export default App;

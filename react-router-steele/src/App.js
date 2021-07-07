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
        <NavLink
          to="/"
          exact
          activeClassName="active-link"
          style={{ padding: '0 15px' }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          activeClassName="active-link"
          style={{ padding: '0 15px' }}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          exact
          activeClassName="active-link"
          style={{ padding: '0 15px' }}
        >
          Contact phone
        </NavLink>
        <NavLink
          to="/contact/email"
          exact
          activeClassName="active-link"
          style={{ padding: '0 15px' }}
        >
          Contact email
        </NavLink>
        <NavLink
          to="/contact/twitter"
          exact
          activeClassName="active-link"
          style={{ padding: '0 15px' }}
        >
          Contact twitter
        </NavLink>
      </nav>

      {/* passing an arrow function  to return a component is  another way to render the correct component to a matching path, but the arrow function causes more re-renders than is necessary. That's why it's better to use the render property instead. */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/about"
          component={(props) => <About {...props} />}
        />
        <Route
          exact
          path="/contact"
          // component={Contact}
          render={(props) => <Contact type="555-5555" {...props} />}
        />
        <Route
          exact
          path="/contact/email"
          // component={Contact}
          render={(props) => <Contact type="yomama@mail" {...props} />}
        />
        <Route
          exact
          path="/contact/twitter"
          // component={Contact}
          render={(props) => <Contact type="@bankaiYielder" {...props} />}
        />
      </Switch>
    </>
  );
}

export default App;

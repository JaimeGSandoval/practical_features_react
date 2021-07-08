import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    // this.handleBack = this.handleBack.bind(this);
  }
  handleLogin() {
    alert('LOGGED YOU IN!');
    this.props.history.push('/food/salmon');
  }

  // you can create a method to fire onClick like here or you can simply use props.history.goBack inline
  // handleBack() {
  //   this.props.history.goBack();
  // }

  render() {
    return (
      <div className="Navbar">
        <button onClick={this.handleLogin}>Log In</button>
        {/* <button onClick={this.handleBack}>go back</button> */}
        <button onClick={this.props.history.goBack}>go back</button>
      </div>
    );
  }
}
export default withRouter(Navbar);

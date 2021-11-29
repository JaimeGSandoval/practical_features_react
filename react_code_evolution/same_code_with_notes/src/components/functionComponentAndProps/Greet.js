import React from 'react';

// const Greet = (props) => <h1>Hello {props.name}</h1>;
const Greet = ({ name, user, children }) => {
  return (
    <>
      <h1>
        Jutsu: {name} User: {user}
      </h1>
      {children}
    </>
  );
}; // destructing name from props object

export default Greet;

// props.children can be used if you don't know what'll be passed as props or if you have dynamic html content, you can pass it in between the component tags and in the component definition you can render the content using props.children or just children if you're destructuring the value from the props object. If nothing gets passed props.children will render nothing

import React from 'react';

const Contact = ({ type }) => {
  console.log(type);
  return (
    <div>
      <h1>Contact: {type}</h1>
    </div>
  );
};

export default Contact;

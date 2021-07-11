import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
// import { IconContext } from 'react-icons';

const InputTodo = (props) => {
  // const [inputText, setInputText] = useState({
  //   title: '',
  // });
  const [inputText, setInputText] = useState('');

  const onChange = (e) => {
    // setInputText({
    //   ...inputText,
    //   [e.target.name]: e.target.value,
    // });
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (inputText.title.trim()) {
    if (inputText.trim()) {
      // props.addTodoProps(inputText.title);
      props.addTodoProps(inputText);
      // setInputText({
      //   title: '',
      // });
      setInputText('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        // value={inputText.title}
        value={inputText}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        {/* React icons also allows us to pass unique props (including color, size
        and className) to style individual icons.
        <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
        Also, like the JSX element, you can pass the style prop to customize
        your icons. We will go with this approach. */}
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
      {/* <IconContext.Provider
        value={{
          color: 'darkcyan',
          style: { fontSize: '20px', color: '#ff0000' },
          className: 'submit-iconn',
        }}
      >
        <button className="input-submit">
          <FaPlusCircle />
          <FaPlusCircle />
          <FaPlusCircle />
        </button>
      </IconContext.Provider> */}
    </form>
  );
};

export default InputTodo;

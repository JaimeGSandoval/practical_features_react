import React from 'react';

// Refs are a way that you can reference elements that are on your page because one of the golden rules in react is that you do not touch the DOM. You wouldn't put an id on the element that you're trying to reference. But you can still work with the elements by giving them refs in the constructor. You can then attach that ref as a property on the element and use it as a way to reference that element.

// You don't want to put refs on everything. Ex: If you have an input element that has a value you'd like to get you could just put a value prop on the element and an onChange event handler on it that accesses the value by using event.target to reference that input and use event.target.value to get the input value. But if you're ever working with one component or one element withing your component and you're trying to reference something else that's on the page, that's where you use a ref.

// So one element doing something that needs to reference another element. You touch the DOM, so you don't put an id or a class on the element to be accessed and try to use document.getGetElementById or querySelector, you can use a ref. When we're in a situation where you need to reference some other element inside of our component.

class RefExample extends React.Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
  }

  increment = () => {
    let num = this.myInput.current.value;
    num++;
    this.myInput.current.value = num;
  };

  render() {
    return (
      <>
        <input type="text" defaultValue={0} ref={this.myInput} />
        <button onClick={this.increment}>Click me Baby</button>
      </>
    );
  }
}

export default RefExample;

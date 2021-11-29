import React, { Component } from 'react';

// This RenderPropsCounter component is going to be our container component where we implement the common functionality, which is the state and the increment Count method. The jsx will be left empty because the render prop is going to control what will be rendered by thisRenderPropsCounter component.

// For our example we'll render RenderProps and HoverCounter and pass down the count state and incrementCount method.

// In App component we come across the RenderPropsCounter component. In the RenderPropsCounter component we have the count state and the incrementCount method. The RenderPropsCounter component does not render anything on its own. It is simply going to render whatever is passed as the render prop and while doing so it passes on the count state and the incrementCount method. What's the render prop? It's the RenderProps component. The count state and incrementCount method from the RenderPropsCounter component are passed as props to the RenderProps component. The RenderProps component makes use of the passed in props to render the actual UI. When you click on the button and call the increment count method or try to display the count value it's pretty much what the RenderPropsCounter component has provided. It's also what happens with the HoverCounter component. Even though they share common code, the RenderProps instance will be different, hence there is no conflict between the count state values.What's also important here is the prop need not be called as render. You can call it anything, but render is the convention.

class RenderPropsCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default RenderPropsCounter;

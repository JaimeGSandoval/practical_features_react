import React from 'react';

// // 1. Create context
// You can create a default value for the context. The default value is set while creating the context. Here it's 'BANKA FOR LIFE'. It get passed as an argument to the createContext method. The default value may only be used when the component does not have a matching provider above it in the component tree.
const UserContext = React.createContext('BANKAI FOR LIFE');
// Every context object created using the React.createContext() method comes with a provider and a consumer react component. We need those components for steps 2 and 3 which means we have to export them.

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

// For step 2 we need to provide this UserContext using the UserProvider component. The place you provide is important because only the descendant components can consume it. App component is usually a good place because pretty much all components fall under it. So in App component, you wrap ComponentC with the UserProvider.

// The provider component is responsible for providing a value for all the descendant components. The way you provide it is by using the value attribute on the provider component. This allows any component nested inside the provider component(ComponentC) and any component nested within that component(Inside ComponentC, which is ComponentF) to consume the value from the provider component.

// The final step is to then consume the value in the desired component. In our example, we need to consume the username value in ComponentF. To consume a context value we need to use the consumer component.

export { UserProvider, UserConsumer };
export default UserContext;
// Step 1: Create the user context using the React.createContext() method from React. Make sure to export the provider and consumer components.
// Step 2: At the top level, include the provider component and provide a value using the value attribute. This value can now be consumed in any of the descendant components.
// Step 3: In the component where the value/username is required use the consumer component and pass in a function as its child. The function receives the context value as its parameter which can then be used to return the desired JSX. You can choose to just display it or use it with some render logic.

// Context type property: Another way to consume the context value is by using the context type property on the class.
// Step 1: Export the UserContext itself.
// Step 2: assign the UserContext to the context type property on the class (ComponentE).
// In the render method the UserContext value is available as this.context.

// 2 limitations with context type:
// - it only woks with class components
// - you can only subscribe to a single context using context type

// A lot of the times you need to read more than one context, in which you would use the consumer component is the way to go.

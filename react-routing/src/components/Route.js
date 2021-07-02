// We only need to import React into a module if we are using JSX. Since we're not using JSX, we don't import it.

// route will need 2 different props. First would be a path: when we want to show some component. Second would be the component we want to conditionally display.

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;

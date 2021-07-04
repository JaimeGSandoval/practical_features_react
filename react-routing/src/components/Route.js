import { useState, useEffect } from 'react';

// gotta set up a route handler to listen for that navigation event. Anytime we set up an event listener inside of a component it's usually a sign that we need to define a useState hook.

// Every time onLocationChange gets called we have to tell the Route component to update itself and re-render itself. When it re-renders itself we're going to fetch whatever the current window.location.pathname is and use that to decide whether or not this route component should now display its child or hide it.

// We're going to create a piece of state that follows window.location.pathname and its value. The window.location.pathname is always kept up to date. It'll always reflect whatever the current pathname is inside the address bar. The state will have the sole purpose of trying to get the route component to re-render.

const Route = ({ path, children }) => {
  // the only reason this piece of state exists is just to get our route to update.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = (event) => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  return currentPath === path ? children : null;
};

export default Route;

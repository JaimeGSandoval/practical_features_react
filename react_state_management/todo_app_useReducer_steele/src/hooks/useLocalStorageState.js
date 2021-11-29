import { useState, useEffect } from 'react';
// Why use a try catch here?
// Whenever we're getting data from some source, whether it's an API or localstorage, there is an element of the unknown.  It's possible that localstorage contains a value that would break our code. For example, if for some reason the value "I like todos" was stored in localstorage under the key of "todos", JSON.parse would throw an error.
// You'll get a parsing error that breaks everything since our string isn't a serialized object or array (what JSON.parse wants).  I put the try/catch in there to catch any potential errors and prevent them from breaking our app.  If the parse fails, we catch it and instead use the provided defaultVal.  We need to attempt the parse, but without the try/catch our app would stop executing in the event of an error.  With the try/catch, we can attempt the parse and still have a backup plan if it errors out.
function useLocalStorageState(key, defaultVal) {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
export { useLocalStorageState };

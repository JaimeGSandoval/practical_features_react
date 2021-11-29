import React from 'react';

// function FRInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   );
// }
// The React.forwardRef() method takes a component as a parameter

// Every functional component accepts props as a parameter, but when a component is a passed as a parameter to the forwardRef method it receives the ref attribute as the second parameter. We can use the ref parameter and pass it as a value to the ref attribute on the native input element. This ref parameter will point to the value of the ref attribute from the parent component. In other words, the ref is being forwarded from the parent component to the native input element.
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;

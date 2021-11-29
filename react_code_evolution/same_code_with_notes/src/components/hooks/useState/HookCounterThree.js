import React, { useState } from 'react';

// A the argument sent to the useState hook can be a string, number, boolean, object, or array. You can use any of those types based on your requirement.

function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  // As the code is right now, the default value for first name & last name is set to an empty string. When you stat typing in the input field for first name, the last name property of the object disappears from the state. Same thing happens when typing in the last name property, the first name disappears from the state. The reason this happens is because new state does not automatically merge and update the object. This is a key difference from setState in class components. setState will merge the state, whereas the useState hook will not merge the state. You have to do it manually. To merge the old state with the new state when you using objects you have to use the spread operator. The spread operator will copy every property of the object (name in our case) and then it'll override the property you're updating w/ a different value. So you first spread, then update the property.

  // The takeaway: the setter function provided by the useState hook does not automatically merge and update objects. You have to manually merge it yourself by using the spread operator to copy all of the contents of the object and then update and override the property you want to change.
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="first name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="last name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <h2>The first name is {name.firstName}</h2>
      <h2>The last name is {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounterThree;

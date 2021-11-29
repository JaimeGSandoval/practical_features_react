import React, { useState } from 'react';

// The setter function from useState doesn't merge and update automatically. In the case of an array, the setter function doesn't automatically add an item to the end of the list. You need to handle that manually using the spread operator.

// So in this case, we'd first spread the items array and then we push a new object.

function HookCounterFour() {
  const [items, setItems] = useState([]);

  // Whenever addItem is called we make a copy of all the items in the array by using the spread operator. To that list of copied items we append another object. That way we are not overriding the original array.
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} onClick={() => removeItem(item.id)}>
              {item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HookCounterFour;

import React from 'react';

function Columns() {
  // fragments can accept a key attribute when rendering out lists but it can't be used with shorthand syntax for fragments
  const items = [];
  return (
    <>
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <td>Name</td>
            <td>Jaime</td>
          </React.Fragment>
        );
      })}
      {/* <td>Name</td>
      <td>Jaime</td> */}
    </>
  );
}

export default Columns;

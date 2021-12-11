import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/data';

const App = () => {
  return (
    <>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map((data) => (
          <Accordion title={data.title} content={data.content} />
        ))}
      </div>
    </>
  );
};

export default App;

import React, { useState } from 'react';
import Message from './Message';
import { Link } from 'react-router-dom';
import chipsImg from './Chips.png';
import './Chips.css';

const Chips = () => {
  const [bags, setBags] = useState([]);

  const handleClick = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBags(() => [...bags, { x, y }]);
  };

  // const bagsRendered = bags.map((bag, i) => (
  //   <img
  //     key={i}
  //     src={chipsImg}
  //     className="bag"
  //     style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
  //     alt="bag of lay's chips"
  //   />
  // ));

  const bagsRendered = bags.map((bag, i) => {
    console.log(bag);
    return (
      <img
        key={i}
        src={chipsImg}
        className="bag"
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
        alt="bag of lay's chips"
      />
    );
  });

  return (
    <div className="Chips">
      <Message>
        <h1>bags eaten: {bags.length}</h1>
        <button onClick={handleClick}>nom nom nom</button>
        <h1>
          <Link to="/">Go Back</Link>
        </h1>
      </Message>
      {bagsRendered}
    </div>
  );
};

export default Chips;

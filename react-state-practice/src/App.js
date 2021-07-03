import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
// import Route from './components/Route';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components',
//   },
// ];

// const options = [
//   {
//     label: 'The Color Red',
//     value: 'red',
//   },
//   {
//     label: 'The Color Green',
//     value: 'green',
//   },
//   {
//     label: 'A Shade of Blue',
//     value: 'blue',
//   },
// ];

// For dropdown
// const App = () => {
//   const [selected, setSelected] = useState(options[0]);
//   const [showDropdown, setShowDropdown] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowDropdown(!showDropdown)}>
//         Toggle Dropdown
//       </button>
//       {showDropdown ? (
//         <Dropdown
//           selected={selected}
//           onSelectedChange={setSelected}
//           options={options}
//         />
//       ) : null}
//     </div>
//   );
// };

// For translate
const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown options={options} selected={selected} />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };

// const App = () => {
//   return (
//     <div>
//       {showAccordion()}
//       {showList()}
//       {showDropdown()}
//       {showTranslate()}
//     </div>
//   );
// };
export default App;

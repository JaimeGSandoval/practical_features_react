import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

// using this component instead of all of the other separate functions below for each route is a better solution but it's not very react like. A separate component handling it would be better.
// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// };

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
//     return <Dropdown />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path={'/'}>
        <Accordion items={items} />
      </Route>

      <Route path={'/list'}>
        <Search />
      </Route>

      <Route path={'/dropdown'}>
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>

      <Route path={'/translate'}>
        <Translate />
      </Route>
      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}
    </div>
  );
};
export default App;

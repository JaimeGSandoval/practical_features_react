import React from 'react';
import Person from './Person';

function NameList() {
  // const names = ['Kakashi', 'Naruto', 'Minato'];
  // return (
  //   <>
  //     {names.map((name) => (
  //       <h1>{name}</h1>
  //     ))}
  //   </>
  // );

  // more concise way.
  // const nameList = names.map((name) => <h1>{name}</h1>);
  // return nameList;

  const persons = [
    {
      id: 1,
      name: 'Kakashi',
      age: 26,
      skillLevel: 'Jounin',
    },
    {
      id: 2,
      name: 'Naruto',
      age: 15,
      skillLevel: 'Genin',
    },
    {
      id: 3,
      name: 'Minato',
      age: 35,
      skillLevel: 'Hokage',
    },
  ];

  // Typically you're going to have a list of objects w/ a few properties that have to be rendered. In such cases it always a good idea to refactor the jsx into a separate component, then use the component(Person) in the map jsx. This is the usual pattern to use when building out a list of data
  // For the key using the objects ID is good. The key is anything that's unique and only appears on that element.
  // A key is a special string attribute you need to include when creating lists of elements
  // Keys give the elements a stable identity
  // Keys help react identify which items have changed, are added or are removed
  // Keys help in efficient update of the user interface

  // When is it okay to use the index as the key?
  // 1. The items in your list do not have a unique id
  // 2. The list is a static list and will not change
  // 3. The list will never be reordered or filtered
  // Only if ALL these conditions are met is it okay to use the index as the key
  // If these conditions aren't met and you don't have a unique key you can use an npm package that'll generate a unique ID for a list or try extracting a unique value from one of the existing properties
  const personsList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <div>{personsList}</div>;
}

export default NameList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  // const [posts, setPosts] = useState([]);// used w/ fetching an array of posts
  const [post, setPost] = useState({}); // used w/ fetching individual post. Place an object because the post brings back a single object post.
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const [id, setId] = useState(1);

  // fetch an array of posts
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => {
  //       console.log('BANKAI');
  //       setPosts(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []); // pass an empty array/dependency list to useEffect so that the useEffect only makes a single api call for the initial page load and not every time there's a re-render

  // // fetch an individual post based on id value typed into the input field
  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((response) => {
  //       console.log('BANKAI');
  //       setPost(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, [id]); // pass the value of id as a dependency value to be watched and re-render when it changes

  // fetch an individual post based on idFromButtonClick value and from button click
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log('BANKAI');
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [idFromButtonClick]); // pass the value of idFromButtonClick as a dependency value to be watched and re-render when it changes

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      {/* This will be a controlled component, meaning we need to set the value and listen to the onChange event to assign the value back to the input element, so basically we need a state variable */}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Posts
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default DataFetching;

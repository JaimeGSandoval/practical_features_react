import React, { useState, useEffect } from 'react';
import PostLists from '../components/PostLists';
import postStore from '../stores/postStore';
import { getPosts } from '../actions/postActions';

function PostPage() {
  const [posts, setPosts] = useState(postStore.getPosts());

  function onChange() {
    setPosts(postStore.getPosts());
  }

  useEffect(() => {
    postStore.addChangeListener(onChange);
    if (postStore.getPosts().length === 0) getPosts(); // might be unnecessary
    // getPosts();
    return () => postStore.removeChangeListener(onChange);
  }, []);

  return (
    <div>
      <PostLists posts={posts} />
    </div>
  );
}

export default PostPage;

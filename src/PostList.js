import React, { useState, useEffect } from 'react';
import Post from './Post';
import './App.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(postsData => setPosts(postsData))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
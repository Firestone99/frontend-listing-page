import React, { useState, useEffect } from 'react';
import './App.css';

const Post = ({ post }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(response => response.json())
            .then(userData => setUser(userData))
            .catch(error => console.error('Error fetching user:', error));
    }, [post.userId]);

    return (
        <div className="post">
            {user && (
                <>
                    <div className="post-header">
                        <div className="user-info">
                            <h3>{user.name}</h3>
                            <p>@{user.username}</p>
                        </div>
                    </div>
                    <div className="post-content">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Post;
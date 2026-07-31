import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";



function Feed({ posts }) {
useEffect(() => {
  axios.get('http://localhost:3000/posts')
    .then(response => {
      // Assuming the response data is an array of posts
      setPosts(response.data.post);
    })
}, []);

  return (
    <div className="page">
      <h1>Feed</h1>

      {posts.length === 0 ? (
        <p className="empty-state">
          No posts yet. <Link to="/create-post">Create one</Link>.
        </p>
      ) : (
        <div className="feed-list">
          {posts.map((post) => (
            <div key={post.__id} className="post-card">
              <img src={post.image} alt={post.caption} className="post-image" />
              <p className="post-caption">{post.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;

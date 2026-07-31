import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./pages/CreatePost.jsx";
import Feed from "./pages/Feed.jsx";

function App() {
  // Plain in-memory state, no storage of any kind.
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/feed" className="nav-link">
          Feed
        </Link>
        <Link to="/create-post" className="nav-link">
          Create Post
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Feed posts={posts} />} />
        <Route path="/feed" element={<Feed posts={posts} />} />
        <Route
          path="/create-post"
          element={<CreatePost addPost={addPost} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

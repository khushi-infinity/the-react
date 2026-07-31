import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost({ addPost }) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image || !caption.trim()) {
      alert("Please add an image and a caption.");
      return;
    }

    addPost({
      __id: Date.now(),
      image: URL.createObjectURL(image),
      caption: caption.trim(),
    });

    setImage(null);
    setCaption("");
    navigate("/feed");
  };

  return (
    <div className="page">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          rows={3}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;

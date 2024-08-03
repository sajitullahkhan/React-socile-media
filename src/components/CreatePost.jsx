import { useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { PostLists } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostLists);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData);

    try {
      const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const post = await response.json();
      addPost(post);
      navigate("/");
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <Form method="POST" className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your user ID"
          name="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter your post title"
          name="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Contents
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="3"
          placeholder="Enter your post contents"
          name="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Post Contents
        </label>
        <input
          type="number"
          className="form-control"
          id="reaction"
          rows="3"
          placeholder="Enter your post contents"
          name="reactions"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Post
      </button>
    </Form>
  );
};

export default CreatePost;

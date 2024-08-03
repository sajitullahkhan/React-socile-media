import { useContext, useState } from "react";
import Heart from "../assets/Heart.svg";
import activeHeart from "../assets/activeHeart.svg";
import { PostLists } from "../store/post-list-store";

const Post = ({ post }) => {
  let [togle, setTogle] = useState(0);
  let [you, setYou] = useState(``);
  const HeartTogle = () => {
    if (togle === 0) {
      setYou(` and you`);
      setTogle(1);
    } else if (togle === 1) {
      setYou("");
      setTogle(0);
    }
  };
  const { deletePost } = useContext(PostLists);
  return (
    <div className="card">
      <button className="deletePost" onClick={() => deletePost(post.id)}>
        X
      </button>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="reaction-section">
          <div className="display" onClick={HeartTogle}>
            <img
              src={Heart}
              className={`heart-reaction ${togle === 1 && "none"}`}
              alt="Heart button"
            />
            <img
              src={activeHeart}
              className={`heart-reaction ${togle === 0 && "none"}`}
              alt="Heart button"
            />
            <p className="reactions">{`${
              typeof post.reactions === "object"
                ? post.reactions.likes
                : post.reactions
            } ${you}`}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import Post from "./Post";
import { PostLists as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";
import { useContext } from "react";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      <div className="post-contaner">
        {!fetching &&
          postList.map((post) => <Post key={post.id} post={post}></Post>)}
      </div>
    </>
  );
};

export default PostList;

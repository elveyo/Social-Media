import React from "react";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import { PostsPage } from "../styledComponents/GlobalStyle";
import { Post } from "../styledComponents/Post.styled";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
function Posts() {
  const history = useHistory();
  const { authState, setAuthState } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((response) => {
        console.log("authorized");
        axios.get("http://localhost:3001/posts").then((response) => {
          console.log(response);
          setLikedPosts(response.data.likedPosts);
          setPosts(response.data.posts);
        });
      })
      .catch((e) => history.push("/login"));
  }, [authState]);
  const likePost = async (postId) => {
    const res = await axios.post(`http://localhost:3001/likes/${postId}`);
    const newPosts = posts.map((post) => {
      if (post._id === postId) {
        if (!res.data.liked) {
          post.likes = [...post.likes, 0];
          setLikedPosts([...likedPosts, postId]);
          return post;
        } else {
          post.likes.pop();
          setLikedPosts(likedPosts.filter((id) => id !== postId));
          return post;
        }
      } else {
        return post;
      }
    });
    setPosts(newPosts);
  };

  return (
    <PostsPage>
      {posts.map((post) => (
        <Post key={post._id}>
          <nav>{post.title}</nav>
          <main onClick={() => history.push(`/posts/${post._id}`)}>
            {post.postText}
          </main>
          <footer>
            <p>{post.username}</p>
            <div>
              {
                <AiFillLike
                  onClick={() => {
                    likePost(post._id);
                  }}
                  size="30px"
                  color={likedPosts.includes(post._id) ? "blue" : "white"}
                />
              }
              <p>{post.likes.length}</p>
            </div>
          </footer>
        </Post>
      ))}
    </PostsPage>
  );
}

export default Posts;

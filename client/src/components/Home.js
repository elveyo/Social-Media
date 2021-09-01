import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostsPage } from "../styledComponents/GlobalStyle";
import { Post } from "../styledComponents/Post.styled";
import { useHistory } from "react-router-dom";
function Posts() {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  console.log("Home component");
  useEffect(() => {
    console.log("in effect");
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log("request made");
      console.log(response);
      setPosts(response.data);
    });
  }, []);

  return (
    <PostsPage>
      {posts.map((post) => (
        <Post onClick={() => history.push(`/posts/${post._id}`)} key={post._id}>
          <nav>{post.title}</nav>
          <main>{post.postText}</main>
          <footer>{post.username}</footer>
        </Post>
      ))}
    </PostsPage>
  );
}

export default Posts;

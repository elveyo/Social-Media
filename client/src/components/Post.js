import React, { useEffect, useState } from "react";
import axios from "axios";
import { PostPage } from "../styledComponents/GlobalStyle";
import {
  PostReview,
  PostReview as CommentReview,
} from "../styledComponents/Post.styled";

function Post({ match }) {
  const [post, setPost] = useState({ comments: [] });
  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${match.params.id}`)
      .then((response) => setPost(response.data));
  }, []);

  return (
    <>
      <PostPage>
        <PostReview>
          <nav>{post.title}</nav>
          <main>{post.postText}</main>
          <footer>{post.username}</footer>
        </PostReview>
        <CommentReview>
          {post.comments.map((comment) => (
            <h3>{comment.commentBody}</h3>
          ))}
        </CommentReview>
      </PostPage>
    </>
  );
}

export default Post;

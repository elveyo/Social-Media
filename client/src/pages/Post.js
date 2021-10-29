import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { PostPage } from "../styledComponents/GlobalStyle";
import { PostReview } from "../styledComponents/Post.styled";
import { BsTrash } from "react-icons/bs";
import {
  CommentReview,
  CommentSection,
  CommentForm as Form,
  Comment,
} from "../styledComponents/CommentSection.styled";
import { AuthContext } from "../helpers/AuthContext";

function Post({ match }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const { authState, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${match.params.id}`)
      .then((response) => {
        setPost(response.data);
        setComments(response.data.comments);
      });
  }, []);

  //create comment
  const submitComment = () => {
    axios
      .post(`http://localhost:3001/comments/${match.params.id}`, {
        commentBody: comment,
      })
      .then((response) => {
        setComments([
          ...comments,
          {
            commentBody: comment,
            commentAuthor: authState,
            _id: response.data._id,
          },
        ]);
        setComment("");
      });
  };

  //delete comment
  const deleteComment = async (id) => {
    const response = await axios.delete(`http://localhost:3001/comments/${id}`);
    console.log(response);
    setComments(comments.filter((comment) => comment._id != id));
  };
  //delete post
  const deletePost = async (id) => {
    const response = await axios.delete(`http://localhost:3001/posts/${id}`);
    console.log(response);
  };

  return (
    <>
      <PostPage>
        <PostReview>
          <nav>{post.title}</nav>
          <main>{post.postText}</main>
          <footer>
            <p>{post.username}</p>
            <div>
              <BsTrash onClick={() => deletePost(post._id)} size="28px" />
            </div>
          </footer>
        </PostReview>
        <CommentReview>
          <CommentSection>
            {comments.map((comment) => {
              return (
                <div>
                  <Comment key={Math.random() * 100}>
                    <span>{comment.commentAuthor.username}</span>
                    <p>{comment.commentBody}</p>
                    {comment.commentAuthor._id === authState._id && (
                      <div>
                        <BsTrash
                          onClick={() => deleteComment(comment._id)}
                          size="22px"
                        />
                      </div>
                    )}
                  </Comment>
                </div>
              );
            })}
          </CommentSection>
          <Form>
            <input
              type="text"
              placeholder="Comment..."
              name="commentBody"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={submitComment}>Post</button>
          </Form>
        </CommentReview>
      </PostPage>
    </>
  );
}

export default Post;

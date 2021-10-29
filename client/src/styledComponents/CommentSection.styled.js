import styled from "styled-components";

export const CommentReview = styled.div`
  height: 75%;
  width: 35%;
  margin-top: 50px;

  position: relative;
`;
export const CommentSection = styled.div`
  width: 100%;
  height: 85%;
  position: absolute;
  top: 0;
  overflow: hidden;
  overflow-y: scroll;
  padding: 10px;
`;
export const CommentForm = styled.div`
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 0;
  input {
    padding: 10px 10px;
    width: 100%;
    height: 60%;
    border: none;
    font-size: 17px;
    outline: none;
    letter-spacing: 1px;
    border: 1px solid dodgerblue;
  }
  button {
    display: block;
    width: 100%;
    height: 40%;
    background: dodgerblue;
    letter-spacing: 2px;
    padding: 10px 20px;
    font-size: 14px;
    border: none;
    color: white;
    cursor: pointer;
  }
`;
export const Comment = styled.div`
  width: auto;
  height: auto;
  position: relative;
  padding: 15px 20px;
  margin: 10px 0;
  color: black;
  background-color: lightgrey;
  border-radius: 10px;
  word-break: break-all;
  span {
    color: blue;
    letter-spacing: 1px;
  }
  p {
    letter-spacing: 1px;
  }
  div {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

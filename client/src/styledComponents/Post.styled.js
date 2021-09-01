import styled, { css } from "styled-components";
const sharedStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Post = styled.div`
  width: 40%;
  min-height: 300px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  text-align: center;
  border-radius: 0 0 12px 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  nav {
    flex: 20%;
    background-color: dodgerblue;
    font-size: 20px;
    ${sharedStyle}
  }
  main {
    flex: 60%;
    background-color: #fff;
    ${sharedStyle}
  }
  footer {
    flex: 20%;
    ${sharedStyle}
    justify-content: flex-start;
    padding: 0 10px;
    background-color: dodgerblue;
    border-radius: 0 0 10px 10px;
  }
`;
export const PostReview = styled(Post)`
  height: 75%;
  width: 45%;
`;

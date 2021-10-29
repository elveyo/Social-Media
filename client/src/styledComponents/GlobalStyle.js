import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*:after,
*::before {
   margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
}


`;
const pageSharedStyles = css`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const PostsPage = styled.div`
  ${pageSharedStyles}
`;
export const PostPage = styled.div`
  ${pageSharedStyles}
  flex-direction: row;
  justify-content: space-around;
  align-items: unset;
`;
export const FormPage = styled.div`
  ${pageSharedStyles}
  justify-content: center;
`;
export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    margin: 0 50px;
  }
  a,
  button {
    text-decoration: none;
    color: white;
    font-size: 18px;
    margin: 0 20px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.1s ease;
    padding: 5px 0;
  }
  a:hover,
  button:hover {
    letter-spacing: 1px;
  }
`;

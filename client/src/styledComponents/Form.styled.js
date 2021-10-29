import styled from "styled-components";
import { Form } from "formik";

export const PostForm = styled(Form)`
  width: 50%;
  min-height: 300px;
  margin-top: -50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid dodgerblue;
  span {
    color: red;
    width: 80%;
    letter-spacing: 1px;
    font-size: 12px;
  }
  label {
    width: 80%;
    margin: 5px;
    letter-spacing: 1px;
  }
  input {
    margin: 10px;
    padding: 8px 15px;
    width: 80%;
    outline: none;
    border: 1px solid dodgerblue;
    border-radius: 5px;
  }
  button {
    display: block;
    width: 40%;
    margin: 20px;
    background: white;
    border: 1px solid dodgerblue;
    border-radius: 10px;
    letter-spacing: 1px;
    padding: 10px 20px;
    font-size: 14px;
  }
  button:hover {
    background: dodgerblue;
    color: white;
    cursor: pointer;
  }
`;

import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { StyledForm as Form } from "../styledComponents/Form.styled";
import axios from "axios";
import { FormPage } from "../styledComponents/GlobalStyle";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required!"),
  postText: Yup.string().required("You have to input some text!"),
  username: Yup.string()
    .min(5)
    .max(15)
    .required("We need author of this post!"),
});

function CreatePost() {
  const history = useHistory();
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      history.push("/");
    });
  };
  return (
    <FormPage>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field placeholder="Enter title" name="title" />
          <label>Text: </label>
          <ErrorMessage name="postText" component="span" />
          <Field placeholder="Enter post text" name="postText" />
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field placeholder="Enter name" name="username" />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </FormPage>
  );
}

export default CreatePost;

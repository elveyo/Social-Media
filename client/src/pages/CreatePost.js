import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { PostForm as Form } from "../styledComponents/Form.styled";
import axios from "axios";
import { FormPage } from "../styledComponents/GlobalStyle";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required!"),
  postText: Yup.string().required("You have to input some text!"),
});

function CreatePost() {
  const history = useHistory();
  const initialValues = {
    title: "",
    postText: "",
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
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </FormPage>
  );
}

export default CreatePost;

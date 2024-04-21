import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { PostForm as Form } from "../styledComponents/Form.styled";
import axios from "axios";
import { FormPage } from "../styledComponents/GlobalStyle";
import * as Yup from "yup";
function Register() {
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Enter name!").min(4).max(15),
    password: Yup.string().required("Password is required!"),
  });

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const onSubmit = async (data) => {
    const response = await axios.post(
      "http://localhost:3001/auth/register",
      data
    );
    history.push("/login")
  };
  return (
    <div>
      <FormPage>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <label>Username: </label>
            <ErrorMessage name="username" component="span" />
            <Field placeholder="Enter username" name="username" />
            <label>Password: </label>
            <ErrorMessage name="password" component="span" />
            <Field
              type="password"
              placeholder="Enter password"
              name="password"
            />
            <button type="submit">Register</button>
          </Form>
        </Formik>
      </FormPage>
    </div>
  );
}

export default Register;

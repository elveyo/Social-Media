import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import { PostForm as Form } from "../styledComponents/Form.styled";
import axios from "axios";
import { FormPage } from "../styledComponents/GlobalStyle";
import { AuthContext } from "../helpers/AuthContext";

function Register() {
  const { authState, setAuthState } = useContext(AuthContext);
  const history = useHistory();
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const onSubmit = async (data) => {
    const response = await axios.post("http://localhost:3001/auth/login", data);

    setAuthState({
      _id: response.data.id,
      username: response.data.username,
      status: true,
    });
    history.push("/");
  };
  return (
    <div>
      <FormPage>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <label>Username: </label>
            <Field placeholder="Enter username" name="username" />
            <label>Password: </label>
            <Field placeholder="Enter password" name="password" />
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </FormPage>
    </div>
  );
}

export default Register;

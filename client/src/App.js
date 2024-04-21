import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { Nav, GlobalStyle } from "./styledComponents/GlobalStyle";
import Post from "./pages/Post";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthContext } from "./helpers/AuthContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
axios.defaults.withCredentials = true;
function App() {
  const [authState, setAuthState] = useState({
    _id: "",
    username: "",
    status: false,
  });
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify")
      .then((response) =>
        setAuthState({
          _id: response.data._id,
          username: response.data.username,
          status: true,
        })
      )
      .catch((e) => setAuthState({ _id: "", username: "", status: false }));
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <GlobalStyle />

      <Router>
        <Nav>
          <div>
            <Link to="/">Home</Link>
            {authState.username &&<Link to="/createPost">Create Post</Link>}
          </div>
          {!authState.status ? (
            <div>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          ) : (
            <div>
              <Link to={`/${authState.username}`}>{authState.username}</Link>
              <button
                onClick={async () => {
                  const response = await axios.get(
                    "http://localhost:3001/auth/logout"
                  );
                  setAuthState({ username: "", status: false });
                }}
              >
                Log out
              </button>
            </div>
          )}
        </Nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createPost" exact component={CreatePost} />
          <Route path="/posts/:id" exact component={Post} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          {/* <Route path="*" component={Error} /> */}
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

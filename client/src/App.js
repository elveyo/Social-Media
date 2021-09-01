import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import { Nav, GlobalStyle } from "./styledComponents/GlobalStyle";
import Post from "./components/Post";
function App() {
  return (
    <div>
      <GlobalStyle />

      <Router>
        <Nav>
          <Link to="/">Posts</Link>
          <Link to="/createPost">Create Post</Link>
        </Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createPost" exact component={CreatePost} />
          <Route path="/posts/:id" exact component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

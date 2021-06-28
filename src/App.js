import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts'
import Post from './components/Posts/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './components/Users/User/User';
import MyPosts from './components/Posts/MyPosts/MyPosts';
import EditPost from './components/Posts/Post/EditPost/EditPost';
import NewPost from './components/Posts/NewPost/NewPost';

function App() {
  return (
    <div>
      <Router>
      <NavBar></NavBar>
          <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/users">
              <Users></Users>
            </Route>
            <Route path="/posts">
              <Posts></Posts>
            </Route>
            <Route path="/myposts">
              <MyPosts></MyPosts>
            </Route>
            <Route path="/post/:id">
              <Post></Post>
            </Route>
            <Route path="/editpost/:id">
              <EditPost></EditPost>
            </Route>
            <Route path="/newpost">
              <NewPost></NewPost>
            </Route>
            <Route path="/user/:id">
              <User></User>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

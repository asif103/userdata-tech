import React, { useState, useEffect, useRef } from "react"
import PostsContainer from "../PostsContainer/PostsContainer";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function MyPosts() {
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(10);
    const showMorePosts = (visible) =>{
      setVisible((prevValue) => prevValue+10);
    }
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/2/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
    },[]);

    const history = useHistory();
      const newPost = () => {
        history.push(`/newpost/`);
    }
    

  return (
    <Container className="my-5">
        <div className="p-5 bg-light my-5 shadow">
        <h1 >All Posts</h1>
        <button className="btn btn-warning float-right" onClick={newPost}>Add New Post</button>
        </div>
        <Row>
      {
          posts.slice(0,visible).map(post => <PostsContainer key={post.id} post={post} myPost = {1}></PostsContainer>)
      }
      </Row>
      
      {
        (posts.length > visible) && <button className="btn btn-success my-5 btn-block" onClick={showMorePosts}>Load more</button>
      }
    </Container>
  )
}

export default MyPosts

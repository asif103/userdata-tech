import React, { useState, useEffect } from "react"
import PostsContainer from "./PostsContainer/PostsContainer";
import { Container, Row } from "react-bootstrap";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(10);
    const showMorePosts = (visible) =>{
      setVisible((prevValue) => prevValue+10);
    }
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
    },[]);


  return (
    <Container className="my-5">
      <h1 className="p-5 bg-light my-5 shadow">All Posts</h1>
        <Row>
      {
          posts.slice(0,visible).map(post => <PostsContainer key={post.id} post={post} myPost = {0}></PostsContainer>)
      }
      </Row>
      
      {
        (posts.length > visible) && <button className="btn btn-success my-5 btn-block" onClick={showMorePosts}>Load more</button>
      }
    </Container>
  )
}
export default Posts
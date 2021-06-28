import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PostsContainer from '../../Posts/PostsContainer/PostsContainer';


function User() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(10);
    const showMorePosts = (visible) =>{
      setVisible((prevValue) => prevValue+10);
    }
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data))
    },[]);
    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then(response => response.json())
       .then(data => setUser(data))
      },[]);
      
    return (
        <Container className="my-5">
            <h1 className="p-5 bg-light my-5 shadow">{user.name}</h1>
            <p><span className="font-weight-bold">Email: </span>{user.email}</p>
            <p><span className="font-weight-bold">Website: </span>{user.website}</p>
            <p><span className="font-weight-bold">Phone: </span>{user.phone}</p>
            
            <div>
                <h1 className="p-5 bg-light my-5 shadow">{user.name} posts</h1>
                <Row>
                {
                    posts.slice(0,visible).map(post => <PostsContainer key={post.id} post={post} myPost = {(user.id===2)? 1 :0 }></PostsContainer>)
                }
                </Row>
        
                {
                    (posts.length > visible) && <button className="btn btn-success my-5 btn-block" onClick={showMorePosts}>Load more</button>
                }
            </div>
        </Container>
    )
}

export default User

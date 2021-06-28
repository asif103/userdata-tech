import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(response => response.json())
       .then(data => setPost(data))
      },[]);

      const [comments, setComments] = useState([]);
      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(data => setComments(data))
       },[]);
    return (
        <div className="container shadow my-5">
            <h1 className="text-center py-5">{post.title}</h1>
            <p className="py-5">{post.body}</p>

            <h3 className="text-success">Comments</h3>
            <ListGroup className="py-5">
                {
                    comments.map(comment => 
                        <ListGroup.Item>
                            <h5 className="text-info">{comment.name}</h5>
                            {comment.body}
                        </ListGroup.Item>
                        )
                }
            </ListGroup>
        </div>
    )
}

export default Post

import React from 'react'
import './PostsContainer.css'
import { useHistory } from 'react-router';

function PostsContainer({post, myPost}) {
    const toShow = post.body.substring(0,50)+"...";
    const history = useHistory();
    const singlePost = (post) => {
        history.push(`/post/${post}`);
    }
    const deletePost = (post) => {
        console.log(post);
        fetch(`https://jsonplaceholder.typicode.com/posts/${post}`, {
        method: 'DELETE',
        });
    }
    const editPost = (post) => {
        history.push(`/editpost/${post}`);
    }
    
    return (
        <div className="col-md-6 mb-5">
            <div className="card h-100 p-5 custom-card">
                
                <div>
                    <h4 className="text-dark">{post.title}</h4>
                    <p className="text-dark">{toShow}</p>
                    <button  className="btn btn-success" onClick={() => singlePost(post.id)}>Read More</button>
                    {myPost===1 && <div className="my-1"><button className="btn btn-info" onClick={() => editPost(post.id)}>Edit</button> <button className="btn btn-danger" onClick={() => deletePost(post.id)}>delete</button></div>}
                </div>
            </div>
        </div>
    )
}

export default PostsContainer

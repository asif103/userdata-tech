import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

function EditPost() {

    const { id } = useParams();
    const [post, setPost] = useState([]);
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: data.title,
                body: data.body,
                userId: 2,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(response => response.json())
       .then(data => setPost(data))
      },[]);


    
    return (
        <div className="container my-5">
            <h1 className="p-5 bg-light my-5 shadow">Edit {post.title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-label">Title</label>
            <input defaultValue={post.title} name="title" {...register("title")} className="form-control"/>
            <label className="form-label">Body</label>
            <input defaultValue={post.body} name="body" {...register("body")} className="form-control"/>
            
            <input type="submit" className="form-control btn btn-success my-5"/>
            </form>
        </div>
    )
}

export default EditPost

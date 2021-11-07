import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';



const Update = (props) => {
    const {id} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
        .then(res=>{
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            console.log(res.data)
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/" + props.id, {
            title,
            price,
            description
        })
        .then(res => {
            navigate('/')
            console.log(res)
        })
        .catch(err => console.log('Failed update 1', err));
    }

    return (
        <form onSubmit={updateProduct}>
            <h1>Edit a Product Form</h1>
            <p>
                <label>Product title:{''}</label><br/>
                
                <input type="text" 
                onChange = {(e)=>setTitle(e.target.value)}
                value={title}
                />
            </p>
            <p>
                <label>Product price: {''}</label><br/>
                <input type="text" 
                onChange = {(e)=>setPrice(e.target.value)}
                value = {price}/>
            </p>
            <p>
                <label>Description: {''}</label><br/>
                <input type="text" 
                onChange = {(e)=>setDescription(e.target.value)}
                value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )

}

export default Update;
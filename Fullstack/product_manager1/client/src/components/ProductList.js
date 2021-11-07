import React from 'react'
import "../App.css";
import axios from 'axios';
import {Link} from '@reach/router';


const ProductList = (props) => {

    const {products} = props;
    console.log(products);

    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            <h1>All Products:</h1>
            {products.map((item, idx)=>
            <p key={idx}>
                <Link to = {`/${item._id}`} >
                    {item.title}
                </Link>
                |
                <Link to={"/Product/" + item._id + "/edit"}>
                    Edit
                </Link>
                |
                <button onClick={(e)=>deleteProduct(item._id)}>
                    Delete
                </button>

            </p>
            )}
        </div>
    )
}
export default ProductList;


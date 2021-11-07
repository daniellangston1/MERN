import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';


const Main = () => {
    const [products, setProducts] = useState([]);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/all/products')
            .then(res=>{
                console.log(res.data);
                setProducts(res.data);
                setHasBeenSubmitted(true);
            });
    },[hasBeenSubmitted])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
           <ProductForm setHasBeenSubmitted={setHasBeenSubmitted} hasBeenSubmitted={hasBeenSubmitted}/>
           <hr/>
           <ProductList hasBeenSubmitted={hasBeenSubmitted} products={products} removeFromDom={removeFromDom}/>
           
        </div>
    )
}
export default Main;


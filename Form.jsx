import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [products, setProducts] = useState([]);


    const onSubmitHandler = (event) => {
        event.preventDefault();
        //Send to the backend to save to the database
        axios.post('http://localhost:8000/api/products/create', { title, price, description })
            .then(res => console.log("Response", res))
            .catch(err => console.log("Error", err));

        reset();
        fetchProducts();
    }


    const reset = () => {
        setTitle("");
        setPrice(0);
        setDescription("");
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = () => {
        axios.get('http://localhost:8000/api/products')
            .then((response) => setProducts(response.data.products))
            .catch((error) => console.log("Error", error));
    }

    return (
        <div>
            <h1>Product Manager Pt-1</h1>
            <form className='mb-5' onSubmit={onSubmitHandler}>
                <h3>Form</h3>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Title</label>
                                <input name='title' type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Price</label>
                                <input name='price' type="number" step={0.1} className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='row mb-5'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label>Description</label>
                                <input name='description' type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-secondary px-4 text-center">Create</button>
                </div>
            </form>
            <div>
                <h3>List</h3>
                <div className='container'>
                    {products.map((product, index) => (
                        <div className="row" key={index}>
                            <div className='col-md-12'>
                                <div className="card mb-2">
                                    <div className='card-header'>
                                        <Link to={`/${product._id}`}>
                                            {index + 1} - id: {product._id}
                                        </Link>
                                    </div>
                                    {/* <div className="card-body p-2 p-sm-3">
                                        <p className='m-0'><span className='fw-bold'>Title: </span> {product.title}</p>
                                        <p className='m-0'><span className='fw-bold'>Price: </span> {product.price}</p>
                                        <p className='m-0'><span className='fw-bold'>Description: </span> {product.description}</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Form
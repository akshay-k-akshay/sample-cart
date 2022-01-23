import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ProductsAPI } from '../api';

function Dashboard() {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const { status, data } = await ProductsAPI.list();
        if (status == 200) {
            setProducts(data.data);
        }
    }, []);
    async function deleteProduct(id) {
        const isConfirm = window.confirm('Are you sure?');
        if (isConfirm) {
            const { status } = await ProductsAPI.deleteProduct(id);
            if (status === 200) {
                setProducts(products.filter(product => product._id !== id));
            }
        }
    };
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div>
                    <div className="row" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        <div className="col-md-1">No .</div>
                        <div className="col-md-2">Name</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-3">Image</div>
                        <div className="col-md-2">Description</div>
                        <div className="col-md-2">Actions</div>
                    </div>
                    <hr style={{ border: '1px solid black' }} />
                    {
                        products.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="row">
                                        <div className="col-md-1">{index + 1}</div>
                                        <div className="col-md-2">{item.name}</div>
                                        <div className="col-md-2">{item.price}</div>
                                        <div className="col-md-3">
                                            {
                                                item.image.map((image, index) => {
                                                    return (
                                                        <img key={index} src={image} alt={item.name} width='100px' />
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="col-md-2">{item.description}</div>
                                        <div className="col-md-2">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Link to={`/dashboard/editProduct/${item._id}`}>
                                                        <button className="btn btn-primary btn-sm">Edit</button>
                                                    </Link>
                                                </div>
                                                <div className="col-md-6">
                                                    <button className="btn btn-danger btn-sm" onClick={() => {
                                                        deleteProduct(item._id)
                                                    }}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsAPI } from '../api';


function Home() {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const { status, data } = await ProductsAPI.list();
        if (status === 200) {
            setProducts(data.data);
        }
    }, []);

    return (
        <div className="mt-5 pt-5">
            <div className="container">
                <div className="row">
                    {
                        products.map((product, index) => {
                            return (
                                <div className="col-4" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img className="card-img-top" src={product.image[0]} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            {/* <Link to="#" >See more</Link> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;

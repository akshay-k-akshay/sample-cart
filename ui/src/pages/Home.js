import React, { useState } from 'react';


function Home() {
    const [products, setProducts] = useState(['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6']);
    return (
        <div className="mt-5 pt-5">
            <div className="container">
                <div className="row">
                    {
                        products.map((product, index) => {
                            return (
                                <div className="col-4" key={index}>
                                    <div className="card" key={product} style={{ width: '18rem' }}>
                                        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDLlQEvov-kTxw-cVQ6vtYBEi24RnE025gcCFN_zPkXHQ74YgRoBKgT_PwjAw79LyFWA&usqp=CAU" alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" >See more</a>
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

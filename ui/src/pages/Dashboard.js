import React from 'react';

function Dashboard() {
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div>
                    <div className="row" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        <div className="col-md-1">No .</div>
                        <div className="col-md-2">Name</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-3">Image</div>
                        <div className="col-md-2">Deception</div>
                        <div className="col-md-2">Actions</div>
                    </div>
                    <hr style={{ border: '1px solid black' }} />
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="row">
                                        <div className="col-md-1">{index + 1}</div>
                                        <div className="col-md-2">{item}</div>
                                        <div className="col-md-2">{item}</div>
                                        <div className="col-md-3">{item}</div>
                                        <div className="col-md-2">{item}</div>
                                        <div className="col-md-2">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button className="btn btn-primary btn-sm">Edit</button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button className="btn btn-danger btn-sm">Delete</button>
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
        </div>
    );
}

export default Dashboard;

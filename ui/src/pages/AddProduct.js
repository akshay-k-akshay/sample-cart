import React, { useState } from 'react';

function AddProduct() {
    const [files, setFiles] = useState(['']);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    async function submit(event) {
        event.preventDefault();
        console.log(files);
        console.log(name);
        console.log(price);
        console.log(description);

    }
    return (
        <div className='m-5 p-5'>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Add Product</h1>
                <form className='m-5 p-5 mt-1 pt-1' onSubmit={submit}>
                    <div className="form-group row mt-2">
                        <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control"
                                onChange={(event) => { setName(event.target.value) }}
                                id="name" placeholder='Name' />
                        </div>
                    </div>
                    <div className="form-group row  mt-2" >
                        <label htmlFor="price" className="col-sm-4 col-form-label" > Price</label >
                        <div className="col-sm-8" >
                            <input type="number" className="form-control"
                                onChange={(event) => { setPrice(event.target.value) }
                                }
                                id="price" placeholder="Price" />
                        </div >
                    </div >
                    <div className="form-group row  mt-2" >
                        <label htmlFor="description" className="col-sm-4 col-form-label" > Description</label >
                        <div className="col-sm-8" >
                            <textarea id="description"
                                onChange={(event) => { setDescription(event.target.value) }}
                                className="form-control" cols="15" rows="8" placeholder="Description" ></textarea >
                        </div >
                    </div >
                    <div className="form-group row  mt-2" >
                        <label className="col-sm-4 col-form-label" > Image</label >
                        <div className="col-sm-8" >
                            {
                                files.map((file, index) => {
                                    return (
                                        <div key={index} >
                                            <div className="form-control" >
                                                <input type="file"
                                                    onChange={(event) => {
                                                        const newFiles = [...files];
                                                        newFiles[index] = event.target.files[0];
                                                        setFiles(newFiles);
                                                    }}
                                                />
                                                <div style={{ textAlign: 'end', marginTop: '-30px' }}>
                                                    <span className='btn btn-primary' style={{ borderRadius: '50%' }}
                                                        onClick={() => {
                                                            const newFiles = [...files];
                                                            newFiles.push('');
                                                            setFiles(newFiles);
                                                        }}>+</span>
                                                    {
                                                        files.length == 1 ? null :
                                                            <span className='btn btn-danger' style={{ borderRadius: '50%' }}
                                                                onClick={() => {
                                                                    const newFiles = [...files];
                                                                    newFiles.splice(index, 1);
                                                                    setFiles(newFiles);
                                                                }}>-</span>
                                                    }
                                                </div>
                                            </div>
                                            <br />
                                        </div >
                                    )
                                })
                            }
                        </div >
                    </div >
                    <div className="form-group mt-5" style={{ textAlign: 'end' }}>
                        <input type="reset" value="Reset" />
                        <input type="submit" value="Submit" />
                    </div>
                </form >
            </div >
        </div >
    );
}

export default AddProduct;

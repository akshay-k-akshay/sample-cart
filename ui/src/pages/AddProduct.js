import React, { useState } from 'react';

import { ProductsAPI, FilesAPI } from '../api';

function AddProduct(props) {
    const [images, setImages] = useState(['']);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    async function submit(event) {
        event.preventDefault();
        if (images.length === 0) {
            alert('Please choose image');
            return;
        }
        if (!name || !price || !description) {
            alert('Please fill all fields');
            return;
        }
        const formData = new FormData();
        console.log(images);
        formData.append('files', images);
        const { status, data } = await FilesAPI.upload(formData);
        if (status === 200) {
            setImages([...data.data]);
        }

        const response = await ProductsAPI.create({
            images,
            name,
            price,
            description
        });
        if (response.status === 200) {
            props.history.push('/dashboard');
        }
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
                                images.map((file, index) => {
                                    return (
                                        <div key={index} >
                                            <div className="form-control" >
                                                <input type="file"
                                                    onChange={(event) => {
                                                        const newFiles = [...images];
                                                        newFiles[index] = event.target.files[0];
                                                        setImages(newFiles);
                                                    }}
                                                />
                                                <div style={{ textAlign: 'end', marginTop: '-30px' }}>
                                                    <span className='btn btn-primary' style={{ borderRadius: '50%' }}
                                                        onClick={() => {
                                                            const newFiles = [...images];
                                                            newFiles.push('');
                                                            setImages(newFiles);
                                                        }}>+</span>
                                                    {
                                                        images.length == 1 ? null :
                                                            <span className='btn btn-danger' style={{ borderRadius: '50%' }}
                                                                onClick={() => {
                                                                    const newFiles = [...images];
                                                                    newFiles.splice(index, 1);
                                                                    setImages(newFiles);
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

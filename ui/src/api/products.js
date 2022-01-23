const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: { 'application': 'application/json' }
});

export async function list(page, limit) {
    const response = await instance.get(`/products?page=${page ?? 1}&limit=${limit ?? 10}`);
    return {
        status: response.status,
        data: response.data
    }
}

export async function deleteProduct(id) {
    const response = await instance.delete(`/products/${id}`);
    return {
        status: response.status,
        data: response.data
    }
}

export async function find(id) {
    const response = await instance.get(`/products/${id}`);
    return {
        status: response.status,
        data: response.data
    }
}

export async function update(id, data) {
    const response = await instance.put(`/products/${id}`, data);
    return {
        status: response.status,
        data: response.data
    }
}

export async function create(data) {
    const response = await instance.post(`/products`, data);
    return {
        status: response.status,
        data: response.data
    }
}
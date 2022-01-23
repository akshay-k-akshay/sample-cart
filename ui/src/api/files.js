const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: { 'application': 'application/json' }
});

export async function upload(formData) {
    const response = await instance.post('/files', formData);
    return {
        status: response.status,
        data: response.data
    }
}
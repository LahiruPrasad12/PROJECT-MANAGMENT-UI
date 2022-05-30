import api from "../axios";
const resource = '/api/topics';

export default {
    getCategories: () => api.get(`${resource}`),
    createProduct: (payload) => api.post(`${resource}`, payload),
    getProduct: (id) => api.get(`${resource}/${id}`),
    updateProduct: (id, payload) => api.patch(`${resource}/${id}`, payload),
    deleteProduct: (id) => api.delete(`${resource}/${id}`)
}
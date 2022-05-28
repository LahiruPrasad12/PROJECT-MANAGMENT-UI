import api from "../axios";
const resource = '/api/groups';

export default {
    createGroup: (payload) => api.post(`${resource}`, payload),
    getProduct: (id) => api.get(`${resource}/${id}`),
    updateProduct: (id, payload) => api.patch(`${resource}/${id}`, payload),
    deleteProduct: (id) => api.delete(`${resource}/${id}`)
}
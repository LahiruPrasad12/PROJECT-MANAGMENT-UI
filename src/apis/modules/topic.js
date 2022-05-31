import api from "../axios";
const resource = '/api/submit-topic';

export default {
    getStaff: (payload,role) => api.post(`${resource}/staff?role=${role}`,payload),
    assignMembers: (payload) => api.patch(`${resource}`, payload),
    getProduct: (id) => api.get(`${resource}/${id}`),
    updateProduct: (id, payload) => api.patch(`${resource}/${id}`, payload),
    deleteProduct: (id) => api.delete(`${resource}/${id}`)
}
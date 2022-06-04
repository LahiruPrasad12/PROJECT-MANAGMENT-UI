import api from "../axios";
const resource = '/api/groups';

export default {
    myGroupMember: () => api.get(`${resource}/group-members`),
    getAllGroups: () => api.get(`${resource}`),
    assignMembers: (payload) => api.patch(`${resource}`, payload),
    getProduct: (id) => api.get(`${resource}/${id}`),
    updateProduct: (id, payload) => api.patch(`${resource}/${id}`, payload),
    deleteProduct: (id) => api.delete(`${resource}/${id}`)
}
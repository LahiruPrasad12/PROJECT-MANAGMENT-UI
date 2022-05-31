import api from "../axios";
const resource = '/api/submit-topic';

export default {
    getStaff: (payload,role) => api.post(`${resource}/staff?role=${role}`,payload),
    submitTopicToSupervisor: (payload) => api.post(`${resource}/supervisor-submission`, payload),
    assignMembers: (payload) => api.patch(`${resource}`, payload),
    getProduct: (id) => api.get(`${resource}/${id}`),

    deleteProduct: (id) => api.delete(`${resource}/${id}`)
}
import api from "../axios";
const resource = '/api/submit-topic';

export default {
    getStaff: (payload,role) => api.post(`${resource}/staff?role=${role}`,payload),
    submitTopicToSupervisor: (payload) => api.post(`${resource}/supervisor-submission`, payload),
    submitTopicToCoSupervisor: (payload) => api.post(`${resource}/co-supervisor-submission`, payload),
    submitTopicToPanel: (payload) => api.post(`${resource}/panel-submission`, payload),
    getOurTopic: () => api.get(`${resource}/my-topic`),
    assignMembers: (payload) => api.patch(`${resource}`, payload),
    getProduct: (id) => api.get(`${resource}/${id}`),

    deleteProduct: (id) => api.delete(`${resource}/${id}`)
}
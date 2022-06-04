import api from "../axios";
const resource = '/api/supervisors';



// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    getOurPanel: () => api.get(`${resource}`),
    register: (payload) => api.post(`/signup`,payload),
    getMyRequest: () => api.get(`${resource}/panel`),
    acceptRequest: (payload) => api.patch(`${resource}/panel`, payload),
    logout: () => api.get(`/logout`),
}

import api from "../axios";
const resource = '/api/supervisors';


// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    getOurPanel: () => api.get(`${resource}`),
    register: (payload) => api.post(`/signup`,payload),
    currentUser: () => api.get(`/current-user`),
    logout: () => api.get(`/logout`),
}

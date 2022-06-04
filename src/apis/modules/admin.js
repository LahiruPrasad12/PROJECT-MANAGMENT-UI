import api from "../axios";
const resource = '/api/admins';
const resource1 = '/api/admins/roles'
const resource2 = '/api/admins/panel-members';

export default {
    getUsers: () => api.get(`${resource}`),
    getRoles: () => api.get(`${resource1}`),
    assignPanelMember: (payload) => api.patch(`${resource2}`, payload),
    updateUser: (payload) => api.patch(`${resource}`, payload),
    deleteUser: (id) => api.delete(`${resource}/${id}`)
}
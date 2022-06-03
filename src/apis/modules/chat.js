import api from "../axios";
const resource = '/api/chat';
const messageResource = 'api/message'


export default {
    getMyChatGroup: () => api.get(`${resource}`),
    fetchMessages: (id) => api.get(`${messageResource}/${id}`),
    sendMessage: (payload) => api.post(`${messageResource}`,payload),
    createChat: (payload) => api.post(`${resource}/chatGroup`,payload),

}
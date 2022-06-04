import api from "../axios";
const resource = "api/download";

export default {
    downloadTopicDocByPanel: () => api.get(`${resource}/topicDoc`),
    acceptRequest: (payload) => api.patch(`${resource}`, payload),
    declineRequest: (payload) => api.patch(`${resource}`, payload),
};

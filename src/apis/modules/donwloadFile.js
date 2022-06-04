import api from "../axios";
const resource = "api/download";

export default {
    downloadTopicDocByPanel: () => api.get(`${resource}/topicDoc`),
    downloadMarkingSchema: () => api.get(`${resource}/marking-schema`),
    declineRequest: (payload) => api.patch(`${resource}`, payload),
};

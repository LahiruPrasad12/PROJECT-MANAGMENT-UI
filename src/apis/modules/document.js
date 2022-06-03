import api from "../axios";
const resource = "api/document";

export default {
    uploadDocument: (payload) => api.post(`${resource}/document`,payload),
    uploadPresentation: (payload) => api.post(`${resource}/presentation`,payload),
    acceptRequest: (payload) => api.patch(`${resource}`, payload),
    declineRequest: (payload) => api.patch(`${resource}`, payload),
};

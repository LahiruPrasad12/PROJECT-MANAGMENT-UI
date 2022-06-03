import api from "../axios";
const resource = "api/document";

export default {
    uploadDocument: (payload) => api.post(`${resource}/document`,payload),
    uploadPresentation: (payload) => api.post(`${resource}/presentation`,payload),
    uploadFinalThesis: (payload) => api.patch(`${resource}/final-thesis`, payload),
};

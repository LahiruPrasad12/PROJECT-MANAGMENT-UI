import api from "../axios";
const resource = "api/document";

export default {
    uploadDocument: (payload) => api.post(`${resource}/document`,payload),
    uploadPresentation: (payload) => api.post(`${resource}/presentation`,payload),
    uploadFinalThesis: (payload) => api.post(`${resource}/final-thesis`, payload),
    uploadMarkingSchema: (payload) => api.post(`${resource}/marking-schema`, payload),
};

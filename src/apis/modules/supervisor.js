import api from "../axios";
const resource = "api/supervisors";

export default {
  getmyRequest: () => api.get(`${resource}/supervisor`),
  acceptRequest: (payload) => api.patch(`${resource}`, payload),
  declineRequest: (payload) => api.patch(`${resource}`, payload),
};

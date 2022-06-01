import api from "../axios";
const resource = "api/supervisors/supervisor";

export default {
  getmyRequest: () => api.get(`${resource}`),
};

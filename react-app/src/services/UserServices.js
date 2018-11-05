import api from './config/api';

export default {
  getUserSessions: async ({ email, password }) => api.get('/users', { email, password })
};

import axios from "axios";

export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;

    axios.defaults.headers.post['Authorization'] = `Bearer ${payload.token}`;
  }
};
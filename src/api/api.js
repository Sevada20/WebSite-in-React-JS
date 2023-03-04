import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2075fa74-3d99-412e-bdac-aa7271fc017e",
  },
});

export const userApi = {
  getUsers(currentPage = 1, usersPageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${usersPageSize}`)
      .then((response) => response.data);
  },

  getFollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getUnFollow(userId) {
    return instance.post(`follow/${userId}`);
  },
};

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

  getProfile(userId) {
    console.log("Obsolete method.Please profileAPI object");
    return profileApi.getProfile(userId);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status", { status: status });
  },
};

export const authApi = {
  me() {
    return instance.get("auth/me");
  },
};

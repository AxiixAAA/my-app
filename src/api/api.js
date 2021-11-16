const { default: axios } = require("axios");

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b5e754f2-52eb-496b-8ac8-e6d61aa0655f",
  },
});

export const usersAPI = {
 getUsers (Page = 1, pageSize = 10) {
    return instance
      .get(`users?page=${Page}&count=${pageSize} `)
      .then((response) => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(`follow/${userId} `);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId} `);
  },
  getProfile(userId) {
    console.warn('Obsolete method. Please profileAPI object')
    return instance.get(`profile/` + userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId)
  },
  updateStatus(status) {
    return instance.put('profile/status', { status: status});
  }
};
// связанно с авторизацией
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

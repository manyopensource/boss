import axios from 'axios';

const API_URL = 'https://purrweb-internship.herokuapp.com/api/v1';

const STAFF_MEMBERS_PATH = '/staff_members';

class Api {
  constructor(options = {}) {
    this.client =
      options.client ||
      axios.create({
        baseURL: API_URL
      });

    this.client.interceptors.request.use(
      async config => {
        const token = 'Token token="f4d91314f64309521727d059b271fe9b"'
        if (!token) {
          return config;
        }

        const newConfig = {
          headers: {},
          ...config
        };

        newConfig.headers.Authorization = token;
        return newConfig;
      },
      e => Promise.reject(e)
    );
  }

  // staff members
  getStaffMembers() {
    return this.client.get(STAFF_MEMBERS_PATH);
  }
}

export const http = new Api();

export default Api;

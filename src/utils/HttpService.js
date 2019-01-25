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

  /* staff members */
  getStaffMembers() {
    return this.client.get(STAFF_MEMBERS_PATH);
  }

  /* staff member */
  getStaffMember(memberId) {
    return this.client.get(`${STAFF_MEMBERS_PATH}/${memberId}`);
  }
  
  updateStaffMemberEmploymentDetails(memberId, data) {
    return this.client.post(`${STAFF_MEMBERS_PATH}/${memberId}/update_employment_details`, data);
  }

  updateStaffMemberPersonalDetails(memberId, data) {
    return this.client.post(`${STAFF_MEMBERS_PATH}/${memberId}/update_personal_details`, data);
  }

  updateStaffMemberContactDetails(memberId, data) {
    return this.client.post(`${STAFF_MEMBERS_PATH}/${memberId}/update_contact_details`, data);
  }
}

export const http = new Api();

export default Api;

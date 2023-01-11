export const API_ENDPOINTS = {
  BASE_URL: `https://random-data-api.com/api/v2`,

  get BEERS() {
    return `${this.BASE_URL}/beers`;
  },

  get BLOOD_TYPES() {
    return `${this.BASE_URL}/blood_types`;
  },

  get CREDIT_CARDS() {
    return `${this.BASE_URL}/credit_cards`;
  },

  get USERS() {
    return `${this.BASE_URL}/users`;
  },
};

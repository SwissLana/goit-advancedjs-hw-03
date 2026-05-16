import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55877928-5048cf5b75a61a83a7743c80d';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}

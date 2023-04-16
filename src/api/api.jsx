// services/api.js
import axios from 'axios';

export const fetchArticlesWithQuery = async searchQuery => {
  const response = axios.get(`/search?query=${searchQuery}`);
  return response.data.hits;
};

export default fetchArticlesWithQuery;

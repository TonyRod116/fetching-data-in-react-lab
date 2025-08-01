import axios from 'axios';

// API URL
const BASE_URL = 'https://swapi.info/api';

// axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// get all
export const index = async () => {
  try {
    console.log('Getting starships from API...');
    const response = await api.get('/starships');
    console.log('Starships loaded:', response.data.length);
    return response.data;
  } catch (error) {
    console.log('Error loading starships:', error);
    throw new Error('Error loading starships');
  }
};

// get by id
export const show = async (id) => {
  try {
    console.log('Getting starship with ID:', id);
    const response = await api.get(`/starships/${id}`);
    console.log('Starship loaded:', response.data.name);
    return response.data;
  } catch (error) {
    console.log('Error loading starship:', error);
    throw new Error('Error loading starship');
  }
};

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = () => axios.get(API_URL);
export const getTask = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (task) => axios.post(API_URL, task);
export const updateStatus = (id, status) => axios.put(`${API_URL}/${id}/status`, { status });
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

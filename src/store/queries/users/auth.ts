import axios from 'axios';
import { baseUrl, Endpoints } from '..';

export const login = async (email: string, password: string) => {
  const { data: response } = await axios.post(`${baseUrl}/login`, { email, password });
  return response.data;
}

export const register = async (email: string, password: string , firstName:string, lastName:string) => {
  const { data: response } = await axios.post(`${baseUrl}/register`, { email,firstName,lastName, password });
  return response.data;
}

export const getAdminData = async () => {
  const { data: response } = await axios.get(`${baseUrl}${Endpoints.team}/get-data`);
  return response.data;
}

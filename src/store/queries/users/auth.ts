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

export const editUserMutation = async (id: string,image:object, firstName: string, lastName: string,occupation: string, description: string) => {
  const { data: response } = await axios.post(`${baseUrl}${Endpoints.auth}/edit-user/${id}`, { image,firstName, lastName, occupation, description });
  return response.data;
}

export const getAdminData = async () => {
  const { data: response } = await axios.get(`${baseUrl}${Endpoints.team}/get-data`);
  return response.data;
}

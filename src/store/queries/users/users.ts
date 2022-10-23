import axios from 'axios';
import { baseUrl, Endpoints } from '..';

export const getUserInfoQuery = async (id: string) => {
  const { data } = await axios.get(`${baseUrl}${Endpoints.auth}/get-user/${id}`);

  return data.data;
}

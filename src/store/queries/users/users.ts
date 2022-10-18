import axios from 'axios';
import { baseUrl } from '../posts';

export const getUserInfo = async (id: string) => {
  const { data } = await axios.get(`${baseUrl}/get-user/${id}`);
  return data.data;
}

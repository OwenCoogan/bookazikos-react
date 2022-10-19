import axios from 'axios';
import { useMutation } from 'react-query';
import { baseUrl, Endpoints } from '..';

export const createComment = async (comment: any) => {
  const { data: response } = await axios.post(`${baseUrl}${Endpoints.posts}/comment/add`, {});
  return response.data;
}


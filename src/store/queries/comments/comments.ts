import axios from 'axios';
import { baseUrl, Endpoints } from '..';

export const createCommentMutation = async (values:any) => {
  const response = await axios.post(`${baseUrl}${Endpoints.posts}/${values.postId}${Endpoints.comments}/add`, values);
  return response.data;
};


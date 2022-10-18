import axios from 'axios';
import { PostTypes } from '../../components/design-system/@types';

export const baseUrl = `http://localhost:6950/posts`;

export const getPosts = async () => {
  const { data } = await axios.get(`${baseUrl}/get-posts`);
  return data.data;
  };

  export const getPost = (id: string ): Promise<PostTypes> => axios.get(`/${id}`).then(response => response.data)

export const createPost = async (post: any) => {
  const { data : response } = await axios.post(`${baseUrl}/create-post`, post);
  return response.data;
}

export const updatePost = async (post: any) => {
  const { data : response } = await axios.put(`${baseUrl}/update-post`, post);
  return response.data;
}

export const publishPost = async (id: string) => {
  const { data : response } = await axios.put(`${baseUrl}/publish-post/${id}`);
  return response.data;
}

export const deletePost = async (id: string) => {
  const { data : response } = await axios.delete(`${baseUrl}/delete-post/${id}`);
  return response.data;
}

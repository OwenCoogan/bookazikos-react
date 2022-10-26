import axios from 'axios';
import { baseUrl, Endpoints } from '..';
import { PostTypes } from '../../../components/design-system/@types';
import { PostQueryTypes } from './@types';


export const getPosts = async () => {
  const { data : response  } = await axios.get(`${baseUrl}${Endpoints.posts}/get-posts`);
  return response.data;
  };

  export const getPost = async (id: any) => {
    const { data: response } = await axios.get(`${baseUrl}${Endpoints.posts}/${id}`);
    return response.data
  }

export const createPost = async ({
  title,
  content,
  image,
  userId,
  richContent,
  tags
}:PostQueryTypes) => {
  const { data : response } = await axios.post(`${baseUrl}${Endpoints.posts}/create-post`, {
    title,
    content,
    image,
    userId,
    richContent,
    tags
  });
  return response.data;
}

export const updatePost = async (post: any) => {
  const { data : response } = await axios.put(`${baseUrl}${Endpoints.posts}/update-post`, post);
  return response.data;
}

export const publishPost = async (id: string) => {
  const { data : response } = await axios.put(`${baseUrl}${Endpoints.posts}/publish-post/${id}`);
  return response.data;
}

export const deletePost = async (id: string) => {
  const { data : response } = await axios.delete(`${baseUrl}${Endpoints.posts}/delete-post/${id}`);
  return response.data;
}

export const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_URL_PRODUCTION: process.env.REACT_APP_BACKEND_URL;

export enum Endpoints {
  posts = '/posts',
  users = '/users',
  comments = '/comment',
  auth = '/auth',
  team = '/team',
}

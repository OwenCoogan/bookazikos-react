import axios from 'axios';
import { baseUrl, Endpoints } from '../../queries';

export const sendAdminInvitationMutation = async (values:any) => {
  console.log(values)
  const response = await axios.post(`${baseUrl}${Endpoints.auth}/send-admin-invitation/`, {
    email: values.email,
  });
  return response.data;
};


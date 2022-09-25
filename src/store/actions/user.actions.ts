import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userAtom , authAtom } from '../index';
import { usePostActions } from './post.actions';

type UserLoginType = {
    email: string;
    password: string;
}


function useUserActions () {
    const baseUrl = `http://localhost:6950/auth`;
    const setUser = useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const setAuth = useSetRecoilState(authAtom);
    const {getPosts} = usePostActions();

    return {
        login,
        getUser,
    }

    function login({ email, password }: UserLoginType) {
      axios.post(`${baseUrl}/login`, { email, password })
      .then((response) => {
        console.log(response.data.data)
        setUser({
          authenticated: true,
          isUserProfileCompleted: true,
          user: response.data.data
        });
        setAuth(true);
        toast.success("Login successful");
        localStorage.setItem('token', response.data.data.token);
        navigate('/dashboard')
        getPosts();
      }
      ).catch((error) => {
        toast.error(error.message);
      });
    }
    async function getUser(id : string) {
      await axios.get(`${baseUrl}/get-user/${id}`)
      .then((response) => {
        return response.data.data;
      }
      ).catch((error) => {
        toast.error(error.message);
      });
    }
}


export { useUserActions };

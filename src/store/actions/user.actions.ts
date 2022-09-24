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
    const user = useRecoilValue(userAtom);
    const setUser = useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const setAuth = useSetRecoilState(authAtom);
    const {getPosts} = usePostActions();

    return {
        login
    }

    function login({ email, password }: UserLoginType) {
      axios.post(`${baseUrl}/login`, { email, password })
      .then((response) => {
        console.log(response.data.data.token)
        setUser({
          authenticated: true,
          isUserProfileCompleted: false,
          token: response.data.data.token,
          userProfile: {
            id: response.data.data.id,
            email: response.data.data.email,
            userProfile: {
              firstName: '',
              lastName: '',
            },
          },
        });
        setAuth(true);
        toast.success("Login successful");
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard')
        getPosts();
      }
      ).catch((error) => {
        toast.error(error.message);
      });
    }
}


export { useUserActions };

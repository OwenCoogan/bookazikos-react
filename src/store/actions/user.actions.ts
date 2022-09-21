import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userAtom , authAtom } from '../index';

type UserLoginType = {
    email: string;
    password: string;
}


function useUserActions () {
    const baseUrl = `http://localhost:6950/auth`;
    const [user] = useRecoilState(userAtom);
    const setUser = useSetRecoilState(userAtom);
    const navigate = useNavigate();
    const setAuth = useSetRecoilState(authAtom);

    return {
        login
    }

    function login({ email, password }: UserLoginType) {
      axios.post(`${baseUrl}/login`, { email, password })
      .then((response) => {
        setUser({ ...response.data.user });
        setAuth(true);
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      }
      ).catch((error) => {
        toast.error(error.response.data.message);
      });
      console.log(user)
    }
}


export { useUserActions };

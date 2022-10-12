import axios from 'axios';
import React, {
  useEffect,
  useMemo,
} from 'react';
import { useRecoilState } from 'recoil';
import { authAtom } from '../../store';
import AuthorizationContext, { Context } from './AuthContext';

export default function AuthorizationProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const [auth,setAuth] = useRecoilState(authAtom);

  const values = useMemo<Context>(() => ({
    authenticated : auth,
    setAuthenticated : setAuth,
  }), [auth, setAuth]);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('http://localhost:6950/auth/check-user-token', {
        token,
      })
        .then((response) => {
          console.log(response.data);
          setAuth(true);
        })
    }
  }, []);

  return (
    <AuthorizationContext.Provider
      value={values}
    >
      {children}
    </AuthorizationContext.Provider>
  );
}

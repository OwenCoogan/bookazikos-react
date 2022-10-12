import axios from 'axios';
import React, {
  useEffect,
  useMemo,
} from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authAtom, userAtom } from '../../store';
import { usePostActions } from '../../store/actions/post.actions';
import AuthorizationContext, { Context } from './AuthContext';

export default function AuthorizationProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const [auth,setAuth] = useRecoilState(authAtom);
  const { getPosts } = usePostActions();
  const setUser = useSetRecoilState(userAtom);

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
          getPosts();
          setUser({
            authenticated: true,
            isUserProfileCompleted: true,
            user: response.data.data
          });
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

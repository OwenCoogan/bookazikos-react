import React, {
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

  return (
    <AuthorizationContext.Provider
      value={values}
    >
      {children}
    </AuthorizationContext.Provider>
  );
}

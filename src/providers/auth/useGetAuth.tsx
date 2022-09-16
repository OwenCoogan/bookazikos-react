import React, {
  useMemo,
  useState,
} from 'react';
import AuthorizationContext, { Context } from './AuthContext';

export default function AuthorizationProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [isUserProfileCompleted, setUserProfileCompleted] = useState<boolean>(false);

  const values = useMemo<Context>(() => ({
    authenticated,
    setAuthenticated,
    isUserProfileCompleted,
    setUserProfileCompleted,
  }), [authenticated, isUserProfileCompleted]);

  return (
    <AuthorizationContext.Provider
      value={values}
    >
      {children}
    </AuthorizationContext.Provider>
  );
}

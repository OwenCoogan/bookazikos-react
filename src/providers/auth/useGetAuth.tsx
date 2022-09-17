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

  const values = useMemo<Context>(() => ({
    authenticated,
    setAuthenticated,
  }), [authenticated]);

  return (
    <AuthorizationContext.Provider
      value={values}
    >
      {children}
    </AuthorizationContext.Provider>
  );
}
